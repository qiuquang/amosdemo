<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <heading></heading>
  </div>
</template>

<script>
// @ is an alias   to /src
import HelloWorld from '@/components/HelloWorld.vue';
import cols from './cols';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      cols,
    };
  },
  render() {
    return (
      <div>
        <span>Hello</span> world!
      </div>
    );
  },
  // render() {
  //   return (
  //   //   <div
  //   // className="haha">
  //   //   {
  //   //     //   cols.map((item) => {
  //   //     //     return {
  //   //     //       <div>{item.value}</div>
  //   //     //     }
  //   //     // })
  //   //   }
  //   //   </div>
  // //     <div id="app">
  // //     <div>
  // //     { message }
  // //     </div>
  // //     <span title={message}>
  // //     鼠标悬停几秒钟查看此处动态绑定的提示信息！
  // // </span>
  // //   </div>
  //   );
  // },
};
</script>
<style lang="scss">
  .home{
    .foo{
      font-size: 40px;
    }
    .bar{
      font-size: 20px;
    }
  }
</style>
