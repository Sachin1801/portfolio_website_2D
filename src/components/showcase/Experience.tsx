import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>GGSIPU</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://dl.acm.org/doi/10.1145/3647444.3647906'}
                        >
                            <h4>ACM Conference Publication</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Research Assistant</h3>
                        <b>
                            <p>Jan 2024 - June 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                 Led the development of an innovative real-time sign language recognition
                 system using computer vision and deep learning to improve communication
                  accessibility for hearing and speech-impaired individuals.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Designed a two-step gesture recognition solution by integrating 
                        MediaPipe for keypoint detection and LSTM networks for sequential gesture analysis.
                        </p>
                    </li>
                    <li>
                        <p>
                        Published a research paper in ACM Conference Proceedings (May 2024) 
                        on the system's design and implementation.
                        </p>
                    </li>
                    <li>
                        <p>
                        Implemented holistic keypoint detection for face, hand, and pose tracking to enhance recognition accuracy.
                        </p>
                    </li>
                    <li>
                        <p>
                        Earned recognition from the Dean and faculty for contributions to assistive technology.
                        </p>
                    </li>
                    <li>
                        <p>
                        Technical Implementation:
                        Built deep neural networks using TensorFlow and Keras.
                        Utilized OpenCV and MediaPipe for computer vision-based keypoint tracking.
                        Employed LSTM architecture for analyzing sequential gestures in real-time.
                        Developed a pipeline for real-time video processing and gesture recognition.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Growvisionary - Startup</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            // href={'https://bracs.co/'}
                        >
                            {/* <h4>www.bracs.co</h4> */}
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Technical Associate Intern</h3>
                        <b>
                            <p>Summer 2023 - Fall 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Led the development of a fintech startup website using AI tools, 
                streamlining supplier negotiations to reduce procurement costs by 20%,
                 while driving 10,000+ views and maintaining product quality.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                        Designed and implemented scalable backend systems, ensuring 
                        seamless integration with third-party APIs to enhance procurement workflows.
                        </p>
                    </li>
                    <li>
                        <p>
                        Conducted performance optimization, reducing server response 
                        time by 30%, improving user experience for stakeholders.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with cross-functional teams to deliver a 
                            robust platform within tight deadlines, adhering to agile methodologies.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Coding Blocks</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://codingblocks.com/'}
                        >
                            <h4>https://codingblocks.com/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Teaching Assistant</h3>
                        <b>
                            <p>November 2022, May 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Contributed to teaching three C++ classes, each with 70+ 
                students, by assisting the lead instructor in delivering 
                high-quality programming education.
                </p>
                <br />
                {/* <h3 style={styles.indent}>Screen Credits:</h3> */}
                <ul>
                    <li style={styles.row}>
                        <p>• Organized bi-monthly coding contests, fostering 
                            a competitive and engaging environment for students 
                            to showcase their programming skills.</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Simplified complex programming concepts for students,
                             enhancing their learning experience and improving 
                             retention rates.</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Provided one-on-one mentorship to struggling students, 
                            resulting in a 25% increase in their course completion rates.</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Coding Blocks</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://codingblocks.com/'}
                        >
                            <h4>https://codingblocks.com/</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer Intern</h3>
                        <b>
                            <p>Summer 2022, Fall 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Implemented a responsive portfolio website showcasing diverse 
                projects, incorporating SEO best practices that improved 
                organic search visibility and drove a 50% increase in site 
                traffic within three months.
                </p>
                <br />
                {/* <h3 style={styles.indent}>Screen Credits:</h3> */}
                <ul>
                    <li style={styles.row}>
                        <p>• Executed comprehensive testing and debugging protocols across 
                            10+ devices and platforms, ensuring seamless application 
                            performance and user satisfaction ratings increased by 25%.</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Optimized website load times by 40% through code refactoring 
                            and image compression techniques, enhancing overall user engagement.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
