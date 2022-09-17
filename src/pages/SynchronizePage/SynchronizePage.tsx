import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "../../components/LogoHeader";
import { VALID_TOKEN_URL } from "../../config/config";
import { ValidateToken } from "./ValidateToken";
import { SynchronizeStepper } from "./SynchronizeStepper/";
import { RetrievedCharacter } from "../../models/RetrievedCharacter";
import { CharacterSelection } from "./CharacterSelection";
import { GuildInformation } from "./GuildInformation/GuildInformation";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { getCharacters } from "../../api/blizzard.ts/getCharacters";

export const SynchronizePage: React.FC = () => {
  const redirect = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [isValidToken, setIsValidToken] = useState(false);
  const [characters, setCharacters] = useState<RetrievedCharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<RetrievedCharacter>();
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
          setIsValidToken(true);
        } else {
          setStep(0);
          setIsValidToken(false);
        }
      } catch (error) {
        console.log(error);
        redirect("/login");
      }
    }
    checkValidToken();
  }, []);

  useEffect(() => {
    if (!isValidToken) {
      setStep(0);
      return;
    }

    async function getChars() {
      setIsLoading(true);
      const result = await getCharacters();
      setCharacters(result);
      setIsLoading(false);
    }

    getChars();
  }, [isValidToken]);

  return (
    <Container fluid>
      <LogoHeader />
      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          <SynchronizeStepper step={step} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          {isLoading && <LoadingSpinner text="Loading..." />}

          {!isLoading && !isValidToken && <ValidateToken />}

          {!isLoading &&
            isValidToken &&
            !selectedCharacter &&
            characters.length > 0 && (
              <CharacterSelection
                characters={characters}
                setSelectedCharacter={setSelectedCharacter}
              />
            )}

          {!isLoading && isValidToken && selectedCharacter && (
            <GuildInformation
              character={selectedCharacter}
              setCharacter={setSelectedCharacter}
              setStep={setStep}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
