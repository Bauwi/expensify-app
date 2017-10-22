import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (socialLogin) => {
  return () => {
    const provider = socialLogin === 'google' ? googleAuthProvider : githubAuthProvider
    console.log(provider)
    return firebase.auth().signInWithPopup(provider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};