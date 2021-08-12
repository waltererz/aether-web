import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function XHeaderIcons() {
    const headerIcons = useSelector((state) => state.app.headerIcons);

    return (
        <React.Fragment>
            {headerIcons && 'desktop' in headerIcons && (
                <div className="icons-desktop">
                    {headerIcons.desktop.map((item, index) => {
                        return (
                            <div className="icon" key={index}>
                                <Link to={item.to}>{item.icon}</Link>
                            </div>
                        );
                    })}
                </div>
            )}
            {headerIcons && 'mobile' in headerIcons && (
                <div className="icons-mobile">
                    {headerIcons.mobile.map((item, index) => {
                        return (
                            <div className="icon" key={index}>
                                <Link to={item.to}>{item.icon}</Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </React.Fragment>
    );
}
