import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfos, logout } from "../core/redux/authSlice";
import { useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, userInfos } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfos) {
      dispatch(fetchUserInfos(token));
    }
  }, [dispatch, token, userInfos]);

  const signOut = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };

  return (
    <NavbarStyled>
      <nav>
        <Link to ="/">
          <img src={logo} alt="logo" />
        </Link>

        {token && userInfos ? (
          <div className="sign-out__nav-item">
            <Link to={"/profile"} className="sign-in__nav-item">
              <MdAccountCircle />
              {userInfos ? (
                <span className="responsive-labels">{userInfos.firstName}</span>
              ) : (
                "Placeholder"
              )}
            </Link>
            <Link onClick={signOut} className="sign-in__nav-item">
              <PiSignOutBold />
              <span className="responsive-labels">Sign out</span>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="sign-in__nav-item">
            <FaUserCircle />
            Sign in
          </Link>
        )}
      </nav>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.header`
  padding: 0em ${theme.spacing.xl};
  border-bottom: 1px solid #eee;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      padding-block: 0.4em;
      max-width: 200px;
    }

    a {
      display: grid;
      text-decoration: none;
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.primaryFontColor};

      &:hover {
        text-decoration: underline;
      }
    }

    & .sign-in__nav-item,
    .sign-out__nav-item {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xs};
    }

    & .sign-out__nav-item {
      gap: 1.5em;
    }
  }

  @media only screen and (max-width: ${theme.responsive.sm}) {
    .responsive-labels {
      display: none;
    }
  }

  @media only screen and (max-width: ${theme.responsive.sm}) {
    padding: 0em ${theme.spacing.md};

    nav {
      font-size: ${theme.fonts.size.S1};
      & img {
        max-width: 180px;
      }
    }
  }
`;
