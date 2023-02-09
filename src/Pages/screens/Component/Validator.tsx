import React from 'react'
import { IProdutUpload } from '../../../libs/Type';
import { ILoginParams } from '../../../Type';
import { showToast } from '../../../utils/utility';


export const handleValidateLoginParams = (loginParams: ILoginParams) => {
let isValidated = false;
if(!loginParams?.userName){
    showToast({
        type: "warning",
        message: "Please provide username"
    });
    return isValidated;
}

if (!loginParams.password){
    showToast({
        type: "warning",
        message: "Please provide password"
    });
    return isValidated;
}
isValidated = true;
return isValidated
}

export const handleValidateAddProductDetails = (payload: IProdutUpload) => {
    let isValidated = false;
    if (!payload?.title){
        showToast({
            type: "warning",
            message: "Please provide title"
        });
        return isValidated;
    }
    if (!payload?.price){
        showToast({
            type: "warning",
            message: "Please provide price"
        });
        return isValidated;
    }
    if (!payload.category) {
        showToast({
            type: "warning",
            message: "Please provide Category"
        });
        return isValidated;
    }
    if (!payload?.description){
        showToast({
            type: "warning",
            message: "Please provide description"
        });
        return isValidated;
    }

    if (!payload?.count && payload.count === 0) {
        showToast({
            type: "warning",
            message: "Please provide count"
        });
        return isValidated;
    }
    
    
    if (!payload?.rate){
        showToast({
            type: "warning",
            message: "Please provide rating"
        });
        return isValidated;
    }
    
    // if(!payload?.file){
    //     showToast({
    //         type: "warning",
    //         message: "Please provide File"
    //     });
    //     return isValidated;
    // }

    isValidated = true;
    return isValidated;
};
