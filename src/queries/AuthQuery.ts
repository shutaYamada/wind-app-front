import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as api from "../api/authApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "../types/user";

export const useGetUser = () => {
  return useQuery("user", () => api.getUser());
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(api.login, {
    onSuccess: (user) => {
      queryClient.invalidateQueries("user");
      toast.success("ログインしました");
    },
    onError: () => {
      toast.error("ログインに失敗しました");
    },
  });
};

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const loginMutation = useLogin();

  return useMutation(api.signUp, {
    onSuccess: async (user, variables) => {
      await loginMutation.mutateAsync({
        email: variables.email,
        password: variables.password,
      });
      queryClient.invalidateQueries("user");
      toast.success("アカウントを作成しました");
      navigate("/departure");
    },
    onError: () => {
      toast.error("アカウント作成に失敗しました");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation(api.logout, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      toast.success("ログアウトしました");
    },
    onError: () => {
      toast.error("ログアウトに失敗しました");
    },
  });
};
