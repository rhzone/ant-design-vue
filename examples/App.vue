<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
    <a-form-item label="Note">
      <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item>
      <a-button @click="handleSubmit">
        提交
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import Vue from 'vue';
import { Form, Input, Button } from 'ant-design-vue';
Vue.use(Form);
export default {
  components: {
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-button': Button,
  },
  data() {
    return {
      /** @type import('../types/form/form').WrappedFormUtils */
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((errors, values) => {
        debugger;
      });
    },
  },
};
</script>
