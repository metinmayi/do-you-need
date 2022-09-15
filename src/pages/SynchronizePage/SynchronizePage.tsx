import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Stepper } from "react-form-stepper";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../../components/LogoHeader";
import { VALID_TOKEN_URL } from "../../config/config";
import { SelectionCard } from "./SelectionCard";
import { SyncCard } from "./SyncCard";

export const SynchronizePage: React.FC = () => {
  const redirect = useNavigate();
  const [validToken, setValidToken] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    async function checkValidToken() {
      try {
        const response = await fetch(VALID_TOKEN_URL, {
          credentials: "include",
        });
        if (response.status === 401) return redirect("/login");
        if (response.status === 200) {
          setStep(1);
          setValidToken(true);
        } else {
          setStep(0);
          setValidToken(false);
        }
      } catch (error) {
        console.log(error);
        redirect("/login");
      }
    }
    checkValidToken();
  }, []);

  return (
    <Container fluid>
      <LogoHeader />
      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          <Stepper
            style={{ paddingBottom: "0" }}
            steps={[
              { label: "Synchronize" },
              { label: "Select Character" },
              { label: "Guild Status" },
              { label: "Finish Process" },
            ]}
            activeStep={step}
            connectorStateColors={true}
            styleConfig={{
              activeBgColor: "#e49f24",
              completedBgColor: "#e49f24",
              inactiveBgColor: "gray",
              activeTextColor: "white",
              completedTextColor: "white",
              inactiveTextColor: "white",
              size: "2em",
              labelFontSize: "0.875rem",
              circleFontSize: "1rem",
              borderRadius: "50%",
              fontWeight: "500",
            }}
            connectorStyleConfig={{
              activeColor: "#e49f24",
              disabledColor: "gray",
              completedColor: "#e49f24",
              style: "solid",
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          {validToken ? <SelectionCard setStep={setStep} /> : <SyncCard />}
        </Col>
      </Row>
    </Container>
  );
};
