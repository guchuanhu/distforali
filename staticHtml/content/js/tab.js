;(function () {
    selfTab = (function () {
        var tab='[data-role="tab"]',
            tabContent = '[data-tab-target="tab-content"]',
            $tab = $(tab);
        return {
            tab:function(){
                $tab.each(function(){
                    var hideTab=$(this).data('tab')?true:false;//重复点击是否隐藏自身
                    $(this).children().click(function () {
                        var $this = $(this),
                            current=$this.parent().children().index($this);   
                        $this.parent().next(tabContent).children().eq(current).siblings().hide();
                        $this.siblings().removeClass('active');
                        hideTab?
                        $this.toggleClass('active').parent().next(tabContent).children().eq(current).toggle():
                        $this.addClass('active').parent().next(tabContent).children().eq(current).show();
                    });
                })
                
            },
            init: function () {
                this.tab();
            }
        };
    })();
    selfTab.init();
})();