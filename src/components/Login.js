import logo from '../images/netflixlogo-removebg-preview.png'
const Login =()=>
{
    return(
        <>
        <div className="container-fluid-head p-5">
  <div className="row p-5">
    <div className="col-lg-12">
      <div>
        <img
          className="ml-5"
          src={logo}
          width="15%"
        />
      </div>
    </div>
    <div className="col-lg-12 text-white p-5">
      <div className="login-section p-5 rounded">
        <div className="pb-3 h2 font-weight-bold">Sign in</div>
        <div className="pb-3 text-center">
          <input
            type="text"
            placeholder="Email or Phone number"
            className="p-3 bg-transparent border border-secondary text-white input-section rounded"
          />
        </div>
        <div className="pb-3 text-center">
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-transparent border border-secondary text-white input-section rounded"
          />
        </div>
        <div className="pb-3 text-center">
          <button className="btn btn-danger button-section rounded">
            Sign in
          </button>
        </div>
        <div className="pb-3 text-center">
          <a href="" className="text-white">
            Forgot password?
          </a>
        </div>
        <div className="pb-3 pt-5">
          <div className="h6">
            Remember me <input type="checkbox" defaultChecked="" />
          </div>
        </div>
        <div className="pb-3 text-white-50">
          New to Netflix?{" "}
          <a
            href="finish.html"
            className="text-white font-weight-bold recaptcha-section"
          >
            Sign up now
          </a>
          .
        </div>
        <div className="pb-5 recaptcha-section text-white-50">
          This page is protected by Google reCAPTCHA to ensure you're not a bot{" "}
          <a href="">Learn more</a>.
        </div>
      </div>
    </div>
    <div className="col-lg-3 loginfooter-section rounded">
      <div className="pt-5 pb-5">
        <div className="pb-3">
          <a href="" className="text-white-50">
            Questions? Call 000-800-919-1694
          </a>
        </div>
        <div className="pb-3">
          <a href="" className="text-white-50">
            FAQ
          </a>
        </div>
        <div className="pb-3">
          <a href="" className="text-white-50">
            Cookie Preferences
          </a>
        </div>
        <div className="pb-3">
          <select className="btn btn-dark">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
        </div>
      </div>
    </div>
    <div className="col-lg-3 loginfooter-section">
      <div className="pt-5 pb-5">
        <div className="pb-3">
          <a href="" className="text-white-50">
            Help Centre
          </a>
        </div>
        <div className="pb-3">
          <a href="" className="text-white-50">
            Corporate Information
          </a>
        </div>
      </div>
    </div>
    <div className="col-lg-3 loginfooter-section">
      <div className="pb-5 pt-5">
        <a href="" className="text-white-50">
          Terms of Use
        </a>
      </div>
    </div>
    <div className="col-lg-3 loginfooter-section rounded">
      <div className="pb-5 pt-5">
        <a href="" className="text-white-50">
          Privacy
        </a>
      </div>
    </div>
  </div>
</div>

        
        </>
    );
}
export default Login;