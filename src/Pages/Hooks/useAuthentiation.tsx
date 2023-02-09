import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { userLogin } from '../../initialState';
// import { userLogin } from '../../initialState';

// import { useAuth } from '../../../libs/data-access';
// import { handleValidateLoginParams } from '../../../utils/validators';
import { ILoginParams, IUser, ILoginPayload } from '../../Type';
// import { IDepartmentLoginPayload, ILoginParams } from '../../../types';
import { showToast } from '../../utils/utility';
import { handleValidateLoginParams } from '../screens/Component/Validator';
import { useAuth } from './useAuth';

export default function useAuthentication() {
    const {
        setRole,
        setToken,
        setIsLoggedIn,
        setUserLoginDetail
    } = useContext(AppContext);

    const {
        handleDepartmentLogin
    } = useAuth();
 
    // const  [user,setUser] = useState<IUser>(userLogin)
    const [loginParams, setLoginParams] = useState<ILoginParams>({
        userName: "",
        password: ""
    });

    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
    /* HANDLER FUNCTIONS */
    const handleLoginPayloadChange = (key: keyof ILoginParams, value: string) => {
        setLoginParams(prev => ({ ...prev, [key]: value }));
    };

    /* API CALLS */
    const handleLogin = async () => {
        setIsLoggingIn(true);
        const isValidated = handleValidateLoginParams(loginParams);
        const payload: ILoginPayload = {
            // stateId: 1,
            username: loginParams.userName,
            password: loginParams.password
        };
        
        
        if (isValidated) {
        const response = await handleDepartmentLogin(payload);
            if (response.isSuccess) {
                console.log("Response for login: ", response.data);
                const userData = response.data;
                console.log("user: ",userData)
                if (userData) {
                    setUserLoginDetail(userData);
                    setRole(["Department"]);
                    setIsLoggedIn(true);
                    setToken("test_token");
                }
            } else {
                showToast({
                    type: "error",
                    title: "Something Went Wrong!",
                    message: "Could not process login"
                });
            }
        }
        setIsLoggingIn(false);
    };

    return {
        loginParams,
        isLoggingIn,
        handleLoginPayloadChange,
        handleLogin,
        
    }
}