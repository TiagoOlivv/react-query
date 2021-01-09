import api from './api';

export const GetAllUsers = async (): Promise<[]> => {
  const response = await api.get('/users');
  if (response.status !== 200) {
    throw new Error('Something went wrong.');
  }
  return response.data;
};

export const RemoveUser = async (id: string): Promise<boolean> => {
  const response = await api.delete(`/users/${id}`);
  if (response.status !== 200) {
    throw new Error('Error removing');
  }

  return true;
};
