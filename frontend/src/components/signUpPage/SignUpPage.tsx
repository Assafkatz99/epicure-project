import React from "react";
import { SignInButtons } from "../../typs/buttons/Styled_buttons";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import "./SignUpPage.css";

const SignInPage: React.FC = () => {
  return (
    <>
      <div className="sign_up_page">
        <Navbar></Navbar>
        <div className="sign_up_div">
          <div className="head_part">
            <span>SIGN UP</span>
            <label>To continue the order, please sign up</label>
          </div>

          <input placeholder="First name" type="text" />
          <input placeholder="Last name" type="text" />
          <input placeholder="Email address" type="text" />
          <input placeholder="Password" type="text" />

          <SignInButtons backgroundColor="white">SIGN UP</SignInButtons>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default SignInPage;
