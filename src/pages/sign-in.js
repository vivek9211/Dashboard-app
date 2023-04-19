import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import Dashboard from "./dashboard";



const SignIn = () => {
  const [user, setUser] = useState();

  function handlecallbackResponse(response) {
    // console.log("Encoded JWT token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    console.log(user);
  }
  if(user==null) console.log("Empty");

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "95250001924-aaos02j0230k1lml4rnc09qb178em9sb.apps.googleusercontent.com",
      callback: handlecallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("google-button"), {
        theme: "outline", size: "large"
      }
    );
  }, []);





  return (
    <div className="relative w-full h-[1024px] overflow-hidden text-left text-[72px] text-black font-montserrat">
      <div className="absolute top-[0px] left-[588px] bg-background w-[852px] h-[1024px]" />
      <div className="absolute top-[0px] left-[0px] bg-black w-[588px] h-[1024px]" />
      <p
        className="m-0 absolute top-[464px] left-[171px] font-bold text-white"
        id="heading"
      >
        Board.
      </p>
      <form
        className="absolute top-[409px] left-[832px] w-[385px] h-[356px]"
        action="signin"
        method="post"
      >
        <div className="absolute top-[0px] left-[0px] w-[385px] h-[317px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <input
          className="[border:none] bg-field-color-darker absolute top-[59px] left-[30px] w-[325px] h-10 rounded-3xs"
          type="text"
          placeholder="Enter your email"
          required
        />
        <input
          className="[border:none] bg-field-color-darker absolute h-[11.24%] w-[84.42%] top-[41.57%] right-[7.79%] bottom-[47.19%] left-[7.79%] rounded-3xs"
          type="password"
          placeholder="Enter your password"
          maxLength={12}
          minLength={6}
          required
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[247px] left-[30px] w-[325px] h-10">
          <div className="absolute top-[0px] left-[0px] w-[325px] h-10">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
          </div>
          <b className="absolute top-[9px] left-[112.58px] text-base inline-block font-montserrat text-white text-center w-[101.96px] h-[21.71px]">
            Sign In
          </b>
        </button>
        <label
          className="cursor-pointer absolute top-[30px] left-[30px] text-base font-lato text-black text-left"
          htmlFor="email"
        >
          Email address
        </label>
        <label
          className="cursor-pointer absolute top-[119px] left-[30px] text-base font-lato text-black text-left"
          htmlFor="password"
        >
          Password
        </label>
        <a
          className="absolute top-[208px] left-[31px] text-base font-lato text-link text-left [text-decoration:none]"
          id="forgot-password"
          href="#"
        >
          Forgot password?
        </a>
        <a
          className="absolute top-[337px] left-[62px] text-base font-lato text-center [text-decoration:none]"
          id="register"
          href="#"
        >
          <span className="text-secondary-text">{`Don’t have an account? `}</span>
          <span className="text-link">Register here</span>
        </a>
      </form>
      {/* <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[832px] w-[180px] h-[30px]">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <div id="google-button" className="absolute top-[8px] left-[43px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Google
        </div>
        <img
          className="absolute top-[8px] left-[19px] w-3.5 h-3.5 overflow-hidden object-cover"
          alt="google-img"
          src="/googleicon-1@2x.png"
        />
      </button> */}
      <div id="google-button" className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[832px] w-[180px] h-[30px]"></div>

      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[354px] left-[1037px] w-[180px] h-[30px]">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[30px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white" />
        </div>
        <div className="absolute top-[8px] left-[46px] text-xs font-montserrat text-secondary-text text-center">
          Sign in with Apple
        </div>
        <img
          className="absolute top-[7px] left-[24px] w-[11.5px] h-3.5 overflow-hidden object-cover"
          alt="apple-logo"
          src="/apple-1@2x.png"
        />
      </button>
      <h2
        className="m-0 absolute top-[260px] left-[832px] text-17xl font-bold font-inherit"
        id="sign-heading"
      >
        Sign In
      </h2>
      <p
        className="m-0 absolute top-[309px] left-[832px] text-base font-lato"
        id="para"
      >
        Sign in to your account
      </p>

      { user && <Dashboard userinfo={user} editUser={setUser} />}
    </div>
  );
};

export default SignIn;
