<template>
  <div class="hidden lg:block w-60 pt-4 pb-4 space-y-2 text-xs text-neutral-400 font-bold overflow-auto">
    <div
      v-for="writer in writers"
      :key="writer"
      class="flex items-center space-x-2 pt-1 pb-1 pl-2 rounded border border-transparent hover:border-neutral-700 hover:bg-neutral-700/50"
    >
      <img :src="writer.logo" class="h-5 w-5" />
      <span>{{ writer.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      writers: [],
    }
  },
  created() {
    fetch('https://akalan-db.firebaseio.com/gzt-clone.json')
      .then((response) => response.json())
      .then((json) => {
        this.writers = json.writers
      })
  },
}
</script>
