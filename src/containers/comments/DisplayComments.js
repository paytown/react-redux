import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentSelector';

const mapStateToProps = (state, postId) => ({
  comments: getComments(state, postId.match.params.id)
});

export default connect(mapStateToProps)(Comments);
