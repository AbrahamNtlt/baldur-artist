<script>
  const blubbs = new Array(8).fill(1);
  const sparkles = new Array(10).fill(1);
</script>

<div class='frame'>
  <div class='center'>
    <div class='ball'></div>
    {#each blubbs as item, i}
      <div class={`blubb-${i +1}`}></div>
    {/each}
    {#each sparkles as item, i}
      <div class={`sparkle-${i +1}`}></div>
    {/each}
  </div>
</div>


<style lang='scss'>

  .frame {
    background: #000;
    filter: contrast(25);
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ball {
    width: 90px;
    height: 90px;
    background: #fff;
    border-radius: 50%;
    filter: blur(15px);
  }

  @for $i from 1 through 8 {
    .blubb-#{$i} {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 50px;
      height: 50px;
      transform: rotate((random(300) + deg));

      &:after {
        position: absolute;
        display: block;
        content: '';
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50%;
        filter: blur(5px);
        transform-origin: (40 - $i * 3) + px (40 - $i * 3) + px;
        animation: rotate (2.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
      }
    }
  }

  @for $i from 1 through 10 {
    .sparkle-#{$i} {
      position: absolute;
      top: 38px;
      left: 38px;
      width: (7 + $i) + px;
      height: (7 + $i) + px;
      transform: rotate((random(300)) + deg);

      &:after {
        position: absolute;
        display: block;
        content: '';
        width: (7 + $i) + px;
        height: (7 + $i) + px;
        background: #fff;
        border-radius: 50%;
        transform-origin: (60 - $i * 2) + px (60 - $i * 2) + px;
        animation: rotate (3.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
        filter: blur(3px);
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    to {
      transform: rotate(360deg) translate3d(0, 0, 0);
    }
  }
</style>
