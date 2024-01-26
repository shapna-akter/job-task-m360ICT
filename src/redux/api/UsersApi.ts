/* eslint-disable @typescript-eslint/no-explicit-any */

import { getFromLocalStorage } from "../../utils/local-storage";
import { tagTypes } from "../common/tag-types";
import { baseApi } from "./baseApi";

const USERS_URL = "/api/users";

const token = getFromLocalStorage("token");
const headers = {
  Authorization: `${token}`
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get
    users: build.query({
      query: (arg: Record<string, any>) => ({
        url: USERS_URL,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.users],
    }),
    //Post
    addUser: build.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: "POST",
        body: data,
        headers: headers
      }),
      invalidatesTags: [tagTypes.users],
    }),
    // get single User by id
    user: build.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),

    // update single User by id
    updateUser: build.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
        headers: headers
      }),
      invalidatesTags: [tagTypes.users],
    }),
    // delete single User by id
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
        headers: headers
      }),
      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useUsersQuery,
  useUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = usersApi;
