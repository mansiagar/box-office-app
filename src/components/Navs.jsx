import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
  {
    text: 'Recommed',
    to: '/Recommed',
  },
];
const Navs = () => {
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <NavLink to={item.to}>{item.text}</NavLink>
          </li>
        ))}
      </NavList>
    </div>
  );
};
export default Navs;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;
