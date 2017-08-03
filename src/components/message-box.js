/**
 * Created by dcpai on 2017/8/2.
 */
import Vue from 'vue';

const MsgboxConstructor = Vue.extend(require('./message-box.vue'));
let getAnInstance = () => {
  return new MsgboxConstructor({
    el: document.createElement('div')
  });
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

MsgboxConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};

let Msgbox = (options = {}) => {
  let instance = getAnInstance();
  instance.content = typeof options === 'string' ? options : options.content;
  instance.header = options.header || '';
  instance.buttons = options.buttons || '';
  instance.className = options.className || '';
  instance.backgroundClose = typeof options.backgroundClose === 'boolean' ? options.backgroundClose : true;

  document.body.appendChild(instance.$el);

  Vue.nextTick(function () {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
  });
  return instance;
};

export default Msgbox;
