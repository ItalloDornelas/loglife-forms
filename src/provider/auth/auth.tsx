import { SetStateAction, Dispatch } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { History } from "history";
import { toast } from "react-toastify";

interface Auth {
  id?: number;
  email: string;
  password: string;
}

interface AuthProviderData {
  auth: Auth[];
  setAuth: Dispatch<SetStateAction<Auth[]>>;
  login: (data: Auth, history: History) => void;
  logout: (history: History) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth[]>([] as Auth[]);

  const login = (data: Auth, history: History) => {
    localStorage.setItem("@token", data.email);
    setAuth([data]);
    history.push("/dashboard");
    toast.info("Bem vindo");
  };
  const logout = (history: History) => {
    localStorage.clear();
    history.push("/");
    const logout = localStorage.getItem("@token") || "[]";
    setAuth(JSON.parse(logout));
    toast.info("Volte sempre");
  };

  return (
    <AuthContext.Provider value={{ auth, login, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
