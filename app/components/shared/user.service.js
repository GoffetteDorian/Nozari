import { Kinvey } from "kinvey-nativescript-sdk";
import { User } from "./user.model";

export class UserService {
  register(user) {
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

  login(user) {
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

  resetPassword(email) {
    return Kinvey.User.resetPassword(email).catch(this.handleErrors);
  }

  handleErrors(error) {
    console.error(error.message);
  }
}
