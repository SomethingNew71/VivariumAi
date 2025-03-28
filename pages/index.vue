<script lang="ts" setup>
  const gameStarted = ref(true);

  const begin = () => {
    gameStarted.value = true;
  };

  useHead({
    title: 'ViviariumAI',
    meta: [
      {
        name: 'description',
        content:
          'The game that always changes. Reactivating the Six Vivariums is a game set on the desert moon Saharantis, where players aim to restore its greenery by locating six vital vivariums through card draws. Players must manage fatigue levels, resting when necessary to avoid negative consequences. Combat involves strategic card stacking to defeat various automaniacs, each with specific weaknesses. The game emphasizes exploration, resource management, and tactical combat as players work to revive the moon ecosystem.',
      },
    ],
  });
  useSeoMeta({
    ogTitle: 'ViviariumAI',
    ogDescription:
      'The game that always changes. Reactivating the Six Vivariums is a game set on the desert moon Saharantis, where players aim to restore its greenery by locating six vital vivariums through card draws. Players must manage fatigue levels, resting when necessary to avoid negative consequences. Combat involves strategic card stacking to defeat various automaniacs, each with specific weaknesses. The game emphasizes exploration, resource management, and tactical combat as players work to revive the moon ecosystem.',
    ogType: 'website',
  });
</script>
<template>
  <Navbar />
  <div class="grid grid-cols-12">
    <Welcome v-if="!gameStarted" @start-game="begin" />
    <GameContainer v-if="gameStarted" />
  </div>
</template>
