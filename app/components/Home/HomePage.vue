<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <StackLayout class="page">
      <Image class="logo" src="~/assets/logo.png" />

      <GridLayout columns="*, *" rows="*, *">
        <Button class="btn" row="0" col="0" text="Events" @tap="onEventTap" />
        <Button class="btn" row="0" col="1" text="Armory" @tap="onArmoryTap" />
        <Button
          class="btn"
          row="1"
          col="0"
          colSpan="2"
          text="Calendar"
          @tap="onCalendarTap"
        />
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onEventTap() {
      console.log("Events tapped");
    },

    onArmoryTap() {
      console.log("Armory tapped");
    },

    onCalendarTap() {
      console.log("Calendar tapped");
    }
  }
};
</script>

<style scoped>
button {
  background-color: rgba(179, 61, 38, 0.5);
}
</style>
