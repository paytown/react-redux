import { connect } from 'react-redux';
import PostDetails from '../../components/posts/PostDetails';
import { getPost } from '../../selectors/blogSelector';

const mapStateToProps = (state, props) => ({
  posts: getPost(state, props.match.params.id)
});

export default connect(mapStateToProps)(PostDetails);
