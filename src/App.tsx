import React from "react"
import {collection, query} from "firebase/firestore"
import {useCollectionData} from "react-firebase-hooks/firestore"
import { db } from "./firebase-setup/firebase"

export interface EntryObject {
  rating: number
}

export const App = () => {

  const [data, loading, error] = useCollectionData<EntryObject>(
    query(collection(db, "entries"))
  );

  console.log(data, loading, error)

  return (
    <div>
      {(data as EntryObject[])?.map((ele: EntryObject) => {return <div>{ele.rating}</div>})}
    </div>
  )
}