<template>
  <div class='card-list shaded'>
    <inventory-card/>

    <inventory-card class="mt-1"/>

    <img class="other-image mt-1" src="Screen7.55.04.png" />

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.card-list {
  padding: 1rem;
  width: 100%;
}
.other-image {
  max-height: 100%;
  max-width: 100%;
  background-repeat: no-repeat;
  margin-top: 1rem;
}
.mt-1{
  margin-top: 1rem;
}
</style>
