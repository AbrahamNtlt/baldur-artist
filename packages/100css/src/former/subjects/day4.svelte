<div class="frame">
    <div class="center">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
    </div>
</div>

<style lang="scss">
  $bezier: cubic-bezier(.21, .98, .6, .99);
  $start: 2px 2px 3px 2px rgba(#000, 0.2);
  $end: 10px 10px 15px 0 rgba(#000, 0.3);

  .frame {
    background: #E56262;
  }

  .dot {
    position: absolute;
    top: 50%;
    left: 50%;
    //transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    animation-duration: 4s;
    animation-timing-function: $bezier;
    animation-iteration-count: infinite;
    animation-direction: alternate;

  }

  .dot-1 {
    top: -45px;
    left: -45px;
    width: 90px;
    height: 90px;
    z-index: 1;
    animation-name: dot-1-animation;
  }

  .dot-2 {
    top: -30px;
    left: -30px;
    width: 60px;
    height: 60px;
    z-index: 2;
    animation-name: dot-2-animation;
  }

  .dot-3 {
    top: -15px;
    left: -15px;
    width: 30px;
    height: 30px;
    z-index: 3;
    animation-name: dot-3-animation;
  }

  @keyframes dot-1-animation {
    0%, 10% {
      box-shadow: $start;
      transform: scale(0);
    }

    100% {
      box-shadow: $end;
      transform: scale(1);
    }
  }

  @keyframes dot-2-animation {
    0%, 40% {
      box-shadow: $start;
      transform: scale(0);
    }

    100% {
      box-shadow: $end;
      transform: scale(1);
    }
  }

  @keyframes dot-3-animation {
    0%, 70% {
      box-shadow: $start;
      transform: scale(0);
    }

    100% {
      box-shadow: $end;
      transform: scale(1);
    }
  }
</style>
