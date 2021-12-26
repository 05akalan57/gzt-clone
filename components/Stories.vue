<template>
  <div>
    <swiper :navigation="true" :breakpoints="breakpoints" :spaceBetween="16">
      <swiper-slide v-for="storie in stories" :key="storie">
        <img :src="storie.poster" class="h-52 w-full object-cover rounded-md transition-all active:scale-95" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-button-prev,
.swiper-button-next {
  @apply w-8 h-8 rounded-full bg-gray-100 bg-opacity-60;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-black text-sm;
}
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'

SwiperCore.use([Navigation])

export default {
  data() {
    return {
      stories: [],
      breakpoints: {
        360: {
          slidesPerView: 4,
        },
        601: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    fetch('https://akalan-db.firebaseio.com/gzt-clone.json')
      .then((response) => response.json())
      .then((json) => {
        this.stories = json.stories
      })
  },
}
</script>
