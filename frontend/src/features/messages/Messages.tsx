import { Button, TextField, Grid } from "@mui/material";
import {ChangeEvent} from "react";

interface MessagesProps {
    password: string;
    message: string;
    encoded: string;
    decoded: string;
    onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onMessageChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onEncode: () => void;
    onDecode: () => void;
}

const Messages: React.FC<MessagesProps> = ({password,message,encoded,decoded,onPasswordChange,onMessageChange,onEncode,onDecode,}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={onMessageChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Password"
                    value={password}
                    onChange={onPasswordChange}
                />
            </Grid>
            <Grid item xs={6}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={onEncode}
                >
                    Encode
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={onDecode}
                >
                    Decode
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Encoded Message"
                    value={encoded}
                    disabled
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Decoded Message"
                    value={decoded}
                    disabled
                />
            </Grid>
        </Grid>
    );
};

export default Messages;