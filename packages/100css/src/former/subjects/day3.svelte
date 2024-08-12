<div class="frame">
  <div class="center">
    <div class="circle">
      <div class="sky" />
      <div class="sun" />
      <div class="side-left" />
      <div class="side-right" />
      <div class="shadow" />
      <div class="ground" />
    </div>
  </div>
</div>

<style lang="scss">
  $cubic-bezier: cubic-bezier(0.4, 0, 0.49, 1); // 贝塞尔曲线,,,不抄不好调....

  .frame {
    background: #272c34;
  }

  .circle {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    //background: #fff;
    position: relative;
    overflow: hidden;
  }

  .sky {
    position: absolute;
    z-index: 1;
    height: 124px;
    width: 180px;
    background: #272c34;
    animation: sky-animation 4s $cubic-bezier infinite;
  }

  @keyframes sky-animation {
    0% {
      background: #272c34;
    }

    30% {
      background: #7ddffc;
    }

    70% {
      background: #7ddffc;
    }

    100% {
      background: #272c34;
    }
  }

  .sun {
    position: absolute;
    z-index: 2;
    height: 35px;
    width: 35px;
    left: 60px;
    background: #272c34;
    transform-origin: 200% 400%;
    border-radius: 50%;
    animation: sun-animation 4s $cubic-bezier infinite;
  }

  @keyframes sun-animation {
    0% {
      background: #f57209;
      transform: rotate(-70deg);
    }

    30% {
      background: #ffef00;
      transform: rotate(-28deg);
    }

    70% {
      background: #ffef00;
    }

    100% {
      background: #f57209;
      transform: rotate(70deg);
    }
  }

  .side-left {
    position: absolute;
    z-index: 2;
    top: 67px;
    left: 35px;
    height: 57px;
    width: 116px;
    background: #f4f4f4;
    clip-path: polygon(0% 100%, 60% 100%, 50% 0%);
    animation: side-left-animation 4s $cubic-bezier infinite;
  }

  @keyframes side-left-animation {
    0% {
      background: #272c34;
    }

    30% {
      background: #f4f4f4;
    }

    70% {
      background: #dddada;
    }

    100% {
      background: #272c34;
    }
  }

  .side-right {
    position: absolute;
    top: 67px;
    z-index: 2;
    left: 35px;
    height: 57px;
    width: 116px;
    background: #272c34;
    clip-path: polygon(60% 100%, 100% 100%, 50% 0%);
    animation: side-left-animation 4s $cubic-bezier infinite reverse;
  }

  .shadow {
    position: absolute;
    z-index: 2;
    top: 124px;
    left: -80px;
    height: 30px;
    width: 360px;
    background: rgba(0, 0, 0, 0.2);
    clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
    animation: shadow-animation 4s $cubic-bezier infinite;
  }

  @keyframes shadow-animation {
    0% {
      clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
    }

    30% {
      clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
    }

    55% {
      clip-path: polygon(115px 0%, 231px 0%, 80% 40%);
    }

    75% {
      clip-path: polygon(115px 0%, 231px 0%, 16% 88%);
    }

    100% {
      clip-path: polygon(115px 0%, 231px 0%, 0% 0%);
    }
  }

  .ground {
    position: absolute;
    z-index: 1;
    top: 124px;
    height: 60px;
    width: 180px;
    background: #272c34;
    animation: ground-animation 4s $cubic-bezier infinite;
  }

  @keyframes ground-animation {
    0% {
      background: #272c34;
    }

    30% {
      background: #f0de75;
    }

    70% {
      background: #f0de75;
    }

    100% {
      background: #272c34;
    }
  }
</style>
