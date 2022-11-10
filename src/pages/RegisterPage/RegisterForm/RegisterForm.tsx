import { FormEvent, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/authentication/register";
import { FormComponent } from "../../../components/Form/FormComponent";
import { ModalComponent } from "../../../components/ModalComponent";
import { ENVIRONMENT } from "../../../config/config";
import { registrationModal } from "../RegistrationModal/RegistrationModal";
import { InvalidAlert } from "./InvalidAlert/InvalidAlert";
import { TooltipOverlay } from "./TooltipModal/TooltipOverlay";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
const PWD_REGEX =
  ENVIRONMENT === "production"
    ? /.(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@"#$%]).{8,24}$/
    : /./;

export const RegisterForm = () => {
  const redirect = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const result = await registerUser(validMatch, validName, user, email, pwd);

    console.log(result);

    if (result?.status === 200) {
      return setLoggedIn(true);
    }

    setError(result?.message);
    btnRef.current?.blur();
  };

  const userRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    const match = pwd === matchPwd;
    setValidPwd(result);
    setValidMatch(match);
  }, [pwd, matchPwd]);

  return (
    <>
      {loggedIn && (
        <ModalComponent
          Component={registrationModal}
          title="Registration Successful"
          handleClick={() => redirect("/login")}
        />
      )}
      <FormComponent className="sigzag" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            style={{ border: validName || !user ? "" : "3px solid red" }}
            aria-invalid={validName ? "false" : true}
            aria-describedby="uidnote"
            autoComplete="off"
            required
            id="username"
            ref={userRef}
            value={user}
            onChange={(e) => setUser(e.target.value)}></Form.Control>
          {!validName && user ? (
            <InvalidAlert type="name" id="uidnote" />
          ) : null}
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            style={{ border: validPwd || !pwd ? "" : "3px solid red" }}
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={!validPwd ? "true" : "false"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}></Form.Control>
          {!validPwd && pwd && pwdFocus ? (
            <InvalidAlert id="pwdnote" type="password" />
          ) : null}
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label htmlFor="repeatPassword">Repeat Password</Form.Label>
          <Form.Control
            style={{ border: validMatch ? "" : "3px solid red" }}
            id="repeatPassword"
            type="password"
            required
            onChange={(e) => setMatchPwd(e.target.value)}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="repeatPwdNote"></Form.Control>
          {!validMatch && pwd ? (
            <InvalidAlert id="pwdnote" type="repeat" />
          ) : null}
        </Form.Group>
        <Form.Group className="d-flex gap-1 mb-2 mt-3">
          {!validName || !validPwd || !validMatch ? (
            <TooltipOverlay />
          ) : (
            <Button
              variant="success"
              className="border"
              type="submit"
              ref={btnRef}>
              Register
            </Button>
          )}
        </Form.Group>
        <Form.Text style={{ color: "red" }}>
          {<p>{error}</p> ? error : null}
        </Form.Text>
        <p>
          Already a member? Click <Link to="/login">here</Link> to login.
        </p>
      </FormComponent>
    </>
  );
};
