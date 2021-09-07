import ExtendedContainer from './container/ExtendedContainer';
import ContentContainer from './container/ContentContainer';
import FlatContainer from './container/FlatContainer';
import BasicContainer from './container/BasicContainer';

export default function Container({ pages, secondary, submenus }) {
    if (!submenus && !secondary) {
        return <FlatContainer pages={pages} />;
    } else if (submenus && !secondary) {
        return <BasicContainer pages={pages} submenus={submenus} />;
    } else if (!submenus && secondary) {
        return <ContentContainer pages={pages} secondary={secondary} />;
    } else {
        return <ExtendedContainer pages={pages} secondary={secondary} submenus={submenus} />;
    }
}
