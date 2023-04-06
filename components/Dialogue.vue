<script setup>
const user = {
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
}
</script>

<template>
  <div class="flex flex-col items-center w-full box-border">
    <div class="bg-hex-191919 header flex flex-col items-start justify-between w-full box-border">
      <User :user="user"/>
    </div>
    <div class="flex flex-col items-center w-full max-w-700px br">

    </div>
    <!-- <span>привет</span> -->
    <Write  class="fixed bottom-10"/>
  </div>
</template>

<style scoped>
.header {
  border-left: 1px solid gray;
}
</style>
