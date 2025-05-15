import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export const submitApplication = async (formData) => {
  const response = await apiClient.post('/applications', formData);
  return response.data;
};