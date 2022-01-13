import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from '../NavbarElements'




const NavigationBar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/Schedule' activeStyle>
						Schedule
					</NavLink>
					<NavLink to='/Userprofile' activeStyle>
						User Profile
					</NavLink>
					<NavLink to='/Exerciselist' activeStyle>
						Exercise List
					</NavLink>
					<NavLink to='/Progressionchart' activeStyle>
						Progression Chart
					</NavLink>
					<NavLink to='/RepProgress' activeStyle>
						Rep Progress
					</NavLink>
					<NavLink to='/Logout' activeStyle>
						Logout
					</NavLink>
				</NavMenu>

			</Nav>
		</>
	);
};



export default NavigationBar