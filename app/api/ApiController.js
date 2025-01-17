import { Alert, AsyncStorage } from 'react-native';

export default class ApiController {
  constructor() {
    this.apiDomain = "stec.cs.petrsu.ru/"
    this.apiUrl = "http://" + this.apiDomain
    this.wsUrl = "ws://" + this.apiDomain
  }

  call = async (route, method, content, headers, body) => {

    var allHeaders = Object.assign({}, {
      'Accept': 'application/json',
      'Content-Type': content,
      'Access-Token': this.accessToken,
    }, headers);

    const apiUrl = this.apiUrl

    return new Promise(
      (resolve, reject) => {
        fetch(apiUrl + route, {
          method: method,
          headers: allHeaders,
          body: body
        }).then((response) => {
          var headers = response.headers;
          var status = response.status;

          response.json().then((result) => {
            if (!response.ok) {
              reject({ status: status, message: result.error.message })
              return
            }

            resolve({ status: status, result: result, headers: headers })
          })
        }).catch((e) => {
          reject({ status: -1, message: e.message })
        })
      })
  }

  callAutoRefresh = async (route, method, content, headers, body) => {
    return new Promise(
      (resolve, reject) => {
        this.call(route, method, content, headers, body).then(
          (response) => {
            resolve(response)
          }, (error) => {
            reject(error)
          })
      })
  }

  callForm = async (route, method, headers, body) => {
    return this.call(route, method, 'multipart/form-data', headers, body)
  }

  callJSON = async (route, method, headers, body) => {
    return this.callAutoRefresh(route, method, 'application/json', headers, JSON.stringify(body))
  }
}