$(document).ready(function(){
	openSort();
	autocompleteSearch();
	headerMobile();
	headerCategoryGroups();
	mobileMenu();
	mobileSearch();
	customScroller();
	initTabs();
	openSmails();
	replyComment();
	userMenuSmall();
	userInfo();
	sliderAlbum();
	customSelect2();
	select2tags();
	wallTabs();
	searchUsers();
	searchUsers();
	previewImg();
	tabsCustom();

	$('body').on('click', '.js-open-comm', function(){
		var $this = $(this).closest('.item-post');
		if ($this.hasClass('open-comm')) {
			$this.removeClass('open-comm');
			$this.find('.comment-block').slideUp();
		} else {
			$('.item-post.open-comm').find('.comment-block').slideUp();
			$('.item-post').removeClass('open-comm');
			$this.addClass('open-comm');
			$this.find('.comment-block').slideDown();
		}
		return false;
	});

	$('body').on('click', '.js-info', function(){
		var $this = $(this).closest('.js-info-holder');
		if ($this.hasClass('open-popup')) {
			$this.removeClass('open-popup');
		} else {
			$this.addClass('open-popup');
		}
		return false;
	});

	$('body').on('click', '.imgs-holder .row', function(){
		var $this = $(this).closest('.item');
		$('.imgs-holder .item').removeClass('active');
		$this.addClass('active');
	});

	

	$('body').on('click', function(e) {
		if ($(e.target).closest(".js-info-popup").length) return
		if (!$(e.target).closest(".js-info-popup").length) {
			$(".js-info-holder").removeClass("open-popup");
		}
	});


	$('body').on('click', '.file-control .button', function(){
		var $this = $(this).closest('.file-control');
		$this.find('.file').click();
		return false;
	});


});

function tabsCustom() {
	$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});
}

function previewImg() {
	$('body').on('click', '.edit-btn', function(){
		$('#file').click();
		return false;
	});

	$('body').on('click', '.file-holder .btn', function(){
		$('#file').click();
		return false;
	});

	$('#file').change(function () {
        var input = $(this)[0];
        if (input.files && input.files[0]) {
            if (input.files[0].type.match('image.*')) {
                var reader = new FileReader();
                reader.onload = function (e) {
								$('.img-preview').attr('src', e.target.result);
								var block = '<span><img src="' + e.target.result + '"><div class="edit-btn"><i class="icon-edit-3"></i>Редактировать</div></span><span><img src="' + e.target.result + '"></span><span><img src="' + e.target.result + '"></span>';
								$('#output').html(block)
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                console.log('ошибка, не изображение');
            }
        } else {
            console.log('хьюстон у нас проблема');
        }
    });
}

function searchUsers() {
	$('body').on('click', '.js-more-filters', function(){
		var $this = $(this).closest('.search-user');
		if ($(this).hasClass('open-filters')) {
			$(this).removeClass('open-filters');
			$this.find('.more-filters').slideUp();
		} else {
			$(this).addClass('open-filters');
			$this.find('.more-filters').slideDown();
		}
		return false;
	});

	$(".js-range-slider1").ionRangeSlider({
		onChange: function (data) {
			$('.js-from1').html(data.from);
			$('.js-to1').html(data.to);
        },
	});

	$(".js-range-slider2").ionRangeSlider({
		onChange: function (data) {
			$('.js-from2').html(data.from);
			$('.js-to2').html(data.to);
        },
	});

	$(".js-range-slider3").ionRangeSlider({
		onChange: function (data) {
			$('.js-from3').html(data.from);
			$('.js-to3').html(data.to);
        },
	});
}

function wallTabs() {
	$('body').on('click', '.user-wall .link', function(){
		var $this = $(this);
		var $item = $this.data('item');
		if (!$this.hasClass('active')) {
			$('.user-wall .link').removeClass('active');
			$('.wall-item').removeClass('open');
			$this.addClass('active');
			$('[data-item~=' + $item + ']').addClass('active');
			$('[data-item-open~=' + $item + ']').addClass('open');
		}
		return false;
	});
}

function customSelect2() {
	$('.select').select2({
		minimumResultsForSearch: Infinity,
		placeholder: $(this).attr("data-placeholder")
	});
}

function select2tags() {
	var tags = [];
	
	$(".tags-filter .select2").each(function(i) {
	  placeholder = $(this).attr('data-title');
	  $t = $(this).attr("data-select", i);
  
	  $t.select2({
		  id: -1,
		  placeholder: $(this).attr('data-title')
		})
		.on(".tags-filter select2:select", function(e) {
		  var selected = {
			value: e.params.data.text,
			select: $(this).attr("data-select")
		  };
		  tags.push(selected);
		
		  placeholder = $(this).attr('data-title');
		
		  $(this).next().find('.select2-selection__custom').html(placeholder + ' (' + $(this).val().length + ')');
  
		  displayTags();
		})
		.on(".tags-filter select2:unselect", function(e) {
		  var selected = {
			value: e.params.data.text,
			select: $t.attr("data-select")
		  };
  
		  foundObj = findObjectByKey(tags, "value", selected.value);
		  indexToDelete = tags.indexOf(foundObj);
		  tags.splice(indexToDelete, 1);
		
		  val = $(this).val()[0] == undefined ? placeholder : $(this).val()[0] + ' (' + $(this).val().length + ')'
		  $(this).next().find('.select2-selection__custom').html(val);
  
		  displayTags();
		
		  setTimeout(function(){
			$('.select2-dropdown').parent().remove();
		  }, 1);
		});
	  
	  // Adding Fake Selection Placeholder
	  $('<div class="select2-selection__custom">' + placeholder + '</div>').appendTo($t.next().find('.select2-selection'));
	});
	
	
	// DELETE TAGS
	$(".tags-area").on("click", ".tag", function() {
	  var selected = {
		value: $(this).find(".value").text(),
		select: $(this).attr("data-select")
	  };
	  
	  foundObj = findObjectByKey(tags, "value", selected.value);
	  indexToDelete = tags.indexOf(foundObj);
	  
	  tags.splice(indexToDelete, 1);
  
	  values = $('.tags-filter select[data-select="' + selected.select +'"]').val();
	  values.splice(values.indexOf(selected.value), 1);
	  
	  $('.tags-filter select[data-select="' + selected.select +'"]').val(values).trigger('change');
	  
	  val = values[0] == undefined ? placeholder : values[0] + ' (' + values.length + ')'
	  $('.tags-filter select[data-select="' + selected.select +'"]').next().find('.select2-selection__custom').html(val);
	  
	  $(this).remove();
	  return false;
	});
	
	// DISPLAY TAGS
	function displayTags() {
	  $(".tags-area").html("");
  
	  for (i = 0; i < tags.length; i++) {
		$('<a href="#" class="tag" data-select="' + tags[i].select + '"><span class="value">' + tags[i].value + "</span></a>").appendTo($(".tags-area"));
	  }
	}
	
  }
  
  function findObjectByKey(array, key, value) {
	for (var i = 0; i < array.length; i++) {
	  if (array[i][key] === value) {
		return array[i];
	  }
	}
	return null;
  }

function sliderAlbum() {
	var swiperOptions2 = {
		// loop: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},
		freeMode: true,
		spaceBetween: 0,
		speed: 1000,
		// grabCursor: true,
		slidesPerView: 6,
		// centeredSlides: false,
		// centerInsufficientSlides: false,
		breakpoints: {
			380: {
				slidesPerView: 4,
			}
			// 640: {
			//   slidesPerView: 2,
			// },
			// 992: {
			//   slidesPerView: 3,
			// }
		},
	};
	var swiper = new Swiper(".swiper-container", swiperOptions2);
}

function replyComment() {
	$('body').on('click', '.js-reply', function(){
		var $this = $(this).closest('.comment-item');
		if ($this.hasClass('open-form')) {
			$this.removeClass('open-form');
			$this.find('.form-holder').slideUp();
		} else {
			$('.comment-item.open-form').find('.form-holder').slideUp();
			$('.comment-item').removeClass('open-form');
			$this.addClass('open-form');
			$this.find('.form-holder').slideDown();
		}
		return false;
	});
}

function openSmails() {
	$('body').on('click', '.js-open-smails', function(){
		var $this = $(this).closest('.smail-holder');
		if ($this.hasClass('open-smail')) {
			$this.removeClass('open-smail');
		} else {
			$this.addClass('open-smail');
		}
		return false;
	});

	$('body').on('click', '.js-coment-smails', function(){
		var $this = $(this).closest('.smail-holder');
		if ($this.hasClass('open-smail')) {
			$this.removeClass('open-smail');
			$this.find('.smails-holder').slideUp();
		} else {
			$this.addClass('open-smail');
			$this.find('.smails-holder').slideDown();
		}
		return false;
	});
}

function initTabs() {
	$('.js-show-block').on('click', function() {
		var $this = $(this);
		var $toggleBlock = $this.attr('data-block');
		if (!$this.hasClass('active')) {
			$('.js-show-block').removeClass('active');
			$("[data-opened]").slideUp();
			$this.addClass('active');
			$('[data-opened~=' + $toggleBlock + ']').slideDown();
		};
		return false;
	});
}

function headerCategoryGroups() {
	$('body').on('click', '.category-groups .link', function(){
		var $this = $(this);
		var $goup = $this.data('group');
		if (!$this.hasClass('active')) {
			$('.category-groups .link').removeClass('active');
			$('.category-items').removeClass('open');
			$('[data-group-open~=' + $goup + ']').addClass('open');
			$this.addClass('active');
		}
		return false;
	});
}

function mobileMenu() {
	$('body').on('click', '.js-open-menu', function(){
		$('body').removeClass('open-search');
		if ($('body').hasClass('open-menu')) {
			$('body').removeClass('open-menu');
		} else {
			$('body').addClass('open-menu');
		}
		return false;
	});

	$('body').on('click', function(e) {
		if ($(e.target).closest(".nav-holder").length) return
		if (!$(e.target).closest(".nav-holder").length) {
			$("body").removeClass("open-menu");
		}
	});



	document.addEventListener('touchstart', handleTouchStart, false);  
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;                                                        
	var yDown = null;                                                        

	function handleTouchStart(evt) {                                         
		xDown = evt.touches[0].clientX;                                      
		yDown = evt.touches[0].clientY;                                      
	};                                                
	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown ) {
			return;
		}
		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
			if ( xDiff > 0 ) {
				$('body').removeClass('open-menu');  
			} else {
			}                       
			if ( yDiff > 0 ) {
			} else { 
			}                                                                 
		}
		xDown = null;
		yDown = null; 
	};                                  
}

function mobileSearch() {
	$('body').on('click', '.js-open-search', function(){
		$('body').removeClass('open-menu');
		if ($('body').hasClass('open-search')) {
			$('body').removeClass('open-search');
		} else {
			$('body').addClass('open-search');
		}
		return false;
	});
}

function customScroller() {
	$(".nano").nanoScroller({
		// scroll: 'top'
		iOSNativeScrolling: true,
		alwaysVisible: true
	});
}

function headerMobile() {
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var headerHeight = $('.header').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		if(Math.abs(lastScrollTop - st) <= delta) {
			return;
		}
		if (st > lastScrollTop && st > headerHeight){
			$('.header').addClass('nav-up');
		} else {
			if(st + $(window).height() < $(document).height()) {
				$('.header').removeClass('nav-up');
			}
		}

		lastScrollTop = st;
	}
};

function openSort(){
	$('body').on('click', '.js-sort', function(){
		var $this = $(this);
		if ($this.parent().hasClass('open-sort')) {
			$this.parent().removeClass('open-sort');
		} else {
			$('.sort').removeClass('open-sort');
			$this.parent().addClass('open-sort');
		}
		return false;
	});

	$('body').on('click', function(e) {
		if ($(e.target).closest(".sort").length) return
		if (!$(e.target).closest(".sort").length) {
			$(".sort").removeClass("open-sort");
		}
	});

	$('body').on('click', function(e) {
		if ($(e.target).closest(".drop-holder .container").length) return
		if (!$(e.target).closest(".drop-holder .container").length) {
			$(".item").removeClass("open-sort");
		}
	});
}

function autocompleteSearch() {
	$('.search-input').on('click', function() {
		$('.block-search').addClass('open');
		return false;
	});

	$('body').on('click', function(e) {
		if ($(e.target).closest(".block-search").length) return
		if (!$(e.target).closest(".block-search").length) {
			$(".block-search").removeClass("open");
		}
	});

}

function userMenuSmall(){
	$('body').on('click', '.js-user-menu', function(){
		var $this = $(this).closest('.name-holder');
		var $btn = $this.find('.user-btns');
		if ($btn.hasClass('open-sort')) {
			$btn.removeClass('open-sort');
		} else {
			$(".user-btns").removeClass("open-sort");
			$btn.addClass('open-sort');
		}
		return false;
	});

	$('body').on('click', function(e) {
		if ($(e.target).closest(".name-holder .drop-holder").length) return
		if (!$(e.target).closest(".name-holder .drop-holder").length) {
			$(".user-btns").removeClass("open-sort");
		}
	});
}


function userInfo(){
	$('body').on('click', '.js-user-info', function(){
		var $this = $(this).closest('.user-profile');
		var $info = $this.find('.info-user');
		if ($this.hasClass('open-info')) {
			$this.removeClass('open-info');
			$info.slideUp();
		} else {
			$this.addClass('open-info');
			$info.slideDown();
		}
		return false;
	});


	$('body').on('click', '.js-user-dots', function(){
		var $this = $(this);
		var $block = $this.closest('.three-columns');
		var $info = $block.find('.right-column');
		if ($info.hasClass('open')) {
			$info.removeClass('open');
			$this.removeClass('open');
			$('body').removeClass('open-info');
		} else {
			$info.addClass('open');
			$this.addClass('open');
			$('body').addClass('open-info');
		}
		return false;
	});

	document.addEventListener('touchstart', handleTouchStart, false);  
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;                                                        
	var yDown = null;                                                        

	function handleTouchStart(evt) {                                         
		xDown = evt.touches[0].clientX;                                      
		yDown = evt.touches[0].clientY;                                      
	};                                                
	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown ) {
			return;
		}
		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
			if ( xDiff > 0 ) {
			} else {
				$('.right-column').removeClass('open');
				$('.js-user-dots').removeClass('open');
				$('body').removeClass('open-info');
			}                       
			if ( yDiff > 0 ) {
			} else { 
			}                                                                 
		}
		xDown = null;
		yDown = null; 
	};         

	$('body').on('click', function(e) {
		if ($(e.target).closest(".right-column").length) return
		if (!$(e.target).closest(".right-column").length) {
			$("body").removeClass("open-info");
			$(".right-column").removeClass('open');
			$(".js-user-dots").removeClass('open');
		}
	});
}

