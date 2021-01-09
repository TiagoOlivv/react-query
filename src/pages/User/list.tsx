import React from 'react';
import { useQuery } from 'react-query';
import Loader from 'react-loader-spinner';

import { GetAllUsers } from '../../services/methods';

import { Container } from './styles';

import User from './user';

const List: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery('users', GetAllUsers);

  if (isLoading) {
    return (
      <Container>
        <Loader
          type="ThreeDots"
          color="#000"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <h1>Error: {error}</h1>
      </Container>
    );
  }

  return (
    <Container>
      {data?.map(({ id, name }) => (
        <User id={id} name={name} key={id} />
      ))}
    </Container>
  );
};

export default List;
