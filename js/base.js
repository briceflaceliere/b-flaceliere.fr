(function($){
 
	slider = function() {
            var page = 1;
            var maxpage = 3; 
            
            var wrapper = $('#wrapper');
            wrapper.append('<div class="clear-fix"><a href="#" class="fleche fleche-l"></a><a href="#" class="fleche fleche-r"></a></div>');
            $('.fleche-r').fadeIn(500);
            
            $('#wrapper .fleche-r').click(function(){
                page++;
                if(page > maxpage) page = 1;
                changeSlide(page, maxpage);
            });

            $('#wrapper .fleche-l').click(function(){
                page--;
                if(page <= 0) page = maxpage;
                changeSlide(page, maxpage);
            });

            $('nav li').click(function(){
                page = $(this).attr('data-slide');
                changeSlide(page, maxpage);
            });
	};
        
        changeSlide = function(page, maxpage){
            
            
            $('#wrapper article').fadeOut(500, function(){
                $('nav li').removeClass('active');
                $('nav li[data-slide='+page+']').addClass('active');
            });
            $('#wrapper .fleche').fadeOut(400);

            $('#wrapper article.page-'+page).delay(500).fadeIn(500, function(){
                if(page > 1) $('#wrapper .fleche-l').fadeIn(400);
                if(page < maxpage) $('#wrapper .fleche-r').fadeIn(400);
            });
        };
 
})(jQuery)

$(function(){
    
    slider();
    $('.experence-item.plusinfo').hover(function(){
        $(this).find('.infos').slideDown(500);
    }, function(){
        $(this).find('.infos').slideUp(500);
    });
    
});