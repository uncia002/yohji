<template>
  <div>
    <div v-for="(name, index) in lines" :key="index">
      <h2 class="name">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data: function() {
    return {
      content:""
    }
  },
  computed: {
    ...mapState(['lines'])
  }
}
</script>

<style>
.name{
  font-size:50px;
}
</style>
