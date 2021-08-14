import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='projects'
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact='true'
            offset={-80}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact='true'
            offset={-80}
          >
            Articles
          </SidebarLink>
          <SidebarLink
            to='signup'
            onClick={toggle}
            smooth
            duration={500}
            spy
            exact='true'
            offset={-80}
          >
            Resume
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/emailme'>Email Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar
