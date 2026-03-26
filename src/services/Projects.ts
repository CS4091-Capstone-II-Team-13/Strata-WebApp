import { authenticatedFetch } from "./Auth";
class Projects {
  private static baseUrl = "";

  static async getProjects() {
    const response = await authenticatedFetch(
      `${this.baseUrl}/api/v1/projects`,
      {
        method: "GET",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Error occurred.");
    }

    return data;
  }

  static async createProject(name: string, description: string) {
    const response = await authenticatedFetch(
      `${this.baseUrl}/api/v1/projects`,
      {
        method: "POST",
        body: JSON.stringify({ name, description }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || "Error occurred.");
    }

    return data;
  }
}

export default Projects;
