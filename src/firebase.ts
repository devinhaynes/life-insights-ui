import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eudaimonia-3634c.firebaseapp.com",
  projectId: "eudaimonia-3634c",
  storageBucket: "eudaimonia-3634c.appspot.com",
  messagingSenderId: "942032393891",
  appId: "1:942032393891:web:3e8c248d8239b300a69116",
};

export const firebase = initializeApp(firebaseConfig);
