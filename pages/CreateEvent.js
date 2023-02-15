import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import styles from "../styles/EventCreation.module.css"

const CreateEvent = () => {
  const router = useRouter()
  const [CPCount, setCPCount] = useState(1)
  const [eventDetails, setEventDetails] = useState({ "event name": "", "image link": "", "description": "", "chair persons": [""], "location": "", "date and time": "" })
  function handleChange(e, index) {
    const { name, value } = e.target
    if (name === "chair persons") {
      eventDetails['chair persons'][index] = value
      setEventDetails((prev) => {
        return { ...prev, [name]: eventDetails['chair persons'] }
      })
    }
    else {
      setEventDetails((prev) => {
        return { ...prev, [name]: value }
      })

    }
  }

  function addCPCount() {
    setCPCount(CPCount + 1)
  }

  function reduceCPCount() {
    setCPCount(CPCount - 1)
    setEventDetails((prev) => {
      return { ...prev, [name]: eventDetails['chair persons'].pop() }
    })
  }

  function addEvent(e) {
    e.preventDefault()
    // console.log(alumniDetails)
const api = fetch('/api/submitevent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventDetails),
  })
  api.then((res)=>{
      router.push ("/Events")
    })
  }


  return (
    <div className={styles.eventCreation} >
      {/* { (context.Authentication[0].alumni || context.Authentication[0].administrator || context.Authentication[0].collegeAuthority) && <form onSubmit={addEvent} action="" > */}
      {  <form onSubmit={addEvent} action="" >
        <div className={styles.titleDescription} >
          <label>Event Name</label><br />
          <input type="text" placeholder='Event name' onChange={handleChange} name="event name" value={eventDetails['event name']} required /><br />
          <div className={styles.eventImg} >
            <img src={eventDetails['image link']} />
            <input required type="text" placeholder='image url' onChange={handleChange} name="image link" value={eventDetails['image link']} />
          </div>
          <label>Description/About</label><br />
          <textarea required rows="11" name='description' onChange={handleChange} value={eventDetails.description} />
        </div>
        <div className={styles.organizingCommity}>
          <label>Chair Persons/Organisers name</label><br />
          {[...Array(CPCount)].map((undefined, index) => {
            return <input type="text" key={index} id={index} name='chair persons' style={{ margin: index === CPCount - 1 && "0" }} onChange={(e) => { handleChange(e, index) }} value={eventDetails['chair persons'][index]} required />
          })}
          {CPCount > 1 && <i onClick={reduceCPCount} className="fa fa-times" style={{ color: "gray" }} aria-hidden="true"></i>}
          <br />
          <button type='button' onClick={addCPCount} className='btn btn-dark' style={{ marginBottom: "25px" }}  >Add CP</button>
        </div>
        <div className={styles.locationDateTime} >
          <label>Location</label><br />
          <input type="text" name='location' onChange={handleChange} value={eventDetails.location} required /><br />
          <label>Date and Time</label><br />
          <input required type="datetime-local" name='date and time' onChange={handleChange} value={eventDetails['date and time']} />
        </div>
        <center>
          <button type='submit' className='btn btn-lg btn-primary' >Create Event</button>
        </center>
      </form> }
    </div>
  )
}

export async function getServerSideProps(context) {
  let fetchPost = await fetch("http://localhost:3000/api/submitevent")
  console.log(fetchPost)
  return fetchPost.status == 200 ? {
    props: {},
  } : {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  }
}

export default CreateEvent