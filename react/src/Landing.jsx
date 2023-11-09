import "./Landing.css"
import cv from "./assets/Bryan_Zhao_CV.pdf"

function Landing() {
    const getCV = () => {
        "./assets/Bryan_Zhao_CV.pdf"
    }

    return (
        <section class="landing" id="landing">
            <div class="landing-content">
                <p class="landing-name">Bryan Zhao</p>
                <div class="landing-social">
                    <a class="social-icon" href="tel:860-328-9421" target="_blank" rel="noopener noreferrer">
                        <span class="fa-stack fa-2x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-phone fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a class="social-icon" href="mailto: bryanzhao@gatech.edu" target="_blank" rel="noopener noreferrer">
                        <span class="fa-stack fa-2x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a class="social-icon" href="https://www.linkedin.com/in/bryan-zhao/" target="_blank" rel="noopener noreferrer">
                        <span class="fa-stack fa-2x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a class="social-icon" href="https://github.com/bzhao18" target="_blank" rel="noopener noreferrer">
                        <span class="fa-stack fa-2x">
                            <i class="fa fa-circle fa-stack-2x"></i>
                            <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </div>
                <div class="landing-text">
                    <span class="landing-text-titles">
                        <p>Computer Scientist at the <a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer">Georgia Institute of Technology</a></p>
                        <p>AI Researcher at the <a href="https://www.ll.mit.edu/" target="_blank" rel="noopener noreferrer">MIT Lincoln Laboratory</a></p>
                        <p>Head Teaching Assistant for <a href="https://mahdi-roozbahani.github.io/teaching/course4ml" target="_blank" rel="noopener noreferrer">Machine Learning</a></p>
                    </span>
                    <span class="landing-text-cta">
                        <form action={cv} target="_blank" rel="noopener noreferrer">
                            <button type="submit">CV</button>
                        </form>
                        <form action="#about">
                            <button type="submit">Get to Know Me</button>
                        </form>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Landing