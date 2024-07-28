// react-speech-recognition.d.ts
declare module 'react-speech-recognition' {
    export interface SpeechRecognitionOptions {
      continuous?: boolean;
      interimResults?: boolean;
      lang?: string;
    }
  
    export interface ListeningOptions {
      continuous?: boolean;
      language?: string;
    }
  
    export function startListening(options?: ListeningOptions): void;
    export function stopListening(): void;
    export function useSpeechRecognition(): {
      transcript: string;
      listening: boolean;
      resetTranscript: () => void;
    };
  }
  