import React, { useState } from 'react';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchToSignUp = () => setIsSignIn(false);
  const switchToSignIn = () => setIsSignIn(true);

  return (
    <div className="auth-container">
      {isSignIn ? (
        <SignInForm switchToSignUp={switchToSignUp} />
      ) : (
        <SignUpForm switchToSignIn={switchToSignIn} />
      )}
    </div>
  );
};

export default SignUp;
