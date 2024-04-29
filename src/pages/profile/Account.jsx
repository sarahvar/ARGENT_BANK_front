import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";

export default function Account({ title, number, balance, description }) {
  // Used to display a button on Accounts page only and not Transactions page
  const location = useLocation();
  const isCurrentPathAccounts = location.pathname === "/profile";

  return (
    <AccountStyled>
      <div>
        <h3 className="account-title">
          {title} ({number})
        </h3>
        <p className="account-amount">${balance}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      {isCurrentPathAccounts && (
        <div>
          <Button content="View transactions" />
        </div>
      )}
    </AccountStyled>
  );
}

const AccountStyled = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: ${theme.spacing.xl};
  border: 1px solid black;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  text-align: left;

  .account-title {
    margin: 0;
    padding: 0;
    font-size: ${theme.fonts.size.S0};
    font-weight: ${theme.fonts.weight.regular};
  }

  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: ${theme.fonts.weight.bold};

    &-description {
      margin: 0;
    }
  }

  @media (max-width: ${theme.responsive.sm}) {
    flex-direction: column;
    text-align: center;

    button {
      margin-top: 2em;
    }
  }
`;
