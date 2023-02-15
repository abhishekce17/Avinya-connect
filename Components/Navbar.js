import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "../styles/Navbar.module.css"
import heroIMG from "../public/hero-logo.png"

const Navbar = () => {

    return (
        <nav className={styles.navbar} >
            <Image width={1000} height={1000} className={styles.homeLogo} src={heroIMG} alt="Avinya connect" ></Image>
            <div className={styles.dropdown}>
                <a href="/" className={styles.dropbtn}>Home</a>
            </div>
            <div className={styles.dropdown}>
                <a href="#" >Programs & Events</a>
                <div className={styles.dropdownContent}>
                    <a href="/oppurtunities">Oppurtunities</a>
                    <a href="/events">Events</a>
                    {/* <a href="#">Contact</a> */}
                </div>
            </div>
            <div className={styles.dropdown}>
                <a href="#" className={styles.dropbtn}>About</a>
                <div className={styles.dropdownContent}>
                    <a href="/Administrators">Administrator</a>
                    {/* <a href="#">Staff</a> */}
                    <a href="Contact">Contact</a>
                </div>
            </div>
            <div className={styles.dropdown}>
                <a href="/AlumniNetwork" className={styles.dropbtn}>Alumni</a>
            </div>
            <div className={styles.dropdown}>
                <a href="#" >Register</a>
                <div className={styles.dropdownContent}>
                    <a href="/AlumniRegister" >Alumni Register</a>
                    <a href="/CollegeRegister" >College Register</a>
                </div>                  
            </div>
            <div className={styles.dropdown}>
                <a href="#" >Login</a>
                <div className={styles.dropdownContent}>
                    <a href="/AlumniLogin" >Alumni Lgoin</a>
                    <a href="/CollegeSignin" >College Login</a>
                </div>
            </div>
            <div className={styles.searchSection}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className={styles.searchBar} placeholder="search here" type="text" />
            </div>
        </nav>
    )
}

export default Navbar