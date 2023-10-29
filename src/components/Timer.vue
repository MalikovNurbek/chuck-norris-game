<script setup lang="ts">
type Props = {
  seconds: number;
  timerRunning: boolean;
};

type Emits = {
  (eventName: 'update:seconds', value: number): void;
  (eventName: 'update:timerRunning', value: boolean): void;
};

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const ending = ref(false);

const classes = computed(() => ({
  ending: ending.value,
}));

const formatTime = computed(() => {
  const minutes = Math.floor(props.seconds / 60);
  const remainderSeconds = props.seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainderSeconds).padStart(2, '0')}`;
});

const incrementTimer = () => {
  if (props.timerRunning) {
    if (props.seconds > 0) {
      emits('update:seconds', props.seconds - 1);
    } else {
      emits('update:timerRunning', false);
    }
  }
};

watch(
  () => props.seconds,
  () => {
    ending.value = props.seconds <= 5;
  },
);

onMounted(() => {
  const interval = setInterval(incrementTimer, 1000);

  return () => {
    clearInterval(interval);
  };
});
</script>

<template>
  <div>
    <span :class="classes">{{ formatTime }}</span>
  </div>
</template>

<style scoped>
span {
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.32px;
}

.ending {
  color: #eb1f1f;
}
</style>
