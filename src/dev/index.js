/**
 * Created by dcpai on 2017/8/2.
 */
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
