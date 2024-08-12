<script>
  const pointSet = new Array(15).fill(1);
  const point = new Array(4).fill(1);
</script>
<div class='frame'>
  <div class='center'>
    {#each pointSet as item, i}
      <div class={`point-set-${i +1}`}>
        {#each point as item, j}
          <div class={`point-${j +1}`}>
          </div>
        {/each}
      </div>
    {/each}
    <div class='center bg'></div>
    <div class='date'>Mon 15 Jan 2015</div>
    <div class='time'>11:42</div>
    <div class='beat'>
      <svg class='beat-icon' width='200px' height='200.00px' viewBox='0 0 1024 1024' version='1.1'
           xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1024 352c0 337-512 592-512 592S0 690 0 352C0 201.8 121.8 80 272 80c101.3 0 189.7 55.4 236.5 137.6 1.5 2.7 5.4 2.7 6.9 0C562.3 135.4 650.7 80 752 80c150.2 0 272 121.8 272 272z' />
      </svg>
      81
    </div>
    <div class='energy'>1248 kcal</div>
    <svg class='spinner' viewBox='0 0 202 202' xlmns='https://www.w3.org/2000/svg'>
      <circle cx='101' cy='101' r='99.5' stroke-linecap='round'></circle>
    </svg>
  </div>

</div>

<style lang='scss'>
  .frame {
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
    background: #4C4C4C;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    text-align: center;
  }

  .center {
    width: 212px;
    height: 212px;
  }

  @for $i from 1 through 15 {

    .point-set-#{$i} {
      position: absolute;
      height: 188px;
      width: 188px;
      top: 12px;
      left: 12px;
      pointer-events: none;
      transform: rotate((($i - 1)*6) + deg);

      .point-1 {
        position: absolute;
        width: 2px;
        height: 2px;
        top: 0;
        left: 93px;
        background: #D3D3D3;
        border-radius: 50%;
      }

      .point-2 {
        @extend .point-1;
        top: 93px;
        left: auto;
        right: 0;
      }

      .point-3 {
        @extend .point-1;
        top: auto;
        bottom: 0;
      }

      .point-4 {
        @extend .point-1;
        top: 93px;
        left: 0;
      }

    }

  }

  .bg {
    width: 212px;
    height: 212px;
    background: #242424;
    border: 7px solid #3A3A3A;
    z-index: -1;
    border-radius: 50%;
  }

  .date {
    position: absolute;
    top: 68px;
    width: 100%;
  }

  .time {
    position: absolute;
    top: 80px;
    width: 100%;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    margin: 4px 0;
  }

  .beat {
    position: absolute;
    top: 129px;
    left: 57px;


    .beat-icon {
      fill: #F85B5B;
      width: 10px;
      height: 10px;
      animation: beat .9s ease-in-out infinite;
    }
  }

  .energy {
    position: absolute;
    top: 129px;
    right: 55px;
  }

  .spinner {
    position: absolute;
    width: 202px;
    height: 202px;
    border-radius: 50%;
    top: 5px;
    left: 5px;

    circle {
      stroke: #F85B5B;
      stroke-width: 3;
      fill: none;
      stroke-dasharray: 0 9999;
      animation: spinner 5s linear infinite;
      transform-origin: center center;
    }

  }

  @keyframes spinner {
    from {
      stroke-dasharray: 0 9999;
      transform: rotate(-90deg) scaleY(1);
    }
    50% {
      stroke-dasharray: 625 9999;
      transform: rotate(-90deg) scaleY(1);
    }
    50.001% {
      stroke-dasharray: 625 9999;
      transform: rotate(-90deg) scaleY(-1);
    }
    to {
      stroke-dasharray: 0 9999;
      transform: rotate(-90deg) scaleY(-1);
    }
  }
  @keyframes beat {
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.2);
    }
  }
</style>
