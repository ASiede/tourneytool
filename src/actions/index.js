import {API_BASE_URL} from '../config.js';
import {SubmissionError, focus} from 'redux-form';
// import jwtDecode from 'jwt-decode';
// import {saveAuthToken, clearAuthToken} from '../local-storage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { browserHistory } from 'react-router';
import {history} from '../components/App.js'





// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const fetchUsersSuccess = users => ({
//     type: FETCH_USERS_SUCCESS,
//     users
// })
// export const getUsers = () => dispatch => {
//     return fetch(`${API_BASE_URL}/users/`)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 // Convert ValidationErrors into SubmissionErrors for Redux Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         })
//         .then(users => {
//             dispatch(fetchUsersSuccess(users));
//         });
// };





// export const LOGOUT = "LOGOUT"
// export const logout = () => ({
// 	type: LOGOUT,
// });

// export const registerUser = user => dispatch => {
//     return fetch(`${API_BASE_URL}/users`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//     	.then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 // Convert ValidationErrors into SubmissionErrors for Redux Form
//                 dispatch(authError(err)); //trying something
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         });
// };







// export const INVITE_SUCCESS = 'INVITE_SUCCESS';
// export const inviteSuccess = () => ({
//     type: INVITE_SUCCESS,
// })
// export const invite = (email, inviterName, tripName) => dispatch => {
//     const emailBody = {
//         to: email,
//         inviter: inviterName,
//         trip: tripName
//     }
//     return fetch(`${API_BASE_URL}/send-email`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(emailBody)
//     })
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 // Convert ValidationErrors into SubmissionErrors for Redux Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         })
//         .then(() => {
//             dispatch(inviteSuccess())
//         });
// };

//LOGGIN IN
// export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
// export const setAuthToken = authToken => ({
//     type: SET_AUTH_TOKEN,
//     authToken
// });

// export const CLEAR_AUTH = 'CLEAR_AUTH';
// export const clearAuth = () => ({
//     type: CLEAR_AUTH
// });

// export const AUTH_REQUEST = 'AUTH_REQUEST';
// export const authRequest = () => ({
//     type: AUTH_REQUEST
// });

// export const AUTH_SUCCESS = 'AUTH_SUCCESS';
// export const authSuccess = currentUser => ({
//     type: AUTH_SUCCESS,
//     currentUser
// });

// export const AUTH_ERROR = 'AUTH_ERROR';
// export const authError = error => ({
//     type: AUTH_ERROR,
//     error
// });

// const normalizeResponseErrors = res => {
//     if (!res.ok) {
//         if (
//             res.headers.has('content-type') &&
//             res.headers.get('content-type').startsWith('application/json')
//         ) {
//             // It's a nice JSON error returned by us, so decode it
//             return res.json().then(err => Promise.reject(err));
//         }
//         // It's a less informative error returned by express
//         return Promise.reject({
//             code: res.status,
//             message: res.statusText
//         });
//     }
//     return res;
// };

// // Stores the auth token in state and localStorage, and decodes and stores
// // the user data stored in the token
// const storeAuthInfo = (authToken, dispatch) => {
//     const decodedToken = jwtDecode(authToken);
//     dispatch(setAuthToken(authToken));
//     dispatch(authSuccess(decodedToken.user));
//     saveAuthToken(authToken);
// };

// export const login = (username, password) => dispatch => {
//     dispatch(authRequest());
//     return (
//         fetch(`${API_BASE_URL}/auth/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         })
//             // Reject any requests which don't return a 200 status, creating
//             // errors which follow a consistent format
//             .then(res => normalizeResponseErrors(res))
//             .then(res => res.json())
//             .then(({authToken}) => storeAuthInfo(authToken, dispatch))
//             .catch(err => {
//                 const {code} = err;
//                 const message =
//                     code === 401
//                         ? 'Incorrect username or password'
//                         : 'Unable to login, please try again';
//                 dispatch(authError(err));
//                 // Could not authenticate, so return a SubmissionError for Redux
//                 // Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         _error: message
//                     })
//                 );
//             })
//     );
// };

// export const refreshAuthToken = () => (dispatch, getState) => {
//     dispatch(authRequest());
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/auth/refresh`, {
//         method: 'POST',
//         headers: {
//             // Provide our existing token as credentials to get a new one
//             Authorization: `Bearer ${authToken}`
//         }
//     })
//     	.then(res => normalizeResponseErrors(res))
//         // .then(res => (res))
//         .then(res => res.json())
//         .then(({authToken}) => storeAuthInfo(authToken, dispatch))
//         .catch(err => {
//             // We couldn't get a refresh token because our current credentials
//             // are invalid or expired, or something else went wrong, so clear
//             // them and sign us out
//             dispatch(authError(err));
//             dispatch(clearAuth());
//             clearAuthToken(authToken);
//         });
// };