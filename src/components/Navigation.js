import 'bulma/css/bulma.min.css';
const Navigation = (props) => {
	return(
	 <>
		<nav id= 'nav' className='navbar is-spaced is-light has-shadow' role='navigation' aria-label= "main navigation">
			<div className="navbar-brand scale-in-hor-left">
       <a className="navbar-item title is-4" id='navName' href="/">
			 	 <img src={require('../img/logo.png')} alt='logo' id='logo'></img> 
	     </a>
      </div>
			<div id='navbarBasicExample' className='navbar-menu has-dropdown  title is-4'>
				<ul className='navbar-end'>
					<li>
						<a className='navbar-item slide-in-right' id='navItem' href='/aboutus'>About Us</a>
					</li>
					<li>
						<a className='navbar-item slide-in-right' id='navItem'  href='/staff'>Meet the Team</a>
					</li>
					<li>
						<a className='navbar-item slide-in-right' id='navItem'  href='/calendar'>Calendar</a>
					</li>
					<li>
						<a className='navbar-item slide-in-right' id='navItem' href='/contactus'>Contact Us</a>
					</li>
					<li>
						<a className='navbar-item slide-in-right' id='navItem' href='/enrollment'>Enrollment</a>
					</li>
			  </ul>
			</div>
		</nav>

	 </>
	)
}

export default Navigation