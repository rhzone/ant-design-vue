<template>
  <a-form-model ref="form" :model="form" :rules="rules" v-bind="formItemLayout">
    <a-form-model-item prop="user_type" label="用户类型">
      <a-radio-group v-model="form.user_type">
        <a-radio value="1">
          1
        </a-radio>
        <a-radio value="2">
          2
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-button style="margin-left: 22px;" @click="handleSubmit">提交</a-button>
    <a-button @click="handleReset">重置</a-button>
  </a-form-model>
</template>

<script>
import { FormModel, Input, Radio, Button } from 'ant-design-vue';
import RadioGroup from 'ant-design-vue/radio/Group.jsx';
export default {
  components: {
    'a-form-model': FormModel,
    'a-form-model-item': FormModel.Item,
    'a-input': Input,
    'a-radio': Radio,
    'a-radio-group': RadioGroup,
    'a-button': Button,
  },
  data() {
    return {
      form: {
        user_type: '',
      },
      rules: {
        user_type: [{ required: true, message: '123' }],
      },
    };
  },
  computed: {
    formItemLayout() {
      return {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      };
    },
  },
  created() {
    window.vm = this;
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleSubmit() {},
  },
};
</script>

<style></style>
