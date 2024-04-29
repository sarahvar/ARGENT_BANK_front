import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import { theme } from "../../theme";
import { userLogin } from "../../core/redux/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form({ icon, title }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postLoginCredentials = (event) => {
    event.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <FormStyled
      onSubmit={postLoginCredentials}
      className="signin__form"
      method="POST"
    >
      {icon && icon}
      {title && <h1>{title}</h1>}
      <Input
        type={"email"}
        label={"Email"}
        handleChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        value={password}
        type={"password"}
        label={"Password"}
        handleChange={(e) => setPassword(e.target.value)}
        required
      />
      <Input
        label={"Remember me"}
        type={"checkbox"}
        id={"remember-me"}
        className={"input-remember"}
      />
      <Button content={"Sign in"} className={"sign-in__button"} />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  text-align: center;

  .input-remember {
    flex-direction: row-reverse;
    justify-content: start;
    font-weight: ${theme.fonts.weight.medium};

    & label {
      margin-left: ${theme.spacing.xxs};
    }
  }

  .sign-in__button {
    width: 100%;
    margin-top: ${theme.spacing.md};
  }
`;
