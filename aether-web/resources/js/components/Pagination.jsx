import React from 'react';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Pagination(props) {
    const { metadata, baseUrl } = props;

    const fetchLinks = (links, baseUrl) => {
        return links.map((link, index) => {
            if (link.label != 'pagination.previous' && link.label != 'pagination.next') {
                if (link.label != '...') {
                    return (
                        <Link to={`${baseUrl}/page/${link.label}`} key={`pagination_${index}`}>
                            <li className={link.active ? 'link active' : 'link'}>{link.label}</li>
                        </Link>
                    );
                } else {
                    return (
                        <li className="link" key={`pagination_${index}`}>
                            ...
                        </li>
                    );
                }
            } else {
                return '';
            }
        });
    };

    if (metadata.current_page) {
        const limit = 2;
        let prevUrl,
            nextUrl = null;

        if (metadata.prev_page_url) {
            prevUrl = baseUrl + '/page/' + (metadata.current_page - 1);
        }

        if (metadata.next_page_url) {
            nextUrl = baseUrl + '/page/' + (metadata.current_page + 1);
        }

        let links = [];
        let linkCount = 0;
        metadata.links.map((link) => {
            const label = Number(link.label);
            if (
                (metadata.current_page - limit <= label &&
                    metadata.current_page + limit >= label) ||
                (metadata.current_page - limit < 1 &&
                    metadata.current_page + limit - (metadata.current_page - limit - 1) >= label) ||
                (metadata.current_page + limit > metadata.last_page &&
                    metadata.current_page -
                        limit -
                        (metadata.current_page + limit - metadata.last_page) <=
                        label)
            ) {
                if (!linkCount) {
                    linkCount = linkCount + 2;
                } else {
                    linkCount++;
                }
                links[linkCount] = link;
            }
        });

        if (metadata.current_page > 1 + limit) {
            links[0] = { active: false, label: '1' };
            links[1] = { active: false, label: '...' };
        }

        if (metadata.current_page < metadata.last_page - limit) {
            links[linkCount + 1] = { active: false, label: '...' };
            links[linkCount + 2] = { active: false, label: metadata.last_page };
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
                {links ? fetchLinks(links, baseUrl) : ''}
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
    } else {
        return null;
    }
}
