<script lang="ts" setup>
  import type { ChatElement } from '~/data/models';
  import createClient from 'openapi-fetch';
  const client = createClient({ baseUrl: '/api' });

  const { data } = await useFetch(() => `/api/game/start`);
  console.log(data?.value?.thread_id);

  await client
    // @ts-ignore
    .POST('/game/chat', {
      body: {
        thread_id: data?.value?.thread_id,
        message: 'Hello',
      },
    })
    .then((response) => {
      console.log(response);
    });

  const userPrompt = ref('');
  const emptyMessage = ref(false);
  const isLoading = ref(false);
  const chatScrollPoint = ref<null | HTMLDivElement>(null);
  const submitPrompt = () => {
    if (!userPrompt.value) {
      emptyMessage.value = true;
      setTimeout(() => {
        emptyMessage.value = false;
      }, 2000);
      return;
    }
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

  const chatList = ref<ChatElement[]>([]);
</script>

<template>
  <div
    class="animate__animated animate__backInRight p-8 col-span-12 sm:col-span-full md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-10"
  >
    <div class="card lg:card-side bg-base-300 shadow-xl">
      <figure>
        <img class="cover" src="/img/welcome1.png" alt="Album" />
      </figure>
      <div class="card-body lg:min-w-96 lg:max-w-128 xl:min-w-224 xl:max-w-3xl">
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
          <div class="label w-full">
            <span class="label-text-alt"></span>
            <span v-if="emptyMessage" class="label-text-alt text-error"
              >Please enter a message!</span
            >
          </div>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-error" onclick="restart_modal.showModal()">
            <i class="fa-duotone fa-solid fa-triangle-exclamation"></i> Restart
            Game
          </button>
          <button
            class="btn btn-square btn-accent"
            onclick="help_modal.showModal()"
          >
            <i class="text-2xl fa-duotone fa-solid fa-question"></i>
          </button>
          <button class="btn btn-primary" @click="submitPrompt()">
            <span v-if="isLoading" class="loading loading-spinner"></span>
            <span v-else>Submit</span>
          </button>
        </div>
      </div>
    </div>
    <dialog id="restart_modal" class="modal modal-bottom sm:modal-middle">
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
    <dialog id="help_modal" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="text-lg font-bold">How to play</h3>
        <p class="py-4">
          Follow the on screen prompts and respond just like you would with a
          normal person.
        </p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
