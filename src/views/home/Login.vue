<template>
  <div id="et_login-2" class="et_pb_widget widget_et_login"><h4 class="widgettitle">登录医研平台</h4>
    <div class="widget_content">
      <form name="loginform" id="loginform"
            method="post">
        <ul class="widget_list">
          <li>
            <input class="input" type="text" name="log" placeholder="请输入您的邮箱">
          </li>
          <li>
            <input class="input" type="password" name="pwd" placeholder="请输入您的密码">
          </li>
          <li style="text-align: left">
            <button type="submit" class="button">登录</button>
            <a style="right:30px;top:240px" href="/index.html#/signUp" class="post-meta">还没账号？去注册</a>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
  @media all{
    a,div,form,h4,li,ul{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}
    ul{list-style:none;}
    a{color:rgba(0,0,0,.75);text-decoration:none;word-break:break-word;word-wrap:break-word;}
    a:visited{color:inherit;}
    h4{padding-bottom:10px;color:rgba(0,0,0,.75);font-family:Open Sans;font-weight:700;letter-spacing:.5px;line-height:1.3em;text-transform:uppercase;}
    h4{font-size:18px;}
    ul{list-style-type:disc;line-height:1.7em;}
    ul{padding:.7em 0 .3em 1.143em;}
    ul li{margin-bottom:.7em;}
    .input,input,input[type=password],input[type=text]{outline:none;background:rgba(0,0,0,.05);border:0;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 12px;color:rgba(0,0,0,.6);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:normal;-webkit-transition:.3s ease;transition:.3s ease;}
    .input:focus,input:focus,input[type=password]:focus,input[type=text]:focus{background:rgba(0,0,0,.1);color:rgba(0,0,0,.75);}
    .input::-webkit-input-placeholder,input::-webkit-input-placeholder,input[type=password]::-webkit-input-placeholder,input[type=text]::-webkit-input-placeholder{color:inherit;font-size:inherit;font-family:inherit;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;}
    .input:-ms-input-placeholder,input:-ms-input-placeholder,input[type=password]:-ms-input-placeholder,input[type=text]:-ms-input-placeholder{color:inherit;font-size:inherit;font-family:inherit;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;}
    .input::-ms-input-placeholder,input::-ms-input-placeholder,input[type=password]::-ms-input-placeholder,input[type=text]::-ms-input-placeholder{color:inherit;font-size:inherit;font-family:inherit;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;}
    .input::placeholder,input::placeholder,input[type=password]::placeholder,input[type=text]::placeholder{color:inherit;font-size:inherit;font-family:inherit;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;}
    .button,button:not(.et_pb_menu__icon),button[type=submit]{outline:none;display:inline-block;background:rgba(0,0,0,.1);padding:10px 12px;border:0;border-style:solid;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.6);font-family:inherit;font-size:inherit;font-weight:600;line-height:normal;text-shadow:none;text-transform:uppercase;cursor:pointer;-webkit-transition:.3s ease;transition:.3s ease;border-color:#fff;}
    .button:hover,button:hover:not(.et_pb_menu__icon),button:hover[type=submit]{background:rgba(0,0,0,.2);color:rgba(0,0,0,.75);text-shadow:none;}
    .button:visited,button:visited:not(.et_pb_menu__icon),button:visited[type=submit]{color:rgba(0,0,0,.6);}
    .et_pb_widget{display:block;background:#fff;width:100%;border-radius:3px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1);margin:0 0 24px;overflow:hidden;}
    .et_pb_widget .widgettitle{background:var(--color-background);;padding:15px 20px;color:#fff;font-size:16px;font-weight:600;line-height:1;letter-spacing:1.2px;text-transform:uppercase;text-align: left}
    .et_pb_widget ul li{margin-bottom:0!important;}
    .et_pb_widget li{border-bottom:1px solid rgba(0,0,0,.1);margin:0;padding:15px 20px;font-size:12px;line-height:1.3em;}
    .et_pb_widget li:last-child{border:0;}
    .et_pb_widget a{font-size:14px;font-weight:600;line-height:1.3em;}
    .et_pb_widget a,.et_pb_widget a:visited{color:rgba(0,0,0,.75);}
    .et_pb_widget .widget_list .post-meta{color:rgba(0,0,0,.5);font-size:12px;}
    .et_pb_widget ul{list-style:none;padding:0;}
    .et_pb_widget.widget_et_login .widget_list li{border:0;padding:15px 20px 0;}
    .et_pb_widget.widget_et_login .widget_list li:last-child{padding:15px 20px;}
    .et_pb_widget.widget_et_login .input{width:100%;}
    .et_pb_widget.widget_et_login .button{margin:0 10px 0 0;}
    *{-webkit-box-sizing:border-box;box-sizing:border-box;}
    .et_pb_widget{float:left;max-width:100%;}
    .et_pb_widget a{text-decoration:none;color:#666;}
    .et_pb_widget li a:hover{color:#82c0c7;}
    .et_pb_widget ul li{margin-bottom:.5em;}
    .et_pb_widget{word-wrap:break-word;}
    button::-moz-focus-inner{padding:0;border:0;}
  }
  .et_pb_widget li a:hover{color:#54d0e2;}
  </style>
