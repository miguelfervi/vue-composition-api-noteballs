<template>
    <div class="notes">
    <div class="card p-4 mb-5" :class="`has-background-${ bgColor }-dark`">
      <label class="label has-text-white" v-if="label"> {{label}}</label>
      <div class="field">
        <div class="control">
          <textarea 
          v-model="props.modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
            class="textarea" 
            :placeholder="placeholder"
             ref="textareaRef" 
             maxlength="100"
             v-autofocus />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="buttons"></slot>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type something here...'
  },
  label: {
    type: String,
  }
})

const emit =  defineEmits(['update:modelValue'])

const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea
});

</script>