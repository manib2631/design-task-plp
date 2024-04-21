
import './index.css';

function Navbar(){
return(
    <div className="nav-container">
        <div className='dolor-content'>
        <div className="top-content hide-on-mobile">
            <img className="dolor-img" src="assets/element-4.svg" alt="element" />
            <p className="dolor-heading">Lorem ipsum dolor</p>
        </div>
        <div className="top-content hide-on-mobile">
            <img className="dolor-img" src="assets/element-4.svg" alt="element" />
            <p className="dolor-heading">Lorem ipsum dolor</p>
        </div>
        <div className="top-content">
            <img className="dolor-img" src="assets/element-4.svg" alt="element" />
            <p className="dolor-heading">Lorem ipsum dolor</p>
        </div>
        </div>
        <div className="navbar-container">
            <div className="nav-content">
                <img className='nav-img group-icon' src="assets/solar_hamburger-menu-linear.svg" alt="Group" />
                <img className='nav-img' src="assets/Logo.svg" alt="Logo" />
            </div>
            <div>
                <h1 className='logo-heading'>LOGO</h1>
            </div>
            <div className="nav-content">
                <img className='nav-img' src="assets/search-normal.svg" alt="search" />
                <img className='nav-img' src="assets/heart.svg" alt="heart" />
                <img className='nav-img' src="assets/shopping-bag.svg" alt="shopping" />
                <img className='nav-img group-profile' src="assets/profile.svg" alt="profile" />
                <img className='nav-img group-profile' src="assets/ENG.svg" alt="eng" />
                <img className='nav-img group-profile' src="assets/arrow-left.svg" alt="arrow" />
            </div>
        </div>  
            <div className='nav-component'>
                <p className='component-content show'>Home</p>
                <p className='component-content show'>SHOP</p>
                <p className='component-content'>SKILLS</p>
                <p className='component-content'>STORIES</p>
                <p className='component-content'>ABOUT</p>
                <p className='component-content'>CONTACT US</p>
            </div>
            <hr/>
            
    </div>
)
}
export default Navbar