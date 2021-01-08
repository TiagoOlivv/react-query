import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <Container>
      <Header
        title="React Query"
        buttonTitle="Create User"
        route="/create-user"
      />
    </Container>
  );
};

export default Home;
