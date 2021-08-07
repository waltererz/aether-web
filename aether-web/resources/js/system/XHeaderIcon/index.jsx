import React from 'react';
import { Link } from 'react-router-dom';

export default class XHeaderIcon extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.desktop ? (
                    <div className="icons-desktop">
                        {this.props.desktop.map((item, index) => {
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
                {this.props.mobile ? (
                    <div className="icons-mobile">
                        {this.props.mobile.map((item, index) => {
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
}
