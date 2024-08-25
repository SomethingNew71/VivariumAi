<script lang="ts" setup>
  import Welcome from '~/components/Welcome.vue';
  const gameStarted = ref(false);
  const hideWelcome = ref(false);

  const begin = () => {
    gameStarted.value = true;
    setTimeout(() => {
      hideWelcome.value = true;
    }, 10);
  };

  useHead({
    title: 'ViviariumAI',
    meta: [
      {
        hid: 'description',
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
    // TODO: add these values
    // ogUrl: 'classicminidiy.com/register',
    // ogImage:
    //   'https://classicminidiy.s3.amazonaws.com/cloud-icon/icons8-book-reading-100.png',
    ogType: 'website',
  });
</script>
<template>
  <Navbar />
  <div class="grid grid-cols-12">
    <Welcome
      :class="{
        animate__backOutLeft: gameStarted,
        hidden: hideWelcome,
      }"
      @start-game="begin"
    />
    <GameContainer
      :class="{
        hidden: !hideWelcome && !gameStarted,
      }"
    />
  </div>
</template>
