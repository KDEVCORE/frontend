import { API_BASE_URL } from "../appConfig";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) headers.append("Authorization", "Bearer " + accessToken);

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) options.body = JSON.stringify(request);

  return fetch(options.url, options).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 403) {
      window.location.href = "/signin"; // redirect
    } else if (response.status === 400) {
      alert("입력 정보를 확인해 주십시오.");
    } else {
      new Error(response);
    }
  }).catch((error) => {
    console.log("http error");
    console.log(error);
  });
}

export function signIn(userDTO) {
  return call("/member/signin", "POST", userDTO)
    .then((response) => {
      if (response.token) {
        localStorage.setItem("ACCESS_TOKEN", response.token);
        window.location.href = "/";
      }
    });
}

export function signOut() {
  localStorage.setItem("ACCESS_TOKEN", null);
  window.location.href = "/signin";
}

export function signUp(userDTO) {
  return call("/member/signup", "POST", userDTO);
}

export function signInOAuth2(provider) {
  const FRONTEND_URL = window.location.protocol + "//" + window.location.host;
  window.location.href = API_BASE_URL + "/member/authorize/" + provider + "?redirect_uri=" + FRONTEND_URL
}