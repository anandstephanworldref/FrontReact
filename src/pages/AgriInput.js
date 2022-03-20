import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Accordion,
  useAccordionButton,
  Table,
  Image,
  Button,
} from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import CustomCol from "./CustomCol";




const AgriInput = () => {

  const [pending,setPending] = useState(false)
  const [executing,setExecuting]= useState(false)
  const [customCards,setCustomCards] = useState([{inputOrder:"AGBUY27687698_2312",imgUrl:"https://images.unsplash.com/photo-1604882355165-4450cb6155b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=500",name:"Chris Rong",buttonText:"RfqList_42348798"},{inputOrder:"AGBUY27687698_2312w23",imgUrl:"https://4.imimg.com/data4/CB/DA/ANDROID-26789309/product-500x500.jpeg",name:"Dr Strange",buttonText:"RfqList_08474"}])

  return (
    <Container>
      <Card style={{ height: "90vh", padding: "10px",marginLeft:"12%" }}>
        <div>
          <Row className="container">
           <CustomCol text="PENDING" backgroundColor="red" no="1" on/>
           <CustomCol text="EXECUTING" backgroundColor="yellow" no="2"/>
           <CustomCol text="EXECUTED" backgroundColor="orange" no="3"/>
           <CustomCol text="COMPLETED" backgroundColor="green" no="4"/>
          </Row>
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          <Card>
            <Card.Body>
              {" "}
              <Row>
                <Col style={{ textalign: "center" }} md={4}>
                  {" "}
                  <Card.Title>Executing Agri-Input Orders </Card.Title>{" "}
                </Col>
                <Col style={{ textalign: "center" }} md={4}>
                  <Card.Title> Batch By </Card.Title>
                </Col>
                <Col style={{ textalign: "center" }} md={3}>
                  <Card.Title> RFQ List </Card.Title>
                </Col>
                <Col style={{ textalign: "center" }} md={1}></Col>
              </Row>{" "}
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Accordion>
            {
              customCards.map((card,i) => <CustomCard inputOrder={card.inputOrder} imgUrl={card.imgUrl} name={card.name} buttonText={card.buttonText} key={i} ekey={i}/>)
            }
         
          </Accordion>
        </div>
      </Card>
    </Container>
  );
};

export default AgriInput;
