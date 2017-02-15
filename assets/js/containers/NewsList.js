/**
 * Created by Nikita on 2/8/17.
 */

'use strict';

import {connect} from 'react-redux'
import News from './../components/News'

const mapStateToProps = (state) => {
    return {
        news: state.news.data
    }
};

const NewsList = connect(
    mapStateToProps
)(News);

export default NewsList