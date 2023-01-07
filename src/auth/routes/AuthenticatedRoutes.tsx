import { Navigate, Outlet } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebaseInit";

export const AuthenticatedRoute = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user, loading)

  return  (<>
  {loading ? <div>{"Loading"}</div> : user ? <Outlet/> : <Navigate to="/auth/login" />}
  </>
  )
};
