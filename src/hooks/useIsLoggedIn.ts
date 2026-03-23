import { getAuthStorage } from "../services/Auth";
import { useState } from "react";

export function useIsLoggedIn() {
  const [accessToken, _] = useState(getAuthStorage()?.accessToken);

  return accessToken != null;
}
