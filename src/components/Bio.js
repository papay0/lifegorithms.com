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
              marginTop: -50
            }}
          >
            About me
          </h3>
          This is more about me
        </div>
      </div>
    );
  }
}

export default Bio;
