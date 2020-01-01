import React from 'react';
import {PropTypes} from 'prop-types';

export default class CATestAppLink extends React.PureComponent {
    static propTypes = {
        teamName: PropTypes.string.isRequired,
        active: PropTypes.string.isRequired,
    };

    render() {
        return (
            <li className={this.props.active && 'active'}>
                <a
                    className='sidebar-item'
                    href={'/' + this.props.teamName + '/apps/catest'}
                >
                    <span className='icon'><i className='fa fa-vial'/></span>
                    <span className='sidebar-item__name'>
                        <span>{'Center Test App'}</span>
                    </span>
                </a>
            </li>
        );
    }
}
