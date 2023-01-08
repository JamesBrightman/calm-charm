import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebaseInit";
import {IonItem, IonLabel, IonInput} from "@ionic/react";

export const Login = () => {
    const nav = useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((user) => {
            console.log(user)
            nav("/")
        })
      }

      const signInWithEmailPass = () => {
        const provider = new EmailAuthProvider();
        signInWithEmailAndPassword(auth, "email", "password").then((user) => {
            console.log(user)
            nav("/")
        })
      }

    return (<div className="flex flex-col gap-4 items-center justify-center">
          <IonItem>
        <IonLabel className="bg-red-500">Input with placeholder</IonLabel>
        <IonInput placeholder="Enter company name"></IonInput>
      </IonItem>
      <button onClick={signInWithGoogle}>Sign In</button>
      {/* <button onClick={() => {signOut(auth)}}>Sign Out</button> */}
    </div>)
}