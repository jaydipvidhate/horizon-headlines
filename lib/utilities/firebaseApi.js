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

  const q = query(favoritesRef, where("title", "==", news.title));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    await addDoc(favoritesRef, news);
  }

  return { success: true, message: "Added to favorites" };
};

export const removeFromFav = async (userId, news) => {
  const favoritesRef = collection(db, `users/${userId}/favorites`);

  const q = query(favoritesRef, where("title", "==", news.title));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });

  return { success: true, message: "Removed from favorites" };
};

export const getAllFavoriteNews = async (userId) => {
  if (userId) {
    const favoritesRef = collection(db, `users/${userId}/favorites`);

    try {
      const querySnapshot = await getDocs(favoritesRef);

      const favoriteNews = [];
      querySnapshot.forEach((doc) => {
        const newsArticle = doc.data();
        favoriteNews.push(newsArticle);
      });

      return favoriteNews;
    } catch (error) {
      console.error("Error fetching favorite news:", error);
      throw error;
    }
  } else {
    console.warn("User not authenticated");
    return [];
  }
};
