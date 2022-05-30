// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBvXNPwTjXHlUQdh3_yqYTqIPvkgV4eYoI",
//     authDomain: "food-palace-4e993.firebaseapp.com",
//     projectId: "food-palace-4e993",
//     storageBucket: "food-palace-4e993.appspot.com",
//     messagingSenderId: "114942527941",
//     appId: "1:114942527941:web:5aaec1bf1db0d7effd23ac",
//     measurementId: "G-P6X4EFV01H",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }