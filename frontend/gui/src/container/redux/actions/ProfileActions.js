import { ActionTypes } from '../constans/ActionTypes'

export const ActionCreators = {

  addProfile: (user) => ({ type: ActionTypes.ADD_USER, payload: { user } }),

  updateProfileImage: (image) => ({ type: ActionTypes.UPDATE_PROFILE_PICTURE, payload: { image } }),

  updateProfile: (user) => ({ type: ActionTypes.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: ActionTypes.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: ActionTypes.LOGIN, payload: { user } })
}
