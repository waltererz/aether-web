import { useHistory } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Paper from '../../../components/Paper';
import AddchartRoundedIcon from '@material-ui/icons/AddchartRounded';

export default function Home() {
    const history = useHistory();

    return (
        <Paper>
            <Chip
                label="포트폴리오 만들기"
                variant="outlined"
                color="secondary"
                icon={<AddchartRoundedIcon />}
                onClick={() => {
                    history.push('/investment/portfolio/create');
                }}
            />
        </Paper>
    );
}
