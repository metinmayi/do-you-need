import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LogoHeader } from "../../components/LogoHeader";

export const SynchronizePage: React.FC = () => {
  return (
    <Container fluid>
      <LogoHeader />
      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          <Card bg="secondary">
            <Card.Header as="h3">Synchronize</Card.Header>
            <Card.Body>
              <p>
                You have to synchronize your Battle.net account in order to
                browse your connected guilds and to register new ones.
                <br />
                <i>
                  You can always synchronize at a later stage throught the
                  settings tab
                </i>
              </p>
              <Card.Footer className="d-flex justify-content-between">
                <Button variant="success">Synchronize</Button>
                <Button variant="danger">Boss Page</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
