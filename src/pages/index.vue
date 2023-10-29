<script setup lang="ts">
import jokeApi from '~/api/joke';
import type { IJokeType } from '~/types/joke';

const initialTime = 15;

const joke = ref<IJokeType | null>(null);
const seconds = ref(initialTime);
const timerRunning = ref(true);
const isLoading = ref(false);

const trueAnswer = ref(false);

const getNewJoke = async () => {
  isLoading.value = true;
  const response = await jokeApi.getRandomJoke();
  joke.value = response.data;
  isLoading.value = false;
};

const onNext = () => {
  seconds.value = initialTime;
  timerRunning.value = true;
  getNewJoke();
};

const onAnswer = (value: boolean) => {
  if (joke.value) {
    const isOdd = joke.value.value.length % 2 === 0;
    trueAnswer.value = value === isOdd;
    timerRunning.value = false;
  }
};

watch(seconds, newValue => {
  if (newValue === 0) {
    onNext();
  }
});

onMounted(() => {
  getNewJoke();
});
</script>

<template>
  <div class="container">
    <Timer v-model:seconds="seconds" v-model:timerRunning="timerRunning" />
    <NuxtImg src="img/chuck.png" class="chuck-img" />
    <UiLoader v-if="isLoading" />
    <template v-else-if="joke">
      <QuestionCard :content="joke.value" />
    </template>

    <div class="button-block">
      <UiButton bg="red" @click="onAnswer(false)">False</UiButton>
      <UiButton bg="green" @click="onAnswer(true)">True</UiButton>
    </div>

    <AnswerModal :answer="trueAnswer" :visible="!timerRunning" @on-next="onNext" />
  </div>
</template>

<style scoped lang="css">
.container {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px calc(50% - 250px);
}

.chuck-img {
  margin-top: 48px;
  width: 500px;
  height: 300px;
  object-fit: cover;
}

.button-block {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 118px;
}
</style>
