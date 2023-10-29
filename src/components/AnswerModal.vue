<script setup lang="ts">
type Props = {
  visible: boolean;
  answer: boolean;
};

const answerResult = {
  correct: {
    description: 'You answered correctly! <br> Continue to next question?',
    icon: '/icons/check.svg',
    class: 'correct',
  },
  wrong: {
    description: 'You answered incorrectly! <br> Continue to next question?',
    icon: '/icons/x.svg',
    class: 'wrong',
  },
};

const props = defineProps<Props>();
const emits = defineEmits(['onNext']);

const result = computed(() => (props.answer ? answerResult.correct : answerResult.wrong));

const onNext = () => {
  emits('onNext');
};
</script>

<template>
  <UiModal :visible="visible">
    <div class="game-over" :class="result.class">
      <NuxtImg :src="result.icon" width="70" height="70" />

      <span v-html="result.description" />

      <UiButton @click.prevent="onNext">Next</UiButton>
    </div>
  </UiModal>
</template>

<style scoped>
.game-over {
  width: 320px;
  height: 278px;
  flex-shrink: 0;
  border-radius: 20px;
  padding: 24px 24px 28px;
  display: flex;
  border: 2px solid;
  flex-direction: column;
  align-items: center;
  background: #fff;
}

.correct {
  border-color: #21bc1e;
}

.wrong {
  border-color: #eb1f1f;
}

span {
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin: 20px 0 32px;
}
</style>
