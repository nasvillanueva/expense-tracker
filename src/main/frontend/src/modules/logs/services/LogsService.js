import HttpService from '../../shared/util/HttpService';
import { API_METHODS } from '../../constants';

export default {
  getLogs: () => HttpService.request("/entry", {method: API_METHODS.GET}),
  submitEntry: (isUpdate, data) => HttpService.request("/entry", {
    method: (isUpdate ? API_METHODS.PUT : API_METHODS.POST),
    data: data
  }),
  getEntry: (id) => HttpService.request(`/entry/${id}`, {method: API_METHODS.GET}),
  deleteEntry: (id) => HttpService.request(`/entry/${id}`, {method: API_METHODS.DELETE})
}