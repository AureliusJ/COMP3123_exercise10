import { jwtDecode } from 'jwt-decode';

export const login = (email, password) => {
  // Simulated JWT Token
  const fakeToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  const user = jwtDecode(fakeToken); // Decode the token
  return { user, token: fakeToken };
};
