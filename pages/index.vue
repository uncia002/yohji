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
  background-color: black;
}
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .1);
}
::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 5px;
  box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
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
  color: white;
  font-family: sans-serif;
}
.about{
  position: fixed;
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
  margin-left:50%;
  font-family: Regular;
}
</style>
