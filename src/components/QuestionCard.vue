<script setup lang="ts">
type Props = {
  content: string;
};

defineProps<Props>();
</script>

<template>
  <div class="card">
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.card {
  min-height: 176px;
  max-width: 500px;
  padding: 40px 40px;
  border-radius: 20px;
  border: 2px solid #29aae1;
  background: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
}

p {
  color: #000;

  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  white-space: pre-wrap;
}
</style>
