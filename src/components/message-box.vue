<template>
  <transition-group name="mint-msgbox-pop">
    <div class="mint-msgbox mint-msgbox-center" key="1" v-show="visible">
      <div class="mint-msgbox-header" v-if="header" v-html="header">{{header}}</div>
      <div class="mint-msgbox-content" v-html="content">{{content}}</div>
      <div class="mint-msgbox-footer" v-if="buttons&&buttons.length>0">
        <div class="btn-row">
          <button class="btn-col mint-msgbox-box" :class="{'left-hr':key>0}" v-on:click="item.onClick(hide)"
                  v-for="(item,key) in buttons" key="key">
            {{item.text}}
          </button>
        </div>
      </div>
    </div>
    <div key="2" v-on:click="hide()">
      <VueBackdrop :visible="visible"></VueBackdrop>
    </div>
  </transition-group>
</template>


<script type="text/babel">
  import VueBackdrop from 'vue-backdrop';

  export default {
    props: {
      className: {
        type: String,
        default: ''
      },
      header: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      buttons: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        visible: false
      };
    },
    methods: {
      hide(){
        this.close();
      }
    },
    computed: {},
    components: {
      VueBackdrop
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .hr {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: auto;
      right: auto;
      background-color: #e4e4e4;
      z-index: 2;
    }
    &-x {
      @extend .hr;
      &:after {
        width: 100%;
        height: 1px;
        transform: scaleY(.5);
      }
    }
    &-y {
      @extend .hr;
      &:after {
        width: 1px;
        height: 100%;
        transform: scaleX(.5);
      }
    }
  }

  .mint {
    &-msgbox {
      position: fixed;
      width: 80%;
      border-radius: .1rem;
      background: #fff;
      color: #333;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      transition: opacity .3s linear;
      font-size: 0;
      &-header {
        font-size: .28rem;
        display: block;
        text-align: center;
        padding: .3rem .3rem 0 .3rem;
        color: #333;
      }
      &-content {
        font-size: .24rem;
        display: block;
        text-align: center;
        padding: .3rem;
        color: #666;
      }
      &-footer {
        @extend .hr-x;
        font-size: .24rem;
        display: block;
        text-align: center;
      }
      &-box {
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        color: #26a2ff;
        border: none;
        background: none;
        user-select: none;
        -webkit-appearance: button;
        text-transform: none;
        outline: none;
        &.left-hr {
          @extend .hr-y;
        }
        &:focus {
          outline: 0;
        }
      }
      &-center {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
      }
      &-pop-enter, &-pop-leave-active {
        opacity: 0;
      }
    }
  }

  .btn {
    &-row {
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
    }
    &-col {
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      width: 100%;
    }
  }
</style>
