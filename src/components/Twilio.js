import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Auth0LockPasswordless } from 'auth0-lock';
import { getConfig } from '../config';

const Twilio = () => {
  const config = getConfig();

  var accessToken = null;
  
  const [profile, setProfile] = useState({
    name: "",
    nickname: "",
    updated_at: "",
  });

  const passwordlessOptions = {
    allowedConnections: ['sms'],
  };
  const lock = new Auth0LockPasswordless(
    // All these properties are set in auth0-variables.js
    config.clientId,
    config.domain,
    passwordlessOptions
  );

  lock.on('authenticated', function (authResult) {
    lock.getUserInfo(authResult.accessToken, function (error, profileResult) {
      if (error) {
        // Handle error
        return;
      }

      accessToken = authResult.accessToken;
      console.log(44444, profileResult);
      setProfile(profileResult)
      // Update DOM
    });
  });

  const login = () => {
    lock.show();
  };

  return (
    <div className="text-center hero my-5">
      {!profile.name && (<Button
        id="qsLoginBtn"
        color="primary"
        className="btn-margin"
        onClick={() => login()}
      >
        Log in
      </Button>)}
      {profile.name}
    </div>
  );
};

export default Twilio;
