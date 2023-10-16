import './App.css';
import Index from './pages/index'; // Importing the Section
import companyLogo from './assets/logo.png'; 
import closeIcon from './assets/close.svg'; 

function App() {
  return (
    <div className='app_container'>
        <nav class="navbar">
            <div class="image_container">
                <img className='logo' src={companyLogo} alt="" />
                <img className='close' src={closeIcon} alt="" />
            </div>

            <ul class="navbar-nav">
                <li class="nav-item">Contact us</li>
                <li class="nav-item">Contact us</li>
                <li class="nav-item">Pricing</li>
                <li class="nav-item dropdown"> Pricing
                    <div className="container">
                        <Index/>
                    </div>
                </li>
            </ul>
            <div className="btn_container">
                <div className="btn filled">Get A Demo</div>
                <div className="btn">Sign In</div>
            </div>
        </nav>

       

    </div>
  );
}

export default App;
