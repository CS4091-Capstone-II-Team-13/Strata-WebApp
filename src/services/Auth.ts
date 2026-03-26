export interface AuthStorage {
  accessToken: string;
  refreshToken: string;
  expiration: number;
}

export const AUTH_KEY = "auth";

export function setAuthStorage(data: AuthStorage) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(data));
}

export function getAuthStorage() {
  const storage = localStorage.getItem(AUTH_KEY);
  if (storage === null) {
    return null;
  }
  try {
    return JSON.parse(storage) as AuthStorage;
  } catch {
    localStorage.removeItem(AUTH_KEY);
    return null;
  }
}

export async function authenticatedFetch(url: string, options: RequestInit) {
  const authStorage = getAuthStorage();
  const token = authStorage?.accessToken;

  const headers = {
    ...options.headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, { ...options, headers });

  if (response.status == 401) {
    const refreshToken = authStorage?.refreshToken;

    if (refreshToken) {
      let response = await fetch("/api/v1/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      setAuthStorage(data);

      response = await fetch(url, { ...options, headers });
    }
  }

  return response;
}

class Auth {
  private static baseUrl = "";

  static async signup(username: string, email: string, password: string) {
    const response = await fetch(`${this.baseUrl}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Error occurred.");
    }

    return data;
  }

  static async login(username: string, password: string) {
    const response = await fetch(`${this.baseUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Error occurred.");
    }

    setAuthStorage({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiration: 1000,
    });

    return data;
  }
}

export default Auth;
