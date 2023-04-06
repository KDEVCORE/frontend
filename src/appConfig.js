const hostname = window && window.location && window.location.hostname;
let backendHost = (hostname === "localhost") ? "https://api.kdevcore.com" : "https://api.kdevcore.com"; // http://localhost:8080

export const API_BASE_URL = `${backendHost}`;