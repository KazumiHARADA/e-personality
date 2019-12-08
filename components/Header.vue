<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">ePersonality Test</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!--        <b-nav-item to="/inputs/1" right>Test</b-nav-item>-->
        <!--        <b-nav-item to="/result" right>Result</b-nav-item>-->
        <!--        <b-nav-item to="/about" right>About</b-nav-item>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped></style>
