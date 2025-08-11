import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../components/utils/api-client";

const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }) =>
      apiClient.patch(`/cart/remove/${id}`).then((res) => res.data),
    //patch is used since we are only updating a part of our data
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};
export default useRemoveFromCart;
