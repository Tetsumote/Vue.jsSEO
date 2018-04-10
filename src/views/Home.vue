<template>
  <div class="hello">
   <p>test</p>
   <Hello/>
  </div>
</template>

<script>
//@ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components:{
    Hello
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  font-size:12px;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
  display: inline-block;
  margin: 0 10px;
  font-size:24px;
}
}

a {
  color: #42b983;
}
</style>
