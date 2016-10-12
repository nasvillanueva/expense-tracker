import HttpService from "../../shared/util/HttpService";
import { API_METHODS } from "../../constants";

export default {
  getIncomeSummary: () => HttpService.request("/entry/summary/income_str", {method: API_METHODS.GET}),
  getExpenseSummary: () => HttpService.request("/entry/summary/expense", {method: API_METHODS.GET}),
  getSavingsSummary: () => HttpService.request("/entry/summary/savings_str", {method: API_METHODS.GET})
}