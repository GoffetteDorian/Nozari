import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "./user.model";

export const UserService = () => {
  function register(user) {
    return new Promise((resolve, reject) => {
      Kinvey.User.logout().then(() => {
        Kinvey.User.signup({ username: user.email, password: user.password })
          .then(resolve)
          .catch(error => {
            this.handleErrors(error);
            reject();
          });
      });
    });
  }

  function login(user) {
    return new Promise((resolve, reject) => {
      Kinvey.User.logout().then(() => {
        Kinvey.User.login(user.email, user.password)
          .then(resolve)
          .catch(error => {
            this.handleErrors(error);
            reject();
          });
      });
    });
  }

  function resetPassword(email) {
    return Kinvey.User.resetPassword(email).catch(this.handleErrors);
  }

  function handleErrors(error) {
    console.error(error.message);
  }
};
