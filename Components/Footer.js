import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div
        className="container-fluid text-center m-0"
        style={{ backgroundColor: "#5F9EA0" }}>
        <div className="py-4 px-1">
          <h2 className="text-light">Interested in working with me ?</h2>
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
                <Link href="/contact" className="d-block text-light p-1">
                  Contact Us
                </Link>
              </div>
              <Link href="/RecommendationForm" className="text-light p-1">
                Write a recommendation ♥
              </Link>
          </div>
          <div className="col-12 col-md-4 text-light py-5 text-justify">
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet para in siquential twitrer form text
              year ini justified consectetur adipisicing elit. Commodi ullam at
              incidunt nemo? Omnis, praesentium.for Magnam praesentium, sapiente
              iure consequuntur soluta doloremque natus dista, remedials tuit
              see junly worried which let's ghhghg hgej ksksk ksi is the
              complicate it.
            </p>
          </div>
          <div className="col-12 col-md-4 py-2">
            <h5 className="text-dark pb-3">Social</h5>
            <a className="d-block text-light p-1" href="c/">
              Email{" "}
              <span>
                <i className="fa fa-envelope"></i>
              </span>
            </a>
            <a className="d-block text-light p-1" href="c/">
              LinkedIn{" "}
              <span>
                <i className="fa fa-linkedin"></i>
              </span>
            </a>
            <a className="d-block text-light p-1" href="c/">
              GitHub{" "}
              <span>
                <i className="fa fa-github"></i>
              </span>
            </a>
            <a className="d-block text-light p-1" href="c/">
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
          <p className="m-0 p-2">Copyright © yadnyesh khotre 2022</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
