import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Box from '@material-ui/core/Box';
import Paper from '../../../components/Paper';
import config from '../../../config';

export default function Forum() {
    return (
        <Paper>
            <Box
                sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    fontFamily: config('templete.fontFamily.1'),
                    marginBottom: '20px',
                }}
            >
                테스트게시판
            </Box>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </Paper>
    );
}
