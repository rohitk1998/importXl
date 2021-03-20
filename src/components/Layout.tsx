import React from 'react';
import { Wrapper, WrapperVariant } from './Wrapper';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
