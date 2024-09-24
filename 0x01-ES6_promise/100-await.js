import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = {};
  try {
    const values = await Promise.all([uploadPhoto(), createUser()]);
    response.photo = values[0];
    response.user = values[1];
  } catch (error) {
    response.photo = null;
    response.user = null;
  }
  return response;
}
