import { Col, Container, Row } from "react-bootstrap";
import { LogoHeader } from "../../components/LogoHeader";
import { RegisterForm } from "./RegisterForm/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <Container fluid>
      <LogoHeader />
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4}>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export { RegisterPage };
