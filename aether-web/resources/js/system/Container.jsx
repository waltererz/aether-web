import BasicContainer from './container/BasicContainer';
import SimpleContainer from './container/SimpleContainer';

export default function Container({ pages, secondary, submenus }) {
    if (submenus) {
        return <BasicContainer pages={pages} secondary={secondary} submenus={submenus} />;
    } else {
        return <SimpleContainer pages={pages} secondary={secondary} />;
    }
}
