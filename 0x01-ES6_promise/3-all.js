import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([uploadPhoto(), createUser()]);
  return allPromises
    .then((values) => {
      const [body, names] = values;
      console.log(`${body.body} ${names.firstName} ${names.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
