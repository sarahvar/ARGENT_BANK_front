import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";
import Account from "./Account";
import Form from "./Form";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LoadingStatus,
  fetchUserInfos,
  updateUserInfos,
} from "../../core/redux/authSlice";
import { accounts } from "../../data/accounts";

export default function Profile() {
  const [editProfile, setEditProfile] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, token, userInfos } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    } else {
      dispatch(fetchUserInfos(token));
    }
  }, [token, navigate, dispatch]);

  const toggleUpdateProfile = (event) => {
    event.preventDefault();
    setEditProfile(!editProfile);
  };

  const updateUserName = async (event) => {
    event.preventDefault();
    dispatch(updateUserInfos({ token, firstName, lastName }));
    setEditProfile(!editProfile);
  };

  return (
    <AccountsStyled>
      {loading !== LoadingStatus.Success ? (
        <Loader />
      ) : (
        <>
          <header>
            <h1>
              Welcome back
              <br /> {userInfos.firstName} {userInfos.lastName}
            </h1>
            <Form
              editProfile={editProfile}
              userInfos={userInfos}
              editFirstName={setFirstName}
              editLastName={setLastName}
              saveAction={updateUserName}
              cancelAction={toggleUpdateProfile}
            />
            <Button
              className={editProfile ? "hidden" : ""}
              content="Edit name"
              handleClick={toggleUpdateProfile}
            />
          </header>
          <div>
            {accounts.map(
              ({
                id,
                accountType,
                accountNumber,
                accountBalance,
                accountInfo,
              }) => {
                return (
                  <Account
                    key={id}
                    number={accountNumber}
                    title={accountType}
                    balance={accountBalance}
                    description={accountInfo}
                  />
                );
              }
            )}
          </div>
        </>
      )}
    </AccountsStyled>
  );
}

const AccountsStyled = styled.main`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundDark};
  min-height: 80vh;

  > :first-child {
    display: grid;
    place-items: center;
  }

  header {
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing.xl};

    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }

    .hidden {
      display: none;
    }
  }
`;
