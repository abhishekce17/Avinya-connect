import SiteContext from '@/Context/SiteContext'
import React, { useContext, useEffect } from 'react'

const Dashboard = (props) => {

    const context = useContext(SiteContext)
    useEffect(()=>{
        context.userType[1](props.fetchData)
      },[])

  return (
    <div>Dashboard</div>
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

export default Dashboard