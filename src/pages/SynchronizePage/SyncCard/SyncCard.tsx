import { Button, Card } from "react-bootstrap";

export const SyncCard: React.FC = () => {
  return (
    <Card bg="secondary">
      <Card.Header as="h3">Synchronize</Card.Header>
      <Card.Body>
        <p>
          You have to synchronize your Battle.net account in order to browse
          your connected guilds and to register new ones.
          <br />
          <i>
            You can always synchronize at a later stage throught the settings
            tab
          </i>
        </p>
        <Card.Footer className="d-flex justify-content-between">
          <a href="https://eu.battle.net/oauth/authorize?region=eu&response_type=code&client_id=182681dbb88f41a28f5abe8e2782ab16&redirect_uri=http://localhost:3000/synchronize&scope=wow.profile">
            <Button variant="success">Synchronize</Button>
          </a>
          <Button variant="danger">Boss Page</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
