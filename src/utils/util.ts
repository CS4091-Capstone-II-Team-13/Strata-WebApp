export const ACCESS_TOKEN_KEY = "access_token"

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}
