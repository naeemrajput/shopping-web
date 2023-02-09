import axios from "axios";
import { res } from "../../libs/Type";
import {ILoginPayload } from "../../Type";
import { BASE_URL } from "./constant";
// import { BASE_URL } from "./constant";


export function useAuth() {

    let r = res;

    const handleDepartmentLogin = async (payload: ILoginPayload) => {
        try {
            let response = await axios.post(`${BASE_URL}`, payload);
            // console.log("Response: ", response?.data);
            if (String(response.data) !== "500") {
                return r = {
                    ...r,
                    isSuccess: true,
                    data: response.data
                };
            } else {
                return r = {
                    isSuccess: false,
                    data: undefined,
                    error: "Internal Serve Error"
                };
            }
        } catch (error: any) {
            // console.log("Error: ", error);
            return r = {
                isSuccess: false,
                data: undefined,
                error: error
            };
        }
    };

    return {
        handleDepartmentLogin
    };
}
