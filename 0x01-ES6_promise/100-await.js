import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = {};
  try {
    const values = await Promise.all([uploadPhoto(), createUser()]);
    const [photo, user] = values;
    response.photo = photo;
    response.user = user;
  } catch (error) {
    response.photo = null;
    response.user = null;
  }
  return response;
}
