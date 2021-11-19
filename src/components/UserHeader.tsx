import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

interface IUser {
  name:string
}
type MyProps = {
  fetchUser: (arg0: number) => void;
  user: IUser;
  userId: number;
};
type MyState = {};

class UserHeader extends React.Component<MyProps, MyState> {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.users.find(
      (user:{ id: number }) => user.id === ownProps.userId
    ),
  };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
