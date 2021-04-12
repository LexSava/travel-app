import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../utils/actions";
import AuthForm from "../../components/AuthForm/AuthForm";

import "./Header.scss";
import Select from '../Select/Select';

export default function Header({ children }) {
  const { user, dict, authForm } = useSelector(state => state);
  const dispatch = useDispatch();

  const logo = useRef(null);

  const logoutUser = () => {
    dispatch({ type: actions.REMOVE_USER });
  };
  const openSignupForm = () => {
    dispatch({
      type: actions.SET_AUTHFORM,
      payload: { isFormOpen: true, isSignup: true },
    });
  };
  const openSigninForm = () => {
    dispatch({
      type: actions.SET_AUTHFORM,
      payload: { isFormOpen: true, isSignup: false },
    });
  };

  const setUser = (user) => {
    dispatch({ type: actions.SET_USER, user: user });
  };
  const closeAuthForm = (e) => {
    if (!e) {
      dispatch({
        type: actions.SET_AUTHFORM,
        payload: { isFormOpen: false }
      });
    } else if (e.target === e.currentTarget) {
      dispatch({
        type: actions.SET_AUTHFORM,
        payload: { isFormOpen: false }
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      let mouseX = e.pageX;
      let mouseY = e.pageY;
      let traX = (8 * mouseX) / 570 + 0;
      let traY = (8 * mouseY) / 570 + 50;
      logo.current && (logo.current.style.backgroundPosition = `${traX}% ${traY}%`);
    });
  }, []);

  return (<>
      <header>
        <div className="container">
          <div className="login-buttons">
            { !user && <>
              <button className="login-button" onClick={openSignupForm}>{dict.SIGNUP}</button>
              <button className="login-button" onClick={openSigninForm}>{dict.LOGIN}</button>
            </>}
            { user && <>
              { user.avatar &&
                <div className="avatar-wrapper">
                  <img src={user.avatar} />
                </div>
              }
              <h3 className="login-name">{user.login}</h3>
              <button className="login-button" onClick={logoutUser}>{dict.LOGOUT}</button>
            </>}
          </div>

          <Link to="/">
            <p className="logo_title" ref={logo}>TRAVEL APP</p>
          </Link>

          <div className="header-additions">
            <Select />
            {children && children}
          </div>
        </div>
      </header>
      { authForm.isFormOpen &&
        <AuthForm isSignup={authForm.isSignup} 
        setUser={setUser} 
        closeForm={closeAuthForm} />
      }
  </>);
}
