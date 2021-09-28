import api from '../../api/loacalConfig';

export const userSignupRequest = (userData) => {
    return dispatch => {
         api.post('accounts/signup/', userData)
         .then(res=>{
           
        
         })
         .catch((err)=>{
           console.log('Error', err.response);
         })
 
    
    };

};
