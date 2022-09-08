import React from "react";
import image from './about.jpg'

function About() {
  return (
    <div>
    <div>
      <h2 className="abou"> About</h2>
      </div>
      <div className="aboutImage">
        <img src={image} alt='myimage'></img>
      </div>

      <div>
        <p className="paragraph">
          <p>`I am of the opinion that my life belongs to the whole community and as long as I live, it is my privilege to do for it whatever I can.` _George B.S_</p>
          <p>Around 2.4 billion women of working age are not afforded equal economic opportunity and 178 countries maintain legal barriers that prevent their full economic participation, according to the World Bank’s Women, Business and the Law 2022 report. In 86 countries, women face some form of job restriction and 95 countries do not guarantee equal pay for equal work.

</p>
          <p>
</p>
          <p>_Sustained momentum in public sector reforms_
Since 1980s, the government has seen a renewed momentum in improving service delivery. The civil service reform program was adopted in early 1990s aimed to build a public service workforce that was responsive to the needs of the citizens. Under the economic recovery strategy, the reform agenda includes efforts to nurture and instil attitudinal change in the public service. Further, the Kenya Vision 2030 identifies public sector reforms as key in the transformative agenda with expectation that public service is citizen-focused and results-oriented institutions in serving a rapidly growing economy and society.</p>
          <p>This app plays the digital role of further enabling improvement of public service delivery quality through data collection of citizen feedback.</p>

</p>

      </div>
      </div>
      
    
    
  );
}

export default About;