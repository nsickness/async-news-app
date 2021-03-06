/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import {connect} from 'react-redux'
import Sources from './../components/Sources'

const mapStateToProps = (state) => {
    return {
        sources: state.sources.data.sources
    }
};

const SourcesList = connect(
    mapStateToProps
)(Sources);

export default SourcesList