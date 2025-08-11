import React from "react";
import apiClient from "../components/utils/api-client";
import { useQuery } from "@tanstack/react-query";

const useData = (
  endpoint,
  customConfig = {},
  queryKey,
  staleTime = 300_000
) => {
  const fetchFunction = () =>
    apiClient.get(endpoint, customConfig).then((res) => res.data);

  return useQuery({
    queryKey: queryKey,
    queryFn: fetchFunction, //function is passed as reference not a function call
    staleTime: staleTime, //300_000 means 300k milliseconds meaning 5 minutes
  });
};

export default useData;
