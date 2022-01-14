import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from '../NavbarElements'




const NavigationBar = () => {
	return (
		<>
			<Nav>
				<Bars />


				<NavMenu>
					<table>
						<tr>
							<th>
								<NavLink to='/Schedule' activeStyle>
									Schedule
								</NavLink>
							</th>
							<th>
								<NavLink to='/Userprofile' activeStyle>
									User Profile
								</NavLink>
							</th>
							<th>
								<NavLink to='/Exerciselist' activeStyle>
									Exercise List
								</NavLink>
							</th>
							<th>
								<NavLink to='/Progressionchart' activeStyle>
									Progression Chart
								</NavLink>
							</th>
							<th>
								<NavLink to='/RepProgress' activeStyle>
									Rep Progress
								</NavLink>
							</th><th width="1000px"></th><th className='logoutCell'>
								<NavLink to='/Logout' activeStyle>
									Logout
								</NavLink>
							</th>
						</tr>
					</table>
				</NavMenu>

			</Nav>
		</>
	);
};



export default NavigationBar