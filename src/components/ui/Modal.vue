<script setup lang="ts">
type Props = {
  visible: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  visible: false,
});
</script>

<template>
  <div v-show="props.visible" class="modal">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(119, 119, 119, 0.7);
}

.content {
  display: flex;
  align-items: center;
}
</style>
