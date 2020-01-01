import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class CATest extends Component {
	static propTypes = {
		teamName: PropTypes.string.isRequired,
		channelName: PropTypes.string,
		teamId: PropTypes.string.isRequired,
		channelId: PropTypes.string,
		contextTeam: PropTypes.boolean,
	}

    componentDidUpdate(prevProps) {
        if (prevProps.channelId !== this.props.channelId || prevProps.teamId !== this.props.teamId) {
			if (this.props.channelId) {
				this.props.contextTeam = false;
			} else {
				this.props.contextTeam = true;
			}
		}
    }

    render() {
        if (this.props.channelName) {
            this.props.contextTeam = false;
        } else {
            this.props.contextTeam = true;
        }
        return (
            <div className="header__info">
				This is the center app hook. You are in the {this.props.contextTeam ? 'Team '+this.props.teamName : 'Channel '+this.props.channelName}!!
            </div>
        );
	}
}
