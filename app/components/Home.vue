<template>
  <Page class="page" actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/assets/logo.png" />
        <StackLayout class="input-field">
          <TextField
            class="input"
            v-model="user.email"
            hint="Enter your email..."
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
          />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            class="input"
            v-model="user.password"
            hint="Enter your password..."
            secure="true"
          />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            class="input"
            v-model="user.confirmPassword"
            v-if="!isLoggingIn"
            hint="Confirm your password..."
            secure="true"
          />
        </StackLayout>

        <Button
          class="btn btn-primary"
          :text="isLoggingIn ? 'LOG IN' : 'SIGN UP'"
          @tap="submitForm()"
        />
      </StackLayout>

      <Label
        v-if="isLoggingIn"
        text="Forgot your password ?"
        @tap="forgotPassword()"
      />

      <Label @tap="toggleForm()">
        <FormattedString>
          <Span
            :text="isLoggingIn ? 'Don´t have an account ?' : 'Back to Login'"
          />
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { User } from "./shared/user.model";
import { UserService } from "./shared/user.service";

export default {
  data() {
    return {
      isLoggingIn: true,
      user: new User()
    };
  },
  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submitForm() {
      console.log(this.user.email);
      if (!this.user.email || !this.user.password) {
        alert({
          title: "Nozari",
          message: "Please provide both an email adress and password.",
          okButtonText: "Ok"
        });
      }
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      this.userService
        .login(this.user)
        .then(() => {
          this.router.navigate(["/home"]);
        })
        .catch(() => {
          this.alert("Unfortunately we could not find your account.");
        });
    },

    register() {
      if (this.user.password !== this.user.confirmPassword) {
        this.alert("Your passwords do not match.");
        return;
      }

      this.userService
        .register(this.user)
        .then(() => {
          this.alert("Your account was succesfully created.");
          this.isLoggingIn = true;
        })
        .catch(() => {
          this.alert("Unfortunately we were unable to create your account.");
        });
    },

    forgotPassword() {
      prompt({
        title: "Forgot password",
        message:
          "Enter the email adress you used to register for Nozari to reset your password.",
        defaultText: "",
        okButtonText: "Send",
        cancelButtonText: "Cancel"
      }).then(data => {
        // CALL TO BACKEND TO RESET PASSWORD
        if (data.result) {
          this.userService
            .resetPassword(data.text.trim())
            .then(() => {
              this.alert(
                "Your password was succesfully reset. Please check your email for instructions on choosing a new password."
              );
            })
            .catch(() => {
              this.alert(
                "Unfortunately, an error occurred resetting your password."
              );
            });
        }
      });
    },

    alert(message) {
      return alert({
        title: "Nozari",
        message,
        okButtonText: "Ok"
      });
    }
  }
};
</script>

<style scoped lang="css"></style>
