import { Navigate, Outlet } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebaseInit";

export const AuthenticatedRoute = () => {
  const [user] = useAuthState(auth);
  console.log(user)

  if (!user) return <Navigate to="/auth/login" />;
  return <Outlet/>;
};
