import axios from "axios";



const service = axios.create({
  baseURL: import.meta.env.VITE_API_SLIYA || "http://localhost:9715"
})

const sliya = {
  ping: (payload?: any) => service({ method: "GET", url: "/ping", data: payload })
}

export default sliya