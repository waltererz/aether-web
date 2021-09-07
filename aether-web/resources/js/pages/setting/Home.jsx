import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { setTitle } from '../../redux/actions/app';
import Paper from '../../components/Paper';
import config from '../../config';

export default function Home() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        /**
         * 페이지 타이틀을 설정합니다.
         * (주의) 라라벨에서 지정했던 내용들을 그대로 준수해야 합니다.
         */
        dispatch(setTitle('앱 설정'));
    }, []);

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
