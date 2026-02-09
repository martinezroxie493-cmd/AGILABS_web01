<template>
  <div id="app">
    <header>
      <h1>Welcome to AGILABS</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2026 AGILABS. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  margin-top: 20px;
}
</style>