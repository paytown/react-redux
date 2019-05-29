import { connect } from 'react-redux';
import PostDetails from '../../components/posts/PostDetails';
import { getPost } from '../../selectors/blogSelector';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id)
});

export default connect(mapStateToProps)(PostDetails);
