import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSidebarItem = {
  key: string;
  label: JSX.Element | string;
  children?: TSidebarItem[];
};

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TAuthState = {
  user: null | TUser;
  token: null | object;
};

export type TAuth = {
  id: string;
  password: string;
};
