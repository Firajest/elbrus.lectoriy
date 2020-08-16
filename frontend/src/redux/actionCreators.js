import {
  GET_PHASES_REQUEST, GET_PHASES_SUCCESS, GET_PHASES_FAILURE,
  GET_WEEKS_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE,
  GET_DAYS_REQUEST, GET_DAYS_SUCCESS, GET_DAYS_FAILURE,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
  CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './actionTypes'

export function getPhasesRequest() {
  return {
    type: GET_PHASES_REQUEST,
  }
}
export function getPhasesSuccess(name) {
  return {
    type: GET_PHASES_SUCCESS,
    payload: {
      name
    }
  }
}
export function getPhasesFailure(error) {
  return {
    type: GET_PHASES_FAILURE,
    payload: {
      error
    }
  }
}

export function getWeeksRequest() {
  return {
    type: GET_WEEKS_REQUEST,
  }
}
export function getWeeksSuccess(name) {
  return {
    type: GET_WEEKS_SUCCESS,
    payload: {
      name,
    }
  }
}
export function getWeeksFailure(error) {
  return {
    type: GET_WEEKS_FAILURE,
    payload: {
      error
    }
  }
}

export function getDaysRequest() {
  return {
    type: GET_DAYS_REQUEST,
  }
}
export function getDaysSuccess(name) {
  return {
    type: GET_DAYS_SUCCESS,
    payload: {
      name,
    }
  }
}
export function getDaysFailure(error) {
  return {
    type: GET_DAYS_FAILURE,
    payload: {
      error
    }
  }
}
export function statusRequest() {
  return {
    type: STATUS_REQUEST,
    payload: {
      message: 'Waiting',
    }
  }
}
export function statusSucceeded(status, cookie) {
  return {
    type: STATUS_SUCCESS,
    payload: {
      status,
      cookie
    }
  }
}
export function statusFailed() {
  return {
    type: STATUS_FAILURE,
    payload: {
      message: ' Something went wrong. Check whether your username or password is correct.',
    }
  }
}

export function choosePhase(id) {
  return {
    type: CHOOSE_PHASE,
    payload: {
      id
    }
  }
}
export function chooseWeek(id) {
  return {
    type: CHOOSE_WEEK,
    payload: {
      id
    }
  }
}
export function chooseDay(id) {
  return {
    type: CHOOSE_DAY,
    payload: {
      id
    }
  }
}
export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  }
}
export function logoutRequestSuccessed(cookie, message) {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      cookie,
      message
    }
  }
}
export function logoutRequestFailed(id) {
  return {
    type: LOGOUT_FAILURE,
  }
}
