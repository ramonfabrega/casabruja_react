import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  FIREBASE_ERROR,
  PASSWORD_RESET,
  UPDATE_PROFILE
} from './types';

export const login = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(res => {
      // console.log(res.user.uid);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.user.uid
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        err
      });
    });
};

export const fbAuth = () => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  let provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      console.log(res);
      if (res.additionalUserInfo.isNewUser) {
        const {
          first_name: firstName,
          last_name: lastName,
          email,
          birthday
        } = res.additionalUserInfo.profile;

        const newUser = {
          firstName,
          lastName,
          email,
          birthdate: new Date(birthday),
          level: 'Invitado',
          brewPoints: 0,
          order: null,
          orderHistory: []
        };

        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set(newUser)
          .catch(err => {
            dispatch({ type: LOGIN_ERROR, err });
          });
      }
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, err });
    });
};

export const logout = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(
      dispatch({
        type: LOGOUT_SUCCESS
      })
    )
    .catch(err => console.log(err));
};

export const resetPassword = email => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(
      dispatch({
        type: PASSWORD_RESET
      })
    )
    .catch(err => dispatch({ type: FIREBASE_ERROR, err }));
};

export const register = newUser => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  const { firstName, lastName, email, password } = newUser;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      return firestore
        .collection('users')
        .doc(res.user.uid)
        .set({
          firstName,
          lastName,
          email,
          level: 'Invitado',
          brewPoints: 0,
          order: null,
          orderHistory: []
        })
        .then(() => dispatch({ type: REGISTER_SUCCESS }))
        .catch(err => dispatch({ type: REGISTER_ERROR, err }));
    })
    .catch(err => dispatch({ type: REGISTER_ERROR, err }));
};

export const updateProfile = (profile, uid) => (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();

  const { isEmpty, isLoaded, portalShow, showPopup, ...rest } = profile;

  firestore
    .collection('users')
    .doc(uid)
    .set({ ...rest })
    .then(() => dispatch({ type: UPDATE_PROFILE }))
    .catch(err => dispatch({ type: FIREBASE_ERROR }));
};
