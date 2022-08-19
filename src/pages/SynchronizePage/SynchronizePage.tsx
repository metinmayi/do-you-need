import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LogoHeader } from '../../components/LogoHeader';
import { VALID_TOKEN_URL } from '../../config/config';
import { CharactersCard } from './CharactersCard';
import { SyncCard } from './SyncCard';

export const SynchronizePage: React.FC = () => {
  const redirect = useNavigate();
  const [validToken, setValidToken] = useState(false);

  useEffect(() => {
    async function checkValidToken() {
      const response = await fetch(VALID_TOKEN_URL, { credentials: 'include' });
      if (response.status === 401) {
        redirect('/');
        return;
      }
      if (response.status === 200) {
        setValidToken(true);
      } else {
        setValidToken(false);
      }
    }
    checkValidToken();
  }, []);

  return (
    <Container fluid>
      <LogoHeader />

      <Row className="justify-content-center mt-5">
        <Col xs={8} xl={4}>
          {validToken ? <CharactersCard /> : <SyncCard />}
        </Col>
      </Row>
    </Container>
  );
};
