import React from 'react';
import { USER_DATA } from '../services/storageService/storageKeys';
import { storageService } from "../services/storageService/storageService";


//TODO: store token in an httpOnly secure cookie (?)

const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {

  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    let user = storageService.getData(USER_DATA);
    if (user) login(user);
  }, []);

  const login = (user) => {
    setUser(user.user);
    setToken(user.token);
    storageService.setData(USER_DATA, user);
  }

  const logout = () => {
    storageService.clearAllData();
    setUser(null);
    setToken(null);
  }

  const updateUserData = (newData) => {
    const newUser = {...user, ...newData};
    storageService.setData(USER_DATA, {token: token, user: newUser});
    setUser(newUser)
  }

  return(
    <AuthContext.Provider value={{ token, user, login, logout, updateUserData }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return React.useContext(AuthContext);
}