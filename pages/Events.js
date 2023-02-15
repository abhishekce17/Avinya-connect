import SiteContext from '@/Context/SiteContext'
import React, { useContext, useEffect } from 'react'
import styles from "../styles/Event.module.css"

const Events = () => {
    const context = useContext(SiteContext)
    return (
        <div className={styles.eventSection} >
            <div className={styles.allEventsContainer} >
                <div>
                    <h2 style={{textTransform:"uppercase"}} >Up coming events</h2>
                </div>
                <div className={styles.upcoming}>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
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
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
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
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                    <div className={styles.eventCard} >
                        <img src='./hero-img.jpeg' />
                        <div className={styles.text}>
                            <h2>Event title</h2>
                            <p>some description wil be added her for more event information</p>
                            <p>location:<strong>College name</strong></p>
                            <div className={styles.dateTime}><p>Date and time</p><a>Read more</a></div>
                        </div>
                    </div>
                </div>
                {context.userType[0].status === "200" &&
                <center>
                    <a href="/CreateEvent" style={{background:"#5f9ea0"}}  className='btn btn-lg btn-primary' >Add Event</a>
                </center>
                }
            </div>
        </div>
    )
}

export default Events