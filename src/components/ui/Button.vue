<script setup lang="ts">
type Props = {
  bg?: 'red' | 'green';
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  bg: 'green',
});

const classes = computed(() => ({
  [props.bg]: props.bg,
  disabled: props.disabled,
}));
</script>

<template>
  <button :disabled="disabled" class="ui-button" :class="classes" @click.prevent>
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped>
.ui-button {
  display: flex;
  height: 56px;
  padding: 17px 70px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}

.green {
  background: var(--green);
}

.red {
  background: var(--red);
}

.disabled {
  opacity: 0.3;
}

span {
  color: var(--white);
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}
</style>
