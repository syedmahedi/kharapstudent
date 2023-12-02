import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./about.css";
import Shovon from "../../assests/images/shovon.jpg";
import Farhan from "../../assests/images/farhan.jpg";
import Mahedi from "../../assests/images/mahedi.png";
import Abrar from "../../assests/images/abrar.jpg";
import Kundu from "../../assests/images/kundu.jpg";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <h2 className="mb-4">Bootcamp Mentors</h2>
        <div className="about__content">
          <Row className="justify-content-center">
            {/* Profile 1 */}
            <Col xs="12" md="2">
              <Card className="rounded-card">
                <CardImg
                  top
                  width="100%"
                  src={Shovon}
                  alt="Profile 1"
                  className="rounded-img"
                />
                <CardBody>
                  <CardTitle>Sadman Sadik</CardTitle>
                  <CardText>KUET<br />Instructor 10 Minute School</CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Profile 2 */}
            <Col xs="12" md="2">
              <Card className="rounded-card">
                <CardImg
                  top
                  width="100%"
                  src={Mahedi}
                  alt="Profile 3"
                  className="rounded-img"
                />
                <CardBody>
                  <CardTitle>Syed Mahedi Hasen</CardTitle>
                  <CardText>RUET</CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Profile 3 */}
            <Col xs="12" md="2">
              <Card className="rounded-card">
                <CardImg
                  top
                  width="100%"
                  src={Farhan}
                  alt="Profile 2"
                  className="rounded-img"
                />
                <CardBody>
                  <CardTitle>Farhan Tanjim</CardTitle>
                  <CardText>BUET<br />Teacher, Udvash</CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Profile 4 */}
            <Col xs="12" md="2">
              <Card className="rounded-card">
                <CardImg
                  top
                  width="100%"
                  src={Kundu}
                  alt="Profile 2"
                  className="rounded-img"
                />
                <CardBody>
                  <CardTitle>Soudipto Kundu</CardTitle>
                  <CardText>BUET</CardText>
                </CardBody>
              </Card>
            </Col>

            {/* Profile 5 */}
            <Col xs="12" md="2">
              <Card className="rounded-card">
                <CardImg
                  top
                  width="100%"
                  src={Abrar}
                  alt="Profile 2"
                  className="rounded-img"
                />
                <CardBody>
                  <CardTitle>Md. Rashid Abrar</CardTitle>
                  <CardText>RUET<br />Udvash</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
