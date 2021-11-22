import React from "react";
import { connect } from "react-redux";

interface IUser {
  name: string;
}
type MyProps = {
  user: IUser;
};
type MyState = {};

class UserHeader extends React.Component<MyProps, MyState> {
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
      (user: { id: number }) => user.id === ownProps.userId
    ),
  };
};
export default connect(mapStateToProps)(UserHeader);
