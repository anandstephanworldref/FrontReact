import React from 'react'
import {
    Card,
    Row,
    Col,
    Accordion,
    useAccordionButton,
    Table,
    Image,
    Button,
  } from "react-bootstrap";
  import { IoIosArrowDropdown } from "react-icons/io";

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );
  
    return (
      // <button >
      <Card.Title onClick={decoratedOnClick}>
        {children} <IoIosArrowDropdown />
      </Card.Title>
      // </button>
    );
  }

const CustomCard = ({ekey,inputOrder,name,buttonText,imgUrl}) =>{

    return (
        <Card>
        <Card.Header>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col style={{ textalign: "center" }} md={4}>
              {" "}
              <CustomToggle eventKey={ekey}>
                {inputOrder}{" "}
              </CustomToggle>
            </Col>
            <Col style={{ textalign: "center" }} md={4}>
              <Card.Title>
                <span>
                  <Image
                    roundedCircle
                    width={50}
                    src={imgUrl}
                  />
                  <b>{name}</b>
                </span>{" "}
              </Card.Title>
            </Col>
            <Col style={{ textalign: "center" }} md={3}>
              <Card.Title>
                {" "}
                <Button variant="success"> {buttonText}</Button>{" "}
              </Card.Title>
            </Col>
            <Col style={{ textalign: "center" }} md={1}></Col>
          </Row>
        </Card.Header>
        <Accordion.Collapse eventKey={ekey}>
          <Card.Body>
            <Table bordered textalign="center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Agri-Input Category</th>
                  <th>Product image</th>
                  <th>Product Description</th>
                  <th>Order Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>pesticide</td>
                  <td>
                    <Image
                      thumbnail
                      roundedCircle
                      width={80}
                      src="https://4.imimg.com/data4/CB/DA/ANDROID-26789309/product-500x500.jpeg"
                    />
                  </td>
                  <td>Xtra Clouter 1L</td>
                  <td>8</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
}

export default CustomCard