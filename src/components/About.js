import React from "react";
import image from './project.jpg'

function About() {
  return (
    <div>
    <div>
      <h2 className="abou"> About</h2>

      </div>
      <section></section>
      <div>
        <img className="aboutImage" src={image} alt='myimage'></img>
      </div>

      <div>
        <p className="paragraph">
          <p>`I am of the opinion that my life belongs to the whole community and as long as I live, it is my privilege to do for it whatever I can.` _George B.S_</p>
          <p>Around 2.4 billion women of working age are not afforded equal economic opportunity and 178 countries maintain legal barriers that prevent their full economic participation, according to the World Bank's Women, Business and the Law 2022 report. In 86 countries, women face some form of job restriction and 95 countries do not guarantee equal pay for equal work.

</p>“While progress has been made, the gap between men's and women's expected lifetime earnings globally is US$172 trillion - nearly two times the world's annual GDP,” said Mari Pangestu, World Bank Managing Director of Development Policy and Partnerships. “As we move forward to achieve green, resilient and inclusive development, governments need to accelerate the pace of legal reforms so that women can realize their full potential and benefit fully and equally.”
          <p>
</p>
          <p>WASHINGTON, Mar. 1, 2022. Around 2.4 billion women of working age are not afforded equal economic opportunity and 178 countries maintain legal barriers that prevent their full economic participation, according to the World Bank's Women, Business and the Law 2022 report. In 86 countries, women face some form of job restriction and 95 countries do not guarantee equal pay for equal work.
</p>
          <p>Creating an app that would help further achieve this SDG, Sustainable Development Goal, by combining E-learning, Training of trainers courses, Digital solution and in overall Advocacy. This app would enable access to related source material.
</p>
<p className="name">~Ali Mariam</p>
</p>

      </div>
      </div>
      
    
    
  );
}

export default About;