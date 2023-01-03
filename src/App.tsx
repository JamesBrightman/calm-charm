import React from "react"
import {collection, query, orderBy, addDoc, serverTimestamp, deleteDoc, doc} from "firebase/firestore"
import {useCollectionData} from "react-firebase-hooks/firestore"
import { db } from "./firebase/firebaseInit"
import { entryConverter } from "./firebase/firestore/firestoreDataConverters"
import { entry } from "./firebase/firestore/types"

export const App = () => {

  const [entryData, loading, error, x] = useCollectionData<entry>(
    query(collection(db, "entries"), orderBy("createdAt", "asc")).withConverter(entryConverter)
  );

  console.log(x)

  const addEntryDocument = async() => {
    await addDoc(collection(db, "entries"), {createdAt: serverTimestamp(), rating: 4} as entry)
  }

  const deleteEntryDocument = async() => {
    await deleteDoc(doc(db, "entries", entryData![0].id ?? ""))
  }

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {loading && <div>LOADING</div>}
      
      <button onClick={addEntryDocument}>Add record</button>
      <button onClick={deleteEntryDocument}>Delete top record</button>

      {entryData?.map((ele: entry, idx: number) => {return <div className="flex flex-row items-center justify-center w-min gap-4 p-4 border border-2 border-black">
        <p>{idx + 1}</p>
        <p>{ele.id}</p>
        <p>{(ele.createdAt?.toDate().toString())}</p>
        <p>{ele.rating}</p>
        </div>})}
    </div>
  )
}