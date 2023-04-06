<template>
  <div class="flex flex-row w-full justify-center gap-5">
    <input type="text" placeholder="Message" class="w-full text-white text-17px px-10px max-w-500px bg-hex-191919 rounded-10px">
    <div class="bg-hex-191919 w-60px h-60px rounded-1/2 flex flex-col items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg"  height="35" fill="green" viewBox="0 96 960 960" width="35"><path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z"/></svg>
    </div>
  </div>
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
