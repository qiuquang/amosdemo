<template>
  <div class="home">
  <!--<heading/>-->
  <formArea/>
    <el-radio>111</el-radio>
  </div>
</template>

<script>
import Vue from 'vue';
import cols from './cols';

// Vue.component('heading', {
//   render() {
//     console.log(this.cols);
//     return (
//       <div>
//         {this.cols.formModel.fields.map((item, index) => <div key={index}>
//             <div>{item.type}</div>
//             <div>{item.value}</div>
//           </div>)}
//       </div>);
//   },
//   data() {
//     return {
//       cols,
//     };
//   },
// });

// 1.写一个大的form来判断
// 2. 写一个方法 来根据类型 获取VNode   VNode=>dom

Vue.component('formArea', {
  render() {
    console.log(this.cols);
    return (
      <el-form>
        {this.cols.formModel.fields.map((item, index) => <el-form-item key={index}>
          <item.type
            disabled={item.disabled}
            value={item.value}
            class={item.className}
            placeholder={item.placeholder}>
          {item.name}
          <div> {item.options.map((item1, index1) => <item.subType key={index1} value={item1.value} label={item1.label}>
            </item.subType>)}
          </div>
          </item.type>
        </el-form-item>)}
      </el-form>);
  },
  data() {
    return {
      cols,
    };
  },
  mounted() {
    this.generateList(this.cols.formModel.fields);
  },
  methods: {
    generateList(itemObj) {
      console.log(itemObj);
      const itemEle = [];
      for (let index = 0; index < itemObj.length; index++) {
        const item = itemObj[index];
        switch (item.type) {
          // 下拉菜单
          case 'select':
            itemEle.push(<el-option key={ item.index } label={ item.text } value={ item.index }></el-option>);
            break;
            // 多选框
          case 'checkbox':
            itemEle.push(<el-checkbox label={ item.index }>{ item.text }</el-checkbox>);
            break;
            // 单选框
          case 'el-radio':
            itemEle.push(<el-radio value={item.value} label={ item.name }>{ item.text }</el-radio>);
            break;
          default:
            break;
        }
      }
      console.log(itemEle);
      return itemEle;
    },
  },
});
export default {
  name: 'home',
  components: {
  },
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
