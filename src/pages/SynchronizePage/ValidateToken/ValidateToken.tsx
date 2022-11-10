import { Button, Card } from "react-bootstrap";
import { useLogout } from "../../../api/authentication/useLogout";
import { BLIZZARD_AUTH_URL } from "../../../config/config";

export const ValidateToken: React.FC = () => {
  const logout = useLogout();
  return (
    <Card bg="secondary">
      <Card.Header as="h4" style={{ color: "var(--DYNColor)" }}>
        Synchronize
      </Card.Header>
      <Card.Body>
        <p>
          You must synchronize your Battle.net account before you can connect to
          a guild.
        </p>
        <div className="d-flex justify-content-between">
          <a href={BLIZZARD_AUTH_URL}>
            <Button
              variant="success"
              style={{ fontWeight: "var(--buttonWeight)" }}>
              Synchronize
            </Button>
          </a>
          <Button
            variant="danger"
            style={{ fontWeight: "var(--buttonWeight)" }}
            onClick={logout}>
            Logout
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
