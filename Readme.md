# checkForm

基于jQuery的表单校验插件

### Usage
    
    <script type="text/javascript">
        $.checkFormSetup({e: 'Please input the text.'});
        
        $("#form").checkForm({
            '#username': {w: 'Input the wrong username.', r: /^\w{5,16}$/},
            '#email': {e: 'Please input the email.', w: 'Input the wrong email.', r: 'email', t: 'next'}
        });
    </script>
    
### Regular

插件内置了一些常用的正则表达式。
    
* `int`: 整数正则表达式
* `date`: 日期正则表达式（格式：2013-03-22）
* `datetime`: 时间正则表达式（格式：2013-03-22 16:22）
* `idcard`: 身份证正则表达式
* `phone`: 手机正则表达式
* `email`: 邮箱正则表达式
* `url`: 链接正则表达式
* `qq`: QQ正则表达式
* `chinese`: 中文正则表达式

### Default

可用通过设置全局属性来每个校验设置默认值。

    $.checkFormSetup({e: 'Please input the text.'});

属性如下：
    
* `e`: 输入值为空提示语
* `w`: 输入值错误提示语
* `r`: 输入值校验正则表达式
* `t`: 提示节点选择符（可写`next`，`prev`获取输入元素的相邻节点或者通过$(seletor)获取节点，默认：`next`）
* `cpass`: 校验通过时提示节点的类名（默认：`check-pass`）
* `cerror`: 校验失败时提示节点的类名（默认：`check-error`）

### Author

[Travis](http://travisup.com/)

