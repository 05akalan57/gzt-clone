<template>
  <Header class="select-none md:select-text" />
  <main
    class="flex justify-center max-w-screen-xl lg:space-x-12 mx-auto pl-2 pr-2 xl:pl-0 xl:pr-0 select-none md:select-text"
    style="height: calc(100vh - 56px)"
  >
    <div class="text-white text-4xl pt-16">{{ $route.params.slug[0] }}</div>
  </main>
</template>
