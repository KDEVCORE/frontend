const hostname = window && window.location && window.location.hostname;
let backendHost = (hostname === "localhost") ? "http://localhost:8080" : "https://api.kdevcore.com"; // http://localhost:8080

export const API_BASE_URL = `${backendHost}`;