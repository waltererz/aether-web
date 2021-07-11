import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const _fetchLinks = (metadata, baseUrl) => {
    return metadata.links.map((link, index) => {
        if (link.label != 'pagination.previous' && link.label != 'pagination.next') {
            return (
                <Link to={`${baseUrl}/page/${link.label}`} key={`pagination_${index}`}>
                    <li className={link.active ? 'link active' : 'link'}>{link.label}</li>
                </Link>
            );
        } else {
            return '';
        }
    });
};

const Pagination = ({ metadata, baseUrl }) => {
    let prevUrl,
        nextUrl = null;

    if (metadata.prev_page_url) {
        prevUrl = baseUrl + '/page/' + (metadata.current_page - 1);
    }

    if (metadata.next_page_url) {
        nextUrl = baseUrl + '/page/' + (metadata.current_page + 1);
    }

    return (
        <ul className="pagination">
            {prevUrl ? (
                <Link to={prevUrl}>
                    <li className="link previous">
                        <ChevronLeftIcon />
                    </li>
                </Link>
            ) : (
                <li className="link previous disabled">
                    <ChevronLeftIcon />
                </li>
            )}
            {metadata.links ? _fetchLinks(metadata, baseUrl) : ''}
            {nextUrl ? (
                <Link to={nextUrl}>
                    <li className="link next">
                        <ChevronRightIcon />
                    </li>
                </Link>
            ) : (
                <li className="link previous disabled">
                    <ChevronRightIcon />
                </li>
            )}
        </ul>
    );
};

export default Pagination;
