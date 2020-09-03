<template>
  <Page class="page" actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/assets/logo.png" />
        <StackLayout class="input-field">
          <TextField
            class="input"
            hint="Enter your email..."
            keyboardType="email"
            autocorrect="false"
            autocapitalizationType="none"
          />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            class="input"
            hint="Enter your password..."
            secure="true"
          />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField
            class="input"
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

      <Label v-if="isLoggingIn" text="Forgot your password ?" />

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
export default {
  data() {
    return {
      isLoggingIn: true
    };
  },
  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },
    submitForm() {
      console.log("hey i pressed submit");
      if (this.isLoggingIn) {
        // Perform the sign in
      } else {
        // Perform the sign up
      }
    }
  }
};
</script>

<style scoped lang="css"></style>
