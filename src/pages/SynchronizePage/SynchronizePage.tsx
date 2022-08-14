import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../authentication/isAuthenticated/isAuthenticated";
import { syncWithBlizzard } from "../../authentication/syncWithBlizzard/syncWithBlizzard";
import { LogoHeader } from "../../components/LogoHeader";
import { SyncCard } from "./SyncCard";

export const SynchronizePage: React.FC = () => {
  const redirect = useNavigate();

  useEffect(() => {
    async function checkAuthentication() {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        return redirect("/login");
      }
    }
    checkAuthentication();
  }, []);

  return (
    <Container fluid>
      <LogoHeader />

      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          <SyncCard />
        </Col>
      </Row>
    </Container>
  );
};
