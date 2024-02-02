import logo from '../images/netflixlogo-removebg-preview.png'
import { Link } from 'react-router-dom';
const Finish1=()=>
{
    return(
        <>
        <div className="container-fluid">
  <div className="row d-flex justify-content-center p-5">
    <div className="col-lg-6">
      <div className="text-left">
        <img src={logo} width="25%" />
      </div>
    </div>
    <div className="col-lg-6">
      <div className="text-right h5 font-weight-bold">
        <a href="" className="text-dark">
          Sign In
        </a>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 text-center p-5">
      <div className="text-monospace pt-2">
        STEP <span className="font-weight-bold">1</span> OF{" "}
        <span className="font-weight-bold">3</span>
      </div>
      <div className="h2 pt-2 font-weight-bold">
        Create a password to start <br /> your membership
      </div>
      <div className="h5 pt-2 Finish-section-password">
        Just a few more steps and you're done!
        <br />
        We hate paperwork, too.
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="p-2 rounded border border-dark"
        />
      </div>
      <div className="pt-3 pb-3">
        <input
          type="text"
          placeholder="Add a password"
          className="p-2 rounded border border-dark"
        />
      </div>
      <div className="pt-2">
        <button className="btn btn-danger Finish-section-button p-3 ">
         <Link to='/main' className='text-white text-decoration-none'> Next</Link>
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    );
}
export default Finish1;