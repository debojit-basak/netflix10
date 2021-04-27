import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAk3CkQveNxAAZy1GMk3KPJ5Bn3cMYkaiM",
  authDomain: "netflix10-9c1c8.firebaseapp.com",
  projectId: "netflix10-9c1c8",
  storageBucket: "netflix10-9c1c8.appspot.com",
  messagingSenderId: "37968660193",
  appId: "1:37968660193:web:3b6b341dc3f51f102a19a0"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
