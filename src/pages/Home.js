function Home () {
	return(
		<div>
			<div id='tagdiv'>
				<h2 id='tagline'>Where Little Hearts Grow, Learn, and Shine Brightly</h2>
			</div>
			<div id="homeImg">
			 <img src={require('../img/istockphoto-1397844973-170667a.webp')} alt='kids at school'></img>
			</div>

      <form className='formsec'>
			 <h2 className='title is-3'>Fill out this form to learn more!</h2>
			 <div className='field'>
				 <label className='label'>First Name</label>
				 <div className='control'>
					 <input className='input' type='text' placeholder='First Name'/>
				 </div>
			 </div>

			 <div className='field'>
				 <label className='label'>Last Name</label>
				 <div className='control'>
					 <input className='input' type='text' placeholder='Last Name'/>
				 </div>
			 </div>

			 <div className='field'>
				 <label className='label'>Email</label>
				 <div className='control has-icons-left has-icons-right'>
					 <input className='input' type='email' placeholder='Email'/>
				   <span className='icon is-small is-left'>
					   <i className='fas fa-envelope'></i>
					  </span>
					 <span className='icon is-small is-right'>
						 <i className='fas fa-exclamation-triangle'></i>
					  </span>
				 </div>
			  </div>

			 <div className='field'>
				 <label className='label'>Message</label>
				 <div className='control'>
					 <textarea className='textarea' placeholder='Message'></textarea>
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