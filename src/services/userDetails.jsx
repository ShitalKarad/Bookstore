import axios from "axios";
let url =  "https://bookstore.incubation.bridgelabz.com/bookstore_user";

export const signup = async (object) => {
    let response = await axios.post(
        `${url}/registration`,
      object
    );
    return response;
  };

  export const login = async (object) => {
    let response = await axios.post(
      `${url}/login`,
      object
    );
    return response;
  };
  