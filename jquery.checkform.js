/**
 * jQuery checkForm
 * @Author  Travis(LinYongji)
 * @Contact http://travisup.com/
 * @Version 1.0.0
 */
(function($) {
    var reg = {
            'int': /^\d+$/,
            'date': /^\d{4}-\d{2}-\d{2}$/,
            'datetime': /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/,
            'idcard': /(?:^\d{15}$)|(?:^\d{17}[\dxX]$)/,
            'phone': /^1[358]\d{9}$/,
            'email': /^[a-zA-Z0-9]+([_\.\-]\w+)*@\w+([_\.]\w+)*\.\w+([_\.]\w+)*$/,
            'url': /^(http:\/\/|https:\/\/|)[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?$/, 
            'qq': /^[1-9]\d{4,9}$/,
            'chinese': /^[\u4e00-\u9fa5]+$/
        },

        def = {
            e: '',
            w: '',
            r: '',
            t: 'next',
            cpass: 'check-pass',
            cerror: 'check-error'
        };
    
    function blur() {
        var $tips,
            $elem = $(this),
            o = $elem.data('checkform'),
            val = $elem.val();
        
        if(o.t == 'next') {
            $tips = $(this).next();
        } else if(o.t == 'prev') {
            $tips = $(this).prev();
        } else {
            $tips = $(o.t);
        }
        
        $tips.removeClass(def.cpass).removeClass(def.cerror);
        
        if(o.e && val == '') {
            $tips.addClass(def.cerror).text(o.e);
            return false;
        }
        
        if(o.w && o.r && !o.r.test(val)) {
            $tips.addClass(def.cerror).text(o.w);
            return false;
        }
        
        $tips.addClass(def.cpass).text('');
        return true;
    }
    
    function submit(e) {
        var i,
            $elem,
            o = e.data,
            sign = 0;
        for(i in o) {
            $elem = $(i);
            if($elem[0]) {
                !blur.call($elem[0]) && sign++;
            }
        }
        return sign > 0 ? false : true;
    }
    
    function setup(options) {
        var i;
        for(i in def) {
            if(options[i]) {
                def[i] = options[i];
            }
        }
        return def;
    }
    
    function init(options) {
        var i, o;

        if(typeof options === 'undefined') {
            return;
        }
        for(i in options) {
            o = options[i];
            o.r = reg[o.r] || o.r || def.r;
            o.w = o.w || def.w;
            o.e = o.e || def.e;
            o.t = o.t || def.t;
            $(i).eq(0).data('checkform', o).bind('blur', blur);
        }
        
        this.eq(0).bind('submit', options, submit);
    }
    
    $.fn.checkForm = init;
    $.checkFormSetup = setup;

})(jQuery);