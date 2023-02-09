import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiChevronLeft, HiHome } from 'react-icons/hi2';
import { FiLogOut } from 'react-icons/fi';
import { Button, Modal } from '@mantine/core';

// import { EButton } from '../..';

import './Navbar.scss';

import ENavItem from './navItem';
import { AppContext } from '../AppContext';
import { IRoute, ROUTES } from '../Routes/routes';
import { checkRouteBasedOnRoles, matchRoute } from '../Routes/checkRoutes';
import NavItem from './navItem';
import useAuthentication from '../Pages/Hooks/useAuthentiation';

type Props = {
  role: string[] | undefined;
};

export default function Navbar() {

  const {
    isSidebarCollapsed,
    handleLogout,
    role,
  } = useContext(AppContext);

  // const {
  //   user
  // }= useAuthentication()
// console.log("userrrrrrrrr........",user)
  const navigate = useNavigate();
  const location = useLocation();

  const [activeRoute, setActiveRoute] = useState<IRoute>({} as IRoute);
  const [logOutModalOpened, setLogOutModalOpened] = useState<boolean>(false);

  useEffect(() => {
    setActiveRoute(matchRoute(location.pathname));
  }, [location.pathname]);

  const [subNavActiveIndex, setSubNavActiveIndex] = useState<number>(-1);

  const activeRouteArray = useMemo(() => {
    // const allRoutes = handleValidateRoutesBasedOnLabelAndJobPost(
    //   isAllowedToVerify,
    //   isAllowedToChangeServiceProfile
    // ).filter(route => checkRouteBasedOnRoles(role, route?.rolesAllowed as string[]) === true);

    const allRoutes = ROUTES.SHOPING_ROUTES.filter(each =>
      checkRouteBasedOnRoles(role, each?.rolesAllowed as string[])
    );

    if (subNavActiveIndex !== -1) {
      return allRoutes[subNavActiveIndex].submenu;
      // ?.filter(each => {
      //   let toInclude: boolean = true;
      //   // if (user?.personaL_PROFILE_STATUS === "APPROVED"
      //   //   &&
      //   //   each?.path?.includes("employee/employee-profile/change-request")) {
      //   //   toInclude = false
      //   // }
      //   // if (user?.servicE_PROFILE_STATUS === "APPROVED"
      //   //   &&
      //   //   each?.path?.includes("employee/service-profile/change-request")) {
      //   //   toInclude = false;
      //   // }

      //   return toInclude
      // });
    } else return allRoutes;
  }, [role, subNavActiveIndex]); // user

  return (
    <>
      <div className="head">
        {isSidebarCollapsed ? <h3>WH</h3> : <h3 className='text-md'>Welome Home</h3>}
        <div className="avatar-group mt-11">
          <div className="flex items-center gap-3">
            {/* <Avatar color="cyan" radius="xl"> */}
            {/* {role && role?.includes("Employee")
                ?
                user?.legalFullName && user?.legalFullName?.split(' ')?.length > 1
                  ?
                  user?.legalFullName?.split(' ')[0]?.charAt(0) + user?.legalFullName?.split(' ')[1]?.charAt(0)
                  :
                  user?.legalFullName?.charAt(0)
                :
                ''} */}
            {/* </Avatar> */}
            {!isSidebarCollapsed
              ?
              <div>
                <div className="opacity-30 text-sm">Welcome back,</div>
                <div className="font-semibold">
                  {/* {role?.includes("Department")
                    ?
                    "Shoping portal"
                    :
                    role?.includes('District')
                      ?
                      "District"
                      :
                      'Shoping Portal'
                      } */}
                </div>
              </div>
              :
              <></>}
          </div>
          <div
            className="flex flex-col items-end cursor-pointer"
            onClick={() => setLogOutModalOpened(true)}
          >
            <FiLogOut
              size={20}
            />
          </div>
        </div>
      </div>

      <div className="body  mt-12">
      {ROUTES.SHOPING_ROUTES.map((each, index) =>
                each.icon ? (
                  <NavItem 
                    key={index + "route"}
                    // isDisabled={activeRoute?.path !== each.path}
                    isActive={activeRoute?.path === each.path }
                    icon={<each.icon size={25}  className="cursor-pointer  mb-4" />}
                    // label={each.label } 
                    label={
                      <span className="flex items-center gap-2">
                        <span>{each?.label}</span>
                         {/* {role?.includes('Employee') &&
                          ((user?.personaL_PROFILE_STATUS === 'APPROVED' &&
                            route?.path?.includes(
                              'employee/employee-profile'
                            )) ||
                            (user?.servicE_PROFILE_STATUS === 'APPROVED' &&
                              route?.path?.includes(
                                'employee/service-profile'
                              ))) && <VerifiedIconL />}  */}
                      </span>
                    }
                    handleClick={() => {
                      navigate(each.path);
                    }}
                  />
                ) : (
                  <></>
                )
              )}
        {/* <div className="nav-group grid gap-2 mt-11">
           BACK BUTTON FOR ACTIVE SUBMENU 
          {subNavActiveIndex !== -1 && (
            <span
              className="w-fit flex items-center gap-1 text-sm cursor-pointer"
              onClick={() => {
                setSubNavActiveIndex(-1);
                navigate("/");
              }}
            >
              <HiChevronLeft />
              <span>back</span>
            </span>
          )}

          {activeRouteArray
            &&
            activeRouteArray.length > 0
            &&
            activeRouteArray
              ?.filter((each) => each.icon !== undefined)
              .map((route: IRoute, index: number) => {
                return (
                  <ENavItem
                    key={index}
                    icon={<route.icon /> || <HiHome />}
                    label={
                      <span className="flex items-center gap-2">
                        <span>{route?.label}</span>
                        //  {role?.includes('Employee') &&
                          // ((user?.personaL_PROFILE_STATUS === 'APPROVED' &&
                            // route?.path?.includes(
                              // 'employee/employee-profile'
                            // )) ||
                            // (user?.servicE_PROFILE_STATUS === 'APPROVED' &&
                              // route?.path?.includes(
                                // 'employee/service-profile'
                              // ))) && <VerifiedIconL />} 
                      </span>
                    }
                    handleClick={() => {
                      if (route.isSubmenu) {
                        setSubNavActiveIndex(index);
                        // route?.submenu && navigate(route?.submenu[0].path.replace(':mkcl', mkcl || ''));
                        route.submenu && navigate(route.submenu[0].path);
                      } else {
                        // navigate(route.path.replace(':mkcl', mkcl || ''));
                        navigate(route.path);
                      }
                    }}
                    isActive={activeRoute?.path === route.path}
                    hasSubMenu={route.isSubmenu}
                  />
                );
              })}
        </div> */}
      </div>

      {/* <div className="foot">
          <div className="border--1"></div>
          <ENavItem icon={<AdjustmentsIcon />} label="Help & Support" />
        <ENavItem icon={<BellIcon />} label="Notification" />
        </div> */}

      {/* <div
        className="flex flex-col items-end cursor-pointer"
        onClick={() => setLogOutModalOpened(true)}
      >
        <FiLogOut
          size={20}
        />
      </div> */}

      <Modal
        opened={logOutModalOpened}
        onClose={() => setLogOutModalOpened(false)}
        title="Are you sure you want to logout?"
      >
        <div className="flex justify-end">
          <Button
            size="xs"
            className="btn-light bg-blue-500"
            onClick={() => {
              handleLogout();
              setLogOutModalOpened(false);
            }}
          >
            Logout
          </Button>
        </div>
      </Modal>
    </>
  );
}

