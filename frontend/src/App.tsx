import { useState } from 'react';
import { Container, CssBaseline, Typography, Box } from '@mui/material';
import { axiosApi } from './axiosApi.ts';
import Messages from "./features/messages/Messages.tsx";
import AppToolbar from "./components/Ui/AppToolbar.tsx";
import {Message} from "./types";

const App = () => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [encoded, setEncoded] = useState('');
    const [decoded, setDecoded] = useState('');

    const encode = async () => {
        if (!password) {
            alert('Please enter a password');
            return;
        }
        try {
            const response = await axiosApi.post<Message>('http://localhost:8000/encode', {
                password,
                message,
            });
            setEncoded(response.data.encoded);
        } catch (error) {
            console.error('Error encoding:', error);
        }
    };

    const decode = async () => {
        if (!password) {
            alert('Please enter a password');
            return;
        }

        try {
            const response = await axiosApi.post<Message>('http://localhost:8000/decode', {
                password,
                message: encoded,
            });
            setDecoded(response.data.decoded);
        } catch (error) {
            console.error('Error decoding:', error);
        }
    };

    return (
        <>
            <CssBaseline />
            <AppToolbar/>
            <Container maxWidth="sm">
                <Box mt={4}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Message Encoder/Decoder
                    </Typography>
                    <Messages
                        password={password}
                        message={message}
                        encoded={encoded}
                        decoded={decoded}
                        onPasswordChange={(e) => setPassword(e.target.value)}
                        onMessageChange={(e) => setMessage(e.target.value)}
                        onEncode={encode}
                        onDecode={decode}
                    />
                </Box>
            </Container>
        </>
    );
};

export default App;