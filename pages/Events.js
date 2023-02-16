import SiteContext from '@/Context/SiteContext'
import React, { useContext, useEffect } from 'react'
import styles from "../styles/Event.module.css"
// import one from "./event_img/1.jpg"
// import two from "./event_img/2.jpg"
// import three from "./event_img/3.png"
// import four from "./event_img/4.jpg"
// import five from "./event_img/5.jpg"
// import six from "./event_img/6.jpg"
// import seven from "./event_img/7.jpg"
// import eight from "./event_img/8.jpg"
// import nine from "./event_img/9.jpeg"
// import ten from "./event_img/10.jfif"
const Events = (props) => {
    // const context = useContext(SiteContext)
    // // useEffect(()=>{
    // //     context.userType[1](props.fetchData)
    // //   },[])
    return (
        <div className={styles.eventSection} >
            <div className={styles.allEventsContainer} >
                <div>
                    <h2 style={{textTransform:"uppercase"}} >Up coming events</h2>
                </div>
                <div className={styles.upcoming}>
                    <div className={styles.eventCard} >
                        <img src="./event_img/1.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/2.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/3.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/4.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{textTransform:"uppercase"}} >Recent events</h2>
                </div>
                <div className={styles.recent}>
                    <div className={styles.eventCard} >
                        <img src="./event_img/5.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/6.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/7.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/8.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 style={{textTransform:"uppercase"}} >Your events</h2>
                </div>
                <div className={styles.recent}>
                    <div className={styles.eventCard} >
                        <img src="./event_img/1.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/2.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/3.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src="./event_img/4.jpg" />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                </div>
                {props.fetchData.status === "200" &&
                <center>
                    <a href="/CreateEvent" style={{background:"#5f9ea0"}}  className='btn btn-lg btn-primary' >Add Event</a>
                </center>
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let fetchContent = await fetch("http://localhost:3000/api/loginStatus")
    const fetchData = await fetchContent.json()
    return  {
      props: {fetchData},
    }
  }

export default Events