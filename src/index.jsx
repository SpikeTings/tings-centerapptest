import React from 'react';
import CATest from 'catest';

class tingsCenterAppTest {
    initialize(registry, store) {
        registry.registerAppCenterComponent('catest', CATest);
    }
}

window.registerPlugin('com.spikeassociates.tings-centerapptest', new tingsCenterAppTest());