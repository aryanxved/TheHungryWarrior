import React, { Children, useContext, useState, useEffect } from 'react';
import { auth } from './firebase'

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props =>
  (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

  export function useAuth(){
    return useContext(FirebaseContext)
  }

  export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function signup(email, password) {
      return (
        auth.createUserWithEmailAndPassword(email, password)
      )
    }

    function signin(email, password) {
      return (
        auth.signInWithEmailAndPassword(email, password)
      )
    }

    function signout(email, password) {
      return (
        auth.signOut()
      )
    }

    function forgotPassword(email) {
      return (
        auth.sendPasswordResetEmail(email)
      )
    }

    function updateEmail(email) {
      return (
        currentUser.updateEmail(email)
      )
    }

    function updatePassword(password) {
      return (
        currentUser.updatePassword(password)
      )
    }



    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setLoading(false)
        setCurrentUser(user)
      })

      return unsubscribe
    }, [])

    
    const value = {
      currentUser,
      signin,
      signout,
      signup,
      forgotPassword,
      updateEmail,
      updatePassword
    }
    
    return (
      <FirebaseContext.Provider value={value}>
      {!loading && children}
      </FirebaseContext.Provider>
    )
  }

export default FirebaseContext;
