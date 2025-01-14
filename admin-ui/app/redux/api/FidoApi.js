import { handleResponse } from 'Utils/ApiUtils'

export default class FidoApi {
  constructor(api) {
    this.api = api
  }
  // get fido Config
  getFidoConfig = () => {
    return new Promise((resolve, reject) => {
      this.api.getPropertiesFido2((error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }

  // update fido Config
  updateFidoConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.putPropertiesFido2(input, (error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }
}
