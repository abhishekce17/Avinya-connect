import React, { useContext, useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from "mdb-react-ui-kit";
import styles from "../styles/Signin.module.css"
import { useRouter } from "next/router";

function AlumniLogin() {
    const  router = useRouter()

    const [alumniEmaiPassword, setAlumniEmaiPassword] = useState({ email: "", password: "" })
    function handleChange(e) {
        const { name, value } = e.target
        setAlumniEmaiPassword((pre) => {
            return { ...pre, [name]: value }
        })
    }
    function logIn(e) {
        e.preventDefault()
        // console.log(alumniDetails)
        const api = fetch('/api/alumnilogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(alumniEmaiPassword),
        })
        api.then((res)=>{
            if(res.status === 200) router.push("/")
        })
    }

    return (<div className={styles.signInContainer} >
        <div className={styles.signIn} >
            <MDBContainer className="my-5">

                <MDBCard>
                    <MDBRow className="g-0">
                        <MDBCol md="12">
                            <form action="" onSubmit={logIn} >
                                <MDBCardBody className="d-flex flex-column">

                                    <div className="d-flex flex-row mt-2">
                                        {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} /> */}
                                        <span className="h1 fw-bold mb-0" >Login</span>
                                    </div>

                                    <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                    <MDBInput required name="email" value={alumniEmaiPassword.email} onChange={handleChange} wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" />
                                    <MDBInput required name="password" value={alumniEmaiPassword.password} onChange={handleChange} wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" />

                                    <button type="submit" class="btn btn-dark">Login</button>
                                    <center><p>or</p></center>
                                    <button type="button" class="btn btn-outline-dark" style={{ marginBottom: "10px" }} ><i class="fa fa-google" aria-hidden="true"></i> Login with Google</button>
                                    <button type="button" class="btn btn-outline-dark"><i class="fa fa-linkedin-square" aria-hidden="true"></i> Login with Linkedin</button>
                                    {/* </div> */}
                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don"t have an account? <a href="/AlumniRegister" style={{ color: "#393f81" }}>Register here</a></p>

                                    <div className="d-flex flex-row justify-content-start">
                                    </div>

                                </MDBCardBody>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    </div >
    );
}

export default AlumniLogin;