import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../theme";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) return navigate("/profile");
  }, [navigate, token]);

  return (
    <>
      <SigninStyled>
        <Form icon={<FaUserCircle className="form__icon" />} title={"Sign in"} />
      </SigninStyled>
    </>
  );
}

const SigninStyled = styled.main`
  display: flex; /* Utiliser flexbox pour occuper toute la hauteur */
  flex-direction: column; /* Aligner les enfants verticalement */
  justify-content: center; /* Centrer verticalement le contenu */
  align-items: center; /* Centrer horizontalement le contenu */
  background-color: ${theme.colors.backgroundDark};
  min-height: 100vh; /* Utiliser la hauteur de l'écran */
  padding: ${theme.spacing.md}; /* Ajouter un peu de marge */

  /* Style spécifique à votre formulaire peut être ajouté ici */
  
  .form__icon {
    font-size: 4rem; /* Ajuster la taille de l'icône */
  }
`;
