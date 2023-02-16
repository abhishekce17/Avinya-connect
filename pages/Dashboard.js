import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "../styles/Dashboard.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = () => {

  return (
    <div></div>
    // <div className={styles.cardContainer} style={{padding:"100px"}} >

    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="https://images.unsplash.com/photo-1676269098733-4a94f912d838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=969&q=80" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="https://images.unsplash.com/photo-1676269098733-4a94f912d838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=969&q=80" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="https://images.unsplash.com/photo-1676269098733-4a94f912d838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=969&q=80" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="https://images.unsplash.com/photo-1676269098733-4a94f912d838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=969&q=80" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // </div>
            );
}

export async function getServerSideProps(context) {
    let fetchContent = await fetch("http://localhost:3000/api/loginStatus")
    const fetchData = await fetchContent.json()
    return {
      props: {fetchData},
    } 
  }

export default Dashboard