import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
// import Calendar from './pages/Calender'
// import ContactUs from './pages/ContactUs'
// import Enrollment from './pages/Enrollment'
// import MeetTheTeam from './pages/MeetTheTeam'

function App() {
  return (
		<div className='App'>
			<header>
				<Navigation />
				<Container>
					<Router>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/aboutus' element={<AboutUs />} />
						</Routes>
					</Router>
				</Container>
			</header>
			<Footer />
		</div>
  );
}

export default App;
