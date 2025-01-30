import { UserLogin } from "../interfaces/UserLogin";

const API_URL = "https://your-api-url.com"; // Replace with your actual API URL

const login = async (userInfo: UserLogin): Promise<Response> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { login };