import React from 'react';
import { Link } from 'react-router-dom';

export default function XHeaderIcon(props) {
    return (
        <React.Fragment>
            {props.desktop ? (
                <div className="icons-desktop">
                    {props.desktop.map((item, index) => {
                        return (
                            <div className="icon" key={index}>
                                <Link to={item.to}>{item.icon}</Link>
                            </div>
                        );
                    })}
                </div>
            ) : (
                ''
            )}
            {props.mobile ? (
                <div className="icons-mobile">
                    {props.mobile.map((item, index) => {
                        return (
                            <div className="icon" key={index}>
                                <Link to={item.to}>{item.icon}</Link>
                            </div>
                        );
                    })}
                </div>
            ) : (
                ''
            )}
        </React.Fragment>
    );
}
