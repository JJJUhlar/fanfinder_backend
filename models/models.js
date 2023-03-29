const User = require("../schemas/user-schema");
const Comments = require("../schemas/comments-schema");
const connection = require("../db/connection");

exports.selectAllUsers = () => {
  return User.find().then((users) => {
    return users;
  });
};

exports.selectUserByName = (displayName) => {
  return User.findOne({ displayName: displayName }).then((user) => {
    return user;
  });
};

exports.createUser = (displayName, avatarURL) => {
  return User.create({ displayName: displayName, avatarUrl: avatarURL });
};
exports.selectComments = () => {
  console.log("selecting comments!");
  return Comments.find().then((comments) => {
    console.log(comments)
    return comments;
  });
};
