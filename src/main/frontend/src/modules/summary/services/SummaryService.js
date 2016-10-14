import HttpService from "../../shared/util/HttpService";
import { API_METHODS } from "../../constants";

export default {
  getSummary: (category) => HttpService.request(`/entry/${category}/total`, {method: API_METHODS.GET}),
  getBalance: () => HttpService.request("/entry/balance", {method: API_METHODS.GET})
}