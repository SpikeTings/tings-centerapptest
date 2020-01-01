import React from 'react';
import {id as pluginId} from './manifest';
import CATest from 'catest';
import CATestAppLink from './catest_app_link';
import CATestMMLink from './catest_mm_link';

class tingsCenterAppTest {
    initialize(registry, store) {
        registry.registerTeamAppComponent(CATestAppLink);
        registry.registerTeamAppComponent(CATestMMLink);
        registry.registerAppCenterComponent('catest', CATest);
    }
}

window.registerPlugin(pluginId, new tingsCenterAppTest());