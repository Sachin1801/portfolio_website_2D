import React from 'react';

const Blog: React.FC = () => {
    return (
        <div className="site-page-content">
            {/* Template for adding new blogs - Copy this block and paste at the top
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>[Blog Title]</h1>
                        <a rel="noreferrer" target="_blank" href="#">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>[Subtitle]</h3>
                        <b><p>[Date]</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>[Description]</p>
                <br />
                <ul>
                    <li><p>[Key Point 1]</p></li>
                    <li><p>[Key Point 2]</p></li>
                </ul>
            </div>
            */}

            {/* The Dining Philosophers - Most Recent */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>The Dining Philosophers Problem</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/the-dining-philosophers-problem-a-deep-dive-into-operating-systems-synchronization-a98df7b7ef73">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>OS Synchronization Implementation</h3>
                        <b><p>November 20, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A comprehensive implementation guide to the classic Dining Philosophers 
                    problem, demonstrating process synchronization and deadlock prevention 
                    using POSIX threads and mutex locks.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Implemented a complete solution using POSIX threads, mutex locks, 
                            and condition variables, with detailed explanations of synchronization 
                            mechanisms and deadlock prevention strategies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Explored practical extensions including timeout functionality, 
                            monitoring systems, and solutions to common implementation pitfalls 
                            in concurrent programming.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Linux Device Drivers */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Linux Device Drivers</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/deep-dive-into-linux-device-drivers-from-theory-to-implementation-b4371353465c">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Kernel Programming Deep Dive</h3>
                        <b><p>November 18, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    An in-depth exploration of Linux kernel programming through the implementation 
                    of a character device driver, covering both theoretical foundations and 
                    practical implementation details.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Implemented a complete character device driver showcasing the Linux 
                            device driver model, kernel-space programming, and the Virtual File 
                            System (VFS) layer.
                        </p>
                    </li>
                    <li>
                        <p>
                            Detailed the implementation of essential operations including open, 
                            read, write, and ioctl, with comprehensive error handling and 
                            memory management.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Belvedere Trading Interview */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Belvedere Trading Interview Experience</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/breaking-down-my-belvedere-trading-interview-experience-quant-intern-ffabf2072a1e">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Quant Intern Position</h3>
                        <b><p>November 12, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A detailed breakdown of my interview experience for the Quantitative Trading 
                    Intern position at Belvedere Trading Chicago, sharing insights about the 
                    interview process and technical assessments.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Discussed the technical aspects of the interview, including mental 
                            math challenges, probability questions, and trading-related scenarios.
                        </p>
                    </li>
                    <li>
                        <p>
                            Shared preparation strategies and key takeaways that could help 
                            others pursuing similar opportunities in quantitative trading.
                        </p>
                    </li>
                </ul>
            </div>

            {/* POSIX Threads */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>POSIX Threads in Linux</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/posix-threads-in-linux-a-complete-implementation-guide-0ca9de562c45">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Thread Programming Guide</h3>
                        <b><p>November 11, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A detailed exploration of POSIX threads implementation in Linux, covering 
                    everything from basic thread creation to advanced synchronization patterns 
                    and real-world applications.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Implemented comprehensive examples of thread creation, management, 
                            and synchronization using mutex locks and condition variables.
                        </p>
                    </li>
                    <li>
                        <p>
                            Demonstrated practical solutions for common threading challenges 
                            including race conditions, deadlocks, and resource sharing.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Linux Process Programming - Oldest */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Linux Process Programming</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/linux-process-programming-from-theory-to-implementation-e66ac1990ffa">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Operating Systems Implementation</h3>
                        <b><p>November 9, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A comprehensive guide to implementing process management and inter-process 
                    communication in Linux using C. Moving from theoretical concepts to practical 
                    implementation, covering essential topics like process creation, management, 
                    and IPC mechanisms.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Explored implementation details of process creation using fork(), 
                            understanding parent-child relationships, and proper error handling 
                            in system calls.
                        </p>
                    </li>
                    <li>
                        <p>
                            Deep dive into Inter-Process Communication (IPC) using pipes, 
                            demonstrating both unidirectional and bidirectional communication 
                            patterns with complete code examples.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
};

export default Blog;