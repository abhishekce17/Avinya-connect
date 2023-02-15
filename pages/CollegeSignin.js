import React, { useState } from "react";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from "mdb-react-ui-kit";
import styles from "../styles/Signin.module.css"

function App() {

    const [CollegeEmaiPassword,setCollegeEmaiPassword ] = useState({"college name":"","college id":"", password:""})
    function handleChange(e){
        const {name, value} = e.target
        setCollegeEmaiPassword((pre)=>{
            return {...pre, [name]:value}
        })
    }
    function logIn(){
        console.log(CollegeEmaiPassword)
    }

    
    return (<div className={styles.signInContainer} >
        <div className={styles.signIn} >
            <MDBContainer className="my-5">
                <MDBCard>
                    <MDBRow className="g-0">

                        <MDBCol md="12">
                            <MDBCardBody className="d-flex flex-column">

                                <div className="d-flex flex-row mt-2">
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                                    <span className="h1 fw-bold mb-0">Login</span>
                                </div>
                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                                <MDBInput wrapperClass="mb-4" label="College Name" id="formControlLg" type="text" name="college name" value={CollegeEmaiPassword["college name"]} onChange={handleChange} size="lg" />
                                <MDBInput wrapperClass="mb-4" label="College Id" id="formControlLg" onChange={handleChange} value={CollegeEmaiPassword["college id"]} type="text" name="college id" size="lg" />
                                <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" onChange={handleChange} value={CollegeEmaiPassword.password} name="password" type="password" size="lg" />

                                <button type="button" class="btn btn-dark" onClick={logIn} >Login</button>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don"t have an account? <a href="/CollegeRegister" style={{ color: "#393f81" }}>Register here</a></p>

                                <div className="d-flex flex-row justify-content-start">
                                </div>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    </div>
    );
}

export default App;