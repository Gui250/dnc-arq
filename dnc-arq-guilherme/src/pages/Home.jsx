import Header from "../components/header/Header";
import Footer from '../components/footer/Footer';
import Hero from "../components/Hero/Hero";
import ProjectList from "../components/ProjectsList/ProjectList";

function Home() { 
    return (
        <>
            <Header /> 
            <h1>Home</h1>
            <p>Subtitle</p>
            <div className="container">
                <Hero />
                <ProjectList />
            </div>
            <Footer />
        </>
    )
}

export default Home; 