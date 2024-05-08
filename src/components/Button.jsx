import styled from "styled-components";
import { theme } from "../theme";
import { useSelector } from "react-redux";

export default function Button({ content, handleClick, className }) {
  const editProfile = useSelector((state) => state.auth.editProfile); // Obtenez la valeur de editProfile depuis le state Redux

  return (
    <ButtonStyled
      className={className}
      onClick={handleClick}
      $editProfile={editProfile} // Utilisez la prop $editProfile pour déterminer la couleur
    >
      {content}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.fonts.size.S1};
  font-weight: ${theme.fonts.weight.bold};
  border-color: ${theme.colors.primary};
  background-color: ${(props) =>
    props.$editProfile ? theme.colors.secondary : theme.colors.primary}; // Changez la couleur en fonction de $editProfile
  color: ${theme.colors.white};
`;
