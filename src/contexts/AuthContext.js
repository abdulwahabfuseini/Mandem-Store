import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, SetCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        SetCurrentUser(user);
        setLoading(false);
      },
      []
    );
    return unsubscribe;
  });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
