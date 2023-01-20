import { AuthError, AuthErrorCodes } from "firebase/auth";

export const loginError = (err: AuthError) => {
  switch (err.code) {
    case AuthErrorCodes.INVALID_PASSWORD:
      return "Incorrect email or password.";
    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
      return "Too many failed requests. Please try again later.";
    case AuthErrorCodes.USER_DELETED:
      return "Account not found. Retry, or sign up.";
    default:
      return "Please try again";
  }
};
