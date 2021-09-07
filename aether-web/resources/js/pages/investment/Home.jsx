import React from 'react';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/actions/app';
import Paper from '../../components/Paper';

export default function Home() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        /**
         * 페이지 타이틀을 설정합니다.
         * (주의) 라라벨에서 지정했던 내용들을 그대로 준수해야 합니다.
         */
        dispatch(setTitle('투자자산 관리'));
    }, []);

    return <Paper>투자 페이지</Paper>;
}
