import { firebase } from "./firebase";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth as AuthStore } from "./stores/auth";
import { navigate } from "svelte-routing";

const provider = new GoogleAuthProvider();

const auth = getAuth(firebase);

export const signIn = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      // Not sure if I need the token for anything
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;

      //   Write to store
      AuthStore.set(user);
    })
    .then(() => {
      navigate("/dashboard");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.customData.email;

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

export const signOut = () => {
  AuthStore.set(null);
  navigate("/");
};
