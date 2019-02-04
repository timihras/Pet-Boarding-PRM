import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

class Firebase {
  constructor() {
    // Initialize the connection to the Firestore
    app.initializeApp(config)

    // Initialize the authentication module - firebase/auth
    this.auth = app.auth()

    // Initialize the database module - firebase/firestore
    this.db = app.firestore();
    this.db.settings({ timestampsInSnapshots: true });
  }

  // *** Auth API ***
  // Methods that handle authentication from firebase/auth

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  // Methods to handle users of the app

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');
}

export default Firebase