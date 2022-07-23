import { ServerResponse, IUser, IRepo, IOwner } from './../../models/models';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse) => response.items
    }),
    getUserRepositories: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`
      })
    })
  })
})

export const {useSearchUsersQuery, useLazyGetUserRepositoriesQuery} = githubApi;