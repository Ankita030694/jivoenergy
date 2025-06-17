import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSubHome, setShowSubHome] = useState(false);
  const [showLogoDropdown, setShowLogoDropdown] = useState(false);

  const handleTrapezoidEnter = () => {
    setIsHovered(true);
  };

  const handleTrapezoidLeave = () => {
    setIsHovered(false);
    setShowSubHome(false);
  };

  const handleExpandHomeHover = () => {
    setShowSubHome(true);
  };

  const handleSubnavHover = () => {
    setShowSubHome(false);
  };

  const handleLogoHover = () => {
    setShowLogoDropdown(true);
  };

  const handleLogoLeave = () => {
    setShowLogoDropdown(false);
  };

  return (
    <div className="min-w-full">
      <style jsx>{`
        body {
          min-width: 800px;
          margin: 0px;
        }

        .trapezoid {
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
          height: 0;
          border: 80px solid rgba(0,0,0,0);
          border-top: 0 solid;
          border-bottom: 100px solid rgba(10, 92, 53, 0.95);
          -webkit-border-radius: 20px 20px 0 0;
          border-radius: 20px 20px 0 0;
          font: normal 100%/normal Arial, Helvetica, sans-serif;
          color: rgba(0,0,0,0.7);
          -o-text-overflow: clip;
          text-overflow: clip;
          -webkit-transform: rotateX(180deg);
          transform: rotateX(180deg);
          margin-top: -23px;
          width: 1000px;
          position: relative;
          transition: all 0.7s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }

        .trapezoid-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 53px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          box-sizing: border-box;
          -webkit-transform: rotateX(180deg);
          transform: rotateX(180deg);
        }

        .nav-items-left, .nav-items-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          flex-shrink: 0;
          position: relative;
        }

        .logo-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(10, 92, 53, 0.98);
          border-radius: 12px;
          padding: 15px 0;
          display: none;
          flex-direction: column;
          min-width: 250px;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo-dropdown.show {
          display: flex;
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .logo-dropdown::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: rgba(10, 92, 53, 0.98);
          transform: rotate(45deg);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo-dropdown a {
          color: white;
          text-decoration: none;
          padding: 12px 25px;
          transition: all 0.3s ease;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          display: flex;
          align-items: center;
        }

        .logo-dropdown a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: rgba(255, 255, 255, 0.8);
          transition: height 0.3s ease;
        }

        .logo-dropdown a:hover {
          background: rgba(255, 255, 255, 0.1);
          padding-left: 30px;
        }

        .logo-dropdown a:hover::before {
          height: 70%;
        }

        .logo-dropdown a:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .trapezoid a, .subnavbtn {
          -webkit-transform: none;
          transform: none;
          white-space: nowrap;
          position: relative;
          z-index: 2;
        }

        .navbar {
          position: sticky;
          top: 0;
          display: flex;
          overflow: visible;
          justify-content: center;
          height: 100px;
          background: transparent;
          width: 100%;
          z-index: 50;
        }

        .navbar a {
          font-size: 14px;
          color: white;
          text-align: center;
          padding: 14px 15px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.5s ease;
        }

        .subnav {
          overflow: hidden;
        }

        .subnav .subnavbtn {
          font-size: 14px;
          border: none;
          outline: none;
          color: white;
          padding: 14px 15px;
          background-color: inherit;
          font-family: inherit;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.5s ease;
          cursor: pointer;
        }

        .navbar a:hover, .subnav:hover .subnavbtn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 5px;
        }

        .subnav-content {
          display: none;
          position: absolute;
          left: 0;
          width: 100%;
          z-index: 1;
          transform: perspective(-10px);
        }

        .subnav-content a {
          float: left;
          color: white;
          text-decoration: none;
        }

        .subnav-content a:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .subnav:hover .subnav-content {
          display: flex;
          justify-content: center;
        }

        .subnav-trapezoid {
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
          height: 0;
          border: 80px solid rgba(0,0,0,0);
          border-top: 0 solid;
          border-bottom: 100px solid rgba(10, 92, 53, 0.95);
          -webkit-border-radius: 20px 20px 0 0;
          border-radius: 20px 20px 0 0;
          -webkit-transform: rotateX(180deg);
          transform: rotateX(180deg);
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 0 20px 20px 20px;
        }

        .subnav-trapezoid a {
          -webkit-transform: rotateX(180deg);
          transform: rotateX(180deg);
          margin: 0 10px;
        }
      `}</style>

      <div className="min-w-full fixed z-50">
        <nav className="navbar">
          <div 
            className="trapezoid"
            onMouseEnter={handleTrapezoidEnter}
            onMouseLeave={handleTrapezoidLeave}
          >
            <div className="trapezoid-content">
              <div className="nav-items-left">
                <a className="sub-home" href="/">Home</a>
                <a href="#Projects">Projects</a>
                <a href="/gallery">Gallery</a>
                <a href="#CSR">CSR</a>

              </div>
              <div className="logo-container"
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
              >
                <Image
                  src="/logo1.png"
                  alt="JIVO ENERGY"
                  width={150}
                  height={50}
                  className="object-contain"
                />
                <div className={`logo-dropdown ${showLogoDropdown ? 'show' : ''}`}>
                  <a href="business-areas">
                    <span>Business Areas</span>
                  </a>
                  <a href="our-capabilities">
                    <span>Capabilities</span>
                  </a>
                  <a href="#theme">
                    <span>Theme</span>
                  </a>
                  <a href="partners">
                    <span>Partner</span>
                  </a>
                  <a href="#certification">
                    <span>Certification</span>
                  </a>
                </div>
              </div>
              <div className="nav-items-right">
                <a href="#Media">Media</a>
                <a href="#ESG">ESG</a>

                <a href="/careers">Careers</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;