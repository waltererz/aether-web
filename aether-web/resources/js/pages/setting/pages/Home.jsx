import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Paper from '../../../components/Paper';
import config from '../../../config';

export default function Home() {
    return (
        <Paper>
            <Box
                sx={{
                    textAlign: 'right',
                    fontSize: '0.8em',

                    '& a': {
                        color: config('templete.palette.secondary.main'),
                    },
                }}
            >
                <Link to="/user/signout">로그아웃</Link>
            </Box>
        </Paper>
    );
}
