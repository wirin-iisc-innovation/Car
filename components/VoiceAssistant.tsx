// components/VoiceAssistant.tsx
import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useRouter } from 'next/router';

const VoiceAssistant: React.FC = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const router = useRouter();

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      console.error("Browser doesn't support speech recognition.");
      return;
    }

    const handleTranscript = () => {
      console.log("Transcript:", transcript);
      if (transcript.toLowerCase().includes('hey siri') || transcript.toLowerCase().includes('hey ved')) {
        console.log("Detected 'hey siri' or 'hey ved' command");
        resetTranscript();
        
        const container = document.querySelector('.container3');
        if (container) {
          container.classList.add('blurred');
        }

        setTimeout(() => {
          router.push('/AI');
        }, 200); // 1.5 seconds
      }
    };

    handleTranscript();

    if (!listening) {
      try {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
      } catch (err) {
        console.error("Error starting speech recognition:", err);
      }
    }
  }, [transcript, resetTranscript, router, listening]);

  useEffect(() => {
    const checkListening = setInterval(() => {
      if (!listening) {
        try {
          SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
        } catch (err) {
          console.error("Error starting speech recognition:", err);
        }
      }
    }, 1000); // Check every 5 seconds

    return () => clearInterval(checkListening);
  }, [listening]);

  useEffect(() => {
    try {
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    } catch (err) {
      console.error("Error starting speech recognition:", err);
    }

    return () => SpeechRecognition.stopListening();
  }, []);

  return null; // No UI elements
};

export default VoiceAssistant;
