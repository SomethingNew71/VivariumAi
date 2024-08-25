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
  const secondaryAction = () => {
    console.log('Secondary Action');
  };

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
    class="animate__animated animate__backInUp p-8 col-span-12 sm:col-span-full md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-8 text-center text-lg"
  >
    <div class="card lg:card-side bg-base-300 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Album"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title pb-10">Let your Journey Begin</h2>
        <div class="chat-container max-h-128 overflow-y-auto pb-10">
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
              <div class="w-10 rounded-full">
                <img
                  v-if="!chat.isUser"
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
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
          <button class="btn btn-accent" @click="secondaryAction()">
            Other Action
          </button>
          <button class="btn btn-primary" @click="submitPrompt()">
            <span v-if="isLoading" class="loading loading-spinner"></span>
            <span v-else>Submit</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
