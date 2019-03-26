import React from "react";
import SvgIcon from "react-icons-kit";
import {
  Navbar,
  Button,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {left} from 'react-icons-kit/iconic/left'
  import {ic_notifications} from 'react-icons-kit/md/ic_notifications'
  import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart'

const Icon16 = props => <SvgIcon size={props.size || 16} icon={props.icon} />;
const Icon17 = props => <SvgIcon size={props.size || 17} icon={props.icon} />;

class Header extends React.Component{
  render() {
    return (
      <header className="site-header">
      <div className="header-main">
        <Navbar  light expand="md">
        <Button onClick={this.props.toggleMenu} className="menuToggle" color="link">
        <Icon16 icon={left} />
        </Button>
          <NavbarBrand href="/"><span className="logoHalf">Harshith </span> Dashboard</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="header-icon notif" href="#"><Icon17 icon={ic_notifications} /></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hello Harshith
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
        </Navbar>
      </div>
      </header>
    );
  }

}
export default Header;
