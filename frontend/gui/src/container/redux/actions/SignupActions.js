import api from '../../api/loacalConfig';

export const userSignupRequest = (userData) => {
    return dispatch => {
         return api.post('accounts/signup/', userData)
    
    };

};
