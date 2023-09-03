import './header.css'
import logo from './images/logo.png'
import eye from './images/eye.png'


function Header() {
  return (
    <header>
      <div className='dollar'>
        <img src={logo} alt='logo' />
      </div>
      <div className='link-wrap'>
        <ul>
          <li>Sign in</li>
          <li>LEGAL</li>
          <li>Licences</li>
          <li>security</li>
          <li>career</li>
          <li>press</li>
          <li>support</li>
          <li>status</li>
          <li>codeblog</li>
        </ul>
      </div>
      <div className='eye'>
      <img src={eye} alt='eye' />
      </div>

    </header>
  );
}

export default Header;
