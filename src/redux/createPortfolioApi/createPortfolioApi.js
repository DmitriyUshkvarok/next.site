import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioApi = createApi({
  reducerPath: 'createPortfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['createPortfolio'],
  endpoints: (builder) => ({
    createPortfolio: builder.mutation({
      query: (portfolioData) => ({
        url: '/portfolio',
        method: 'POST',
        body: portfolioData,
      }),
      invalidatesTags: ['createPortfolio'],
    }),
  }),
});

export const { useCreatePortfolioMutation } = portfolioApi;
