<script lang="ts" setup>
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
  <div class="grid grid-cols-12 px-24">
    <div
      class="p-8 col-span-12 sm:col-span-full md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-8 text-center text-lg"
    >
      <p>
        "Reactivating the Six Vivariums" is a game set on the desert moon
        Saharantis, where players aim to restore its greenery by locating six
        vital vivariums through card draws. Players must manage fatigue levels,
        resting when necessary to avoid negative consequences. Combat involves
        strategic card stacking to defeat various automaniacs, each with
        specific weaknesses. The game emphasizes exploration, resource
        management, and tactical combat as players work to revive the moon's
        ecosystem.
      </p>
    </div>
    <GameContainer />
  </div>
</template>
