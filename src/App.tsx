import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { EAppShell, ENavbar, ETopbar } from './libs/ui';

import { AppContext } from './AppContext';

// import './App.scss';
import { IDepartmentUserDetails } from './libs/Type';
import { NotificationsProvider } from '@mantine/notifications';
import ErrorBoundary from './ErrorBoundary';
import RootRoutes from './Routes/MainRoutes';
import { ETopbar } from './libs/Header';
import { AppShell } from './libs/Appshell';
import { MantineProvider } from '@mantine/core';
import Navbar from './libs/navbar';


function App() {


  const navigate = useNavigate();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean | undefined>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [role, setRole] = useState<string[] | undefined>(undefined);
  const [userLoginDetail, setUserLoginDetail] = useState<IDepartmentUserDetails | undefined>(undefined);

  useEffect(() => {
    localStorage.getItem("isSidebarCollapsed") && setIsSidebarCollapsed(JSON.parse(localStorage.getItem("isSidebarCollapsed") as string));
    localStorage.getItem("token") && setToken(localStorage.getItem("token") as string);
    localStorage.getItem("isLoggedIn") && setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn") as string));
    localStorage.getItem("role") && setRole(JSON.parse(localStorage.getItem("role") as string));
    localStorage.getItem("departmentUserDetails") && setUserLoginDetail(JSON.parse(localStorage.getItem("departmentUserDetails") as string));

    // const handleTabClose = () => {
    //   handleLogout();
    // };

    // window.addEventListener('beforeunload', handleTabClose);

    // return () => {
    //   window.removeEventListener('beforeunload', handleTabClose);
    // };
  }, []);
  // console.log("token",token)
  useEffect(() => {
    if (userLoginDetail !== undefined) {
      localStorage.setItem("userLogin", JSON.stringify(userLoginDetail));
    }

    if (isSidebarCollapsed !== undefined) {
      localStorage.setItem("isSidebarCollapsed", JSON.stringify(isSidebarCollapsed));
    }

    if (token) {
      setIsLoggedIn(true);
      localStorage.setItem("token", token);
    }

    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }

    if (role) {
      localStorage.setItem("role", JSON.stringify(role));
    }
  }, [
    isSidebarCollapsed,
    isLoggedIn,
    token,
    role
  ]);

  const handleLogout = () => {
    setIsSidebarCollapsed(false);
    setUserLoginDetail(undefined);
    setIsLoggedIn(false);
    setToken(undefined);
    localStorage.clear();
    navigate("/");
  };

 

  // AXIOS INTERCEPTOR START
  // -- interceptor for each requests --
  // axios.interceptors.request.use(
  //   (request: any) => {
  //     if (!request.url.includes("login")) {
  //       request.headers['Authorization'] = `Bearer ${getToken()}`;
  //     }
  //     return request;
  //   },
  //   error => {
  //     return Promise.reject(error); 
  //   }
  // );

  // -- interceptor for each responce --
  // axios.interceptors.response.use(undefined, function axiosRetryIntercptor(err) {
  //   if (err?.response?.status === 401) {
  //     console.error("Oops...!", "You are unauthorized");
  //     console.log(err.response);
  //   }
  //   return Promise.reject(err);
  // }
  // );
  // AXIOS INTERCEPTOR ENDS

  return (
    // AppContext Wrapper
    <AppContext.Provider value={{
      userLoginDetail,
      setUserLoginDetail,
      isSidebarCollapsed,
      setIsSidebarCollapsed,
      isLoggedIn,
      setIsLoggedIn,
      token,
      setToken,
      handleLogout,
      role,
      setRole,
    }}>
      {/* Mantine Wrapper */}
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* Mantine Notification Wrapper */}
        <NotificationsProvider position={"top-right"}>
          {/* App Level Error Boundary */}
          <ErrorBoundary>
            {isLoggedIn || token
              ?
              <AppShell
              topbar={<ETopbar />}
              navbar={<Navbar />}
              // footer={}
              >
                <RootRoutes />
              </AppShell>
              :
              <RootRoutes />}
          </ErrorBoundary>
        </NotificationsProvider>
      </MantineProvider>
    </AppContext.Provider>
  );
}

export default App;


// import React, { useContext, useState } from "react";
// import axios from "axios";
// // import { API_URL } from "./utils/constants";
// import {
//   Navbar as MantineNavBar,
//   AppShell,
//   TextInput,
//   useMantineTheme,
//   Divider,
//   Container,
//   MantineProvider,
// } from "@mantine/core";
// import { AppContext } from "./AppContext";
// import Login from "./Pages/Auth/Login";
// import { ETopbar } from "./libs/Header";
// import Navbar from "./libs/navbar";
// import MainRoutes from "./Routes/MainRoutes";
// // import "./App.scss";
// // import MainRoutes from "./routes/MainRoutes";
// // import NavBar from "./Screens/NavBar";
// // import Header from "./Screens/Header";
// // import Login from "./Screens/Login";
// // import MainRoutes from "./components/MainRoutes";
// // import { LoginContext } from "./utils/AppContext"
// // import { API_URL } from "./utils/Constant"
// function App() {
//   const theme = useMantineTheme();
//   // const { token } = useContext(LoginContext);
//   const  [token, setToken] = useState<any>()
//   const { isLoggedIn, openedNavbar }: any = useContext(AppContext);
//   // const getToken = () => {
//   //   return localStorage.getItem("token") || token;
//   // };
//   // axios.defaults.baseURL = API_URL;
//   // axios.interceptors.request.use((request) => {
//   //   if (!request.url?.includes("auth")) {
//   //     request.headers = {
//   //       Authorization: `Bearer ${getToken()}`,
//   //       // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyMmQyMGFiLWFjMzktNGU0My1hOGFlLTQ0Nzg4OThjN2ZmZCIsInJvbGUiOiI4OGI0ZTNiNC0wMWM0LTQwMDUtOTM0Zi05ZjJhOGQ3YWY3NWUiLCJhcHBfYWNjZXNzIjp0cnVlLCJhZG1pbl9hY2Nlc3MiOnRydWUsImlhdCI6MTY2NzE5NjUwMywiZXhwIjoxNjY3ODAxMzAzLCJpc3MiOiJkaXJlY3R1cyJ9.-qYlHxmPHKOnycqKH1sMX9NgEPFsyQL7vjR9unN00PQ`,
//   //     };
//   //   }
//   //   return request;
//   // });
//   // const test: any = {};
//   // console.log(test.should.crash);
//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       {!isLoggedIn ? (
//         <Login />
//       ) : (
//         <AppShell
//           header={<ETopbar />}
//           navbar={<Navbar />}
//           styles={() => ({
//             main: {
//               display: "flex",
//               padding: 0,
//               scrollBehavior: "auto",
//             },
//           })}
          
//         >
//           <Container
//             fluid
//             className={`bg-slate-50 flex-1 mt-16 ml-32 pr-0 ${
//               openedNavbar ? "ml-[272px]" : "ml-16"
//             }`}
            
//           > 
//             <MainRoutes />
//           </Container>
//         </AppShell>
//          )} 
//     </MantineProvider>
//   );
// }

// export default App;



