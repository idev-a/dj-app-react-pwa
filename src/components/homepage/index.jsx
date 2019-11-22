import React, { useState } from 'react';
import Navbar from '../ui/navbar';
import { Link } from 'react-router-dom';
import FBLogin from '../ui/FBLogin';
import { Button } from 'antd';
import { isIos, isInStandaloneMode } from '../../utils';
import AddToHomeScreen from '../AddToHomeScreen';

// Checks if should display install popup notification:
const showIOSNotification = isIos() && !isInStandaloneMode();

const Homepage = (props) =>  {
    const [showAddToScreenIOSOverlay, setShowAddToScreenIOSOverlay] = useState(showIOSNotification);
    return (
      <div className="mainWrapper">
        <div className="bg-colored">
          <section className="section-adjust flex-center">
            <div className="container-adjust overlay-img">
              <Navbar />
              <div className="pd-res">
                <div>
                  <img className="full-width logo-realign" src="../img/hearbk.png" alt="" />
                </div>
                <div>
                  <h1 className="mb-none text-white text-bold">We Are</h1>
                  <h1 className="mb-none text-white text-bold">The Music</h1>
                  <h1 className="text-white text-bold">Influencers</h1>
                </div>
                <div className="mb-1 flex-center">
                  <Link className="full-width" to="/auth">
                    <Button size="large" className="border-rad-none btn-email">
                      Login with email
                    </Button>
                  </Link>
                </div>
                {/* <div className="flex-center">
                  <FBLogin />
                </div> */}
                <div className="text-center mb-1">
                  <Link to="/" className="text-primary text-bold" >Trouble Logging In?</Link>
                </div>
                <div className="text-center">
                  <p className="p-small text-white">By clicking Login, you agree to our Terms, Learn how we process your data in our <Link to="/" className="text-primary">Privacy Policy</Link> and <Link to="/" className="text-primary">Cookie Policy</Link></p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {showAddToScreenIOSOverlay && <AddToHomeScreen closeClick={() => setShowAddToScreenIOSOverlay(false)}/>}
      </div>
    )
};

export default Homepage;
