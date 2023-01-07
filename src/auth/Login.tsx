import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { redirect, useNavigate } from "react-router";
import { auth } from "../firebase/firebaseInit";


export const Login = () => {
    const nav = useNavigate();

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((user) => {
            console.log(user)
            nav("/")
        })
      }

    return (<div className="flex flex-col gap-4 items-center justify-center">
      <button onClick={signIn}>Sign In</button>
      {/* <button onClick={() => {signOut(auth)}}>Sign Out</button> */}
    </div>)
}