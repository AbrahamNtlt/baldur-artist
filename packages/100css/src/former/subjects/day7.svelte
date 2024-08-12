<div class='frame'>
  <div class='panel'>
    <div class='header'>
      <span class='menu-icon'>
        <span class='line-1'></span>
        <span class='line-2'></span>
        <span class='dot'></span>
      </span>
      <p class='title'>Notifications</p>
      <input type='text' class='search-input' placeholder='Search ...'>
      <div class=' search-icon'>
        <div class='ring'></div>
        <div class='handle'></div>
      </div>
    </div>
    <div class='content'>
      <div class='line'></div>
      <dl class='item'>
        <dt></dt>
        <dd>
          <div class='time'>9:24 AM</div>
          <div class='text'>
            <span class='import'>John Walker</span>
            posted a photo on your wall.
          </div>
        </dd>
      </dl>
      <dl class='item'>
        <dt></dt>
        <dd>
          <div class='time'>8:19 AM</div>
          <div class='text'>
            <span class='import'>Alice Parker</span>
            commented your last post.
          </div>
        </dd>
      </dl>
      <dl class='item'>
        <dt></dt>
        <dd>
          <div class='time'>Yesterday</div>
          <div class='text'>
            <span class='import'>Luke Wayne</span>
            added you as friend.
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <ul class='menu'>
    <li class='menu-item'>Dashboard</li>
    <li class='menu-item'>Profile</li>
    <li class='menu-item'>Notifications</li>
    <li class='menu-item'>Messages</li>
    <li class='menu-item'>Settings</li>
  </ul>
</div>

<script>

</script>
<style lang='scss'>
  $blue: #5F98CD;
  $blue-dark: #264057;
  $blue-light: #B2DAFF;

  .frame {
    background: $blue-dark;

  }

  .panel {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50px;
    left: 50px;
    background: #fff;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    z-index: 1;

    &.show-menu {
      left: 200px;
    }
  }

  .header {
    height: 60px;
    background: $blue;
    position: relative;
  }

  .menu-icon {
    display: inline-block;
    width: 30px;
    height: 15px;
    position: absolute;
    top: 23px;
    left: 20px;
    cursor: pointer;
    //background: yellow;

    > span {
      background: $blue-light;
      position: absolute;
    }

    .line-1 {
      width: 20px;
      height: 3px;
      border-radius: 3px;

    }

    .line-2 {
      width: 30px;
      height: 3px;
      bottom: 0;
      border-radius: 3px;
    }

    .dot {
      top: -2px;
      right: 0;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  }

  .search-icon {
    position: absolute;
    z-index: 2;
    font-size: 21px;
    //color: $blue-light;
    top: 18px;
    right: 24px;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      .ring {
        border-color: #fff;
      }

      .handle {
        background: #fff;
      }
    }

    .ring {
      position: absolute;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border: 4px solid $blue-light;
      border-radius: 50%;
      left: -10px;
    }

    .handle {
      position: absolute;
      width: 4px;
      height: 10px;
      border-radius: 2px;
      transform: rotate(-45deg);
      background: $blue-light;
      top: 15px;
      left: 7px;

    }

  }

  .title {
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    margin: 0;
  }

  .search-input {
    box-sizing: border-box;
    position: absolute;
    top: 13px;
    right: 55px;
    width: 230px;
    height: 34px;
    border-radius: 17px;
    border: none;
    background: #fff;
    padding: 0 17px;
    font-size: 13px;
    color: #666;
    transition: all .3s ease-in-out;
    transform: translateX(15px);
    opacity: 0;
    pointer-events: none;

    &:focus {
      outline: none;
    }


    &.active {
      transform: translateX(0);
      opacity: 1;
      pointer-events: all;
    }
  }

  .content {
    height: 240px;
    overflow: hidden;
    position: relative;

    .line {
      position: absolute;
      top: 0;
      left: 27px;
      bottom: 0;
      width: 3px;
      background: #EBEBEB;
      z-index: 0;
    }

  }

  ul {
    list-style: none;
  }

  .item {
    position: relative;
    z-index: 2;
    margin: 25px 20px 25px 43px;
    color: #666;

    dt {
      position: absolute;
      box-sizing: border-box;
      height: 10px;
      width: 10px;
      background: #fff;
      border: 2px solid $blue;
      box-shadow: 0 0 0 3px #fff;
      border-radius: 50%;
      top: 0;
      left: -19.05px;
    }

    dd {
      margin: 0;
    }

    .time {
      display: block;
      font-size: 11px;
      line-height: 11px;
      margin-bottom: 2px;
    }

    .text {
      font-size: 15px;
      line-height: 20px;
    }

    .import {
      font-weight: 600;
    }
  }

  .menu {
    position: absolute;
    width: 170px;
    height: 270px;
    top: 65px;
    left: 50px;
    background: #43627D;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    z-index: 0;
    margin: 0;
    padding: 10px 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;

  }

  .menu-item {
    color: #93B2CD;
    margin: 0;
    padding: 18px 17px;
    list-style: none;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      color: #fff;
      background: #385269;
    }
  }
</style>
