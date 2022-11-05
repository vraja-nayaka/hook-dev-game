import {
  doc,
  collection,
  DocumentReference,
  getFirestore,
  setDoc,
  addDoc,
  CollectionReference,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { CurrentUser } from "./useCurrentUser";
import { idConverter } from "./utils";

export type UserRoles = "admin";

export type UserDoc = {
  id?: string;
  name?: string;
  email?: string;
};

type Params = {
  currentUser: CurrentUser;
};

export const useUser = ({ currentUser }: Params) => {
  const db = getFirestore();
  const { user, profile } = currentUser;
  const userRef = (
    user ? doc(db, "users", user?.uid).withConverter(idConverter) : null
  ) as DocumentReference<UserDoc> | null;
  const usersRef = (
    user ? collection(db, "users").withConverter(idConverter) : null
  ) as CollectionReference<UserDoc> | null;

  const setProfile = async (newProfile: UserDoc) => {
    if (user && userRef) {
      await setDoc(userRef, { ...profile, ...newProfile });
    }
  };

  const deleteProfile = async (id?: string) => {
    if (id) {
      const operationRef = doc(db, "users", id);
      await deleteDoc(operationRef);
    }
  };

  return {
    setProfile,
    deleteProfile,
  };
};
