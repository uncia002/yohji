<template>
  <div class="vbody">
    <div class="about">
      <h1>Yohji Yamamoto</h1>
      <p>DESIGNER :</p>
      <ul>
        <li>yohji yamamoto</li>
      </ul>
    </div>
    <div class="lines">
      <ScrollList/>
    </div>
  </div>
</template>

<script>
import ScrollList from '../components/ScrollList.vue'
export default {
  components:{
    ScrollList,
  },
  data: function() {
    return {
      content:""
    }
  },
}
</script>


<style>
body{
  overflow: hidden;
}
@font-face {
  font-family: 'Bold';
  src: url('../assets/font/GlacialIndifference-Bold.otf') format('woff');
}
@font-face {
  font-family: 'Regular';
  src: url('../assets/font/GlacialIndifference-Regular.otf') format('woff');
}
.vbody {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  background-color: black;
  color: white;
  font-family: sans-serif;

}
.about{
  width:50%;
  padding: 20px;
  font-family: Regular;
}

.about h1{
  font-family: Bold;
}
.about p{
  font-size: 15px;
}
.about ul{
  list-style: none;
}
.about li{

}
.lines{
  width: 50%;
  padding: 20px;
  font-family: Regular;
}
</style>
