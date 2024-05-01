const PRODUCTION_ENV = 'production';
const STAGING_ENV = 'staging';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const BASE_URL = ((env) => {
  switch (env) {
    case PRODUCTION_ENV:
      return 'http://64.23.145.193:3000';
    case STAGING_ENV:
      return 'http://64.23.145.193:3000';
    default:
      return API_URL || 'http://localhost:3000';
  }
})(import.meta.env.VITE_ENV);

export const AUTH_COOKIE_CONFIG = {
  userAccessToken: 'blockseas-user-access-token',
  userRefreshToken: 'blockseas-user-refresh-token',
  loggedInCookie: 'isLoggedIn',
};
