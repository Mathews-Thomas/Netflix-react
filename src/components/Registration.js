import resposive from '../images/responsive.png'
import { Link } from 'react-router-dom';
const Finish =()=>
{
    return(
        <>
        <div className="container-fluid">
  <div className="row d-flex justify-content-center p-5">
    <div className="col-lg-6">
      <div className="text-left">
        <img src={resposive} width="25%" />
      </div>
    </div>
    <div className="col-lg-6">
      <div className="text-right h5 font-weight-bold">
        <a href="login.html" className="text-dark">
          Sign In
        </a>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 text-center p-5">
      <div>
        <img src={resposive} width="250px" />
      </div>
      <div className="text-monospace pt-2">
        STEP <span className="font-weight-bold">1</span> OF{" "}
        <span className="font-weight-bold">3</span>
      </div>
      <div className="h2 pt-2 font-weight-bold">
        Finish setting up your account
      </div>
      <div className="h5 pt-2 Finish-section-password">
        Netflix is personalised for you.
        <br /> Create a password to watch
        <br /> on any device at any time.
      </div>
      <div className="pt-2">
        <button className="btn btn-danger Finish-section-button p-3">
          <Link to='/finish1' className="text-white text-decoration-none">
            Next
          </Link>
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Finish;