import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [shopBasedIn, setShopBasedIn] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/seller-dashboard");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container1">
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <h2 className="signup-center">SIGN UP</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="shopBasedIn">
            Shop Based in
          </label>
          <input type="shopBasedIn" name="shopBasedIn" id="shopBasedIn" onChange={(e) => setShopBasedIn(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="contactNumber">
          Contact Number
          </label>
          <input type="contactNumber" name="contactNumber" id="contactNumber" onChange={(e) => setContactNumber(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Confirm Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="name">
            Shop Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="terms">
            <div className="style-text bold"> I've read & understand Parsell Terms & Conditions</div>
           
          </label>
          
        </li>
        <li>
          <button type="submit" className="button primary">SIGN UP</button>
        </li>
        <li >
          <div className="style-text">Already have an account?&nbsp;&nbsp;<Link to="/signin">Sign-In Here</Link></div> 
        </li>

      </ul>
    </form>
  </div>
}
export default RegisterScreen;