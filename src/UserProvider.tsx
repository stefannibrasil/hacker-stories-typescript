import {
  createContext,
  ReactChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";

export type User = {
  id: number;
  name: string;
};

export type UserContextType = {
  user: User | null;
};

export const UserContext = createContext<UserContextType>({ user: null });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur").then((response) => {
      response.json().then((body: User) => {
        setUser(body);
      });
    });
  }, []);
  // const user: User = { id: 2, name: "Bob3" };
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
