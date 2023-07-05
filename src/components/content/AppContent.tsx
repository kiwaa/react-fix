import React, { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import FixParser from '../fixparser/FixParser';
import Timeline from '../timeline/Timeline';
import Detail from '../detail/Detail';
import { FixMessage } from "../../models/FixMessage/FixMessage";

function AppContent() {
    const [messages, setMessages] = useState<FixMessage[]>({} as FixMessage[]);
    const [selectedMessage, setSelectedMessage] = useState<FixMessage>(new FixMessage(-1, null));

    const handleFixParserChanged = (messages: FixMessage[]) => {
        console.log(messages);
        setMessages(messages);
    }

    const handleSelectedMessage = (message: FixMessage) => {
        console.log(message);
        setSelectedMessage(message);
    }

    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <Item>
                    <Typography variant="h4" component="h1" gutterBottom>
                        FIX Messages Decoder
                    </Typography>
                    <FixParser onChange={handleFixParserChanged} />
                </Item>
            </Grid>
            <Grid xs={7}>
                <Item>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Timeline
                    </Typography>
                    <Timeline values={messages} onSelected={handleSelectedMessage} />
                </Item>
            </Grid>
            <Grid xs={5}>
                <Item>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Detail
                    </Typography>
                    <Detail value={selectedMessage} />
                </Item>
            </Grid>
        </Grid >
    );
}

export default AppContent;