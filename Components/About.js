import React, { Component } from "react";

export default class google extends Component {
  responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
  };
  render() {
    return (
      <>
        <div className="header m-5 ">
          <h1 className="text-center ">
            Alumni Association & Board of Directorates
          </h1>
        </div>
        <div className="container">
          <div className="row g-2 ">
            <div className="col-sm-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
                // data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src='./slide1.png' className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src='./img2.png' className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src='./slide1.png' className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="news">
            <div className="row ">
              <h1 className="mx-3 my-3">Trending Alumni News</h1>

              <div className="col-sm-3 ">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={"./ci1.jpg"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Vinodh Gopal, EIT Faridabad Alum Innovation Makes Online
                      Shopping Secure
                    </h5>
                    <p className="card-text">
                      Intel's Vinodh Gopal became the company's Innovator of the
                      Year in 2019. He holds 270 US patents,…
                    </p>
                    <a href="#about" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 ">
                <div className="card" style={{ width: "18rem" }}>
                  <img src='./img3.jpg' className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Hitesh Kumar, SDE at Myntra online fashion store
                    </h5>
                    <p className="card-text">
                      He has received the title of employee of year as sde at
                      myntra online fashion store.He is passionate and highly
                      enthusiastic,..
                    </p>
                    <a href="#about" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 ">
                <div className="card" style={{ width: "18rem" }}>
                  <img src='./img4.jpg' className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Priya Sharma,Data Analyst at IBM.
                    </h5>
                    <p className="card-text">
                      Priya has conducted a data science seminar all national
                      level and has received the award of best conducted seminar
                      at IBM,...
                    </p>
                    <a href="#about" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 ">
                <div className="card" style={{ width: "18rem" }}>
                  <img src='./img5.jpg' className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Mark Fernandes,Full Stack Developer at Wipro.
                    </h5>
                    <p className="card-text">
                      Dedicated and efficient full stack Developer,worked on
                      more than 25 live projects and gained a higher level
                      experience,..
                    </p>
                    <a href="#about" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="row g-2">
                <div className="col-sm-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src='./img6.jpg"' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        EIT Faridabad Alumnus Appointed Senior Software
                        Developer at Microsoft
                      </h5>
                      <p className="card-text">
                        EIT Faridabad Alumnus, Ajit Ranade, has been appointed
                        Senior Software Developer of the Microsoft in Bengaluru
                        , India…
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src='./img8.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        EIT Faridabad Alumnus Appointed Senior Software
                        Developer at Microsoft
                      </h5>
                      <p className="card-text">
                        EIT Faridabad Alumnus, Ajit Ranade, has been appointed
                        Senior Software Developer of the Microsoft in Bengaluru
                        , India…
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src='./img12.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        EIT Faridabad Alumnus Appointed Senior Software
                        Developer at Microsoft
                      </h5>
                      <p className="card-text">
                        EIT Faridabad Alumnus, Ajit Ranade, has been appointed
                        Senior Software Developer of the Microsoft in Bengaluru
                        , India…
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 ">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src='./img11.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        Parag Agrawal,EIT Faridabad Alumnus Appointed Twitter
                        CEO
                      </h5>
                      <p className="card-text">
                        Parag Agrawal, a B-Tech graduate in Computer Science
                        Engineering from EIT Faridabad, M.Tech. in Computer
                        Science from
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alumniMeet">
            <div className="row">
              <h1 className="mx-3 my-3">Alumni Meet Photos</h1>
              <div className="col-sm-6">
                <div className="card bg-dark text-white">
                  <img src='./slide2.jpg' className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Alumni Meet 2021</h5>
                    <p className="card-text"></p>
                    <p className="card-text">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card bg-dark text-white">
                  <img src='./slide3.jpg' className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Alumni Meet 2018</h5>
                    <p className="card-text"></p>
                    <p className="card-text">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alumniActivity">
            <div className="row">
              <h1 className="mx-3 my-3">A Glimpse of alumni activities</h1>

              <div className="col-sm-6">
                <div className="col-sm-8 my-3">
                  <div className="card ">
                    <img src='./slide3.jpg"' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <h3 className="my-3">Young Achievers Awards</h3>
                <p>
                  YAA (Young Achievers Awards) are given to those alumni who
                  have brought laurels to the Institute by contributing to
                  society and for their academic excellence. The awards are
                  given during the Institute foundation function. Any alumni who
                  have not received the award earlier and who are 35 years of
                  age or under, can also self-nominate for the award. However,
                  nominations can be made for outstanding achievements under the
                  following categories:
                </p>
                <ul>
                  <li>Academic excellence</li>
                  <li>Professional excellence</li>
                  <li>Entrepreneurship and Management</li>
                  <li>
                    Any other activity pertaining to the service of Humanity at
                    large
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-8 my-3">
                  <div className="card ">
                    <img src='./slide3.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <h3 className="my-3">Alumni Meets and Re-union</h3>
                <p>
                  Alumni meets are worthy events that provide a good platform to
                  present students to interact and communicate with their
                  seniors. The first Alumni meet of EIT Faridabad was organized
                  in the year-2018. The first batch of 2007 11 to the last
                  outgoing batch of 2017 came back to the campus to relive their
                  old memories. On 26th May the session was divided into two
                  parts. The first part was the interaction between faculty and
                  alumni while the second part was the interaction between
                  current students and alumni. Post lunch, there was an
                  interactive session of alumni and current students. This
                  session was followed by sports matches in which many alumni
                  participated. Finally, there was dinner at Raj Mahal along
                  with some faculties to call it a day.
                </p>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-8 my-3">
                  <div className="card ">
                    <img src='./slide3.jpg' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <h3 className="my-3">Alumni Chapters</h3>
                <p>
                  Alumni chapters are local, friendly and accessible points of
                  contact for alumni. They bring together alumni from all walks
                  of life. These chapters play a vital role, as they facilitate
                  networking and social opportunities for both current and
                  previous students. Current active alumni chapters:
                </p>
                  <ul>
                    <li>Bangalore Chapter</li>
                    <li>Delhi Chapter</li>
                    <li>Mumbai Chapter</li>
                    <li>North America Chapter</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center">Follow Us </h1>
              <center>                
              <div className="container container my-5 ">
                <p>
                  <a href="#" className="mx-3 ">
      
                    <img src='./icons8-facebook-50.png' alt="" />
                  </a>
                  <a href="#" className="mx-3">
      
                    <img src='./icons8-instagram-50.png' alt="" />
                  </a>
                  <a href="#">
      
                    <img src='./icons8-linkedin-50.png' alt="" />
                  </a>
                  <a href="#" className="mx-3">
      
                    <img src='./icons8-twitter-50.png' alt="" />
                  </a>
                  <a href="#" className="mx-3">
      
                    <img src='./icons8-youtube-50.png' alt="" />
                  </a>
                </p>
              </div>
              </center>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr
              className="text-danger border-5 opacity-50 "
              style={{ height: "20px" }}
            />
            <h5 className="text-center">

              Created by Avinya Connect | 2022 All Right Reserved.
            </h5>
          </div>
        </div>
      </>
    );
  }
}
