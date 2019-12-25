<template>
  <div class="home">
  123
  </div>
</template>

<script>
// @ is an alias   to /src
import cols from './cols';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      cols,
    };
  },
  render() {
    return (
      <div>
        <h1 class="h1" onClick={e => this.print(e)}>{1234566666}</h1>
      </div>
    );
  },
  // render() {
  // https://juejin.im/post/5da5e63451882508876f4f25
  // https://juejin.im/post/5cad62dbf265da0359485667
  // https://juejin.im/post/5d9fec665188250c71076c55   eslint 校验规则
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
    height: 100%;
    width: 100%;
    .foo{
      font-size: 40px;
    }
    .bar{
      font-size: 20px;
    }
  }
</style>
