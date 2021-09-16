import service from "./base"

export default {
  ping: (payload: any) => { return service.get("/ping") }
}