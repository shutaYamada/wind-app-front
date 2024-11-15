import axios from "axios";
import { API_ROUTES, apiClient } from "./commonApi";

export const getNotifications = async () => {
  const { data } = await apiClient.get(API_ROUTES.NOTIFICATION.LIST);
  return data;
};

export const readNotification = async (id: string) => {
  const { data } = await axios.post(
    `${API_ROUTES.NOTIFICATION.READ}/${id}/read`
  );
  return data;
};
