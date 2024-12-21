import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import ProjectList from '../components/ProjectsList/ProjectList';
import Footer from "../components/footer/Footer";
import Header from '../components/header/Header';
function Projects() { 
    return(
        <>
            <Header />
            <Banner title="projects" image="Projects.jpg"/>
            <div className='container'>
                <ProjectList />
            </div>
            <Footer />
        </>
    )
}

export default Projects;