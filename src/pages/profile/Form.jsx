import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Form({
  editProfile,
  userInfos,
  editFirstName,
  editLastName,
  saveAction,
  cancelAction,
}) {
  return (
    <FormStyled
      onSubmit={saveAction}
      className={!editProfile ? "hidden" : "name-form"}
    >
      <div className="profile-form">
        <Input
          placeholder={userInfos.firstName}
          handleChange={(e) => editFirstName(e.target.value)}
        />
        <Input
          placeholder={userInfos.lastName}
          handleChange={(e) => editLastName(e.target.value)}
        />
      </div>
      <div className="profile-form">
        {/* <Button content={"Save"} handleClick={saveAction} /> */}
        <Button type="submit" content={"Save"} />
        <Button
          type="button"
          content={"Cancel"}
          className={"outline"}
          handleClick={cancelAction}
        />
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  .name-form {
    display: flex;
    flex-direction: column;
  }

  .profile-form {
    display: flex;
    gap: 1.5em;
    justify-content: center;

    & button {
      width: 7em;
    }
  }

  @media only screen and (max-width: ${theme.responsive.sm}) {
    .name-form {
      gap: 1em;
    }
    .profile-form {
      flex-direction: column;
      gap: 0;

      & button {
        width: 100%;
      }

      .outline {
        background-color: transparent;
        color: ${theme.colors.primary};
        border: none;
      }
    }
  }
`;
