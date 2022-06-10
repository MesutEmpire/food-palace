import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { reactive, computed } from "vue";
import { useStore } from "vuex";

const firebaseConfig = {
  apiKey: "AIzaSyBvXNPwTjXHlUQdh3_yqYTqIPvkgV4eYoI",
  authDomain: "food-palace-4e993.firebaseapp.com",
  databaseURL: "https://food-palace-4e993-default-rtdb.firebaseio.com",
  projectId: "food-palace-4e993",
  storageBucket: "food-palace-4e993.appspot.com",
  messagingSenderId: "114942527941",
  appId: "1:114942527941:web:5aaec1bf1db0d7effd23ac",
  measurementId: "G-P6X4EFV01H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const storage = getStorage();

const path = reactive({
  value: "",
});

export const uploadImage = (file, imgName) => {
  const storageRef = ref(storage, `Products/${imgName}`);

  uploadBytes(storageRef, file).then((snapshot) => {
    getDownloadURL(ref(storage, `Products/${imgName}`)).then((url) => {
      path.value = url;
    });
  });
};

export const getPath = () => {
  return computed(() => path.value);
};
