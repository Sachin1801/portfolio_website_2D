import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Sachin Adlakha</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently a Graduate Student at New York University! In July
                    of 2024 I graduated from Guru Gobind Singh Indraprastha University
                    with my B.Tech in Computer Science.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:sachinadlakha1801@gmail.com">
                        sachinadlakha1801@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with Lego and I fell in love with building things. In
                    elementary school, I joined the Lego Robotics team at my
                    local middle school, which was my first real exposure to
                    programming. In 2024, I moved across the globe from New Delhi, 
                    India to New York, where I am attending New York University for my
                    Masters in Computer Science.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in high school,
                    initially learning how to scrape and interact with websites.
                    I started learning basic HTML when I was 14 and started with C++
                    when I was 16. I quickly fell in love with programming and
                    I went on to do a ton of passion projects.
                    I worked on many projects, including Image Enhancement,
                    multiple game projects, innovative Ideas,AI and more. One of these
                    projects is viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2020, I began my Bachelor's in Computer Science and Engineering
                     at Guru Gobind Singh Indraprastha University in India, where I 
                     maintained a strong GPA of 9.17/10. During my undergraduate years, 
                     I gained valuable industry experience through two internships. 
                     From July to September 2022, I worked as a Web Development Intern 
                     at Coding Blocks, where I refined portfolio websites and implemented 
                     comprehensive testing protocols across multiple platforms. Later, 
                     from June to September 2023, I served as a Technical Associate Intern 
                     at Growvisionary, where I led the development of a fintech website 
                     using AI tools, successfully reducing procurement costs by 20%. 
                     Now, I'm continuing my academic journey at New York University, 
                     pursuing my MS in Computer Science starting September 2024.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are to {' '}
                            <Link to="/projects/blogs">Write Blogs</Link>{' '}
                            and playing{' '}
                            Billiards. You can
                            read more about my blogs of these on its respective
                            page under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I was an President in the Tech-Soc
                            Society and held multiple hackathons for students in
                            my bachelors. I was also the President of the Fashion 
                            Society during My Bachelors.I met a lot of amazing 
                            people through my fraternity and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, October 2024
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on X(formerly Twitter){' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/sachinadlakha18"
                    >
                        @sachinadlakha18
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:sachinadlakha1801@gmail.com">
                        sachinadlakha1801@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
