

<template>
  <div  id="container">
    <aside>
      <h2><a href="#">Home page</a></h2>
      <h2><a href="#">About page</a></h2>
    </aside>
    <main>
      <section>
        <header>
          <button @click="toggleAside">Toggle</button>
        </header>
        {{ isAsideOpen}}
        {{  screen }}
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  props: {
    msg: String
  },
  data() {
    return {
      isAsideOpen: true,

    };
  },
  methods: {
    toggleAside() {
      this.isAsideOpen = !this.isAsideOpen;
      this.$nextTick(() => {
        const asideElement = document.querySelector('aside');
        asideElement.style.display = this.isAsideOpen ? 'block' : 'none';
      });
    },
    checkAsideOpenClass() {
      const asideElement = document.querySelector('#container aside');
      const displayPropertyValue = window.getComputedStyle(asideElement).getPropertyValue('display');
      this.isAsideOpen =(displayPropertyValue === 'block') ? true: false;
    },
  },
  mounted() {
   
    this.checkAsideOpenClass();

  }
}
</script>

<style scoped>
header {
  background: white;
  height: 76px;
  margin-top: 26px;
}

#container {
  display: flex;
}

aside {
  background: #2B2A3F;
  padding: 0 5em;
  width: 150px;
}

main {
  background: #F2F1F9;
  height: 100vh;
  flex: 1;
}

.aside-open {
  display: block;
 }

@media screen and (max-width: 767px) {
  aside {
    display: none;
  }
  
}

</style>

