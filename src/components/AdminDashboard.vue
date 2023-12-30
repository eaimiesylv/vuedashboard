<template>
  <div class="container">
      <Aside>
          <a href="#">Home page</a>
      </Aside>
      <Main>
          This is the body of the home page
      </Main>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
