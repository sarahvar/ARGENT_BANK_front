import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../theme";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) navigate("/profile");
  }, [navigate, token]);

  return (
    <SigninStyled>
      <Form
        icon={<FaUserCircle className="form__icon" />}
        title="Sign in"
        setError={setError}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SigninStyled>
  );
}

const SigninStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.backgroundDark};
  min-height: 100vh;
  padding: ${theme.spacing.md};

  .form__icon {
    font-size: 4rem;
  }
`;

const ErrorMessage = styled.p`
  color: red; /* Utiliser la couleur rouge pour le message d'erreur */
  margin-top: ${theme.spacing.sm};
`;

