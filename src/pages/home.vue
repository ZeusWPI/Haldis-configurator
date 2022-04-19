<template>
  <div class="home__wrapper">
    <div class="home__image">
      <img src="@/src/assets/haldis_menu.png" alt="The Haldis menu logo" />
    </div>
    <p class="home__text">Haldis Menu Generator</p>
    <q-btn no-caps rounded padding=".5vh 2vh" color="white" text-color="accent" label="Start" />
  </div>
</template>
<script></script>
<style lang="scss">
  .home {
    &__wrapper {
      height: 85vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__image {
      width: 18vh;
      height: 18vh;
      object-fit: contain;
      & > img {
        width: 100%;
      }
    }
    &__text {
      margin: 2vh 0;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
</style>
