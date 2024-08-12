<div class="frame">
  <div class="center">
    <div class="header">
      <div class="left">
        <p class="title-1">Weekly report</p>
        <p class="title-2">01. Feb - 07. Feb</p>
      </div>
      <div class="right">
        <p class="title-1">Revenue</p>
        <p class="title-2">$ 3621.79</p>
      </div>
    </div>
    <div class="body">
      <div class="legend">
        <span class="item red">Views</span>
        <span class="item blue">Purchases</span>
      </div>
      <div class="line line1" />
      <div class="line line2" />
      <div class="line line3" />
      <svg class="svg" width="240" height="80">
        <polyline points="8,45 48,12 88,25 128,10 168,38 208,48 248,18" class="polygon red" />
        <polyline points="8,60 48,52 88,65 128,55 168,60 208,75 248,64" class="polygon blue" />
      </svg>
      <ul>
        <li class="dot red-dot-1 red">
          <span class="tooltip">458</span>
        </li>
        <li class="dot red-dot-2 red">
          <span class="tooltip">812</span>
        </li>
        <li class="dot red-dot-3 red">
          <span class="tooltip">746</span>
        </li>
        <li class="dot red-dot-1 red">
          <span class="tooltip">877</span>
        </li>
        <li class="dot red-dot-4 red">
          <span class="tooltip">517</span>
        </li>
        <li class="dot red-dot-5 red">
          <span class="tooltip">434</span>
        </li>
        <li class="dot red-dot-6 red">
          <span class="tooltip">458</span>
        </li>
        <li class="dot red-dot-7 red">
          <span class="tooltip">26</span>
        </li>
      </ul>
      <ul>
        <li class="dot blue-dot-1 blue">
          <span class="tooltip">26</span>
        </li>
        <li class="dot blue-dot-2 blue">
          <span class="tooltip">41</span>
        </li>
        <li class="dot blue-dot-3 blue">
          <span class="tooltip">22</span>
        </li>
        <li class="dot blue-dot-4 blue">
          <span class="tooltip">36</span>
        </li>
        <li class="dot blue-dot-5 blue">
          <span class="tooltip">25</span>
        </li>
        <li class="dot blue-dot-6 blue">
          <span class="tooltip">13</span>
        </li>
        <li class="dot blue-dot-7 blue">
          <span class="tooltip">20</span>
        </li>
      </ul>
    </div>
    <ul class="days">
      <li class="day">Mon</li>
      <li class="day">Tue</li>
      <li class="day">Wed</li>
      <li class="day">Thu</li>
      <li class="day">Fri</li>
      <li class="day">Sat</li>
      <li class="day">Sun</li>
    </ul>
  </div>
</div>

<style lang="scss">
  $red: #fa7373;
  $blue: #7ba2ff;

  .frame {
    font-family: 'Open Sans', Helvetica, sans-serif;
    background: #42a7a1;
  }

  .center {
    position: absolute;
    width: 280px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .header {
    box-sizing: border-box;
    height: 60px;
    background: #f1ba64;
    color: #fff;
    padding: 12px 15px 0;

    .left {
      float: left;

      .title-1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
      }

      .title-2 {
        font-size: 11px;
      }
    }

    .right {
      text-align: right;
      float: right;

      .title-1 {
        font-size: 11px;
      }

      .title-2 {
        font-weight: 600;
        font-size: 14px;
      }
    }

    p {
      margin: 0;
      padding: 0;
    }

    :after {
      clear: both;
    }
  }

  .body {
    position: relative;
    height: 160px;
  }

  .legend {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    height: 46px;

    .item {
      height: 12px;
      display: inline-block;
      position: relative;
      font-size: 9px;
      color: #606060;
      line-height: 13px;
      padding: 0 10px 0 25px;

      &:before {
        position: absolute;
        left: 6px;
        top: 6px;
        display: block;
        content: '';
        width: 11px;
        height: 3px;
        border-radius: 3px;
      }

      &.blue:before {
        background: $blue;
      }

      &.red:before {
        background: $red;
      }
    }
  }

  .line {
    position: absolute;
    left: 12px;
    right: 12px;
    height: 1px;
    background: #f2f2f2;

    &.line1 {
      top: 46px;
    }

    &.line2 {
      top: 86px;
    }

    &.line3 {
      top: 126px;
    }
  }

  .svg {
    position: absolute;
    top: 46px;
    left: 12px;
    width: 256px;
    //background: #ccc;
  }

  .polygon {
    stroke-width: 2;
    fill: none;

    &.red {
      stroke: $red;
    }

    &.blue {
      stroke: $blue;
    }
  }

  ul {
    list-style: none;
  }

  .dot {
    display: inline-block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    cursor: pointer;
    z-index: 10;

    &.red {
      background: $red;

      .tooltip,
      .tooltip::after {
        background: $red;
      }
    }

    &.blue {
      background: $blue;

      .tooltip,
      .tooltip::after {
        background: $blue;
      }
    }

    &.red-dot-1 {
      top: 87px;
      left: 18px;
    }

    &.red-dot-2 {
      top: 56px;
      left: 57px;
    }

    &.red-dot-3 {
      top: 67px;
      left: 97px;
    }

    &.red-dot-4 {
      top: 53px;
      left: 137px;
    }

    &.red-dot-5 {
      top: 81px;
      left: 177px;
    }

    &.red-dot-6 {
      top: 90px;
      left: 217px;
    }

    &.red-dot-7 {
      top: 61px;
      left: 257px;
    }

    &.blue-dot-1 {
      top: 103px;
      left: 18px;
    }

    &.blue-dot-2 {
      top: 95px;
      left: 57px;
    }

    &.blue-dot-3 {
      top: 108px;
      left: 97px;
    }

    &.blue-dot-4 {
      top: 98px;
      left: 137px;
    }

    &.blue-dot-5 {
      top: 103px;
      left: 177px;
    }

    &.blue-dot-6 {
      top: 117px;
      left: 217px;
    }

    &.blue-dot-7 {
      top: 107px;
      left: 257px;
    }

    .tooltip {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      bottom: 8px;
      left: 50%;
      z-index: 16;
      transform: translateX(-50%);
      font-weight: 600;
      font-size: 11px;
      line-height: 11px;
      color: #fff;
      padding: 8px 6px;
      border-radius: 3px;

      &:after {
        position: absolute;
        display: block;
        content: '';
        height: 6px;
        width: 6px;
        left: 50%;
        margin-left: -3px;
        bottom: -3px;
        transform: rotate(45deg);
      }
    }

    &:hover {
      .tooltip {
        opacity: 1;
        visibility: visible;
        bottom: 13px;
        transition: all 0.4s;
      }
    }
  }

  .days {
    position: absolute;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .day {
    display: inline-block;
    flex: 1;
    font-size: 9px;
    color: #949494;
    line-height: 30px;
    text-transform: uppercase;
    text-align: center;
    height: 30px;
  }
</style>
