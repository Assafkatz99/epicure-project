import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SignInButtons } from "../../typs/buttons/Styled_buttons";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import "./SignInPage.css";


const SignInPage: React.FC = () => {
  const navigate = useNavigate();

      return (
      <>
      <div className="sign_in_page">
      <Navbar ></Navbar>
        <div className="sign_in_div">
            <div className="head_part">
                <span>SIGN IN</span>
                <label>To continue the order, please sign in</label>
            </div>

            <input placeholder="Email address" type="text"/>
            <input placeholder="Password" type="password" />
            <section>
            <SignInButtons backgroundColor="grey">LOGIN</SignInButtons>
            <button className="forget_pass_button">Forget password?</button>
            </section>

            <div className="or_class">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <SignInButtons backgroundColor="white" onClick={()=>{navigate("/sign-up")}}>SIGN UP</SignInButtons>


        </div>
      <Footer></Footer>
      </div>
      </>
      )
    }

export default SignInPage;