import React from 'react'
import {Col,Button} from "react-bootstrap";


const CustomCol = ({text,backgroundColor,no}) =>{
  
    return (
      <Col
      sm={2}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        margin: "5px",
      }}
    >
  
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          backgroundColor: backgroundColor,
          borderRadius: "100%",
          fontSize: "20px",
        }}
      >
        <b>{no}</b>
      </div>
      {text}
    </Col>
    )
  }

  export default CustomCol