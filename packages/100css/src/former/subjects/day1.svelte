<div class="frame">
  <div class="center">
    <div class="number">
      <div class="one-one" />
      <div class="one-two" />
      <div class="zero-one" />
      <div class="zero-two" />
    </div>
    <span class="big">Days</span>
    <span class="small">CSS Challenge</span>
  </div>
</div>

<style lang="scss">
  .frame {
    background: linear-gradient(to top right, #43389f 0%, #4ec6ca 100%);
    font-family: 'Courier New', 'Courier', sans-serif;
  }

  .number {
    position: relative;
    width: 200px;
    height: 100px;
    margin-bottom: 6px;

    .one-one,
    .one-two,
    .zero-one,
    .zero-two {
      position: absolute;
      background: #fff;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
    }
    .one-one {
      top: 0;
      left: 0;
      height: 100px;
      width: 24px;
      border-radius: 2px;
      z-index: 30;
    }
    .one-two {
      top: 2px;
      left: -15px;
      transform: rotate(45deg);
      height: 36px;
      width: 20px;
      border-radius: 2px;
    }

    .zero-one,
    .zero-two {
      box-sizing: border-box;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 25px solid #fff;
      background: transparent;
    }
    .zero-one {
      right: 84px;
      z-index: 10;
    }
    .zero-two {
      right: 0;
    }
  }

  .big,
  .small {
    position: relative;
    display: block;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
  }
  .big {
    height: 60px;
    line-height: 60px;
    font-size: 82px;
  }
  .small {
    font-size: 23px;
    letter-spacing: 0.04em;
  }
</style>
