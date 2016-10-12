import HttpService from "../../shared/util/HttpService";
import { API_METHODS } from "../../constants";

export default {
  getSummary: (category) => HttpService.request(`/entry/summary/${category}`, {method: API_METHODS.GET})
}