/**
 * Created by dcpai on 2017/8/2.
 */
import Vue from 'vue';

const AlertConstructor = Vue.extend(require('./message-box.vue'));

let getAnInstance = () => {
  return new AlertConstructor({
    el: document.createElement('div')
  });
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

AlertConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};

let Alert = (content, header, options = {}) => {
  let instance = getAnInstance();
  instance.content = content || '';
  instance.header = header || '';
  instance.buttons = [{
    text: options.ok || '确认',
    onClick: function (callback) {
      typeof options.okClick === 'function' ? options.okClick() : '';
      callback();
    }
  }];
  instance.className = options.className || '';
  instance.backgroundClose = typeof options.backgroundClose === 'boolean' ? options.backgroundClose : true;

  document.body.appendChild(instance.$el);

  Vue.nextTick(function () {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
  });
  return instance;
};

export default Alert;
