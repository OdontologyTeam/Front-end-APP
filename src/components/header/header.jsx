import React from 'react';
import {
	Nav,
	Navbar,
	NavbarBrand,
	Collapse,
	DropdownItem,
	Button,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu
} from 'reactstrap';

import profilephoto from '../../assets/images/users/maral.jpg';
import { Link } from 'react-router-dom'

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../assets/images/logo-icon.png';
import logolighticon from '../../assets/images/logo-light-icon.png';
import logodarktext from '../../assets/images/logo-text.png';
import logolighttext from '../../assets/images/logo-light-text.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.showMobilemenu = this.showMobilemenu.bind(this);
		this.state = {
			isOpen: false
		};
	}
	/*--------------------------------------------------------------------------------*/
	/*To open NAVBAR in MOBILE VIEW                                                   */
	/*--------------------------------------------------------------------------------*/
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	/*--------------------------------------------------------------------------------*/
	/*To open SIDEBAR-MENU in MOBILE VIEW                                             */
	/*--------------------------------------------------------------------------------*/
	showMobilemenu() {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar');
	}

	// Cerrar Sesión	
	handleClickLogout = event => {
		// TODO: Crear la lógica para cerrar sesión 
		console.log('loged out')
	}

	render() {
		return (
			<header className="topbar navbarbg" data-navbarbg="skin1">
				<Navbar className="top-navbar" dark expand="md">
					<div className="navbar-header" id="logobg" data-logobg="skin6">
						{/*--------------------------------------------------------------------------------*/}
						{/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
						{/*--------------------------------------------------------------------------------*/}
						<NavbarBrand href="/">
							<b className="logo-icon">
								<img src={logodarkicon} alt="homepage" className="dark-logo" />
								<img
									src={logolighticon}
									alt="homepage"
									className="light-logo"
								/>
							</b>
							<span className="logo-text">
								<img src={logodarktext} alt="homepage" className="dark-logo" />
								<img
									src={logolighttext}
									className="light-logo"
									alt="homepage"
								/>
							</span>
						</NavbarBrand>
						{/*--------------------------------------------------------------------------------*/}
						{/* Mobile View Toggler  [visible only after 768px screen]                         */}
						{/*--------------------------------------------------------------------------------*/}
						<a className="nav-toggler d-block d-md-none" onClick={this.showMobilemenu}>
							<i className="ti-menu ti-close" />
						</a>
					</div>
					<Collapse className="navbarbg" isOpen={this.state.isOpen} navbar data-navbarbg="skin1" >
						<Nav className="ml-auto float-right" navbar>
							{/*--------------------------------------------------------------------------------*/}
							{/* Start Profile Dropdown                                                         */}
							{/*--------------------------------------------------------------------------------*/}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="pro-pic">
									<img
										src={profilephoto}
										alt="user"
										className="rounded-circle"
										width="31"
										height="31"
										style={{objectFit: "cover"}}
									/>
								</DropdownToggle>
								<DropdownMenu right className="user-dd">
									<DropdownItem>
										<Link 
											to="/ajustes-de-perfil"
											className="text-dark"
										>
											<i className="ti-settings mr-1 ml-1" /> Ajustes de cuenta
										</Link>
                  </DropdownItem>
									<DropdownItem divider />
									{
										/**
										 * TODO: Cambiar link por el de la landing page
										 */
									}
									<DropdownItem
										href="https://www.google.com"
										className="text-dark"
									>
										<i className="fas fa-external-link-alt mr-1 ml-1"/> Ir a sitio principal
									</DropdownItem>
									<Button
										color="danger"
										className="btn-rounded ml-3 mb-2 mt-2"
										onClick={this.handleClickLogout}
									>
										<i className="fa fa-power-off mr-1 ml-1" /> Cerrar Sesión
                  </Button>
								</DropdownMenu>
							</UncontrolledDropdown>
							{/*--------------------------------------------------------------------------------*/}
							{/* End Profile Dropdown                                                           */}
							{/*--------------------------------------------------------------------------------*/}
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}
export default Header;
