import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { FIXParser } from 'fixparser/FIXParserBrowser';
import { FixMessage } from "../../models/FixMessage/FixMessage";

type FixParserProps = {
    onChange: (data: FixMessage[]) => void
};

function FixParser({ onChange }: FixParserProps) {

    const [text, setText] = useState<string>('');

    const fixParser: FIXParser = new FIXParser();

    const handleMessageChange = (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        const tmp: string = event.target.value;
        setText(tmp)
        let parsed = fixParser.parse(tmp);
        if (parsed === null) {
            parsed = [];
        }
        console.log(parsed);
        onChange(parsed.map((x, i) => new FixMessage(i, x)));
    };

    return (
        <>
            <TextField
                id='fix-input'
                placeholder='Paste FIX messages or drop files containing FIX text.'
                value={text}
                onChange={handleMessageChange}
                maxRows={10}
                multiline
                fullWidth />
        </>
    );
}

export default FixParser;

