import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getAllPosts } from '../../selectors/blogSelector';

const mapStateToProps = state => ({
  posts: getAllPosts(state)
});

export default connect(mapStateToProps)(Posts);
