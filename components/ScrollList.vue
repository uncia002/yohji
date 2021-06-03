<template>
  <div style="position:relative;">
    <ul class="linelist" ref="linelist" :style="{top:scrollY+'px'}">
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
      content:"",
      scrollY:0,
    }
  },
  mounted(){
    //this.Tilt()
    //window.addEventListener('scroll', this.calculateScrollY)
  },
  beforeDestroy() {
    window.removeEventListener('scroll',this.calculateScrollY)
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
    },
    calculateScrollY(){
      this.scrollY = window.scrollY
      console.log(this.calculateScrollY)
    }
  },
}
</script>

<style>
.linelist{
  list-style:none;
  position:absolute;
}
.name{
  font-size:45px;
  text-align:center;
}

</style>
