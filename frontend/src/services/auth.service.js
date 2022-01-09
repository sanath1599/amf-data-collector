import axios from "axios";

const API_URL = "http://localhost:3005/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        email : username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, email, password) {
    return axios.post(API_URL + "register", {
      firstName,
      lastName,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
