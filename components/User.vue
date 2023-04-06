<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  },
  chat: {
    type: Boolean,
    default: false 
  }
})

</script>

<template>
  <div 
    class="flex flex-row items-center gap-4 w-full px-3 py-2 cursor-pointer box-border"
    :class="[props.chat ? 'hover:bg-black' : '']"
  >
  <!-- <pre>{{ user }}</pre> -->
  <!-- <pre>{{ user_metadata?.full_name }}</pre> -->
    <img :src="user?.user_metadata?.avatar_url" class="w-50px h-50px rounded-1/2" alt="">
    <div class="flex flex-col items-start text-white font-100">
      <h1 
        v-if="user?.app_metadata?.provider === 'github'" 
        class="text-20px"
      >
        {{ user?.user_metadata?.user_name }}
      </h1>
      <h1
        v-else
        class="text-20px"
      >
        {{ user.user_metadata?.full_name }}
      </h1>

      <h2 class="text-15px">{{ user?.user_metadata?.email }}</h2>
    </div>

  </div>
</template>
