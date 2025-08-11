import apiClient from "../components/utils/api-client";

export function checkoutAPI(params) {
  return apiClient.post("/order/checkout");
}
