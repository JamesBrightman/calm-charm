import {
  FirestoreDataConverter,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore';
import { entry } from './types';

export const entryConverter: FirestoreDataConverter<entry> = {
  toFirestore: (entryData: entry): DocumentData => {
    return entryData;
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): entry => {
    const { rating, createdAt } = snapshot.data(options);
    return { rating, createdAt, id: snapshot.id };
  },
};
