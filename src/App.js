import React, { useState, useEffect } from 'react';
import './App.css';

// --- Image Imports ---
import gojoImage from './assets/1gojocafe.png';
import hoshinoaiImage from './assets/hoshinoai.png';
import himenoImage from './assets/himeno.png';
import dreamfinalImage from './assets/dreamfinal.png';
import narutoImage from './assets/naruto.png';
import bubble61Image from './assets/bubble61.png';
import sakuraImage from './assets/2SAKURA.png';
import fspot4Image from './assets/FSPOT4.png';
import chutkiImage from './assets/desi-beauty.png';
import image112 from './assets/112.png';
import miraiImage from './assets/3mirai.png';
import desiBeautyImage from './assets/desi-beauty.png';
import jenekoLogo from './assets/JENEKO.png';
import mouseIcon from './assets/mouse.png';
import wandaImage from './assets/WANDA.png';
import fiverrIconImg from './assets/fiverr.png';
import xLogoImage from './assets/X.png'; // <-- Import X logo

// --- Data Arrays ---
const heroImages = [gojoImage, hoshinoaiImage, himenoImage, dreamfinalImage, narutoImage, bubble61Image, sakuraImage, fspot4Image, chutkiImage, image112, miraiImage];
const clientCommissionsData = [{ imgSrc: wandaImage, title: "WANDA", description: "The scarlet witch herself" }, { imgSrc: gojoImage, title: "Gojo Artwork", description: "He's enjoying his time in Maggilicious cafe" }, { imgSrc: narutoImage, title: "The Trio", description: "Another artwork created for the same client" }, { imgSrc: miraiImage, title: "Superhero", description: "Client reimagined as their favorite superhero" }, { imgSrc: fspot4Image, title: "Cynthia", description: "OC rework in my art style" }, { imgSrc: image112, title: "Lovely Gaze", description: "Commissioned to draw their favorite internet personality" }];
const personalProjectsData = [ { imgSrc: hoshinoaiImage, title: "Hoshino Ai Concert", description: "Dazzling stage with a star brighter than anything" }, { imgSrc: sakuraImage, title: "Sakura", description: "Cherry blossoms" }, { imgSrc: desiBeautyImage, title: "Desi Beauty", description: "An artwork dedicated to Indian attire" }, { imgSrc: dreamfinalImage, title: "Dream", description: "Peaceful yet dreadful" }, { imgSrc: himenoImage, title: "Himeno", description: "Stressfree" }, { imgSrc: bubble61Image, title: "Sienna", description: "OC, she loves bubblegums and guns" }];

// --- SVG Icon for Instagram ---
const InstagramIcon = () => (<svg fill="white" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.942a3.916 3.916 0 0 0-.923-1.417A3.916 3.916 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.095.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.095-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.095-.046 3.233-.046zm5.418 1.503a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.442a2.558 2.558 0 1 1 0 5.116 2.558 2.558 0 0 1 0-5.116z"/></svg>);

// --- Components ---
const Header = ({ scrolled }) => (<header className={`header ${scrolled ? 'scrolled' : ''}`}> <div className="logo"> <img src={jenekoLogo} alt="JENEKO Logo" className="logo-img" /> <span className="logo-text">JENEKO</span> </div> <nav className="nav-links"> <a href="#hero-section">Home</a> <a href="#personal-projects">Work</a> <a href="#client-commissions">Commissions</a> <a href="#contact-section">Contact</a> </nav> </header>);
const Hero = ({ images, activeIndex }) => (<section className="hero" id="hero-section"> <div className="hero-bg-slideshow"> {images.map((image, index) => ( <img key={image} src={image} alt="" className={`hero-bg-image ${index === activeIndex ? 'active' : ''}`} /> ))} </div> <div className="hero-content"> <img src={jenekoLogo} alt="JENEKO Logo" className="hero-logo" /> <h1>JENEKO</h1> <p>I'm JENEKO, a digital artist based in India. I mainly draw semi-realistic artworks, characters, fanarts, and explore a variety of styles. I use Adobe Photoshop for most of my creative work.</p> <a href="#personal-projects" className="hero-button">View my Work</a> </div> <div className="scroll-icon-container"> <img src={mouseIcon} alt="Scroll down" /> </div> </section>);

const SocialLinks = () => (
    <section className="social-links">
        <div className="container">
            <h2>Find Me On</h2>
            <p>Connect with me across different platforms</p>
            <div className="social-icons">
                <a href="https://www.instagram.com/_jeneko/" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                    <InstagramIcon />
                    <span>Instagram</span>
                </a>
                <a href="https://x.com/_Jeneko" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                    <img src={xLogoImage} alt="X Logo" />
                    <span>Twitter</span>
                </a>
                <a href="https://www.fiverr.com/sellers/jenart410/edit" target="_blank" rel="noopener noreferrer" className="social-icon-item">
                    <img src={fiverrIconImg} alt="Fiverr" />
                    <span>Fiverr</span>
                </a>
            </div>
        </div>
    </section>
);

const PortfolioItem = ({ imgSrc, title, description }) => ( <div className="portfolio-item"> <div className="portfolio-image-container"> <img src={imgSrc} alt={title} /> </div> <div className="portfolio-info"> <h3>{title}</h3> <p>{description}</p> </div> </div> );
const PortfolioSection = ({ id, title, subtitle, items }) => ( <section className="portfolio" id={id}> <div className="container"> <header className="portfolio-header"> <h2>{title}</h2> <p>{subtitle}</p> </header> <div className="portfolio-grid"> {items.map((item, index) => ( <PortfolioItem key={index} imgSrc={item.imgSrc} title={item.title} description={item.description} /> ))} </div> </div> </section> );

const Contact = () => (
    <section className="contact" id="contact-section">
        <h2>Let's Connect</h2>
        <p>Ready to bring your vision to life? Get in touch!</p>
        <div className="contact-grid">
            <div className="contact-card"> <svg fill="white" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg> <span>Location</span> <a href="#">India</a> </div>
            <div className="contact-card"> <svg fill="white" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg> <span>Email</span> <a href="mailto:jen.art410@gmail.com">jen.art410@gmail.com</a> </div>
            <div className="contact-card"> <InstagramIcon /> <span>Instagram</span> <a href="https://www.instagram.com/_jeneko/" target="_blank" rel="noopener noreferrer">@_jeneko</a> </div>
            <div className="contact-card"> <img src={xLogoImage} alt="X Logo" className="footer-x-icon" /> <span>Twitter</span> <a href="https://x.com/_Jeneko" target="_blank" rel="noopener noreferrer">@_jeneko</a> </div>
        </div>
    </section>
);

const Footer = () => ( <footer className="footer"> © 2025 _JENEKO. All rights reserved. | Digital Artist & Creative Professional </footer> );

// --- Main App Component ---
function App() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => { const timer = setInterval(() => { setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length); }, 5000); return () => clearInterval(timer); }, []);
    useEffect(() => { const handleScroll = () => { const isScrolled = window.scrollY > 50; if (isScrolled !== scrolled) { setScrolled(isScrolled); } }; document.addEventListener('scroll', handleScroll, { passive: true }); return () => document.removeEventListener('scroll', handleScroll); }, [scrolled]);
    return ( <div> <Header scrolled={scrolled} /> <main> <Hero images={heroImages} activeIndex={currentImageIndex} /> <SocialLinks /> <PortfolioSection id="client-commissions" title="Client Commissions" subtitle="Bringing client visions to life through digital art" items={clientCommissionsData} /> <PortfolioSection id="personal-projects" title="Personal Projects" subtitle="Creative expressions and artistic explorations" items={personalProjectsData} /> <Contact /> </main> <Footer /> </div> );
}

export default App;