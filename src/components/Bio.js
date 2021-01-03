import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(2),
          }}
        >
          <img
            src={profilePic}
            alt={`Arthur Papailhau`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
              borderRadius: '50%',
            }}
          />
          <p style={{ maxWidth: 310 }}>
            Personal blog by{' '}
            <a href="https://mobile.twitter.com/papay0">Arthur Papailhau</a>.{' '}
            Software Engineer @Uber (Eats)
          </p>
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: rhythm(1),
              marginBottom: rhythm(1 / 4),
              marginTop: -50,
            }}
          >
            About me
          </h3>
          Hey hey, I'm Arthur! 👋 <br />
          I'm currently working at Uber (Eats) in San Francisco as an iOS
          Engineer. <br />
          I enjoy learning new stuff then explaining it in a simpler way, so you
          might find some of this content in this blog. <br />
          You can expect articles about Personal Finance, efficiency, and random
          thoughts. <br />
          Happy reading! 🤓
        </div>
      </div>
    );
  }
}

export default Bio;
