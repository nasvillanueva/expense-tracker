import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

const resolveCallback = resolve => response => {
  resolve({data: response.data, status: response.status})
};

const rejectCallback = reject => error => {
  if (error.response) {
    reject({
      error,
      humanMessage: 'An error occured, please try again.',
      status: error.response.status,
      response: error.response.data
    })
  } else {
    reject({
      humanMessage: 'An unknown error occured, please try again.',
      status: -1,
      response: error
    })
  }
};

export default {
  request(url, config){
    return new Promise((resolve, reject) => {
      axiosInstance({
        url: url,
        ...config
      }).then(resolveCallback(resolve))
        .catch(rejectCallback(reject))
    });
  },
  all(arr) {
    axiosInstance.all(arr)
      .then(axios.spread())
  }
}