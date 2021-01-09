import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import Loader from 'react-loader-spinner';

import { RemoveUser } from '../../services/methods';

interface UserProps {
  id: string;
  name: string;
}

const User: React.FC<UserProps> = ({ id, name }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(RemoveUser);

  const handleRemove = async (): Promise<void> => {
    await mutateAsync(id);
    queryClient.invalidateQueries('users');
  };

  return (
    <li>
      <strong>{name}</strong>
      <div>
        {/* <Link to={`/update-user/${id}`}> */}
        <Link to="/update-user">
          <button type="button">edit</button>
        </Link>
        <button type="button" className="cancel" onClick={handleRemove}>
          {isLoading ? (
            <Loader type="ThreeDots" color="#000" height={10} />
          ) : (
            'remove'
          )}
        </button>
      </div>
    </li>
  );
};

export default User;
