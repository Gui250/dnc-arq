import Header from "../components/header/Header";
import Footer from '../components/footer/Footer';
import Button from "../components/Button/Button";
import Banner from "../components/Banner/Banner"; 

function Home() { 
    return (
        <>
            <Header /> 
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="primary" arrow>Olá!</Button>
            <Banner title="Home" image="About.jpg"/>
            <Footer />
        </>
    )
}

export default Home; 