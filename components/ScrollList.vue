<template>
  <div>
    <ul class="linelist" ref="linelist">
      <li class="line" v-for="(name, index) in lines" :key="index" name='line'>
        <h2 class="name">{{ name }}</h2>
      </li>
    </ul>
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
  mounted(){
    this.Tilt()
  },
  computed: {
    ...mapState(['lines'])
  },
  methods:{
    Tilt(){
      var forEach = Array.prototype.forEach;
      var  value= 0
      let linelist=document.getElementsByName('line')
      forEach.call(linelist,function (elem) {
        elem.style.marginLeft = value+"px"
        value=value+20
        console.log(value+"px")
      })
    }
  },
}
</script>

<style>
.name{
  font-size:45px;
}

</style>
