const cols = {
  id: 'c22354fe-2700-11ea-b842-48f17f788bec',
  name: 'My first form',
  key: 'start',
  version: 1,
  formModel: {
    name: 'My first form',
    key: 'start',
    version: 0,
    fields: [
      {
        fieldType: 'FormField',
        id: 'type',
        name: 'type',
        className: 'className1',
        disabled: true,
        type: 'el-input',
        value: '0000',
        required: true,
        readOnly: true,
        overrideId: false,
        placeholder: 'empty',
        layout: null,
        options: [],
      },
      {
        fieldType: 'FormField',
        id: 'input1',
        name: '苹果',
        className: 'className2',
        disabled: false,
        type: 'el-radio',
        value: false,
        required: false,
        readOnly: true,
        overrideId: false,
        placeholder: 'empty',
        layout: null,
        options: [],
      },
      {
        fieldType: 'FormField',
        id: 'input1',
        name: '',
        className: 'className2',
        disabled: false,
        type: 'el-select',
        value: '选项1',
        required: false,
        readOnly: true,
        overrideId: false,
        placeholder: 'empty',
        layout: null,
        subType: 'el-option',
        options: [{
          value: '选项1',
          label: '黄金糕',
        }, {
          value: '选项2',
          label: '双皮奶',
        }, {
          value: '选项3',
          label: '蚵仔煎',
        }, {
          value: '选项4',
          label: '龙须面',
        }, {
          value: '选项5',
          label: '北京烤鸭',
        }],
      },
    ],
    outcomes: [
      {
        id: 'done',
        name: '发起申请',
      },
    ],
  },
  tenantId: '',
};

export default cols;
