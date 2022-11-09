import { Col, Row, Container } from "react-bootstrap";
import social from "../assets/img/about.png";

const Hero = (params) => {
  return (
    <Container fluid c id="home">
      <Container>
        <Row>
          <Col className=" col-12 col-md-7 pt-5 d-flex justify-content-center align-items-center">
            <h2 className="hero-text text-sm-start py-sm-0 py-3 text-center ">
              Hello{" "}
              <span className="span-text text-info">there! &#x1F44B;</span>
              <br />
              I'm <span className="span-name">Peter Azubire,</span> an
              experienced <br />
              <span className="span-text text-info"> Full Stack </span>
              Developer. A tech enthusiast curious about new{" "}
              <span className="span-text text-info">technologies</span>
              <br />
              <br />
              <span className="span-text-greeth text-warning">
                Glad to meet you! &#x1F60E;
              </span>
            </h2>
          </Col>
          <Col className=" col-12 col-md-5 pt-5 hover-zoom">
            <img className="img-fluid" src={social} alt="hero-svg" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;
