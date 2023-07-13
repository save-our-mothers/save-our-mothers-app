import React from 'react';
import './About.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Thank You!</h2>
        <p>
          <ul><u>Team Members (Hyperlinks below):</u>
            <li><a href="https://www.linkedin.com/in/brendan-higginbottom/">Brendan Higginbottom</a></li>
            <li><a href="https://www.linkedin.com/in/bailey-fiedorowicz/">Bailey Fiedorowicz</a></li>
            <li><a href="https://www.linkedin.com/in/jakob-engler-371425268/">Jakob Engler</a></li>
            <li><a href="https://www.linkedin.com/in/julie-g-01b425268/">Julie González-Kincaid</a></li>
            <li><a href="https://www.linkedin.com/in/glonel-dimapilis/">Glonel Dimapilis</a></li>
          </ul>
        </p>
        <p>
          <ul><u>Safe Childbirth Organization:</u>
            <li>Sayid</li>
            <li>Dominic</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
