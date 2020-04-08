import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
let firebaseConfig = {
	apiKey: "AIzaSyD4oqWK_Ax9d0c7oLroM2SLoXhHuRC2_ZU",
	authDomain: "univers-127de.firebaseapp.com",
	databaseURL: "https://univers-127de.firebaseio.com",
	projectId: "univers-127de",
	storageBucket: "univers-127de.appspot.com",
	messagingSenderId: "278011386091",
	appId: "1:278011386091:web:ef7afc6e5cbfe8f7a246ae",
	measurementId: "G-JZHBMSXDPK"
};
firebase.initializeApp(firebaseConfig);


// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date issue fix according to firebase
const settings = {
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection('users');
// const postsCollection = db.collection('posts')

export default {
	db,
	auth,
	currentUser,
	usersCollection
}