import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e53f6b4abac445999b8b0c357e807d9f"
    }
})