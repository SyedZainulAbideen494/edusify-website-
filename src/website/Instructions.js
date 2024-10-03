import React from 'react';
import './instructions.css';
import { API_ROUTES } from '../app_modules/apiRoutes';

const Instructions = () => {
  return (
    <div className="instructions-container__download__instructions">
      <h1>Download Instructions</h1>
      <p>Thank you for choosing Edusify! Follow the instructions below to get started:</p>

      <h2>Step 1: Choose Your Platform</h2>
      <ul>
        <li><strong>Android:</strong> <a href={API_ROUTES.downloadAndroid} download="Edusify.apk">Download here</a></li>
        <li><strong>iOS:</strong> <a href={API_ROUTES.downloadIOS} download="Edusify.shortcut">Download here</a></li>
        <li><strong>Web:</strong> <a href="https://edusify.vercel.app/sign-up">Use on the web</a></li>
      </ul>

      <h2>Step 2: Install</h2>
      <p>
        <strong>For Android:</strong> Once the download is complete, open your <em>Downloads</em> folder and install the APK file.
      </p>
      <p>
        <strong>For iOS:</strong> Follow the link to add the Edusify shortcut to your home screen.
      </p>
      <p>
        <strong>For Web:</strong> Sign up or log in directly through the web interface.
      </p>

      <h2>Need Help?</h2>
      <p>If you have any issues, feel free to contact us for support.</p>
    </div>
  );
};

export default Instructions;
