<template>
  <div class="about">
    <h1>This is an about page for Vue Intro review</h1>
    <div class="log">
      <div class="card">
        0414: Review Intro in Vue project.
      </div>
    </div>
    <div class="log">
      log2, for test
    </div>
  </div>
</template>

<style scoped>
  .about{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .log{
    /* position: relative; */
    border-style: dashed;
    width: 20rem;
    display: flex;
    justify-content: center;
    /* margin:auto; */
    margin-top: 1rem;
  }
  .card{
    color: blue;
    /* align-content: center; */
  }
</style>