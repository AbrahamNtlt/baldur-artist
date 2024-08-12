<div class='frame'>
  <div class='center'>
    <div class='profile'>
      <div class='avatar'>
        <div class='line1'></div>
        <div class='line2'></div>
        <img class='img' src='https://100dayscss.com/codepen/jessica-potter.jpg' />
      </div>
      <div class='name'>
        <div class='title-1'>Jessica Potter</div>
        <div class='title-2'>Visual Artist</div>
      </div>
      <div class='btns'>
        <div class='btn'>Follow</div>
        <div class='btn'>Message</div>
      </div>
    </div>
    <div class='cards'>
      <div class='card'>
        <div class='count'>523</div>
        <div class='type'>Posts</div>
      </div>
      <div class='card'>
        <div class='count'>1387</div>
        <div class='type'>Likes</div>
      </div>
      <div class='card'>
        <div class='count'>146</div>
        <div class='type'>Follower</div>
      </div>
    </div>

  </div>
</div>

<style lang='scss'>
  $brown: #786450;

  @mixin flex($justify-content :flex-start) {
    display: flex;
    flex-direction: column;
    justify-content: $justify-content;
    align-items: center;
  }

  .frame {
    background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  }

  .center {
    position: absolute;
    height: 300px;
    width: 320px;
    background: #fff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    color: $brown;

    &:after {
      clear: both;
    }
  }

  .profile {
    @include flex;
    float: left;
    width: 200px;
    height: 100%;

    .avatar {
      position: relative;
      margin-top: 30px;
      width: 82px;
      height: 82px;

      .line1 {
        width: 76px;
        height: 76px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: $brown $brown $brown transparent;
        position: absolute;
        top: 3px;
        left: 3px;
        transition: transform 1s ease-in-out;
      }

      .line2 {
        width: 82px;
        height: 82px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: $brown transparent $brown $brown;
        position: absolute;
        transition: transform 1s ease-in-out;
      }

      .img {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      &:hover {
        .line2 {
          transform: rotate(-180deg);

        }

        .line1 {
          transform: rotate(180deg);

        }
      }
    }

    .name {
      margin-top: 20px;
      text-align: center;

      .title-1 {
        font-size: 15px;
        font-weight: 600
      }

      .title-2 {
        font-size: 11px;
      }
    }

    .btns {
      margin-top: 33px;

      .btn {
        display: block;
        width: 120px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto 10px auto;
        text-align: center;
        background: none;
        border: 1px solid $brown;
        border-radius: 15px;
        font-size: 12px;
        font-weight: 600;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
        color: $brown;
        user-select: none;

        &:hover {
          color: #fff;
          background: $brown;
          transition: all 0.4s;
        }
      }
    }
  }

  .cards {
    @include flex(space-around);
    width: 120px;
    height: 300px;
    float: right;

    .card {
      @include flex(center);
      background: #f5e8df;
      width: 100%;
      height: 99px;
      transition: all 0.4s;
      cursor: pointer;

      &:hover {
        background: #ddc9bb;
      }

      .count {
        font-size: 18px;
        font-weight: 600;
      }

      .type {
        font-size: 11px;
      }
    }
  }
</style>
