<template>
  <div>
    <swiper :slides-per-view="8" :slidesPerGroup="8" :spaceBetween="12" :navigation="true">
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/14/3bf93aaa-6mnoq3mo5hbufyc5r34hs.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/14/be370f91-vc82lw2gku7tmj2aghegr.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/13/e0a3aea0-zwgoxr55fcnofi7iaoe88l.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/13/4d333280-cjvlhpoz3dbpabnb0qag1p.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/13/6fdb6b79-71yfxo48mx9cddwmzp6trs.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/10/37b11929-96dwlq2tpo8s9wtq6negel.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/7/703eaacb-ai7lxj293t4cjg748iv7i.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/10/ce845452-pocx8rr4hg9hhapwdtr5z.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/14/3bf93aaa-6mnoq3mo5hbufyc5r34hs.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/14/be370f91-vc82lw2gku7tmj2aghegr.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/13/e0a3aea0-zwgoxr55fcnofi7iaoe88l.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/13/4d333280-cjvlhpoz3dbpabnb0qag1p.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/13/6fdb6b79-71yfxo48mx9cddwmzp6trs.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/10/37b11929-96dwlq2tpo8s9wtq6negel.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/7/703eaacb-ai7lxj293t4cjg748iv7i.jpeg" class="h-44 w-28 object-cover rounded" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.piri.net/piri/upload/3/2021/12/10/ce845452-pocx8rr4hg9hhapwdtr5z.jpeg" class="h-44 w-28 object-cover rounded" />
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
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>
