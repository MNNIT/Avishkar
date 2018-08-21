import axios from "axios";
import url from "./config";
axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;
export default axios;
