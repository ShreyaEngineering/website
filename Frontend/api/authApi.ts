import api from "./axios";

export const loginApi = (email: string, password: string) => {
  return api.post("/auth/login", {
    email,
    password,
  });
};

export const logoutApi = () => {
  return api.post("/auth/logout");
};

export const meApi = () => {
  return api.get("/auth/me");
};