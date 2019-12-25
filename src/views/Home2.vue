<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <heading></heading>
  </div>
</template>

<script>
import Vue from 'vue';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import cols from './cols';

Vue.component('heading', {
  render(h) {
    console.log(h, this.cols);
    return h(
      'div',
      {
        // 与 `v-bind:class` 的 API 相同，
        // 接受一个字符串、对象或字符串和对象组成的数组
        class: {
          foo: true,
          bar: false,
        },
        // 与 `v-bind:style` 的 API 相同，
        // 接受一个字符串、对象，或对象组成的数组
        style: {
          color: 'red',
          height: '300px',
          width: '100%',
          backgroundColor: '#eee',
        },
        // 普通的 HTML 特性
        attrs: {
          id: 'foo',
        },
        // 组件 prop
        props: {
          myProp: 'bar',
        },
        // DOM 属性
        domProps: {
          // innerHTML: 'baz',
        },
      },
      [
        this.cols.map(item => h(
          item.type,
          {
            style: {
              height: '30%',
              width: '100%',
            },
            domProps: {
              innerHTML: item.value,
            },
          },
          [console.log(item),
            h(item.type, item),
          ],
        )),
      ],
    );
  },
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      cols,
    };
  },
});
export default {
  name: 'home',
  components: {
    HelloWorld,
  },
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
