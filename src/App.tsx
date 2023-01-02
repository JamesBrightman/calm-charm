import React from "react"
import {firestore} from "./firebase-setup/firebase"
import {useCollectionData} from 'react-firebase-hooks/firestore'

export interface EntryObject {
  rating: number
}

export const App = () => {

  // const collection = firestore.collection('entries');
  // const query = collection.limit(25) as EntryObject[];

  const [data, loading, error] = useCollectionData<EntryObject>(
    firestore.collection('entries') as any
  );
  console.log(data, loading, error)

  return (
    <div>
      {data?.map((ele: EntryObject) => {return <div>{ele.rating}</div>})}
    </div>
  )
}