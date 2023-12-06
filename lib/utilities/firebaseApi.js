import {
  addDoc,
  collection,
  getDocs,
  doc,
  query,
  where,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const addToFav = async (userId, news) => {
  const favoritesRef = collection(db, `users/${userId}/favorites`);

  // Check if the news article is already a favorite
  const q = query(favoritesRef, where("title", "==", news.title));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    // If not already a favorite, add it to favorites
    await addDoc(favoritesRef, news);
  }

  // You can return additional information if needed
  return { success: true, message: "Added to favorites" };
};

// Function to remove a news article from favorites
export const removeFromFav = async (userId, news) => {
  const favoritesRef = collection(db, `users/${userId}/favorites`);

  // Find the document with the same title (assuming title is the identifier)
  const q = query(favoritesRef, where("title", "==", news.title));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (doc) => {
    // Remove the document from favorites
    await deleteDoc(doc.ref);
  });

  // You can return additional information if needed
  return { success: true, message: "Removed from favorites" };
};
