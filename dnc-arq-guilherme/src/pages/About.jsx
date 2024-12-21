import Banner from "../components/Banner/Banner";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutText from '../components/AboutText/AboutText';

function About() { 
    return ( 
        <>
            <Header />
            <Banner title="About" image="About.jpg" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    )
}


export default About;