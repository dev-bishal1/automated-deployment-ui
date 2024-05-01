/* eslint-disable @typescript-eslint/no-explicit-any */
export const parseApiError = (error: any) => {
  return (
    error.response?.data?.errorMessage ||
    error.response?.data?.error?.message ||
    error.response?.data?.message ||
    'An unknown error has occured'
  );
};
