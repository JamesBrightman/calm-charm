import { AuthError } from 'firebase/auth';

export const SignupError = (err: AuthError) => {
  switch (err.code) {
    default:
      return 'Please try again';
  }
};
