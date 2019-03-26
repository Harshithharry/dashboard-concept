import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarContainer from "../containers/sideBarContainer";
import SideNav, { Nav, NavIcon, NavText } from "react-sidenav";
import SvgIcon from "react-icons-kit";
import { ic_aspect_ratio } from "react-icons-kit/md/ic_aspect_ratio";
import { ic_business_center } from "react-icons-kit/md/ic_business_center";
import { ic_format_list_bulleted } from "react-icons-kit/md/ic_format_list_bulleted";


const Icon = props => <SvgIcon size={props.size || 20} icon={props.icon} />;


const SideNavWithAlerts = () =>
    <SideNav
        hoverBgColor="#00acac"
        hoverColor="#fff"
        highlightBgColor="#00acac"
        defaultSelected="Highlights"
        highlightColor="#FFF"
    >
        <div />
        <Link to="/" className="route-link">
            <Nav id="Highlights">
                <NavIcon><Icon icon={ic_aspect_ratio} /></NavIcon>
                <NavText> Highlights </NavText>
            </Nav>
        </Link>
        <Link to="/ActivityFeed" className="route-link">
            <Nav id="ActivityFeed">
                <NavIcon><Icon icon={ic_format_list_bulleted} /></NavIcon>
                <NavText>
                    {" "}<span style={{ paddingRight: 6 }}>ActivityFeed</span>{" "}
                    <span className="feedCount">10</span>
                </NavText>
            </Nav>
        </Link>
        <Link to="/WorldMap" className="route-link">
            <Nav id="WorldMap">
                <NavIcon><Icon icon={ic_business_center} /></NavIcon>
                <NavText> World Map </NavText>
            </Nav>
        </Link>
    </SideNav>;


class SideNavbar extends Component {

    render() {
        let sidebarClassname = this.props.showSidebar ? 'sidebarMain open' : 'sidebarMain closed';

        return (
            <aside className="asideLeft">
                <div className={sidebarClassname}>
                    <SideBarContainer>
                        <div style={{ display: "flex", padding: 16, background: "#1a2229" }}>
                            <div style={{ width: 40, height: 40 }}>
                                <img
                                    src="https://lh3.googleusercontent.com/-XFnI1imyojg/AAAAAAAAAAI/AAAAAAAABKA/jtbEPb9ZR48/s640-il/photo.jpg"
                                    style={{ borderRadius: "30px", width: 40, height: 40 }}
                                />
                            </div>
                            <div style={{ paddingLeft: 6, paddingTop: 6 }}>
                                <div style={{ fontSize: 12, color: "#E5E5E5" }}>
                                    {" "}Harshith Harry{" "}
                                </div>
                                <div style={{ fontSize: 11 }}> UI Developer </div>
                            </div>
                        </div>
                        <SideNavWithAlerts />
                    </SideBarContainer>

                </div>
            </aside>
        );
    }
}

export default SideNavbar;
