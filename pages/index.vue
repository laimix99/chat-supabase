<script setup>
const state = reactive({
  email: '',
  password: ''
})
const storeMain = useStoreMain()

onMounted(() => {
  storeMain.getUser()
})

</script>

<template>
  <div v-if="!storeMain.state.user" class="flex flex-col items-center h-full bg w-full pt-50">
    <h1 class="text-gray">Login</h1>
    <div class="flex flex-col items-start w-full mt-10px max-w-500px gap-3">
      <span class="text-gray text-20px">Email</span>
      <input 
        v-model="state.email"
        class="w-full box-border text-22px text-gray bg-hex-191919 py-2 px-10px" 
        type="email" 
        placeholder="Email"
      >
    </div>
    <div class="flex flex-col items-start w-full mt-10px max-w-500px gap-3">
      <span class="text-gray text-20px">Password</span>
      <input 
        v-model="state.password"
        class="w-full box-border text-22px text-gray bg-hex-191919 py-2 px-10px" 
        placeholder="Password" 
        type="text"
      >
    </div>
    <BaseButton 
      @click="storeMain.register(state.email, state.password)"
      class="w-full max-w-500px mt-15px"
    >
      Login
    </BaseButton>
    <div class="flex flex-row gap-15 mt-15px">
      <BaseButton @click="storeMain.singIn('github')">
        GitHub
      </BaseButton>
      <BaseButton @click="storeMain.singIn('google')">
        Google
      </BaseButton>
    </div>
  </div>
  <ChatCom v-else/>
</template>

<style scoped>
  input {
    border-radius: 8px;
    border: 2px solid green;
  }

  input:focus {
    outline: 1px solid green;
  }
</style>
