<script lang="ts" setup>
  const userPrompt = ref('');
  const isLoading = ref(false);
  const chatScrollPoint = ref<null | HTMLDivElement>(null);
  const submitPrompt = () => {
    if (!userPrompt.value) return;
    isLoading.value = true;
    chatList.value.push({
      text: userPrompt.value,
      isUser: true,
    });
    userPrompt.value = '';
    setTimeout(() => {
      chatScrollPoint.value?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
  };

  function restartGame() {
    console.log('Restarting Game');
  }

  const chatList = ref([
    {
      text: "It's over Anakin, I have the high ground.",
      isUser: false,
    },
    {
      text: 'You underestimate my power.',
      isUser: true,
    },
  ]);
  // onMounted(() => {
  //   chatScrollPoint.value?.scrollIntoView({ behavior: 'smooth' });
  // });
</script>

<template>
  <div
    class="animate__animated animate__backInUp p-8 col-span-12 sm:col-span-full md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-10"
  >
    <div class="card lg:card-side bg-base-300 shadow-xl">
      <figure>
        <img class="cover" src="/img/welcome1.png" alt="Album" />
      </figure>
      <div class="card-body lg:min-w-96 lg:max-w-128 xl:min-w-224 xl:max-w-3xl">
        <h2 class="card-title pb-5">Let your Journey Begin</h2>
        <div
          class="chat-container bg-base-100 min-h-96 max-h-svh overflow-y-auto pb-32 px-4 pt-3"
        >
          <div
            v-for="(chat, index) in chatList"
            :key="index"
            class="chat"
            :class="{
              'chat-start': !chat.isUser,
              'chat-end ': chat.isUser,
            }"
          >
            <div class="chat-image avatar">
              <div class="w-10 rounded-full text-center">
                <i
                  v-if="!chat.isUser"
                  class="text-4xl text-primary fa-duotone fa-solid fa-microchip-ai"
                ></i>

                <i
                  v-if="chat.isUser"
                  class="text-4xl fa-duotone fa-solid fa-user-astronaut"
                ></i>
              </div>
            </div>
            <div class="chat-header">
              {{ chat.isUser ? 'You' : 'Vivarium AI' }}
              <time class="text-xs opacity-50">12:45</time>
            </div>
            <div
              class="chat-bubble"
              :class="{
                'chat-bubble-primary': chat.isUser,
              }"
            >
              {{ chat.text }}
            </div>
          </div>
          <div ref="chatScrollPoint"></div>
        </div>
        <div class="card-actions justify-center">
          <textarea
            v-on:keyup.enter="submitPrompt()"
            :disabled="isLoading"
            v-model="userPrompt"
            class="textarea textarea-primary w-full"
            placeholder=""
          ></textarea>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-error" onclick="my_modal_5.showModal()">
            <i class="fa-duotone fa-solid fa-triangle-exclamation"></i> Restart
            Game
          </button>
          <button class="btn btn-primary" @click="submitPrompt()">
            <span v-if="isLoading" class="loading loading-spinner"></span>
            <span v-else>Submit</span>
          </button>
        </div>
      </div>
    </div>
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="text-2xl font-bold text-error">
          Are you sure you want to restart?
        </h3>
        <p class="py-4">
          All of your progress will be lost forever and you will need to restart
          from the beginning. This is a one way street...
        </p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-error" @click="restartGame()">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
