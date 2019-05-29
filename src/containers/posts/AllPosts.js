import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getAllPosts } from '../../selectors/blogSelector';
import { removePost } from '../../actions/blogActions';

const mapStateToProps = state => ({
  posts: getAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
  removePost(id) {
    dispatch(removePost(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
