import React, {useEffect, useState} from 'react';
import { Box, Typography, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import  useAudioRecorder  from '../hooks/useAudioRecorder';

export default function VoiceRecorder () {
    const [audioUrl, setAudioUrl] = useState()
    const {
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
    } = useAudioRecorder();


    //  ADD THE CAPABILITY TO PLAYBACK THE RECORDING
    useEffect(()=> {
        if (recordingBlob) {
            console.log(recordingBlob)
            let url = URL.createObjectURL(recordingBlob);
            setAudioUrl(url)
        } 
    }, [recordingBlob]) 


  return (
    <Box>
        <audio controls src={recordingBlob ? audioUrl : null}></audio>
        <Stack direction={"row"} gap={2}>
        <IconButton
            onClick={togglePauseResume}
            sx={{
                border: '2px solid',
                borderColor: 'primary.main',
            }}
        >
                <PauseIcon fontSize="large" />
        </IconButton>
        <IconButton
            onClick={isRecording ? stopRecording : startRecording}
            sx={{
                border: '2px solid',
                borderColor: 'primary.main',
                '&:hover': {
                    backgroundColor: 'action.hover'
                },
                animation: isRecording ? 'pulse 1.5s infinite' : 'none'
                }}
                aria-label={isRecording ? "Stop recording" : "Start recording"}
            >
                <MicIcon fontSize="large" color={"white"} />
        </IconButton>
        </Stack>
    </Box>
  );
};