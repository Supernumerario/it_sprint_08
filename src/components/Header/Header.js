import Link from '../Link/Link';
import logo from './swlogo.png';
// import signin from './sign-in.svg';
import styled from "styled-components";



const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1340px;
`;

const Logo = styled.div`
  grid-column: 5 / span 4;
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  max-width: 200px;
  margin: 32px;
`;

const NavList = styled.ul`
  grid-column: 2 / span 10;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link) `
  display: block;
  font-weight: 700;
  padding: 16px 32px;
  &:link { color: #aaa; text-decoration: none; }
  &:visited { color: #aaa; }
  &:hover { color: #ccc; }
  &:active { color: #fff; }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid #333;
`;



export default function Base() {

  return (
    <>
      <Header className="header">
        <Logo>
          <Link to="/">
            <LogoImg src={logo} className="logo-img" alt="Star Wars logo"></LogoImg>
          </Link>
        </Logo>
        <NavList>
          <li><StyledLink to="/">HOME</StyledLink></li>
          <li><StyledLink to="/starships">STARSHIPS</StyledLink></li>
          <li><StyledLink to="/signin">SIGN IN</StyledLink></li>
          <li><StyledLink to="/login">LOG IN</StyledLink></li>
        </NavList>
      </Header>
      <Separator></Separator>
    </>
  );

}