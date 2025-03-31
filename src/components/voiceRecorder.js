import React, {useEffect, useRef, useState} from 'react';
import { Box, Typography, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DeleteIcon from '@mui/icons-material/Delete';
import  useAudioRecorder  from '../hooks/useAudioRecorder';

export default function VoiceRecorder () {
    const [audioUrl, setAudioUrl] = useState()
    const [available, setAvailable] = useState(false)
    const playbackRef = useRef()
    const {
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
    } = useAudioRecorder();


    useEffect(()=> {
        if (recordingBlob) {
            let url = URL.createObjectURL(recordingBlob);
            setAudioUrl(url)
            setAvailable(true)
        } 
    }, [recordingBlob]) 


  return (
    <Box>
        <audio controls src={recordingBlob ? audioUrl : null} ref={playbackRef} style={{'visibility': 'hidden'}}></audio>
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
        <IconButton
            onClick={()=> {
                playbackRef.current.play()
            }}
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
                <PlayArrowIcon fontSize="large" color={"white"} />
        </IconButton>
        <IconButton
            onClick={()=> {
                setAudioUrl(null)
            }}
            sx={{
                border: '2px solid',
                borderColor: 'primary.main',
                '&:hover': {
                    backgroundColor: 'action.hover'
                }
                }}
            >
                <DeleteIcon fontSize="large" color={"white"} />
        </IconButton>
        </Stack>
    </Box>
  );
};