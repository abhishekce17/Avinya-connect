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

function AlumniRegister() {
    const router = useRouter()
    const [alumniDetails,setAlumniDetails] = useState({"first name":"", "last name":"", "middle name":"", gender:"male", "number":"",email:"", password:"", "college name":"","college email":"", "gr no.":"", "academic year":"", "Birth Date":"", "img file":""})
    const [confirmPass, setConfirmPass] = useState("")

    function handleChange(e){
        const {name, value} = e.target
        if(name === "confirmation") return setConfirmPass(value)
        else if(name === "gender") {
            console.log(e.target.dataset)
            setAlumniDetails((prev)=>{return {...prev, [name]: e.target.dataset.gendervalue}})
        }
        else{
            setAlumniDetails((prev)=>{
                return {...prev, [name]:value}
            })
        }
    }

    function register(e){
        e.preventDefault()
        if(confirmPass === alumniDetails.password){
            // console.log(alumniDetails)
        const api = fetch('/api/alumniregister', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(alumniDetails),
          })
          api.then((res)=>{
            if(res.status === 200){
                router.push("/")
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
                        <form action="" onSubmit={register} >
                            <MDBCardBody className="d-flex flex-column">

                                <div className="d-flex flex-row mt-2">
                                    <span className="h1 fw-bold mb-0">Register</span>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>Sign into your account</h5>
                                <MDBRow>
                                    <MDBCol md="4">
                                        <MDBInput required wrapperClass="mb-2" name="first name" value={alumniDetails["first name"]} onChange={handleChange} label="First Name" id="formControlLg" type="text" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput required wrapperClass="mb-2" name="middle name" value={alumniDetails["middle name"]} onChange={handleChange} label="Middle Name" id="formControlLg" type="text" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBInput required wrapperClass="mb-2" name="last name" value={alumniDetails["last name"]} onChange={handleChange} label="Last Name" id="formControlLg" type="text" size="lg" />
                                    </MDBCol>

                                </MDBRow>
                                {/* <MDBInput required wrapperClass="mb-2" label="First Name" id="formControlLg" type="text" size="lg" />
                                <MDBInput required wrapperClass="mb-2" label="Last Name" id="formControlLg" type="text" size="lg" /> */}
                                <MDBInput required wrapperClass="mb-2" name="Birth Date" value={alumniDetails["Birth Date"]} onChange={handleChange} label="Birth Date" id="formControlLg" type="date" size="lg" />
                                <div className="my-2" >
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <MDBRadio name='gender' onChange={handleChange} data-gendervalue={"male"}  id='flexRadioDefault1' label='Male' defaultChecked />
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBRadio name='gender' onChange={handleChange} id='flexRadioDefault2' data-gendervalue={"female"} label='Female' />
                                        </MDBCol>
                                    </MDBRow>

                                </div>
                                <MDBInput required wrapperClass="mb-2" name="img file" value={alumniDetails["img file"]} onChange={handleChange} label="Profile photo link" id="formControlLg" type="text" placeholder="profile photo" size="lg" />
                                <MDBInput required wrapperClass="mb-2" name="number" value={alumniDetails.number} onChange={handleChange} label="Phone No." id="formControlLg" type="text" size="lg" />
                                <MDBInput required wrapperClass="mb-2" label="Email address" id="formControlLg" type="email" size="lg" name="email" value={alumniDetails.email} onChange={handleChange} />
                                <MDBInput required wrapperClass="mb-2" label="College Name" name="college name" value={alumniDetails["college name"]} onChange={handleChange} id="formControlLg" type="text" size="lg" />
                                <MDBInput required wrapperClass="mb-2" label="College Email" name="college email" value={alumniDetails["college email"]} onChange={handleChange} id="formControlLg" type="text" size="lg" />
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput required wrapperClass="mb-2" name="gr no." value={alumniDetails["gr no."]} onChange={handleChange} label="GR No." id="formControlLg" type="text" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput required wrapperClass="mb-2" name="academic year" value={alumniDetails["academic year"]} onChange={handleChange} label="Academic year" id="formControlLg" type="text" placeholder="2022-2023" size="lg" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput required wrapperClass="mb-2" name="password" value={alumniDetails.password} onChange={handleChange} label="Password" id="formControlLg" type="password" size="lg" />
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput required wrapperClass="mb-2" label="Confirm Password" id="formControlLg" type="password" value={confirmPass} name="confirmation" onChange={handleChange} size="lg" />
                                    </MDBCol>
                                </MDBRow>

                                <button type="submit" class="btn btn-dark" >Register</button>
                                <center><p>or</p></center>
                                <button type="button" class="btn btn-outline-dark" style={{ marginBottom: "10px" }} ><i class="fa fa-google" aria-hidden="true"></i> Login with Google</button>
                                <button type="button" class="btn btn-outline-dark"><i class="fa fa-linkedin-square" aria-hidden="true"></i> Login with Linkedin</button>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Already have an account? <a href="AlumniLogin" style={{ color: "#393f81" }}>Sign in here</a></p>

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

export default AlumniRegister;