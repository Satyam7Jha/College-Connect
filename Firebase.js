
// import { initializeApp } from 'firebase/app';
// import { getStorage,ref } from "firebase/storage";

// // TODO: Replace the following with your app's Firebase project configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyArWoXy-2p-eFY4x2K5pBafjJTVDDRQPhI",
//   authDomain: "bustrack-27015.firebaseapp.com",
//   databaseURL: "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "bustrack-27015",
//   storageBucket: "bustrack-27015.appspot.com",
//   messagingSenderId: "394942805670",
//   appId: "1:394942805670:web:4ee531e6ffd7506bafa667"
// };

// export const firebaseApp = initializeApp(firebaseConfig);
// export const storage = getStorage(firebaseApp);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArWoXy-2p-eFY4x2K5pBafjJTVDDRQPhI",
  authDomain: "bustrack-27015.firebaseapp.com",
  databaseURL: "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bustrack-27015",
  storageBucket: "bustrack-27015.appspot.com",
  messagingSenderId: "394942805670",
  appId: "1:394942805670:web:4ee531e6ffd7506bafa667"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
