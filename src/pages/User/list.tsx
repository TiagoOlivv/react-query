import React from 'react';
import { useQuery } from 'react-query';
import Loader from 'react-loader-spinner';

import { GetAllUsers } from '../../services/user';

import { Container } from './styles';

const List: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery('users', GetAllUsers);

  if (isLoading) {
    return (
      <Container>
        <Loader type="ThreeDots" color="#000" />
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
        <li key={id}>
          <strong>{name}</strong>
          <div>
            <button type="button">edit</button>
            <button type="button">remove</button>
          </div>
        </li>
      ))}
    </Container>
  );
};

export default List;
