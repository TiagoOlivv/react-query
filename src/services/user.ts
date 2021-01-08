import axios from 'axios';

export const GetAllUsers = async (): Promise<[]> => {
  const response = await axios.get('http://localhost:3000/users');
  if (response.status !== 200) {
    throw new Error('Something went wrong.');
  }
  return response.data;
};
