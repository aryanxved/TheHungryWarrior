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
    
    function signup(email, password) {
      return (
        auth.createUserWithEmailAndPassword(email, password)
      )
    }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
      })

      return unsubscribe
    }, [])

    
    const value = {
      currentUser,
      signup
    }
    
    return (
      <FirebaseContext.Provider value={value}>
      {children}
      </FirebaseContext.Provider>
    )
  }

export default FirebaseContext;
