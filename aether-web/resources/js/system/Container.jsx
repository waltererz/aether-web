import BasicContainer from './container/BasicContainer';
import SimpleContainer from './container/SimpleContainer';
import SingleContainer from './container/SingleContainer';

export default function Container({ pages, secondary, submenus }) {
    if (!submenus && !secondary) {
        return <SingleContainer pages={pages} />;
    } else if (!submenus && secondary) {
        return <SimpleContainer pages={pages} secondary={secondary} />;
    } else {
        return <BasicContainer pages={pages} secondary={secondary} submenus={submenus} />;
    }
}
