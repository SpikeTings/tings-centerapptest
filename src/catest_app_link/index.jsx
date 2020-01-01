import {connect} from 'react-redux';
import {id as pluginId} from '../manifest';

import CATestAppLink from './catest_app_link';

const isTeamAppActive = (state) => (state["entities"]["teams"]["teams"][state["entities"]["teams"]["currentTeamId"]]["name"] === 'titans');

function mapStateToProps(state) {
    return {
        active: isTeamAppActive(state),
    };
}

export default connect(mapStateToProps)(CATestAppLink);
