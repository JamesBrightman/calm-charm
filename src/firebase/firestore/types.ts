import { Timestamp } from "firebase/firestore"

export type entry = {
    id: string,
    createdAt: Timestamp,
    rating: number
  }