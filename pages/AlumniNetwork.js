import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../styles/Dashboard.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css'

const AlumniNetwork = (props) => {
const [filter, setFilter] = useState({college:"college", academic:"year"}) 

const [data, setData] = useState(props.fetchData)

  let arr = props.fetchData.map((value, index) => {
    return value["college name"]
  })

  let unique = arr.filter((item, index) => arr.indexOf(item) === index);

  let arr1 = props.fetchData.map((value, index) => {
    return value["academic year"]
  })

  let unique1 = arr1.filter((item, index) => arr1.indexOf(item) === index);

  function handleChange(e){
    const {name, value} = e.target

    if(value !== "year" || value !== "college")

    setFilter((prev)=>{
      return {...prev, [name]:value}
    })
    console.log(filter)
  }

useEffect(()=>{
  if (filter.college !== "college" && filter.academic !== "year"){
    setData(props.fetchData.filter((value, index)=>{
      return value["college name"] === filter.college && value["academic year"] === filter.academic
    }))
  }
  else if(filter.academic !== "year"){
    setData(props.fetchData.filter((value, index)=>{
      return value["academic year"] === filter.academic
    }))
  }
  else if (filter.college !== "college"){
    setData(props.fetchData.filter((value, index)=>{
      return value["college name"] === filter.college
    }))
  }
  

  else{
    setData(props.fetchData)
  }
  console.log(filter.academic !== "")
},[filter])



  console.log(unique)

  return (<div className={styles.bigContainer} >
    <div> <label>filter by year</label>
    <select name="academic" onChange={handleChange} >
    <option value={"year"} >years</option>
    {
      unique1.map((value, index)=>{
        return <option key={index} value={value} >{value}</option>
      })
    }
    </select>
    </div>
    <div>
    <label>filter by college</label>
    <select name="college" onChange={handleChange} >
      <option value="college" >college</option>
      {
        unique.map((value, index) => {
          return <option key={index} value={value} >{value}</option>
        })
      }
    </select>
    </div>
    <div className={styles.cardContainer} style={{ padding: "80px" }} >
      {data.map((value, index) => {
        return <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" style={{borderRadius:"50%", paddingLeft:"40px", paddingRight:"40px", height:"200px"}} src={value["img file"]} />
          <Card.Body>
            <Card.Title>{value["first name"] + " " + value["last name"]}</Card.Title>
            <Card.Text>
              college : {value["college name"]}<br />
              academic year : {value["academic year"]}
            </Card.Text>
            {/* <Button variant="primary">read more</Button> */}
          </Card.Body>
        </Card>

      })}

    </div>
  </div>
  );
}

export async function getServerSideProps(context) {
  let fetchContent = await fetch("http://localhost:3000/api/fetchalumni")
  const fetchData = await fetchContent.json()
  return {
    props: { fetchData },
  }
}

export default AlumniNetwork