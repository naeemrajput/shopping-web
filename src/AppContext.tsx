import { createContext, Dispatch, SetStateAction } from "react";
import { IDepartmentUserDetails } from "./libs/Type";


export interface IAuthContext {
    userLoginDetail: IDepartmentUserDetails | undefined;
    setUserLoginDetail: Dispatch<SetStateAction<IDepartmentUserDetails | undefined>>;
    isSidebarCollapsed: boolean | undefined,
    setIsSidebarCollapsed: Dispatch<SetStateAction<boolean | undefined>>;
    isLoggedIn: boolean | undefined;
    setIsLoggedIn: Dispatch<SetStateAction<boolean | undefined>>;
    token: string | undefined;
    setToken: Dispatch<SetStateAction<undefined | string>>;
    role: string[] | undefined;
    setRole: Dispatch<SetStateAction<string[] | undefined>>;
    handleLogout: () => void;
};

export const AppContext = createContext<IAuthContext>({
    userLoginDetail: undefined,
    setUserLoginDetail: () => { },
    isSidebarCollapsed: false,
    setIsSidebarCollapsed: () => { },
    isLoggedIn: true,
    setIsLoggedIn: () => { },
    token: undefined,
    setToken: () => { },
    role: undefined,
    setRole: () => { },
    handleLogout: () => { },
    
});