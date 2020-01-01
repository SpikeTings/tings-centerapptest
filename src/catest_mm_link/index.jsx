import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class CATestMMLink extends Component {
    static propTypes = {
        teamName: PropTypes.string.isRequired,
    };

    render() {
        return (
            <li className={this.props.teamName=='titans' && 'active'}>
                <a
                    className='sidebar-item'
                    target="_blank"
                    href={'https://mattermost.com'}
                >
                    <span className='icon'><i className='fa fa-browser'/></span>
                    <span className='sidebar-item__name'>
                        <span>{'Mattermost Website'}</span>
                    </span>
                </a>
            </li>
        );
    }
}
