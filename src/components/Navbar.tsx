import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSubHome, setShowSubHome] = useState(false);

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
              <div className="logo-container">
                <Image
                  src="/logo1.png"
                  alt="JIVO ENERGY"
                  width={150}
                  height={50}
                  className="object-contain"
                />
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