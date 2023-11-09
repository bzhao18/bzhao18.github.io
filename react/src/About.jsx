import "./About.css"

function About () {
    return (
        <section class="about" id="about">
            <h1 class="bio-title">About</h1>
            <div class="bio">
                <p class="bio-text">Hi, I'm Bryan, an engineer turned computer scientist who is pursuing a Master's degree at Georgia Tech.</p>
                
                <p class="bio-text">I pivoted because I wanted to design the brains rather than the brawn of systems and devices. Using machine learning and artificial intelligence, I teach robots how to learn, see, and communicate with us. I love discovering new deep learning architectures and implementing them to enhance the abilities of robots and other forms of embodied AI. Ultimately, I hope to integrate new and emerging AI technologies seamlessly into society to improve our everyday lives.</p>
                    
                <p class="bio-text">Currently, I am working part-time at the MIT Lincoln Laboratory to develop AI algorithms for the <a href="https://bostondynamics.com/products/spot/" target="_blank" rel="noopener noreferrer">Spot robot</a>. We are developing a framework that will enable agents to operate in highly dynamic outdoor environments for search-and-rescue missions by leveraging 3D scene graph technologies such as <a href="https://github.com/MIT-SPARK/Hydra" target="_blank" rel="noopener noreferrer">MIT Hydra</a>.</p>

                <p class="bio-text">Previously, I revamped the vision system for a <a href="https://core-robotics-lab.github.io/Wheelchair-Tennis-Robot/" target="_blank" rel="noopener noreferrer">tennis-playing robot</a> and improved its ability to detect and hit tennis balls in real-time using NVIDIA Jetson GPUs. I also interned at BMW's IT Research Center where I conducted research on Large Language Models, enormous neural networks that are trained on vast amounts of online text data to understand and generate language. In the end, I built a prototype using <a href="https://openai.com/blog/gpt-3-apps" target="_blank" rel="noopener noreferrer">GPT-3</a> which was the precursor to ChatGPT and GPT-4 recently released by OpenAI. Through my experiences, I aim to build a strong foundation in computer vision, natural language processing, and software systems for machine learning applications.</p>

                <p class="bio-text">During my time as an engineer, I built robotic systems at Raytheon and Anduril, and I collaborated with NASA JPL to design the liquid sampler of their <a href="https://www-robotics.jpl.nasa.gov/how-we-do-it/systems/exobiology-extant-life-surveyor-eels/" target="_blank" rel="noopener noreferrer">EELS space robot</a>. In my free time, I like to play soccer, cook new recipes, and hit the gym. I am also rated in the 75th percentile of players on <a href="https://www.chess.com/" target="_blank" rel="noopener noreferrer">Chess.com</a>.</p>
            </div>
        </section>
    )
}

export default About