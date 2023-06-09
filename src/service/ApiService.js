import { API_BASE_URL } from "../appConfig";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  if (getAuthStatus()) headers.append("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) options.body = JSON.stringify(request);

  return fetch(options.url, options)
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.json();
        case 400:
        case 403:
        case 500:
        case 502:
          return response;
        default:
          new Error(response);
      }
    })
    .catch((error) => {
      console.log("http error");
      return error;
    });
}

export function signUp(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}

export function signIn(userDTO) {
  return call("/auth/signin", "POST", userDTO);
}

export function signOut() {
  localStorage.removeItem("ACCESS_TOKEN");
  window.location.href = "/";
}

export function signInOAuth2(provider) {
  const FRONTEND_URL = window.location.protocol + "//" + window.location.host;
  window.location.href = API_BASE_URL + "/oauth2/authorization/" + provider + "?redirect_uri=" + FRONTEND_URL
}

export function getAuthStatus() {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  return accessToken && accessToken !== null ? true : false;
}