import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface HeaderPros {
  title: string;
  buttonTitle: string;
  buttonClass?: string;
  route: string;
}

const Header: React.FC<HeaderPros> = ({
  title,
  buttonTitle,
  buttonClass,
  route,
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Link to={route}>
        <button type="button" className={buttonClass}>
          {buttonTitle}
        </button>
      </Link>
    </Container>
  );
};

export default Header;
