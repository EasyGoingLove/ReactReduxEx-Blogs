import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

type MyProps = { fetchPosts: () => void; posts: object[] };
type MyState = {};

class PostList extends React.Component<MyProps, MyState> {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return <div>Post Lists</div>;
  }
}
const mapStateToProps = (state:any) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
