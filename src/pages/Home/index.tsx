import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import { ListUser } from '../User';

const Home: React.FC = () => {
  return (
    <Container>
      <Header
        title="React Query"
        buttonTitle="Create User"
        route="/create-user"
      />
      <ListUser />
    </Container>
  );
};

export default Home;
