<template>
    <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea v-model="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea" placeholder="Add a new Note" ref="textareaRef" />
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

const props = defineProps({
  modelValue: {
    type: String,
    required: true
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