// ProjectList.jsx
import { useState, useEffect } from 'react';
import './ProjectList.css';

// Assets
import LikedFilled from '../../assets/like-filled.svg';
import Like from '../../assets/like.svg';

// Utils
import { getApiData } from '../../services/apiServices';

function ProjectList(props) { 
    const [projects, setProjects] = useState([]); // Inicializa com array vazio

    useEffect(() => { 
        const fetchData = async () => { 
            try { 
                const projectsResponse = await getApiData('projects');
                console.log(projectsResponse);
                setProjects(projectsResponse || []); // Garante array mesmo em erro
            } catch (e) {
                console.error('Error fetching projects:', e);
                setProjects([]);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>Discover our latest projects and see what we have been working on recently.</p>
            </div>
            <div className='projects-grid'>
                {
                    projects.length > 0 ? projects.map((project) => (
                        <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            <div className='thumb tertiary-background'
                                style={{backgroundImage: `url(${project.thumb})`}}>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <img src={LikedFilled} alt="Liked" height="20px" />
                        </div>
                    )) : <p>No projects available.</p>
                }
            </div>
        </div>              
    );
}

export default ProjectList;
