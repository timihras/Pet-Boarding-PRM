import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { AuthUserContext } from '../utils/Session';
import SignOutLink from './SignOutLink';

import { Heading1, Heading2, Heading3 } from './styles/headings';
import { Flex } from './styles/page';
import { Icon38, Icon24 } from './styles/icons';

import * as ROUTES from '../constants/routes';
import * as ROLES from '../constants/roles';

const QuickActions = styled.div`
  a {
    height: 16rem;
    flex: 1 0 40%;
    margin-top: ${props => props.theme.sizeS};
    margin-bottom: ${props => props.theme.sizeS};

    button {
      justify-content: space-between;
      background: white;
      border: 0;
      border-radius: ${props => props.theme.borderRadius};
      box-shadow: ${props => props.theme.boxShadow};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: ${props => props.theme.sizeM};
      text-align: left;
      width: 100%;
      min-width: 150px;

      h2 {
        margin: 0;
      }
    }
  }

  a:nth-child(even) {
    margin-left: ${props => props.theme.sizeS};
  }

  a:nth-child(odd) {
    margin-right: ${props => props.theme.sizeS};
  }
`;

const MainMenu = styled.div`
  a {
    height: 11rem;
    flex: 1 0 20%;
    margin: ${props => props.theme.sizeS};

    button {
      justify-content: space-between;
      background: white;
      border: 0;
      border-radius: ${props => props.theme.borderRadius};
      box-shadow: ${props => props.theme.boxShadow};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: ${props => props.theme.sizeM};
      text-align: left;
      width: 100%;

      h3 {
        margin: 0;
      }
    }
  }

  a:first-child {
    margin-left: 0;
  }
  a:last-child {
    margin-right: 0;
  }
`;

const Navigation = ({ toggleMenu }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} toggleMenu={toggleMenu} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser, toggleMenu }) => {
  return (
    <>
      <QuickActions>
        <Heading1>QUICK ACTIONS</Heading1>
        <Flex>
          <NavLink
            activeClassName="active"
            to={ROUTES.LIST}
            onClick={toggleMenu}
          >
            <button type="button">
              <Icon38 iconName="PublishCourse" color="#7DA7DB" />
              <Heading2>
                Customer &<br /> Pet List
              </Heading2>
            </button>
          </NavLink>

          <NavLink
            activeClassName="active"
            to={ROUTES.CALENDAR}
            onClick={toggleMenu}
          >
            <button type="button">
              <Icon38 iconName="Calendar" color="#DDA342" />
              <Heading2>
                Calendar &<br /> Event List
              </Heading2>
            </button>
          </NavLink>

          <NavLink
            activeClassName="active"
            to={ROUTES.ADD_WIZARD}
            onClick={toggleMenu}
          >
            <button type="button">
              <Icon38 iconName="EmojiTabSymbols" color="#D45983" />
              <Heading2>
                Add a new
                <br /> Pet Wizard
              </Heading2>
            </button>
          </NavLink>

          <NavLink
            activeClassName="active"
            to={ROUTES.ADD_EVENT}
            onClick={toggleMenu}
          >
            <button type="button">
              <Icon38 iconName="AddEvent" color="#615375" />
              <Heading2>
                Add a new
                <br /> Event
              </Heading2>
            </button>
          </NavLink>
        </Flex>
      </QuickActions>
      <MainMenu>
        <Heading1>MAIN MENU</Heading1>
        <Flex>
          <NavLink
            activeClassName="active"
            to={ROUTES.HOME}
            onClick={toggleMenu}
          >
            <button type="button">
              <Icon24 iconName="Home" color="#D45983" />
              <Heading3>Home</Heading3>
            </button>
          </NavLink>

          {authUser.roles.includes(ROLES.ADMIN) && (
            <NavLink
              activeClassName="active"
              to={ROUTES.SETTINGS}
              onClick={toggleMenu}
            >
              <button type="button">
                {/* <Icon icon="cog" iconSize={24} color="#DDA342" /> */}
                <Icon24 iconName="Settings" color="#DDA342" />
                <Heading3>Settings</Heading3>
              </button>
            </NavLink>
          )}

          <NavLink activeClassName="active" to="/" onClick={toggleMenu}>
            <SignOutLink />
          </NavLink>
        </Flex>
      </MainMenu>
    </>
  );
};

const NavigationNonAuth = () => {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" to={ROUTES.SIGN_IN}>
          Sign In
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
