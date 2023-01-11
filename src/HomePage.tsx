import React from "react"
import {collection, query, orderBy, addDoc, serverTimestamp, deleteDoc, doc} from "firebase/firestore"
import {useCollectionData} from "react-firebase-hooks/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import { db, auth } from "./firebase/firebaseInit"
import { entryConverter } from "./firebase/firestore/firestoreDataConverters"
import { entry } from "./firebase/firestore/types"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

export const HomePage = () => {

  const [entryData, loading, error] = useCollectionData<entry>(
    query(collection(db, "entries"), orderBy("createdAt", "asc")).withConverter(entryConverter)
  );

  const [user] = useAuthState(auth);
  console.log(user)

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }

  const addEntryDocument = async() => {
    await addDoc(collection(db, "entries"), {createdAt: serverTimestamp(), rating: (Math.floor(Math.random()*10))} as entry)
  }

  const deleteEntryDocument = async() => {
    //Delete first element in collection
    await deleteDoc(doc(db, "entries", entryData![0].id!))
  }

  return (
     <div className="w-full flex flex-col items-center gap-2">
      {loading && <div>LOADING</div>}

      <button onClick={signIn}>Sign In</button>
      <button onClick={() => {signOut(auth)}}>Sign Out</button>

      <button onClick={addEntryDocument}>Add record</button>
      <button onClick={deleteEntryDocument}>Delete top record</button>

      {user && entryData?.map((ele: entry, idx: number) => {return <div key={ele.id} className="flex flex-row items-center justify-center w-min gap-4 p-4 border border-2 border-black">
        <p>{ele.id}</p>
        <p>{ele.rating}</p>
        </div>})}
    </div>
  )
}