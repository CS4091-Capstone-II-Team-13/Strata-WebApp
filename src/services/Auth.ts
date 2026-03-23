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

    if (data.access_token) {
        localStorage.setItem("access_token", data.access_token)
    }

    if (data.refresh_token) {
        localStorage.setItem("refresh_token", data.refresh_token)
    }

    return data;
  }
}

export default Auth;
