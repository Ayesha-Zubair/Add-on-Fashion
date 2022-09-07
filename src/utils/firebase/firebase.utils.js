import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyByeLTnjMuiu0rHlopZGRh18LxaoPDQPL8",
    authDomain: "add-on-fashion-db.firebaseapp.com",
    projectId: "add-on-fashion-db",
    storageBucket: "add-on-fashion-db.appspot.com",
    messagingSenderId: "71520269509",
    appId: "1:71520269509:web:34c51d1d172a27363eecac"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo ={}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createAt,
            ...additionalInfo
        });    
    }catch (error){
        console.log('error creating the user', error.message);
    }
}
return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return  await createUserWithEmailAndPassword(auth, email, password);
};