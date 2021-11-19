import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

interface IPosts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

type MyProps = { fetchPosts: () => void; posts: IPosts[] };
type MyState = {};

class PostList extends React.Component<MyProps, MyState> {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui-relaxed">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state: any) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
