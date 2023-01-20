import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV4gevPUxHdcSEySDFrLx4Et78j-Y9JcI",
  authDomain: "app-ts-global.firebaseapp.com",
  projectId: "app-ts-global",
  storageBucket: "app-ts-global.appspot.com",
  messagingSenderId: "490270689731",
  appId: "1:490270689731:web:ccf9a1bb15acc599299576",
  measurementId: "G-1TCD01Q9Q9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;
