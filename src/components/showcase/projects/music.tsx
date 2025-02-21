import React from 'react';

const Blog: React.FC = () => {
    // Array of blog entries to calculate the count
    const blogEntries = [
        { title: "Mastering Pointers in C++ for Financial Computing", date: "February 19, 2025" },
        { title: "Risk Analysis and Insights from Financial Data", date: "February 13, 2025" },
        { title: "Unlocking the Power of Data Manipulation with Pandas", date: "January 22, 2025" },
        { title: "A Day at Braze: My Immersion Experience with a Leading Digital Marketing Company", date: "January 21, 2025" },
        { title: "Optimizing Merging of K Sorted Lists: From O(n log n) to O(n log k) 🚀", date: "January 7, 2025" },
        { title: "CBOE CLEAR Interview Experience", date: "December 29, 2024" },
        { title: "One.app Interview Experience", date: "December 29, 2024" },
        { title: "The Dining Philosophers Problem", date: "November 20, 2024" },
        { title: "Linux Device Drivers", date: "November 18, 2024" },
        { title: "Belvedere Trading Interview Experience", date: "November 12, 2024" },
        { title: "POSIX Threads in Linux", date: "November 11, 2024" },
        { title: "Linux Process Programming", date: "November 9, 2024" }
    ];

    // Windows 98 style status bar component
    const StatusBar = () => (
        <div style={{
            backgroundColor: '#c0c0c0',
            border: '2px solid',
            borderTopColor: '#dfdfdf',
            borderLeftColor: '#dfdfdf',
            borderRightColor: '#808080',
            borderBottomColor: '#808080',
            padding: '2px 5px',
            fontSize: '12px',
            fontFamily: 'ms-sans',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '20px'
        }}>
            <span>Total Blog Posts: {blogEntries.length}</span>
            <span>{new Date().getFullYear()} Posts: {
                blogEntries.filter(blog => 
                    new Date(blog.date).getFullYear() === new Date().getFullYear()
                ).length
            }</span>
        </div>
    );

    return (
        <div className="site-page-content">
            {/* Title Bar Stats */}
            <div style={{
                backgroundColor: '#c0c0c0',
                border: '2px solid',
                borderTopColor: '#dfdfdf',
                borderLeftColor: '#dfdfdf',
                borderRightColor: '#808080',
                borderBottomColor: '#808080',
                padding: '5px',
                marginBottom: '20px',
                fontSize: '14px',
                fontFamily: 'ms-sans',
            }}>
                Blog Archive • {blogEntries.length} Posts
            </div>

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
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Mastering Pointers in C++ for Financial Computing</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/mastering-pointers-in-c-for-financial-computing-11f68832d215">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        {/* <h3>[Subtitle]</h3> */}
                        <b><p>February 19, 2025</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>Pointers in C++ are fundamental yet tricky. They provide powerful control 
                over memory but can also lead to errors if misused. 
                In financial computing, where performance and efficiency matter, understanding pointers 
                deeply is crucial.</p>
                <br />
                <ul>
                    <li><p>Explored the intricacies of pointers, including memory allocation, 
                        deallocation, and type safety.</p></li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Risk Analysis and Insights from Financial Data</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/risk-analysis-and-insights-from-financial-data-b4be578b3d70">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        {/* <h3>[Subtitle]</h3> */}
                        <b><p>February 13, 2025</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>Financial data is a treasure trove of information, but it can also be a minefield 
                of risk. In this blog, we'll dive into the world of risk analysis and insights from 
                financial data, exploring the key concepts and techniques used to manage and mitigate 
                risk in the financial industry.</p>
                <br />
                <ul>
                    <li><p>Discussed the importance of risk management in financial computing, 
                        including the role of risk models and risk metrics.</p></li>
                    <li><p>Explored the use of Monte Carlo simulations and other techniques to 
                        analyze and mitigate risk in financial data.</p></li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Unlocking the Power of Data Manipulation with Pandas</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/unlocking-the-power-of-data-manipulation-with-pandas-be39691d25b3">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        {/* <h3>[Subtitle]</h3> */}
                        <b><p>January 22, 2025</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>Pandas is a powerful tool for data manipulation and analysis, but it can also be a bit tricky to master. 
                In this blog, we'll dive into the world of Pandas and explore the key concepts and techniques used to 
                manipulate and analyze data.</p>
                <br />
                <ul>
                    <li><p>Discussed the importance of data manipulation in financial computing, 
                        including the role of Pandas and other data manipulation tools.</p></li>
                    <li><p>Explored the use of Pandas and other techniques to 
                        manipulate and analyze data.</p></li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>A Day at Braze: My Immersion Experience with a Leading Digital Marketing Company</h1>
                        <a rel="noreferrer" target="_blank" href="http://medium.com/@sachinadlakha7/a-day-at-braze-my-immersion-experience-with-a-leading-digital-marketing-company-c93d283d84e3">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        {/* <h3>[Subtitle]</h3> */}
                        <b><p>January 21, 2025</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>A day at Braze was a great experience. I got to learn about the company and the culture. 
                </p>
                <br />
                <ul>
                    <li><p>Earned A Certificate of Completion for Customer Engagement Fundamentals</p></li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Optimizing Merging of K Sorted Lists: From O(n log n) to O(n log k) 🚀</h1>
                        <a rel="noreferrer" target="_blank" href="https://medium.com/@sachinadlakha7/optimizing-merging-of-k-sorted-lists-from-o-n-log-n-to-o-n-log-k-913fa7c56d9d">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        {/* <h3>[Subtitle]</h3> */}
                        <b><p>January 7, 2025</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Merging k sorted linked lists is a classic problem in computer science, often 
                encountered in interviews and real-world applications like database merging or 
                stream processing. While a naive approach might solve the problem, a clever optimization 
                can reduce the complexity significantly, making it much faster for large inputs.
                </p>
                <br />
                <ul>
                    <li><p>Discussed the importance of optimization in computer science, 
                        including the role of data structures and algorithms.</p></li>
                    <li><p>Explored the use of heap data structure to optimize the merging process.</p></li>
                </ul>
            </div>
           

            {/* CBOE CLEAR Interview Experience - Most Recent */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>CBOE CLEAR Interview Experience</h1>
                        <a rel="noreferrer" target="_blank" href="https://www.geeksforgeeks.org/community/post/48483/cboe-clear-team-software-engineering-interview-experience-summer-internship-2025/">
                            <h4>Read on GFG</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Backend Clearing Systems Deep Dive</h3>
                        <b><p>December 29, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A reflective analysis of my interview experience with CBOE's CLEAR team, focusing on 
                    the evolving tech landscape and the transformative impact of AI in the industry, while 
                    highlighting key technical learnings and growth opportunities.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Explored the complexities of backend clearing systems and discussed the 
                            critical importance of aligning technical interests with role requirements 
                            in the financial technology sector.
                        </p>
                    </li>
                    <li>
                        <p>
                            Shared insights about maintaining resilience in a competitive market and 
                            leveraging networking opportunities, emphasizing the value of continuous 
                            learning in professional growth.
                        </p>
                    </li>
                </ul>
            </div>

            {/* One.app Interview Experience */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>One.app Interview Experience</h1>
                        <a rel="noreferrer" target="_blank" href="https://www.geeksforgeeks.org/community/post/48485/one-app-software-engineering-interview-experience-summer-internship-2025/">
                            <h4>Read on Medium</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Technical Interview and Market Insights</h3>
                        <b><p>December 29, 2024</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A detailed analysis of my interview journey with One.app, exploring key insights about 
                    market timing and headcount constraints in today's challenging tech landscape, while 
                    highlighting the importance of technical excellence and adaptability.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Examined the non-negotiable nature of deep technical knowledge and the 
                            crucial importance of quick response to opportunities, while discussing how 
                            even perfect performance must align with market timing.
                        </p>
                    </li>
                    <li>
                        <p>
                            Shared comprehensive insights about system design, object-oriented programming, 
                            and coding challenges, along with practical strategies for technical interview 
                            preparation and continuous learning.
                        </p>
                    </li>
                </ul>
            </div>

            {/* The Dining Philosophers */}
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

            {/* Status Bar */}
            <StatusBar />
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