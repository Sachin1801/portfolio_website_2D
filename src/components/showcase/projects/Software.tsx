import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
// @ts-ignore
import image from '../../../assets/pictures/projects/software/image.png';
// @ts-ignore
import jobImage from '../../../assets/pictures/projects/software/job.png';
// @ts-ignore
import marketImage from '../../../assets/pictures/projects/software/market.png';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Simplified Job Tracker Chrome Extension</h2>
                <br />
                <p>
                    Simplified Job Tracker is a Chrome extension designed to help job seekers keep track of their job applications 
                    effortlessly. It allows users to save job postings, track application statuses, and set reminders for follow-ups.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={jobImage} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure:</b> Screenshot of the Simplified Job Tracker Chrome extension interface
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Sachin1801/Simplified_Job_Tracker"
                        >
                            <p>
                                <b>[GitHub]</b> - Simplified Job Tracker Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>MarketplAIce</h2>
                <br />
                <p>
                    MarketplAIce is an AI-powered marketplace platform that connects buyers and sellers in a seamless and intelligent way. 
                    The platform leverages machine learning algorithms to provide personalized recommendations and optimize the buying and 
                    selling experience.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={marketImage} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure:</b> Screenshot of the MarketplAIce platform interface
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Sachin1801/marketplAIce"
                        >
                            <p>
                                <b>[GitHub]</b> - MarketplAIce Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>9thgen.ai</h2>
                <br />
                <p>
                    9thgen.ai is a cutting-edge AI platform designed to provide advanced AI solutions for various industries. The platform 
                    offers a range of AI services, including natural language processing, computer vision, and predictive analytics.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={image} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure:</b> Screenshot of the 9thgen.ai platform interface
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.9thgen.ai/"
                        >
                            <p>
                                <b>[Deployment]</b> - 9thgen.ai
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>sachinadlakha.com</h2>
                <br />
                <p>
                    This is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2024, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early June and began
                    development early July. I've been developing it alongside
                    my first semester at NYU and if you are reading this, it's
                    pretty much done!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://sachinadlakha.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://sachinadlakha3d.vercel.app/"
                        >
                            <p>
                                <b>[3D Site]</b> - https://sachinadlakha3d.vercel.app/
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://sachinadlakha.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - https://sachinadlakha.vercel.app/
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Sachin1801/portfolio_website_3D"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Sachin1801/portfolio_website_2D"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on X(formerly twitter){' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/sachinadlakha18"
                    >
                        @sachinadlakha18
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>3D Tic-Tac-Toe</h2>
                <br />
                <p>
                3D Tic-Tac-Toe is an innovative take on the classic game that I developed using Next.js and modern web technologies. 
                This project transforms the traditional 2D game board into an immersive 3D experience, challenging players to think 
                strategically across multiple dimensions while maintaining the familiar gameplay mechanics that everyone knows and loves.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> 3D Tic-Tac-Toe game interface showcasing 
                                the three-dimensional game board and intuitive player controls.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                One of the most interesting technical challenges in developing this game was implementing the win-checking algorithm 
                for a 3D space. Unlike traditional Tic-Tac-Toe where you only need to check rows, columns, and diagonals in 2D, 
                the 3D version requires checking winning combinations across multiple planes and diagonal spaces in three dimensions. 
                I solved this by developing an efficient algorithm that tracks all possible winning combinations while maintaining 
                smooth gameplay performance. The project also features responsive design principles, ensuring that the 3D rendering 
                works seamlessly across different screen sizes and devices.
                    
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Sachin1801/3D-Tik-Tac-Toe?tab=readme-ov-file"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Tic-Tac-Toe Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://sachin-3-d-tik-tac-toe-1.vercel.app"
                        >
                            <p>
                                <b>[GitHub]</b> - Live Demo of 3D Tic-Tac-Toe
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the game currently is not in a releasable
                    state and but there is a demo available online. If this ever
                    changes, however, a link to the game in appstore will be added here.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
    image: {
        width: '100%',
        padding: 12,
    },
};

export default SoftwareProjects;
