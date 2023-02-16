import React from "react"
import About from '@/Components/About'
import styles from "../styles/Administrators.module.css"

const Administrators = () => {
  return (
    <div className={styles.Admin} style={{paddingTop : "70px", margin:"0"}} >
      <About/>
    </div>
  )
}

export default Administrators