import {
  GET_ACRS,
  GET_ACRS_RESPONSE,
  PUT_ACRS,
  PUT_ACRS_RESPONSE,
} from "../actions/types"

const INIT_STATE = {
  acrs: {},
  scripts: [],
  loading: true,
  acrReponse: {},
}

const reducerName = "acrReducer"

export default function acrReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case GET_ACRS:
      return {
        ...state,
        loading: true,
      }
    case GET_ACRS_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          acrReponse: action.payload.data,
          loading: false,
        }
      } else {
        return handleDefault()
      }

    case PUT_ACRS:
      return {
        ...state,
        loading: true,
      }
    case PUT_ACRS_RESPONSE:
      if (action.payload.data) {
        return {
          ...state,
          acrReponse: action.payload.data,
          loading: false,
        }
      } else {
        return handleDefault()
      }
    default:
      return handleDefault()
  }

  function handleDefault() {
    return {
      ...state,
      loading: false,
    }
  }
}
