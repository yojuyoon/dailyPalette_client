import apiClient from "./apiClient";

export const signUpByEmail = ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) =>
  apiClient.post<AuthResponse>("/auth/signup", {
    email,
    name,
    password,
  });

export type AuthResponse = {
  access_token: string;
  email: string;
  name: string;
};

export const loginByEmail = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  apiClient.post<AuthResponse>(
    "/auth/login",
    {
      email,
      password,
    },
    { headers: { withCredentials: true } }
  );
