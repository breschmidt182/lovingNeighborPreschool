import 'bulma/css/bulma.min.css';
const Navigation = (props) => {
	return(
		<nav id= 'nav' className='navbar is-spaced is-light has-shadow' role='navigation' open-sans= "main navigation">
			<div className="navbar-brand scale-in-hor-left">
       <a className="navbar-item title is-4" id='navName' href="/">
			 	 <img src={require('../img/logo.png')} alt='logo'></img> 
			   Loving Neighbor Preschool
	     </a>
      </div>
			<div id='navbarBasicExample' className='navbar-end navbar-menu has-dropdown is-active title is-4'>
				<a className='navbar-item slide-in-right' id='navItem' href='/aboutus'>About Us</a>
				<a className='navbar-item slide-in-right' id='navItem'  href='/staff'>Meet the Team</a>
				<a className='navbar-item slide-in-right' id='navItem'  href='/calendar'>Calendar</a>
				<a className='navbar-item slide-in-right' id='navItem' href='/contactus'>Contact Us</a>
				<a className='navbar-item slide-in-right' id='navItem' href='/enrollment'>Enrollment</a>
			</div>
		</nav>
	)
}

export default Navigation