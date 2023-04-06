<script setup>
const storeMain = useStoreMain()

const users = [
  {
    id: 1,
    app_metadata: {
      provider: "github",
      providers: [
        "github"
      ]
    },
    user_metadata: {
      avatar_url: "https://avatars.githubusercontent.com/u/80690937?v=4",
      email: "anton.tchava@yandex.ru",
      email_verified: true,
      iss: "https://api.github.com",
      preferred_username: "anton",
      provider_id: "80690937",
      sub: "80690937",
      user_name: "anton"
    }
  },
  {
    id: 2,
    app_metadata: {
      provider: "github",
      providers: [
        "github"
      ]
    },
    id: 3,
    user_metadata: {
      avatar_url: "https://avatars.githubusercontent.com/u/80690937?v=4",
      email: "misha.tchava@yandex.ru",
      email_verified: true,
      iss: "https://api.github.com",
      preferred_username: "misha",
      provider_id: "80690937",
      sub: "80690937",
      user_name: "misha"
    }
  },
  {
    id: 4,
    app_metadata: {
      provider: "github",
      providers: [
        "github"
      ]
    },
    user_metadata: {
      avatar_url: "https://avatars.githubusercontent.com/u/80690937?v=4",
      email: "roma.tchava@yandex.ru",
      email_verified: true,
      iss: "https://api.github.com",
      preferred_username: "roma",
      provider_id: "80690937",
      sub: "80690937",
      user_name: "roma"
    }
  },
  {
    id: 5,
    app_metadata: {
      provider: "github",
      providers: [
        "github"
      ]
    },
    user_metadata: {
      avatar_url: "https://avatars.githubusercontent.com/u/80690937?v=4",
      email: "popa.tchava@yandex.ru",
      email_verified: true,
      iss: "https://api.github.com",
      preferred_username: "popa",
      provider_id: "80690937",
      sub: "80690937",
      user_name: "popa"
    }
  },
]

onMounted(() => {
  storeMain.getUsers()
})
</script>

<template>
  <div class="flex flex-row w-full h-100vh">
    <div class="flex flex-col items-start w-1/5">
      <User 
        :user="storeMain.state.user"
        class="user"
      />
      <div class="flex flex-col items-start gap-5 w-full mt-2">
        <User 
          v-for="user in users"
          :key="user.id"
          :chat="true"
          :user="user"
         />
      </div>
      <h1 
        @click="storeMain.goOut"
        class=" text-white cursor-pointer pl-3 fixed bottom-5"
      >
       Exit
     </h1>
    </div>
    <div class="right-col flex flex-col items-center w-4/5">
      <Dialogue />
    </div>
  </div>
</template>

<style scoped>
  .right-col {
    background: url('https://celes.club/uploads/posts/2022-06/1654258300_1-celes-club-p-oboi-dlya-telegram-krasivie-1.jpg') center center/cover no-repeat;
  }
  .user {
    border-bottom: 1px solid gray ;
  }
</style>
