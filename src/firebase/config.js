import firebase from "firebase/app"
import 'firebase/auth'

// Web app's Firebase configuration
const firebaseConfig = {
  //apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  apiKey: "AIzaSyC9tffL8lcN-ggS-k6lwsS25gCiqyonNX4",
  authDomain: "admin-template-react-next.firebaseapp.com",
  projectId: "admin-template-react-next",
  storageBucket: "admin-template-react-next.appspot.com",
  messagingSenderId: "469913116310",
  appId: "1:469913116310:web:7b94a7e80e204bdf9d6cb7"
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase