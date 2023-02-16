import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div
        className="container-fluid text-center m-0"
        style={{ backgroundColor: "#5F9EA0" }}>
        <div className="py-4 px-1">
          <h2 className="text-light">Know About Us</h2>
            <Link href="/contact">
              <button className="btn btn-outline-light mt-3">Lets Talk</button>
            </Link>
        </div>
        <div className="row ">
          <div className="col-12 col-md-4 py-2">
            <h5 className="text-dark pb-3">More Links</h5>
              <Link href="/BlogSection" className="d-block text-light p-1">
                Blogs
              </Link>
              <Link href="/" className="d-block text-light p-1">
                Home
              </Link>
              <Link href="/allprojects" className="d-block text-light p-1">
                Projects
              </Link> 
              <div>
                <Link href="/Contact" className="d-block text-light p-1">
                  Contact Us
                </Link>
              </div>
              <Link href="/RecommendationForm" className="text-light p-1">
                Write a recommendation ♥
              </Link>
          </div>
          <div className="col-12 col-md-4 text-light py-5 text-justify">
            <p style={{ textAlign: "justify" }}>
          This website will keep a track of alumni's from government colleges and aided colleges where the alumni's can reconnect to their respective Colleges for further education,scholarship and documentations and reccomendation from the college also students of the respective colleges and connect with their alumni's and can have guidance from them.
            </p>
          </div>
          <div className="col-12 col-md-4 py-2">
            <h5 className="text-dark pb-3">Social</h5>
            <a className="d-block text-light p-1" href="mailto:admissions@mum.amity.edu">
              Email{" "}
              <span>
                <i className="fa fa-envelope"></i>
              </span>
            </a>
            <a className="d-block text-light p-1" href="https://www.linkedin.com/school/amityuniversitymumbai/">
              LinkedIn{" "}
              <span>
                <i className="fa fa-linkedin"></i>
              </span>
            </a>
            <a className="d-block text-light p-1" href="https://api.whatsapp.com/send?phone=917045780129">
              Whatsapp{" "}
              <span>
                <i className="fa fa-whatsapp"></i>
              </span>
            </a>
            <a className="d-block text-light p-1" href="c/">
              Helpline No +101-9001-1364
            </a>
            <a className="d-block text-light p-1" href="c/">
              {" "}
            </a>
          </div>
        </div>
        <div className="col-12 text-dark">
          <p className="m-0 p-2">Copyright ©Team Avinya 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
