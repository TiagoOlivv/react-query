import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderPros {
  title: string;
  button?: string;
  route: string;
}

const Header: React.FC<HeaderPros> = ({ title, button, route }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Link to={route}>
        <button type="button">{button}</button>
      </Link>
    </Container>
  );
};

export default Header;
