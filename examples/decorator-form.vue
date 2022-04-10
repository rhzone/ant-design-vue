<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
    <a-form-item label="Note">
      <a-input
        v-decorator="[
          'note.a',
          { rules: [{ required: true, message: 'Please input your note!' }], initialValue: '1' },
        ]"
      />
    </a-form-item>
    <a-form-item label="Name">
      <a-input v-decorator="['obj', { rules: [{ required: true }] }]" />
    </a-form-item>
    <a-form-item>
      <a-button @click="handleSubmit">
        提交
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { Form, Input, Button } from 'ant-design-vue';
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
      form: Form.createForm(this, {
        onFieldsChange(props, fields) {},
      }),
    };
  },
  created() {
    window.vm = this;
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((errors, values) => {});
    },
  },
};
</script>
