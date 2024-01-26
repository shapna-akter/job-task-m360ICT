import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../common/tag-types";


export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in",
  }),
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});

