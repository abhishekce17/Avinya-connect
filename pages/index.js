import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useContext, useEffect } from 'react'
import SiteContext from '@/Context/SiteContext'

export default function Home(props) {

  const context = useContext(SiteContext)
useEffect(()=>{
  context.userType[1](props.fetchData)
},[])
const costumeStyle={
  "height":"auto",
  "width":"100%"
}
  return (
    <>
      <main className={styles.main} >
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./hero-img.jpeg" className="d-block w-100" alt="..." style={costumeStyle}/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src="./hero-2.jpeg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src="./hero-3.jpeg" className="d-block w-100" alt="..."  />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="featuredSection"></div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  let fetchContent = await fetch("http://localhost:3000/api/loginStatus")
  const fetchData = await fetchContent.json()
  return fetchContent.status == 200 ? {
    props: {fetchData},
  } : {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  }
}