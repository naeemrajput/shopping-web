import { useContext } from 'react';
import { Footer } from '@mantine/core';

import '../libs/Appshell.scss';
import { AppContext } from '../AppContext';


type Props = {
  navbar: JSX.Element;
  topbar?: JSX.Element;
  children?: JSX.Element;
  footer?: JSX.Element;
};
// const test: any = {};
// console.log(test.should.crash);
export function AppShell({ navbar, topbar, children, footer }: Props) {

  const {
    isSidebarCollapsed
  } = useContext(AppContext);

  return (
    <div className="app-shell ">
      {/* LEFT NAV */}
      <div className={`navbar ${isSidebarCollapsed ? "collapsed" : ""}`}>{navbar}</div>
      {/* MAIN RIGHT PANEL */}
      <div className={'main ' + (footer ? ' has-footer' : '')}>
        {/* TOPBAR */}
        {topbar ? <div className="border-b topbar">{topbar}</div> : <></>}
        {/* APP BODY */}
        <div className="body">{children}</div>
        {footer ? <div className="footer border-top">{footer}</div> : <></>}
      </div>
    </div>
  );
}

// export default EAppShell;
