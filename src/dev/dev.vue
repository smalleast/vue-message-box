<template>
  <aside class="dev">
    <button class="button" v-on:click="_click1()">message box</button>
    <button class="button" v-on:click="_click2()">alert</button>
    <button class="button" v-on:click="_click3()">confirm</button>
  </aside>
</template>
<script>
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
          backgroundClose: false,
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
</script>
<style rel="stylesheet/scss" lang="scss">
  .dev {
    text-align: center;
  }

  .button {
    width: 90%;
    height: 50px;
    line-height: 50px;
    background: #af6430;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #fff;
    margin: 10px auto;
    font-size: 18px;
    color: #fff;
  }

  .wp-icon {
    width: .98rem;
    height: .98rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    display: inline-block;
    background-image: url("data:image/gif;base64,R0lGODlhZABkAIABAIKCggAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZjNjNTIxOS04MjhmLTg4NGItOWQ1Ni01ZGIyZTMzYjI5NjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUJDRjc1Q0Q3MzgyMTFFN0E0NURENDFGMzMwM0VBQjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUJDRjc1Q0M3MzgyMTFFN0E0NURENDFGMzMwM0VBQjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDdFQTFCQUE0RjQxMTFFNzg2MkNGRTIzNjVFNUIxNUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDdFQTFCQUI0RjQxMTFFNzg2MkNGRTIzNjVFNUIxNUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBl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");
  }


</style>

