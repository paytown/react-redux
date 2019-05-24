import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import getAllComments from '../../selectors/commentSelector';

const mapStateToProps = (state, { postId }) => ({
  comments: getAllComments(state, postId)
});

export default connect(mapStateToProps)(Comments);
