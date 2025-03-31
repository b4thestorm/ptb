import logo from './logo.svg';
import './App.css';
import { Typography } from '@mui/material';
import VoiceRecorder from './components/voiceRecorder';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <Typography variant={"h1"}>Pop the Balloon</Typography>
        <img src={logo} className="App-logo" alt="logo" />
        {/* //Make A Container */}
        <VoiceRecorder></VoiceRecorder>
      </header>
    </div>
  );
}

export default App;
