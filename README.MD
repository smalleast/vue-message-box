#vue-message-box
> message-box for vue.

## props:

```
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
```

## usage:
+ install:
```bash
npm install smalleast/vue-message-box --save


```

+ code:
```index.js
import 'resolution';
import Vue from 'vue'
import MsgBox from '../components/message-box.js'
import Alert from '../components/alert.js'
import Confirm from '../components/confirm.js'

Vue.$msgbox = Vue.prototype.$msgbox = MsgBox;
Vue.$alert = Vue.prototype.$alert = Alert;
Vue.$confirm = Vue.prototype.$confirm = Confirm;

module.exports = {
  MsgBox,
  Alert,
  Confirm
};
```
```javascript
    import {MsgBox} from './index'
    export default {
      data() {
        return {};
      },
      props: {},
      created(){
      },
      methods: {
        _click1(){
          MsgBox({
            header: '提示',
            content: '提示消息1',
            buttons: [{
              text: '确认',
              onClick: function (callback) {
                console.log('ok');
                typeof callback === 'function' ? callback() : '';
              }
            }, {
              text: '取消',
              onClick: function (callback) {
                console.log('cancel');
                typeof callback === 'function' ? callback() : '';
              }
            }]
          });
        },
        _click2(){
          this.$alert('测试alert的内容', '提示', {
            ok: '好的',
            okClick: function () {
              console.log('ok');
            }
          });
        },
        _click3(){
          this.$confirm('测试confirm的内容', '操作', {
            ok: '好的',
            okClick: function () {
              console.log('ok');
            },
            cancel: '关闭',
            cancelClick: function () {
              console.log('cancel');
            }
          })
        }
      },
      components: {}
    };

```

+template
```
<template>
  <aside class="dev">
    <button class="button" v-on:click="_click1()">message box</button>
    <button class="button" v-on:click="_click2()">alert</button>
    <button class="button" v-on:click="_click3()">confirm</button>
  </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
