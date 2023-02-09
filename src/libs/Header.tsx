import { useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Anchor, Breadcrumbs, Divider } from '@mantine/core';
import { HiListBullet } from 'react-icons/hi2';
import {TiShoppingCart} from 'react-icons/ti';
import { AppContext } from '../AppContext';


export function ETopbar() {

    const {
        isSidebarCollapsed,
        setIsSidebarCollapsed
    } = useContext(AppContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    // const breadCrumbData = useMemo(() => location.pathname.split('/').filter(each => each.length > 0), [location]);

    return (
        <>
        <div className="flex w-full mt-4 justify-between ">
            <HiListBullet
                size={20}
                className="cursor-pointer "
                onClick={() => setIsSidebarCollapsed(prev => !prev)}
            />

            <TiShoppingCart
            size={40}
            className="cursor-pointer"
            // onClick={}
            />
            

            {/* <div className="breadcrumbs font-medium">
                <Breadcrumbs separator={<ChevronRightIcon className="w-3" />}>
                    {
                        breadCrumbData.map((path, index) => (
                            index !== 0 ? <Anchor
                                key={index}
                                onClick={() => index !== breadCrumbData.length - 1 && navigate(breadCrumbData.slice(0, index + 1).join('/').replace(" ", "-"))}
                            >
                                <span
                                    className={`capitalize ${index === breadCrumbData.length - 1 && "text-slate-400"}`}
                                >
                                    {path.replace("-", " ")}
                                </span>
                            </Anchor> : <></>
                        ))
                    }
                </Breadcrumbs>
            </div> */}

            {/* <div className="flex gap-6">
                <div className="icon-link">
                    <InboxIcon />
                </div>
                <div className="icon-link">
                    <BellIcon />
                </div>
            </div> */}
        </div>
        <Divider  className=' border-b-[3px]'/>
        </>
    )
}
