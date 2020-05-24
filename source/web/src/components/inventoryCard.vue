<template>
  <div class="single-card-details shaded relative">
    <div class="top-bar">
      <div class="god-rarity absolute"></div>
    </div>
    <img class="image absolute" src="11140200.25ac6fa2.jpg" alt />
    <div class="details-box">
      <div class="card-details contain relative px-1">
        <span class="character-name absolute">Murasame Static</span>
        <div class="row">
          <div class="five columns">
            <span class="purple-text">Lv. </span>
            <span> {{ '50/100' }} </span>
          </div>
          <div class="seven columns">
            <span class="exp"> {{ '100%' }} </span> <span class=""> ExpBar </span>
          </div>
        </div>
        <hr class="u-pull-left mx-0" />
        <div class="row">
          <div class="five columns">
            <span class="purple-text">Cost</span>
            <span> {{ '99' }} </span>
          </div>
          <div class="seven columns">
            <span class="purple-text awakening"> Awakening </span> <span class=""> {{ '0/10' }} </span>
          </div>
        </div>
        <hr class="u-pull-left mx-0" />
        <div class="text-center">
          <div class="row bold">
            <span class="shaded-dark vocal-blue four columns">VOCAL</span>
            <span class="shaded-dark dance-orange four columns">DANCE</span>
            <span class="shaded-dark act-magenta four columns">ACT</span>
          </div>
          <div class="row">
            <span class="shaded-light four columns">99999</span>
            <span class="shaded-light four columns">99999</span>
            <span class="shaded-light four columns">99999</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inventory-card',
}
</script>

<style>
.top-bar {
  background-color: #78f06499;
  height: 2rem;
}
.character-name {
  top: -2.375rem;
}
.god-rarity {
  background-image: url('../../public/BXbruIR.png');
  background-position: -1.5rem -8.45rem;
  height: 2rem;
  width: 4rem;
  background-size: 125px 125px;
  background-repeat: no-repeat;
  left: calc(100% - 4.5rem);
}
.rarity {
  background-image: url('../../public/BXbruIR.png');
  background-position: -0.5rem -0.25rem;
  height: 2rem;
  width: 3rem;
  background-size: 125px 125px;
  background-repeat: no-repeat;
  left: calc(100% - 3.5rem);
}
.details-box {
  padding-top: 0.5rem;
  height: 11.5rem;
  margin-left: 27.5%;
}
.image {
  width: 25%;
  max-width: 100px;
  top: 1rem;
  left: 1rem;
}

.row.bold > span {
  margin-bottom: 2px;
}

@media (min-width: 550px) {
  .details-box {
    margin-left: 23%;
  }
}
</style>

<style scoped>
.contain {
  width: 100%;
}
.column,
.columns {
  margin-left: 4%;
}
.column:first-child,
.columns:first-child {
  margin-left: 0;
}
.four.columns {
  width: calc(100% / 3 - 1.4px);
}
.four.columns:nth-child(2),
.four.columns:nth-child(3) {
  margin-left: 2px;
}
.five.columns {
  width: 39.3333333333%;
}
.seven.columns {
  width: 56.6666666667%;
}
</style>
