<template>
  <div
    class="animate__animated animate__backInUp p-8 col-span-12 sm:col-span-full md:col-start-2 md:col-span-8 lg:col-start-1 lg:col-span-12 text-center text-lg"
  >
    <div class="card lg:card-side bg-base-300 shadow-xl">
      <figure class="">
        <img
          src="/img/welcome1.png"
          alt="Image of the desert moon Saharantis"
        />
      </figure>
      <div class="card-body items-center text-center lg:max-w-128 xl:max-w-3xl">
        <h1 class="text-primary text-5xl jaro-logo">Welcome to Vivarium AI</h1>
        <h2 class="text-accent text-3xl pt-2 pb-5 jaro-logo">
          Reactivating the Six Vivariums
        </h2>
        <p>
          "Reactivating the Six Vivariums" is a game set on the desert moon
          Saharantis, where players aim to restore its greenery by locating six
          vital vivariums through card draws. Players must manage fatigue
          levels, resting when necessary to avoid negative consequences.
        </p>
        <p>
          Combat involves strategic card stacking to defeat various automaniacs,
          each with specific weaknesses. The game emphasizes exploration,
          resource management, and tactical combat as players work to revive the
          moon's ecosystem.
        </p>
        <p class="text-2xl text-secondary">
          Do you have what it takes to restore this deserted world?
        </p>
        <div class="card-actions justify-end mt-7 mb-7">
          <button class="btn btn-primary btn-lg" @click="$emit('startGame')">
            Begin the Game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
