import React from 'react';

import Header from '../../components/Header';

const Create: React.FC = () => {
  return (
    <Header
      title="Create User"
      buttonTitle="Cancel"
      buttonClass="cancel"
      route="/"
    />
  );
};

export default Create;
