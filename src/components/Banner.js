import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
  return (
	<div className="banner">
		<img src={logo} alt='La maison jungle' className='lmj-logo' />
	  <h1 className='lmj-banner'>Making My own mothefucker banner</h1>
	</div>
  )
}

export default Banner
