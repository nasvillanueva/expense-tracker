import HttpService from '../../shared/util/HttpService';
import { API_METHODS } from '../../constants';

export default {
  getLogs: () => HttpService.request("/entry", {method: API_METHODS.GET})
}