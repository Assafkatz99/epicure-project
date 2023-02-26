import React from "react";
import { SignInButtons } from "../../typs/buttons/Styled_buttons";
import Navbar from "../navbar/Navbar";
import "./SignInPage.css";


const SignInPage: React.FC = () => {
      return (
      <>
      <Navbar ></Navbar>
      <div className="sign_in_page">
        <div className="sign_in_div">
            <div className="head_part">
                <span>SIGN IN</span>
                <label>To continue the order, please sign in</label>
            </div>

            <input placeholder="Email address" type="text"/>
            <input placeholder="Password" type="text" />
            <section>
            <SignInButtons backgroundColor="grey">LOGIN</SignInButtons>
            <button className="forget_pass_button">Forget password?</button>
            </section>

            <div className="or_class">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <SignInButtons backgroundColor="white">SIGN UP</SignInButtons>


        </div>
      </div>
      </>
      )
    }

export default SignInPage;