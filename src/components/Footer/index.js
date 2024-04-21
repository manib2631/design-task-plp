import './index.css';

function Footer (){
    return(
    <div className='Footer-block'>
    <div className='footer-top'>
    <div className='to-know-content'>
        <h1 className='footer-heading'>BE THE THE FIRST TO KNOW</h1>
        <p className='footer-top-content'>Sign up for updates from mettā muse.</p>
        <div className='subscriber-content'>
            <input  className=" input" placeholder="Enter your e-mail" />
            <p className='subscribe'>Subscribe</p>
        </div>
    </div>
    <div >
        <h1 className='footer-heading'>Contact Us</h1>
        <p className='footer-top-content'>+44 221 133 5360</p>
        <p className='footer-top-content'>customercare@mettamuse.com</p>
        <h1 className='footer-heading'>Currency</h1>
        <div className='usd-content'>
            <img src="assets/United States of America (US).svg" alt="usd"/>
            <img src="assets/Star 1.svg" alt="star"/>
            <p>USD</p>
        </div>
        <p className='hide-on-mobile'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
    </div>
    </div>
    <hr/>
    <div className='footer-bottom'>
        {/* <div className='links-content'> */}
            <div>
                <h1 className='footer-heading'>mettā muse</h1>
                <p className='footer-heading-content'>About Us</p>
                <p className='footer-heading-content'>Stories</p>
                <p className='footer-heading-content'>Artisans</p>
                <p className='footer-heading-content'>Boutiques</p>
                <p className='footer-heading-content'>Contact Us</p>
                <p className='footer-heading-content'>EU Compliances Docs</p>
            </div>
            <div>
                <h1 className='footer-heading' >Quick Links</h1>
                <p className='footer-heading-content'>Orders & Shipping</p>
                <p className='footer-heading-content'>Join/Login as a Seller</p>
                <p className='footer-heading-content'>Payment & Pricing</p>
                <p className='footer-heading-content'>Return & Refunds</p>
                <p className='footer-heading-content'>FAQs</p>
                <p className='footer-heading-content'>Privacy Policy</p>
                <p className='footer-heading-content'>Terms & Conditions</p>
                
            </div>
        {/* </div> */}
        
        <div className='follow-content'>
            <h1 className='footer-heading'>Follow Us</h1>
            <div>
                <img/>
                <img/>
            </div>
            <h1 className='footer-heading'>mettā muse Accepts</h1>
            <div className='payments-content'>
                <img className="payment-img" src="assets/Group 136188.svg" alt="usd" />
                <img className="payment-img" src="assets/Group 136190.svg" alt="usd" />
                <img className="payment-img" src="assets/Group 136192.svg" alt="usd"/>
                <img className="payment-img" src="assets/Group 136193.svg" alt="usd"/>
                <img className="payment-img" src="assets/Group 136194.svg" alt="usd"/>
                <img className="payment-img" src="assets/Group 136195.svg" alt="usd"/>
            </div>
        </div>
        </div>
        <p className='copy-right'>Copyright © 2023 mettamuse. All rights reserved.</p>
</div>
    )
}
export default Footer