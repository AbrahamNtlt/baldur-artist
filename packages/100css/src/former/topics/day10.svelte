
<div class="frame">
    <div class="center">
        <div class="point-set-1">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-2">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-3">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-4">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-5">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-6">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-7">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-8">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-9">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-10">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-11">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-12">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-13">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-14">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="point-set-15">
            <div class="point-1"></div>
            <div class="point-2"></div>
            <div class="point-3"></div>
            <div class="point-4"></div>
        </div>
        <div class="ring">
            <div class="mask-1">
                <div class="spin"></div>
            </div>
            <div class="mask-2">
                <div class="spin"></div>
            </div>
        </div>
        <svg class="spinner" viewBox="0 0 202 202" xlmns="https://www.w3.org/2000/svg">
            <circle cx="101" cy="101" r="99.5"></circle>
        </svg>
        <div class="date">Mon 15 Jan 2015</div>
        <div class="time">11:42</div>
        <div class="beat"><span class="fa fa-heart"></span>81</div>
        <div class="energy">1248 kcal</div>
    </div>
</div>

<style lang='scss'>

  @import url(https://fonts.googleapis.com/css?family=Open+Sans:700,400);
  @import url(https://100dayscss.com/codepen/css/font-awesome.min.css);

  $speed: 5s; // 60s for realtime

  .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    background: #4C4C4C;
    color: #fff;
    font-size: 12px;
    line-height: 100%;
    text-transform: uppercase;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .center {
    position: absolute;
    width: 212px;
    height: 212px;
    background: #242424;
    border: 7px solid #3A3A3A;
    border-radius: 50%;
    text-align: center;
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

    span {
      color: #F85B5B;
      font-size: 10px;
      float: left;
      margin-top: 1px;
      margin-right: 4px;
      animation: beat .9s ease-in-out infinite;
    }
  }

  .energy {
    position: absolute;
    top: 129px;
    right: 55px;
  }

  @for $i from 1 through 15 {

    .point-set-#{$i} {
      position: absolute;
      height: 188px;
      width: 188px;
      top: 12px;
      left: 12px;
      pointer-events: none;
      transform: rotate( (($i - 1)*6) + deg );

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
      stroke-dasharray: 625;
      animation: spinner $speed linear infinite;
      transform-origin: center center;
      transform: rotate(-90deg);
    }

  }

  @keyframes spinner {
    from {
      stroke-dashoffset: 625;
      transform: rotate(-90deg) scaleY(1);
    }
    50% {
      stroke-dashoffset: 0;
      transform: rotate(-90deg) scaleY(1);
    }
    50.001% {
      transform: rotate(-90deg) scaleY(-1);
    }
    to {
      stroke-dashoffset: 625;
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
