import Image from "next/image"
import React, { useContext, useEffect } from "react"
import styles from "../styles/Navbar.module.css"
import heroIMG from "../public/hero-logo.png"
import SiteContext from "@/Context/SiteContext"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = (props) => {
    const context = useContext(SiteContext)
    const router = useRouter()
    // console.log(props)
    function routeJopPortal(){
        console.log(router.replace("http://localhost:3001/Oppurtunities"))
    }
    function logOut() {
        const api = fetch('/api/logout', {
            method: 'GET',
        })
        api.then((res) => {
            context.userType[1]({})
            router.push("/")
        })
    }
    return (
        <nav className={styles.navbar} >
            <Image width={1000} height={1000} className={styles.homeLogo} src={heroIMG} alt="Avinya connect" ></Image>
            <div className={styles.dropdown}>
                <Link href="/" className={styles.dropbtn}>Home</Link>
            </div>
            <div className={styles.dropdown}>
                <Link href="#" >Programs & Events</Link>
                <div className={styles.dropdownContent}>
                    <Link href="" onClick={routeJopPortal} >Oppurtunities</Link>
                    <Link href="/Events">Events</Link>
                    {/* <Link href="#">Contact</Link> */}
                </div>
            </div>
            <div className={styles.dropdown}>
                <Link href="#" className={styles.dropbtn}>About</Link>
                <div className={styles.dropdownContent}>
                    <Link href="/Administrators">Administrator</Link>
                    {/* <Link href="#">Staff</Link> */}
                    <Link href="Contact">Contact</Link>
                    <Link href="Community">Community</Link>
                </div>
            </div>
            <div className={styles.dropdown}>
                <Link href="/AlumniNetwork" className={styles.dropbtn}>Alumni</Link>
            </div>
            {(context.userType[0].status === "200" && context.userType[0].userType !== "") ?
                <>
                    {/* <div className={styles.dropdown}>
                        <Link href="Dashboard" >Dashboard</Link>
                    </div> */}
                    <div className={styles.dropdown}>
                        <Link href="" onClick={logOut} >Log out</Link>
                    </div>
                </>
                :
                <>
                    <div className={styles.dropdown}>
                        <Link href="#" >Register</Link>
                        <div className={styles.dropdownContent}>
                            <Link href="/AlumniRegister" >Alumni Register</Link>
                            <Link href="/CollegeRegister" >College Register</Link>
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <Link href="#" >Login</Link>
                        <div className={styles.dropdownContent}>
                            <Link href="/AlumniLogin" >Alumni Lgoin</Link>
                            <Link href="/CollegeSignin" >College Login</Link>
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
