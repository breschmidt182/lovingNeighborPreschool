import 'bootstrap/dist/css/bootstrap.css';

function Home () {
	return(
		<div>
			<div id='tagdiv'>
				<h2 id='tagline'>Where Little Hearts Grow, Learn, and Shine Brightly</h2>
			</div>
		  <img className="homeImg" src={require('../img/istockphoto-1397844973-170667a.webp')} alt='kids at school'></img> 
			 <div id='missiondiv'>
				 <h2 id='mission'>At Loving Neighbors Preschool, we embrace a profound sense of purpose, echoing the values and vision of Northern Lakes Community Church. Our mission is to extend a hand of love and service to our community, addressing the pressing need for accessible childcare in the Grand Traverse area.
					 Loving Neighbors Preschool is a testament to our commitment to making dreams a reality. With open hearts and open doors, we welcome families from all walks of life to join us on this remarkable journey of love, learning, and community-building. 
					 Together, we embrace the future with hope, knowing that by loving our neighbors, we can make a lasting impact on the lives of our children and families.
				 </h2>
			 </div>
      <form className='formsec form-horizontal' id='form'>
			 <h2 className='title is-3'>Fill out this form to learn more!</h2>
			 <div className='field'>
				 <label className='label control-label' for="fname">First Name</label>
				 <div className='control'>
					 <input className='input' type='text' placeholder='First Name' id='fname'/>
				 </div>
			 </div>

			 <div className='field'>
				 <label className='label control-label' for="lname">Last Name</label>
				 <div className='control'>
					 <input className='input' type='text' placeholder='Last Name' id='lname'/>
				 </div>
			 </div>

			 <div className='field'>
				 <label className='label control-label' for="email">Email</label>
				 <div className='control has-icons-left has-icons-right'>
					 <input className='input' type='email' placeholder='Email' id='email'/>
				   <span className='icon is-small is-left'>
					   <i className='fas fa-envelope'></i>
					  </span>
					 <span className='icon is-small is-right'>
						 <i className='fas fa-exclamation-triangle'></i>
					  </span>
				 </div>
			  </div>

			 <div className='field'>
				 <label className='label control-label' for="message">Message</label>
				 <div className='control'>
					 <textarea className='textarea' placeholder='Message' id='message'></textarea>
				 </div>
			 </div>

			 <div className='field is-grouped'>
			   <div className='control'>
					 <button className='button is-link' id='sendbttn'> Submit</button>
			    </div>
			 </div>
			</form>
		</div>
	)
}
export default Home