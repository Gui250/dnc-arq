import './ProjectList.css';



// Assets
import LikedFilled from '../../assets/like-filled.svg';
import Like from '../../assets/like.svg';
function ProjectList(props) { 
    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className='projects-grid'>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>João Silva</h3>
                    <p>BH, Brazil</p>
                    <img src={LikedFilled} />
                </div>
            </div>
        </div>
    )
}


export default ProjectList