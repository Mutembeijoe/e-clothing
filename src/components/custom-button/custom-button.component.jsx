import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, signInwithGoogle, ...otherProps }) => (
  <button className={`custom-button ${ signInwithGoogle? 'google-sign-in':''}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;