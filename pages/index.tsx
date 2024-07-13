import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const welcome = () => {
  const router = useRouter();

  useEffect(() => {
      const animationDuration = 25 * 1000; // Total duration in milliseconds

      // Function to redirect to dashboard after animation ends
      const redirectToDashboard = () => {
          setTimeout(() => {
              router.push('/dashboard'); // Navigate to dashboard page
          }, animationDuration); // Redirect after animationDuration milliseconds
      };

      redirectToDashboard(); // Start redirection timer on component mount

      return () => {
          // Clean up any timers or resources if needed
      };
  }, [router]);


    return (
        <div className="container2">
            <div className="text sanskrit">नमस्ते!</div>
            <div className="text english">Hello!</div>
            <div className="text kannada">ನಮಸ್ಕಾರ!</div>
            <div id="screen2" className="screen">Welcome To</div>
            <div id="screen4" className="screen">WIPOD</div>
        </div>
    );
};

export default welcome;
