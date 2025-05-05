import { collection, getDocs } from "firebase/firestore"
import { db } from "./base"

export const getMovies = async () => {
    const snaphot = await getDocs(collection(db, 'Film'));
    return snaphot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }));
};