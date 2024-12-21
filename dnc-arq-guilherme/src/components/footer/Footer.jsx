import {  Link  } from 'react-router-dom';
import './Footer.css'; 

// Assets
import './Footer.css';
import Logo from '../../assets/dnc-logo 2.svg'
import BrazilLogo from '../../assets/brazil.svg';
import UsaLogo from '../../assets/usa.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import TwitterIcon from '../../assets/twitter.svg';


function Footer() { 
    return(
        <footer>
            <div className='container'>
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <img src={Logo} />
                        <p className='gray-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className='d-flex social-links'>
                            <a href='https://google.com' target='_blank'>
                                <img src={FacebookIcon} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={TwitterIcon} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={LinkedinIcon} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={InstagramIcon} />
                            </a>
                            <div className='d-flex'>
                                <div className='footer-col'>
                                    <ul>
                                        <h3>Pages</h3>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className='footer-col'>
                                    <h3>Contact</h3>
                                    <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                                    <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                                    <p className='grey-1-color'>(19) 99187-4342</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                        <p className='grey-1-color'>Copyright © DNC - 2024</p>
                        <div className='langs-area d-flex'>
                            <img src={BrazilLogo} height='29px' /> 
                            <img src={UsaLogo} height='29px' />
                        </div>
                    </div>
            </div>
        </footer>
    )
}


export default Footer; 