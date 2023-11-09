import "./Experience.css"
import gt from "./assets/images/gt.png"
import ghs from "./assets/images/ghs.png"
import mitll from "./assets/images/mitll.png"
import bmw from "./assets/images/bmw.png"
import raytheon from "./assets/images/raytheon.png"
import anduril from "./assets/images/anduril.png"
import core from "./assets/images/core.png"
import gtri from "./assets/images/gtri.png"
import epic from "./assets/images/epic.png"
import nsmrl from "./assets/images/nsmrl.png"

function Experience () {
    return (
        <section class="experience" id="experience">
            <h1 class="experience-title">Experience</h1>

            <h2 class="education-title">Education</h2>
            <div class="section education">
                <div class="item">
                    <div class="logo-container">
                        <img src={gt}
                        alt="Georgia Insitute of Technology"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Georgia Institute of Technology</h3>
                            <h4>Master of Science in Computer Science</h4>
                        </div>
                        <div class="date">
                            <p>May 2024</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <div class="mscs">
                            <p>Specialization in Machine Learning</p>
                            <p>GPA: 4.00/4.00</p>
                        </div>
                        <div class="cs7641">
                            <h5>CS 7641 Machine Learning</h5>
                            <p>Head Teaching Assistant | <span class="date">Fall 2022, Spring 2023, Fall 2023</span></p>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="logo-container">
                        <img src={gt}
                        alt="Georgia Insitute of Technology"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Georgia Institute of Technology</h3>
                            <h4>Bachelor of Science in Mechanical Engineering</h4>
                        </div>
                        <div class="date">
                            <p>May 2022</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <div class="bsme">
                            <p>Minor in Computer Science</p>
                            <p>GPA: 3.98/4.00</p>
                        </div>
                        <div class="cs4641">
                            <h5>CS 4641 Machine Learning</h5>
                            <p>Teaching Assistant | <span class="date">Spring 2022</span></p>
                        </div>
                        <div class="me3340">
                            <h5>ME 3340 Fluid Dynamics</h5>
                            <p>Teaching Assistant | <span class="date">Fall 2020</span></p>
                        </div>
                        <div class="gtl">
                            <h5>Georgia Tech Europe</h5>
                            <p>Resident Assistant | <span class="date">Summer 2019</span></p>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="logo-container">
                        <img src={ghs}
                        alt="Glastonbury High School"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Glastonbury High School</h3>
                            <h4>High School Diploma</h4>
                        </div>
                        <div class="date">
                            <p>May 2018</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <div class="ghs">
                            <p>Valedictorian</p>
                            <p>GPA: 4.00/4.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="timeline">
            </div>

            <h2 class="work-title">Professional</h2>
            <div class="section work">
                <div class="item mitll">
                    <div class="logo-container">
                        <img src={mitll}
                        alt="MIT Lincoln Laboratory"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>MIT Lincoln Laboratory</h3>
                            <h4>Research Intern</h4>
                        </div>
                        <div class="date">
                            <p>May 2023 - <br />Present</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Building PyTorch computer vision models to extract hierarchical graphs from satellite imagery, enabling robots to use <a href="https://github.com/MIT-SPARK/Hydra" target="_blank" rel="noopener noreferrer">MIT Hydra</a>, a simultaneous localization and mapping (SLAM) algorithm, to navigate outdoors in search-and-rescue missions</li>
                            <li>Developing robot operating system (ROS) Python packages for the <a href="https://bostondynamics.com/products/spot/" target="_blank" rel="noopener noreferrer">Boston Dynamics Spot robot</a> to search for objects autonomously outdoors using hierarchical graphs which will decrease computation costs to speed up real-time performance</li>
                            <li>Led a group of 5 interns to build ROS software packages, interface sensors with an NVIDIA Jetson, and 3D print parts for the <a href="https://spotmicroai.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">SpotMicro</a>, an open-source version of the Spot robot by Boston Dynamics, for multi-robot experimentation</li>
                        </ul>
                    </div>
                </div>

                <div class="item bmw">
                    <div class="logo-container">
                        <img src={bmw}
                        alt="BMW"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>BMW</h3>
                            <h4>Machine Learning Intern</h4>
                        </div>
                        <div class="date">
                            <p>May 2022 - <br />Aug 2022</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Built a Python pipeline in AWS to train OpenAI’s 175B-parameter Large Language Model (LLM) called <a href="https://openai.com/blog/gpt-3-apps/" target="_blank" rel="noopener noreferrer">GPT-3</a> that automatically classifies business documents, saving $500k and achieving 98% accuracy (+30% versus existing methods)</li>
                            <li>Created Python scripts with <a href="https://aws.amazon.com/textract/" target="_blank" rel="noopener noreferrer">AWS Textract</a> and <a href="https://aws.amazon.com/translate/" target="_blank" rel="noopener noreferrer">AWS Translate</a> to extract text from 500+ German PDF documents for model training</li>
                            <li>Developed the backend and API for Meta AI's 66B-parameter LLM called <a href="https://ai.facebook.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/" target="_blank" rel="noopener noreferrer">OPT</a> to be used on-premises, enabling processing of confidential data</li>
                        </ul>
                    </div>
                </div>
                
                <div class="item raytheon">
                    <div class="logo-container">
                        <img src={raytheon}
                        alt="Raytheon Technologies"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Raytheon</h3>
                            <h4>Research and Development Intern</h4>
                        </div>
                        <div class="date">
                            <p>May 2021 - <br />Aug 2021</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Developed the user interface, state machine transition logic, and PID temperature control in LabVIEW for mechanically testing airplane engine parts, resulting in a system that operated continuously and autonomously for 500+ hours</li>
                            <li>Automated 3D modeling processes to generate CAD renders, reducing time spent on modeling by 80% from 10 to 2 weeks</li>
                        </ul>
                    </div>
                </div>

                <div class="item anduril">
                    <div class="logo-container">
                        <img src={anduril}
                        alt="Anduril"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Anduril</h3>
                            <h4>Research and Development Intern</h4>
                        </div>
                        <div class="date">
                            <p>Jan 2021 - <br />May 2021</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Engineered a new testing program for the next generation of drone and launcher systems to attain a 330% increase in launch energy, creating the Solidworks design, plan for manufacture and assembly, data collection system, and testing procedures</li>
                            <li>Designed and managed a MS Access database to track customer requirements on a $1M+ government contract</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 class="research-title">Research</h2>
            <div class="section research">
                <div class="item core">
                    <div class="logo-container">
                        <img src={core}
                        alt="CORE Robotics Laboratory"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>CORE Robotics Laboratory</h3>
                            <h4>Graduate Research Assistant</h4>
                        </div>
                        <div class="date">
                            <p>Aug 2022 - <br />May 2023</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Published an IEEE conference paper with a team of 10+ students presenting development of a tennis-playing wheelchair robot used to better understand human-robot collaboration in the context of sports</li>
                        </ul>
                        <div class="core-paper-links">
                            <form action="https://arxiv.org/abs/2210.02517" target="_blank" rel="noopener noreferrer">
                                <button type="submit">Paper</button>
                            </form>
                            <form action="https://core-robotics-lab.github.io/Wheelchair-Tennis-Robot/" target="_blank" rel="noopener noreferrer">
                                <button type="submit">Website</button>
                            </form>
                            <form action="https://github.com/CORE-Robotics-Lab/Wheelchair-Tennis-Robot" target="_blank" rel="noopener noreferrer">
                                <button type="submit">GitHub</button>
                            </form>
                        </div>
                        <ul>
                            <li>Developed Robot Operating System (ROS) packages in C++ for a camera system to triangulate the position of a tennis ball in real-time using <a href="https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/" target="_blank" rel="noopener noreferrer">NVIDIA Jetsons</a> (Linux distributed computing devices), resulting in 1.5X quality and 2X framerate of video data over existing systems to improve ball return rate to 50%</li>
                            <li>Processed and visualized flight data and VICON camera data in Python to create a model-based controller for a quadcopter</li>
                        </ul>
                    </div>
                </div>

                <div class="item gtri">
                    <div class="logo-container">
                        <img src={gtri}
                        alt="Georgia Tech Research Institute"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Georgia Tech Research Institute</h3>
                            <h4>Research and Development Intern</h4>
                        </div>
                        <div class="date">
                            <p>Jul 2020 - <br />Aug 2020</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Contributed to a research paper analyzing bio-inspired, slip-resistant materials for gloves, robotic traction, shoe soles, etc. by generating mechanical software models in ANSYS simulating animal traction on wet surfaces</li>
                            <li>Researched novel computational techniques to simulate 3 key behaviors to understand water evacuation under animal paws</li>
                        </ul>
                    </div>
                </div>

                <div class="item epic">
                    <div class="logo-container">
                        <img src={epic}
                        alt="EPIC Laboratory"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>EPIC Laboratory</h3>
                            <h4>Undergraduate Research Assistant</h4>
                        </div>
                        <div class="date">
                            <p>Jan 2019 - <br />May 2019</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Conducted trial investigations on a hip exoskeleton to troubleshoot stepper motor performance and perform study on timing of exoskeleton assistance during the user’s walking gait on ramps and stairs of varying steepness at varying speeds</li>
                            <li>Modeled exoskeleton parts to assist in the development of a 20% more compact design</li>
                        </ul>
                    </div>
                </div>

                <div class="item nsmrl">
                    <div class="logo-container">
                        <img src={nsmrl}
                        alt="NSMRL"
                        loading="lazy"
                        class="logo"/>
                        <div class="logo-header">
                            <h3>Naval Submarine Medical Research Laboratory</h3>
                            <h4>Research and Development Intern</h4>
                        </div>
                        <div class="date">
                            <p>May 2017 - <br />Aug 2017</p>
                        </div>
                    </div>
                    <div class="content-container">
                        <ul>
                            <li>Prototyped a remote-controlled, Ø2ft X 6ft blimp contributing to research in a novel concept in lighter-than-air surveillance</li>
                            <li>Developed a new method for manufacturing an air-tight blimp envelope from thick metalized polymer film</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Experience