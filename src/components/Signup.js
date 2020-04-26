import React from 'react';

import './Signup.css';

const LIFEGORITHMS_FORM_ID = '1347095';

class Signup extends React.Component {
  render() {
    const form = {
      id: LIFEGORITHMS_FORM_ID,
      title: 'Subscribe to the Newsletter',
      subTitle: 'Subscribe to get my latest content by email.',
      buttonText: 'Subscribe',
    };
    return (
      <form
        action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
        className="seva-form formkit-form"
        method="post"
        min-width="400 500 600 700 800"
        style={{
          boxShadow: 'var(--form-shadow)',
          backgroundColor: 'var(--bg)',
          borderRadius: '6px',
        }}
      >
        <div data-style="full">
          <div
            data-element="column"
            className="formkit-column"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <h1
              className="formkit-header"
              data-element="header"
              style={{
                color: 'var(--textTitle)',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              {form.title}
            </h1>
            <div
              data-element="subheader"
              className="formkit-subheader"
              style={{ color: 'var(--textNormal)' }}
            >
              <p>{form.subTitle}</p>
            </div>
            <div className="formkit-image">
              <svg
                class="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="100"
                viewBox="0 0 20 20"
                style={{ width: '100%' }}
              >
                <path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
              </svg>
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            />

            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  aria-label="Your first name"
                  name="fields[first_name]"
                  placeholder="Your first name"
                  type="text"
                  style={{
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: '4px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 400,
                  }}
                  required
                />
              </div>
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  required
                  type="email"
                  style={{
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: '4px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 400,
                  }}
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit"
                style={{
                  backgroundColor: 'hsl(208, 86.3%, 48.8%)',
                  borderRadius: '24px',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                <div className="formkit-spinner" />
                <span>{form.buttonText}</span>
              </button>
            </div>
            <div
              data-element="guarantee"
              className="formkit-guarantee"
              style={{
                color: 'var(--textNormal)',
                fontSize: '13px',
                fontWeight: 400,
              }}
            >
              <p>I won’t send you spam.</p>
              <p>
                Unsubscribe at <em>any</em> time.
              </p>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
