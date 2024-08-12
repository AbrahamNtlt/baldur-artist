<script lang='ts'>
  import TDay from './topics/day11.svelte';
  import SDay from './subjects/day11.svelte';
</script>

<main>
  <div class='item'>
    <TDay />
  </div>
  <div class='item'>
    <SDay />
  </div>
</main>
<style lang='scss'>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    min-height: 800px;

    .item {
      width: 100%;
      height: 50%;
      position: relative;
      margin-bottom: 30px;
    }
  }
</style>
