$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var searchWord = $.trim($('#searchInput').val()),
            type = '';
        if (searchWord === '') {
            $.alert('检索词不能为空');
            return false;
        } else {
            if (searchWord.indexOf("\\") >= 0 || searchWord.indexOf("%") >= 0 || searchWord.indexOf("#") >= 0) {
                $.alert('请不要搜索非法字符');
                return false;
            };
            $('.search-tab').children().each(function () {
                $(this).hasClass('active') ? type = $(this).html() : ''
            });
            switch (type) {
                case '图书':
                    window.location.href = './searchDetail.html?value=' + searchWord + '&type=books';
                    break;
                case '作者':
                    window.location.href = './searchDetail.html?value=' + searchWord + '&type=authors';
                    break;

            };

        }
    });//一框检索
    $('.search-result-condition .conditon-bd .item').children().click(function(){
        if($(this).hasClass('j-sort')){
           var down='<span class="iconfont icon-jiantou"></span>',
               up='<span class="iconfont icon-jiantou-copy"></span>';
               if($(this).children('.iconfont').length===0){
                  $(this).append(down);
                  $(this).siblings().children('.iconfont').remove();
               }
               $(this).children('.icon-jiantou').length===0?$(this).children('.iconfont').addClass('icon-jiantou').removeClass('icon-jiantou-copy'):$(this).children('.iconfont').addClass('icon-jiantou-copy').removeClass('icon-jiantou');
        };
        $(this).addClass('active').siblings().removeClass('active');
    });//条件筛选

})