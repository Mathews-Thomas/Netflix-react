import { Link } from 'react-router-dom'
import logo from '../images/netflixlogo-removebg-preview.png'
import tv from '../images/tv.png'
import mobile from '../images/mobile.jpg'
import pile from '../images/device-pile-in.png'
import kidimage from '../images/kidsimage.png'
const Home =()=>
{
    return(
        <>
        <>
  <div className="container-fluid-head p-5 pt-5 pb-5 ">
    <div className="row p-5">
      <div className="col-lg-6 pt-2 mt-1">
        <div className="headimg">
          <img
            className="ml-5"
            src={logo} alt='netflixlogo'
            width="30%"
          />
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center pt-2 mt-1">
        <span>
          <select className="ml-5 btn btn-dark p-2">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </span>
        <span>
          <button className="ml-5 btn btn-danger">
            <Link to='/login' className="text-white text-decoration-none">
            Sign In</Link>
          </button>
        </span>
      </div>
      <div className="col-lg-12 mt-5 pt-5 text-center mb-5">
        <div className="font-weight-bold h1 text-white pt-5 mt-5">
          enjoy big movies,hit series and more from <br /> ₹149.
        </div>
        <div className="h4 text-white pt-3">join today.cancel anytime.</div>
        <div className="h5 text-white pt-3">
          ready to watch? enter your email to create or restart your membership
        </div>
        <div className="pt-3">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 bg-transparent border border-secondary text-white"
          />
          <button className="btn btn-danger p-3 ml-2 font-weight-bold">
            <Link to='finish' className="text-decoration-none text-white">
            Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container-fluid tv-section pt-5 pb-5 p-5">
    <div className="row pb-5 tv-section p-5">
      <div className="col-lg-6 p-5">
        <div className="p-5 text-white mt-5">
          <div className="font-weight-bold h1">Enjoy on your TV</div>
          <div className="h4 pt-3">
            watch on smart tv's,playstation,xbox,Chromecast, Apple TV, Blu-ray
            players and more.
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div>
          <img src={tv} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container-fluid mobile-section pt-5 pb-5 p-5">
    <div className="row p-5">
      <div className="col-lg-6">
        <div className="p-5">
          <img src={mobile} width="100%" />
        </div>
      </div>
      <div className="col-lg-6 p-5">
        <div className="p-5 text-white mt-5">
          <div className="font-weight-bold h1">
            Download your shows to watch offline
          </div>
          <div className="h4 pt-3">
            Save your favourites easily and always have something to watch.
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container-fluid movie-section pt-5 pb-5 p-5">
    <div className="row p-5">
      <div className="col-lg-6 p-5">
        <div className="p-5 text-white mt-5">
          <div className="font-weight-bold h1">Watch everywhere</div>
          <div className="h4 pt-3">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="p-5">
          <img src={pile} width="100%" />
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container-fluid kids-section pt-5 pb-5 p-5">
    <div className="row p-5">
      <div className="col-lg-6">
        <div className="p-4">
          <img src={kidimage} width="100%" />
        </div>
      </div>
      <div className="col-lg-6 p-5">
        <div className="p-5 text-white mt-5">
          <div className="font-weight-bold h1">Create profiles for kids</div>
          <div className="h4 pt-3">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container-fluid colapse-section pt-5 pb-5 p-5">
    <div className="row p-5">
      <div className="col-lg-12">
        <div className="font-weight-bold h1 text-white text-center">
          Frequently Asked Questions
        </div>
      </div>
      <div className="col-lg-12 mt-2">
        <div>
          <p>
            <a
              className="btn btn-dark faq-section text-white"
              data-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              what is Netflix?
            </a>
          </p>
          <div className="collapse" id="collapseExample1">
            <div className="card card-body bg-dark text-white h5">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2 ">
        <div>
          <p>
            <a
              className="btn btn-dark faq-section text-white"
              data-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              how much does Netflix cost?
            </a>
          </p>
          <div className="collapse" id="collapseExample2">
            <div className="card card-body bg-dark text-white h5">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹149 to ₹649 a month. No extra costs, no contracts.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2">
        <div>
          <p>
            <a
              className="btn btn-dark faq-section text-white"
              data-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              where can i watch?
            </a>
          </p>
          <div className="collapse" id="collapseExample3">
            <div className="card card-body bg-dark text-white h5">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2">
        <div>
          <p>
            <a
              className="btn btn-dark faq-section text-white"
              data-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              how to i cancel?
            </a>
          </p>
          <div className="collapse" id="collapseExample4">
            <div className="card card-body bg-dark text-white h5">
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2">
        <div>
          <p>
            <a
              className="btn btn-dark faq-section text-white"
              data-toggle="collapse"
              href="#collapseExample5"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              when can i watch on netflix?
            </a>
          </p>
          <div className="collapse" id="collapseExample5">
            <div className="card card-body bg-dark text-white h5">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2">
        <div>
          <p>
            <a
              className="btn btn-dark faq-section text-white"
              data-toggle="collapse"
              href="#collapseExample6"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              is netflix good for kids?
            </a>
          </p>
          <div className="collapse" id="collapseExample6">
            <div className="card card-body bg-dark text-white h5">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2 text-center mb-5">
        <div className="h5 text-white pt-3">
          ready to watch? enter your email to create or restart your membership
        </div>
        <div className="pt-3">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 bg-transparent border border-secondary text-white"
          />
          <button className="btn btn-danger p-3 ml-2 font-weight-bold">
          Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="container-fluid footer">
    <div className="row text-white p-5">
      <div className="col-lg-12 pl-5">
        <div>Questions? Call 000-800-919-1694</div>
      </div>
      <div className="col-lg-3 p-5">
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            FAQ
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Investor Relations
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Privacy
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Speed Test
          </a>
        </div>
        <div className="mt-3 mb-5">
          <a>
            <select className="btn btn-dark">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a>Netflix India</a>
        </div>
      </div>
      <div className="col-lg-3 p-5">
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Help Centre
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Jobs
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Cookie Preferences
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Legal Notices
          </a>
        </div>
      </div>
      <div className="col-lg-3 p-5">
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Account
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Ways to Watch
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Corporate Information
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Only on Netflix
          </a>
        </div>
      </div>
      <div className="col-lg-3 p-5">
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Media Centre
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Terms of Use
          </a>
        </div>
        <div className="mt-2 mb-2">
          <a href="" className="text-white">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</>
        

        
        
        </>
    );

}
export default Home;