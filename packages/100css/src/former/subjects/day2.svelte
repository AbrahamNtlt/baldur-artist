<script type="typescript">
  function toggleClass() {
    active = !active;
    first = false;
  }

  let active = false;
  let first = true;
</script>

<div class="frame">
  <div class="center">
    <div class="menu-icon" class:active on:click={toggleClass}>
      <div class="line-1" class:no-animation={first} />
      <div class="line-2" class:no-animation={first} />
      <div class="line-3" class:no-animation={first} />
    </div>
  </div>
</div>

<style lang="scss">
  .frame {
    background: #3faf82;
  }

  $icon-height: 8px;
  $icon-space: 14px;
  $offset: $icon-height + $icon-space;
  .menu-icon {
    cursor: pointer;
  }

  .menu-icon div {
    width: 80px;
    height: $icon-height;
    background: #fff;
    margin-bottom: $icon-space;
    border-radius: 2px;
    transition: 0.4s;
    box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
  }

  .menu-icon {
    .line-1 {
      animation: animate-line-1 0.8s ease-in-out forwards;
    }

    .line-2 {
      animation: animate-line-2 0.8s ease-in-out forwards;
    }

    .line-3 {
      animation: animate-line-3 0.8s ease-in-out forwards;
    }

    &.active {
      .line-1 {
        animation: animate-line-1-rev 0.8s ease-in-out forwards;
      }

      .line-2 {
        animation: animate-line-2-rev 0.8s ease-in-out forwards;
      }

      .line-3 {
        animation: animate-line-3-rev 0.8s ease-in-out forwards;
      }
    }
  }

  @keyframes animate-line-1 {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, $offset, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(0, $offset, 0) rotate(45deg);
    }
  }

  @keyframes animate-line-2 {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  @keyframes animate-line-3 {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, -$offset, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(0, -$offset, 0) rotate(-45deg);
    }
  }

  @keyframes animate-line-1-rev {
    0% {
      transform: translate3d(0, $offset, 0) rotate(45deg);
    }
    50% {
      transform: translate3d(0, $offset, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  @keyframes animate-line-2-rev {
    0% {
      transform: scale(0);
      opacity: 0;$icon-height: 8px;
      $icon-space: 14px;
      $offset: $icon-height + $icon-space;
      .menu-icon {
        cursor: pointer;
      }

      .menu-icon div {
        width: 80px;
        height: $icon-height;
        background: #fff;
        margin-bottom: $icon-space;
        border-radius: 2px;
        transition: 0.4s;
        box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.2);
      }

      .menu-icon {
        .line-1 {
          animation: animate-line-1 0.8s ease-in-out forwards;
        }

        .line-2 {
          animation: animate-line-2 0.8s ease-in-out forwards;
        }

        .line-3 {
          animation: animate-line-3 0.8s ease-in-out forwards;
        }

        &.active {
          .line-1 {
            animation: animate-line-1-rev 0.8s ease-in-out forwards;
          }

          .line-2 {
            animation: animate-line-2-rev 0.8s ease-in-out forwards;
          }

          .line-3 {
            animation: animate-line-3-rev 0.8s ease-in-out forwards;
          }
        }
      }

      @keyframes animate-line-1 {
        0% {
          transform: translate3d(0, 0, 0) rotate(0deg);
        }
        50% {
          transform: translate3d(0, $offset, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(0, $offset, 0) rotate(45deg);
        }
      }

      @keyframes animate-line-2 {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(0);
          opacity: 0;
        }
      }

      @keyframes animate-line-3 {
        0% {
          transform: translate3d(0, 0, 0) rotate(0deg);
        }
        50% {
          transform: translate3d(0, -$offset, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(0, -$offset, 0) rotate(-45deg);
        }
      }

      @keyframes animate-line-1-rev {
        0% {
          transform: translate3d(0, $offset, 0) rotate(45deg);
        }
        50% {
          transform: translate3d(0, $offset, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(0, 0, 0) rotate(0deg);
        }
      }

      @keyframes animate-line-2-rev {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      @keyframes animate-line-3-rev {
        0% {
          transform: translate3d(0, -$offset, 0) rotate(-45deg);
        }
        50% {
          transform: translate3d(0, -$offset, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(0, 0, 0) rotate(0deg);
        }
      }
    }
    50% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes animate-line-3-rev {
    0% {
      transform: translate3d(0, -$offset, 0) rotate(-45deg);
    }
    50% {
      transform: translate3d(0, -$offset, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }
</style>
