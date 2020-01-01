import React from 'react';
import {id as pluginId} from './manifest';
import CATest from 'catest';
import CATestAppLink from './catest_app_link';
import CATestMMLink from './catest_mm_link';

const Icon = () => <i className='icon fa fa-vial'/>;

class tingsCenterAppTest {
    initialize(registry, store) {
        registry.registerChannelHeaderButtonAction(
            // icon - JSX element to use as the button's icon
            <Icon />,
            // action - a function called when the button is clicked, passed the channel and channel member as arguments
            (channel) => {
                const state = store.getState();
                location.replace('/' + state.entities.teams.teams[channel.team_id].name + '/channel-apps/' + channel.name + '/catest');
            },
            // dropdown_text - string or JSX element shown for the dropdown button description
            "Center App Test",
            "Center App Test"
        );
        registry.registerTeamAppComponent(CATestAppLink);
        registry.registerTeamAppComponent(CATestMMLink);
        registry.registerAppCenterComponent('catest', CATest);
    }
}

window.registerPlugin(pluginId, new tingsCenterAppTest());