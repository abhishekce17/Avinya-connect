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
    MDBInput,
    MDBRadio
}
    from "mdb-react-ui-kit";
import styles from "../styles/Signin.module.css"
import { useRouter } from "next/router";

function CollegeRegister() {
    const [collegeDetails, setCollegeDtails] = useState({"college name":"", "college id":"", "college type":"", district:"", "password":""})
    const [confirmPass, setConfirmPass] = useState("")
    const router = useRouter()

    function handleChange(e){
        const {name, value} = e.target
        if(name === "confirmPass") return setConfirmPass(value)
        setCollegeDtails((prev)=>{
            return {...prev,[name]:value }
        })
    }
    function register(e){
        e.preventDefault()
        if(confirmPass === collegeDetails.password){
        const api = fetch('/api/collegeregister', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(collegeDetails),
          })
          api.then((res)=>{
            if(res.status === 200){
                router.push("/")
            }
            else{
                router.push("/CollegeRegister")
            }
          })
        }
    }

    return (<div className={styles.registerContainer} >
        <div className={styles.register} >
            <MDBContainer className="my-5">

                <MDBCard>
                    <MDBRow className="g-0">
                        <MDBCol md="12">
                        <form action="" onSubmit={register}>                           
                            <MDBCardBody className="d-flex flex-column">

                                <div className="d-flex flex-row mt-2">
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
                                    <span className="h1 fw-bold mb-0">Register</span>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                                <MDBInput required name="college name" value={collegeDetails["college name"]} onChange={handleChange} wrapperClass="mb-2" label="College Name" id="formControlLg" type="text" size="lg" />
                                <MDBRow>
                                    <MDBCol md="4">
                                        <MDBInput required name="college id" value={collegeDetails["college id"]} onChange={handleChange} wrapperClass="mb-2" label="College Id" id="formControlLg" type="text" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput required wrapperClass="mb-2" name="college type" value={collegeDetails["college type"]} onChange={handleChange} label="College type" id="formControlLg" type="text" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput required name="district" value={collegeDetails.district} onChange={handleChange} wrapperClass="mb-2" label="District" id="formControlLg" type="text" size="lg" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput required wrapperClass="mb-2" name="password" value={collegeDetails.password} onChange={handleChange} label="Password" id="formControlLg" type="password" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput required wrapperClass="mb-2"value={confirmPass} onChange={handleChange} name={"confirmPass"} label="Confirm Password" id="formControlLg" type="password" size="lg" />
                                    </MDBCol>
                                </MDBRow>

                                <button type="submit" class="btn btn-dark">Register</button>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Already have an account? <a href="CollegeLogin" style={{ color: "#393f81" }}>Sign in here</a></p>

                                <div className="d-flex flex-row justify-content-start">
                                </div>

                            </MDBCardBody>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
    </div>
    );
}

export default CollegeRegister;