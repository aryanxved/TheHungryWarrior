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
      signup
    }
    
    return (
      <FirebaseContext.Provider value={value}>
      {!loading && children}
      </FirebaseContext.Provider>
    )
  }

export default FirebaseContext;
