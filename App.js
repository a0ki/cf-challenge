import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

// Custom hook to manage splash screen
import useSplashScreen from './hooks/useSplashScreen';

// Import the login view component
import LoginPage from './views/login';

// Import styles and Redux store
import Styles from './Styles';
import store from './store';

/**
 * Wrapper component for session checking.
 * It checks the session status and renders the main content accordingly.
 *
 * @returns {JSX.Element|null} - The wrapper component.
 */
const SessionWrapper = () => {
  // Simulate session checking logic, replace it with actual logic as needed
  const isUserAuthenticated = true;

  // If the user is not authenticated, you can redirect to a login screen or perform other actions
  if (!isUserAuthenticated) {
    // Redirect or perform actions for unauthenticated users
    return null;
  }

  // If the user is authenticated, render the main content
  return <LoginPage />;
};

/**
 * Main App component serving as the entry point of the application.
 * It initializes the Redux store, manages the splash screen, and renders the session wrapper.
 *
 * @returns {JSX.Element|null} - The main application component.
 */
export default function App() {
  // Check if the app is ready to render based on the splash screen completion
  const isReady = useSplashScreen();

  // If the app is not ready, return null to avoid rendering until ready
  if (!isReady) return null;

  return (
    // Wrap the entire application with the Redux Provider to access the store
    <Provider store={store}>
      {/* Set the status bar style and background color */}
      <StatusBar translucent={true} backgroundColor="#3629B7" />

      {/* Render the session wrapper component */}
      <SessionWrapper />
    </Provider>
  );
}