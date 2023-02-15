import Image from "next/image"
import React, { useContext, useEffect } from "react"
import styles from "../styles/Navbar.module.css"
import heroIMG from "../public/hero-logo.png"
import SiteContext from "@/Context/SiteContext"

const Navbar = (props) => {
    const context = useContext(SiteContext)
    return (
        <nav className={styles.navbar} >
            <Image width={1000} height={1000} className={styles.homeLogo} src={heroIMG} alt="Avinya connect" ></Image>
            <div className={styles.dropdown}>
                <a href="/" className={styles.dropbtn}>Home</a>
            </div>
            <div className={styles.dropdown}>
                <a href="#" >Programs & Events</a>
                <div className={styles.dropdownContent}>
                    <a href="/Oppurtunities">Oppurtunities</a>
                    <a href="/Events">Events</a>
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
            {context.userType[0].status === "200" ?
                <>
                    <div className={styles.dropdown}>
                        <a href="#" >Dashboard</a>
                        <div className={styles.dropdownContent}>
                            <a href="/AlumniRegister" >Alumni Register</a>
                            <a href="/CollegeRegister" >College Register</a>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <a href="#" >Log out</a>
                        <div className={styles.dropdownContent}>
                            <a href="/AlumniLogin" >Alumni Lgoin</a>
                            <a href="/CollegeSignin" >College Login</a>
                        </div>
                    </div>
                </>
                :
                <>
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
                </>
            }
            <div className={styles.searchSection}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className={styles.searchBar} placeholder="search here" type="text" />
            </div>
        </nav>
    )
}

export default Navbar
