import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

const Create: React.FC = () => {
  return (
    <Container>
      <Header title="Create User" button="Unsubscribe" route="/" />
    </Container>
  );
};

export default Create;
