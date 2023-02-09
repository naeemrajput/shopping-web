import React, { useContext } from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import { AppContext } from '../AppContext';

// import './ENavItem.scss';

// import { AppContext } from '../../../../../../AppContext';

type Props = {
  label: string | JSX.Element;
  icon?: JSX.Element;
  isActive?: boolean;
  handleClick?: () => void;
  hasSubMenu?: boolean;
};

export function ENavItem({ label, isActive, icon, handleClick, hasSubMenu }: Props) {

  const {
    isSidebarCollapsed
  } = useContext(AppContext);

  return (
    <div className={'nav-item ' + (isActive ? ' bg-white  opacity-100 text-black mt-2 mb-2' : 'hover:bg-white text-slate-300 cursor-pointer')} onClick={handleClick && handleClick}>
      <div className='flex flex-row gap-2 '>
      {icon ? <div className="icon mt-4">{icon}</div> : null}
      {!isSidebarCollapsed ? label : <></>}
      </div>
      {hasSubMenu && <div className="icon ml-auto">{<HiChevronRight />}</div>}
    </div>
  );
}

export default ENavItem;
