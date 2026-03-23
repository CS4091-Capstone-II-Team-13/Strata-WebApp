import { getAccessToken } from "../utils/util";
class Projects {
  private static baseUrl = "";

  static async getProjects() {
    const token = getAccessToken();

    const response = await fetch(`${this.baseUrl}/api/v1/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Error occurred.");
    }

    return data;
  }

  static async createProject(name: string, description: string) {
    const token = getAccessToken();

    const response = await fetch(`${this.baseUrl}/api/v1/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, description }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Error occurred.");
    }

    return data;
  }
}

export default Projects;
