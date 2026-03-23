import { getAccessToken } from "../utils/util";
import { useState } from "react";

export function useIsLoggedIn() {
  const [accessToken, _] = useState(getAccessToken());

  return accessToken != null;
}
