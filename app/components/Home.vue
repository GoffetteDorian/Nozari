<template>
  <Page class="page" actionBarHidden="true">
    <FlexboxLayout class="page">
      <StackLayout class="form">
        <Image class="logo" src="~/assets/logo.png" />
        <StackLayout class="input-field">
          <TextField class="input" />
        </StackLayout>

        <StackLayout class="input-field">
          <TextField class="input" />
        </StackLayout>

        <Button text="Log In" class="btn btn-primary" />
      </StackLayout>

      <Label text="Don't have an account?" />
    </FlexboxLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="css"></style>
