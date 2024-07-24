import axios from "axios";
const path = "http://localhost:3000/api/auth";
export async function login(logindata) {
  console.log("log in data", logindata);
  const result = await axios
    .post(`${path}/signIn`, logindata)
    .then((response) => response.data);
  return result;
}
export async function signUp(signUpData) {
  const result = await axios
    .post(`${path}/signUp`, signUpData)
    .then((response) => response.data);
  return result;
}

export async function logOut() {
  const result = await axios
    .post(`${path}/logOut`)
    .then((response) => response.data);
  return result;
}
export async function currentUser() {
  const result = await axios
    .get(`${path}/currentUser`)
    .then((response) => response.data);
  return result;
}
