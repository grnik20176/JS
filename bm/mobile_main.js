$(document).ready(function () {
	ajaxForms();
	initKVSAjaxLoadMore();
	initCategoryToggle();
	initCommentActions();
	initSwipeModel();
	initKVSAjaxSorting();
	ajaxVote();
	initKVSALoadMorePagination();
	initScrollPane();
	initSlider();
	customScroll();
	svg4everybody();
	initTabs();
	initSwipeToPlay();
	checkInputSearch();
	initToggleVideoInfo();
	initScrollToggleHeader();
	initToggleModelInfo();
	$( function() {
		
		$('.button-open-menu').click(function(){
			var inputId = $(this).attr('data-focus'),
				bodyNode = document.querySelector('.move');
			if ($(this).hasClass('menu-open')) {
				if ($('body').hasClass('overflow')) {
					$('body').removeClass('overflow');
				}
				else {
					$('body').removeClass('move');
				}
				if (bodyNode){
					$('.menu-shadow').removeClass('open');
					$('body').removeClass('move');
					customScroll();
				}
				else {
					$('.menu-shadow').removeClass('open');
					$('.menu-shadow').addClass('open');
					$('body').addClass('move');
					customScroll();
					initSwipeMenu();
				}   
			}
			else {
				if ($('.elm-expand').hasClass('open')){
					$('.elm-expand').removeClass('open');
					$('.menu-shadow').removeClass('open');
					$('body').removeClass('overflow');
					customScroll();
				}
				else {
					$('.elm-expand').removeClass('open');
					$('.menu-shadow').removeClass('open');
					$(this).closest('.elm-expand').addClass('open');
					$('.menu-shadow').addClass('open');
					$('body').addClass('overflow');
					customScroll();
				}
			}
			if(inputId) {
				setTimeout(function() {
					$("#" + inputId).focus();
				}, 100);
			}
		});
		
		
		$('.menu-shadow').click(function(){
			$('.elm-expand').removeClass('open');
			$('.menu-shadow').removeClass('open');
			$('.holder-category-menu').removeClass('hidden', 1000);
			$('.sub-category-holder').removeClass('open');
			if ($('body').hasClass('overflow')) {
				$('body').removeClass('overflow');
			}
			else {
				$('body').removeClass('move');
			}
		});
		
		
		$('.coments-area.js-toggle').click(function(e) {
		  e.stopPropagation();
		  $('.send-form').addClass('open');
		});
		$('.close-btn').click(function(e) {
		  e.stopPropagation();
		  $('.send-form').removeClass('open');
		});
		$( ".category" ).on( "click", function(e) {
		  e.preventDefault ? e.preventDefault() : e.returnValue = false;
		  var $this = $(this);
		  if ($this.closest('.holder-link-category').hasClass('open')) {
		    $this.closest('.holder-link-category').removeClass('open');
		  }
		  else {
		    $this.closest('.holder-category-menu').find('.holder-link-category.open').removeClass('open');
		    $this.closest('.holder-link-category').addClass('open');
		  }
		});

		$( ".holder-icon-arrow" ).on( "click", function(e) {
		  e.preventDefault ? e.preventDefault() : e.returnValue = false;
		  var $this = $(this);
		  if ($this.closest('.sub-holder-category').hasClass('open')) {
		    $this.closest('.sub-holder-category').removeClass('open');
		    customScroll();
		  }
		  else {
		    $this.closest('.content-all').find('.sub-holder-category.open').removeClass('open');
		    $this.closest('.sub-holder-category').addClass('open');
		    customScroll();
		  }
		});

		$( ".btn-keywords" ).on( "click", function() {
			$( ".keywords-holder" ).toggleClass( "open");
		});

		$('.simple-ajax-popup').magnificPopup({
				type: 'ajax',
				removalDelay: 500,
				mainClass: 'mfp-fade',
				callbacks: {
					open: function() {
						// $('body').addClass('overflow');
						
					},
					close: function() {
						// $('body').removeClass('overflow');
					}
				}
		 });

		$( ".js-open-sub-link" ).on( "click", function(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			var $this = $(this),
				dataTarget = $this.attr("data-target");
			if (dataTarget) {
				$this.closest( ".sub-category-holder" ).addClass(dataTarget);
			}
			else {
				if ($this.closest( ".sub-category-holder" ).hasClass('open')) {
					$this.closest('.sub-category-holder').removeClass('open');
				}
				else {
				$this.closest('.holder-link-category').find('.sub-category-holder.open').removeClass('open');
				$this.closest( ".sub-category-holder" ).addClass( "open");
				$this.closest( ".holder-category-menu" ).addClass( "hidden");
				}
			}
			customScroll();
		});

		$( ".back" ).on( "click", function(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			var $this = $(this);
				dataTarget = $this.attr("data-target");
			if (dataTarget) {
				$this.closest( ".sub-category-holder" ).removeClass(dataTarget);
			}
			else {
				if ($this.closest( ".holder-category-menu" ).hasClass('hidden')) {
					$this.closest('.holder-category-menu').removeClass('hidden', 1000);
					$this.closest('.sub-category-holder').removeClass('open');
				}
			}
		});

		

		$( ".show" ).on( "click", function(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			var $this = $(this);
			$this.closest( ".accordeon-thumb" ).toggleClass( "open-show");
		});
		
		//$( ".sub-link" ).on( "click", function() {
		//	$(this).closest('.holder-link-category').find('.sub-category-holder.open').removeClass('open');
		//	$(this).closest( ".sub-category-holder" ).toggleClass( "open");
		//});

		//$( ".show" ).on( "click", function() {
		//	$(this).closest( ".accordeon-thumb" ).toggleClass( "open");
		//});

		$( ".switch" ).on( "click", function() {
			$(this).closest( ".container" ).toggleClass( "shadow");
		});

		$('ul.tabs li').click(function(){
				var tab_id = $(this).attr('data-tab');

				$('ul.tabs li').removeClass('current');
				$('.tab-content').removeClass('current');

				$(this).addClass('current');
				$("#"+tab_id).addClass('current');
			});

		$( "[data-replace-fancybox]" ).on( "click", function() {
			$.fancybox.close();
			var $block = $(this).attr('data-src');
			$.fancybox.open({src  : $block});
		});

	} );

	$('.popup-content').magnificPopup({
		type: 'inline',
		midClick: true      
	});
	$('.simple-ajax-popup').on( "click", function() {
		setTimeout(function() {
			$('.close-popap').on( "click", function() {
				$.magnificPopup.close();
			});
		}, 1000);
	});
	  jQuery.cookie = function(name, value, options) {
	  	if (typeof value != 'undefined') {
	  		options = options || {};
	  		if (value === null) {
	  			value = '';
	  			options = $.extend({}, options);
	  			options.expires = -1;
	  		}
	  		var expires = '';
	  		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
	  			var date;
	  			if (typeof options.expires == 'number') {
	  				date = new Date();
	  				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
	  			} else {
	  				date = options.expires;
	  			}
	  			expires = '; expires=' + date.toUTCString();
	  		}
	  		var path = options.path ? '; path=' + (options.path) : '';
	  		var domain = options.domain ? '; domain=' + (options.domain) : '';
	  		var secure = options.secure ? '; secure' : '';
	  		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	  	} else {
	  		var cookieValue = null;
	  		if (document.cookie && document.cookie != '') {
	  			var cookies = document.cookie.split(';');
	  			for (var i = 0; i < cookies.length; i++) {
	  				var cookie = jQuery.trim(cookies[i]);
	  				if (cookie.substring(0, name.length + 1) == (name + '=')) {
	  					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	  					break;
	  				}
	  			}
	  		}
	  		return cookieValue;
	  	}
	  };

	  $(function(){
	  	$(".js-full-version").on('click', function(){
	  		$.cookie("desktop", '1', {
	  			expires: 365,
	  			domain: $(this).attr('data-url'),
	  			path: "/"
	  		});
	  	});
	  });

	  
});
function checkInputSearch() {
	var inputNode = document.getElementById('search-input'),
		formNode = document.getElementById('search');
		
	if (formNode)  {
		formNode.addEventListener('submit', function(e){
			if (inputNode.value.length === 0) {
				e.preventDefault();
				e.stopImmediatePropagation();
				e.stopPropagation();
				window.location.href = "/categories/";
			}
		});
	}
}
function ajaxForms() {
	$('body').on('input', '.js-form input, .js-form select', function() {
		$(this).parent().find($('.form-error')).fadeOut();
	});
	$('body').on('submit', '.js-form', function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		var $this = $(this),
			action = $this.attr('action'),
			params = $this.serializeArray();
		$.post(action, params, function(data) {
			if (data.status == 'failure') {
				$.each(data.errors, function(idx, error) {
					if(error.field) {
						$('[name=' + error.field + ']').parent().find($('.form-error')).html(error.message).fadeIn();
						$('[name=' + error.field + ']').parent().find($('.form-error')).parent().addClass('error-row');
					}
					else {
						$('.form-error').eq(0).html(error.message).fadeIn();
						$('.form-error').eq(0).parent().removeClass('error-row');
					}
				});
			} else {
				$('.form-holder').addClass('send-ok');
				setTimeout(function() {
					window.location.reload();
				}, 1500);
			}
		});
	});
}
function initKVSAjaxLoadMore() {
		$('body').on('click','.js-load-more', function(){
				var $this = $(this);
				var $this_holder = $this.parent();
				var num_page_load = $this.attr('data-count-page'),
						from = $this.attr('data-from') ? $this.attr('data-from') : 'from',
						total = $this.attr('data-total'),
						itemClass = $this.attr('data-item-class'),
						sort_by = $this.attr('data-sort'),
						block_result = $this.attr('data-block-result'),
						hide_this = $this.attr('data-hide-this'),
						addParams = $this.attr('data-addparams');
				var params = {
						mode: 'async', 
						action: 'get_block', 
						block_id: $this.attr('data-id')
				};
				$this.addClass('load');
				params[from] = num_page_load;
				if (sort_by) {
						params['sort_by'] = sort_by;
				}
				var str = $.param(params);

				if (addParams) {
						str += addParams;
				}
				var get_url = '?' + str;
				$.ajax({
						url:get_url,
						success:function(data){
								if (data){
										var $result = $(data).find('.'+ itemClass);
										if (block_result) {
												$('.' + block_result).append($result);
										} else {
												$this_holder.prev().append($result);
										}
										$this.attr('data-count-page', ++num_page_load);
										if (num_page_load > total) {
												if (hide_this) {
														$this.hide();
												} else {
														$this_holder.hide();
												}
										}
										$this.removeClass('load');
								}
						}
				});
				return false;
		});
		// $('body').on('click','#countButton', function(e) {
		// 	var $this = $(this);
		// 	var $this_holder = $this.parent();
		// 	var index = $this.attr('data-index'),
		// 			total_items = $this.attr('data-item-count'),
		// 			per_page = $this.attr('data-per-page');
		//   if (typeof(Storage) !== "undefined") {
		//     if (localStorage.clickcount && localStorage.clickcount!=index) {
		//     	//Using this just to reset after every refresh :D 
		//     localStorage.clickcount = parseInt($("#displayCount").text());
		// 	      if ( index!=localStorage.clickcount) {
		// 	      	localStorage.clickcount = Number(localStorage.clickcount) + 1;
		// 	      }
		// 	    } else {
		// 	      localStorage.clickcount = 1;
		// 	    }
		//     } else if (Number(localStorage.clickcount)==index) {
		//     	document.getElementById("displayCount").innerHTML = total_items-(index*per_page);
		//     } else {
		//     document.getElementById("displayCount").innerHTML = "NaN";
		//   }
		// });
		var noOfInputs = 1;
		$('body').on('click','#countButton', function(e) {
			var $this = $(this);
			var $this_holder = $this.parent();
			var index = $this.attr('data-index'),
					total_items = $this.attr('data-item-count'),
					output_index = $this.attr('data-output-index'),
					per_page = $this.attr('data-per-page');
				if (noOfInputs!=index) {
					noOfInputs++
				}
				else {
					// document.getElementById("displayCount").innerHTML = total_items-output_index*per_page;
					$('#displayCount').html(total_items-output_index*per_page);
				}
		});
}
var utilitiesAjaxRequest = function(sender, params, successCallback) {
	var url = window.location.href;
	if (url.indexOf('#') > 0) {
		url = url.substring(0, url.indexOf('#'));
	}
	$.ajax({
		url: url + (url.indexOf('?') >= 0 ? '&' : '?') + 'mode=async&format=json&' + $.param(params),
		type: 'GET',
		beforeSend: function() {
			// $(sender).block({ message: null });
		},
		complete: function() {
			// $(sender).unblock();
		},
		success: function(json) {
			if (typeof json != 'object') {
				json = JSON.parse(json);
			}
			if (json && successCallback) {
				successCallback(json);
			}
		}
	});
};
function initCommentActions () {
	$('.list-comments').on('click', '.comment-options a', function(e) {
		var $link = $(this);
		var $item = $(this).parents('.comment');
		var $container = $(this).parents('.comment-options');
		var $rating = $container.find('.comment-rating');
		var text_failure = $item.attr('data-text-failure');
		var text_success = $item.attr('data-text-success');
		var $ratingLinks = $container.find('.comment-like, .comment-dislike');
		var commentId = $item.attr('data-comment-id'),
			disLikeCounter,likeCounter;

		if (($link.hasClass('comment-like') || $link.hasClass('comment-dislike'))) {
			e.preventDefault();
			if ($link.hasClass('disabled')) {
				return;
			}
			var increment = ($link.hasClass('comment-dislike') ? -1 : 1);
			utilitiesAjaxRequest($link, {action: 'vote_comment', vote: increment, comment_id: commentId}, function(json) {
				if (json['status'] == 'success') {
					if ($link.hasClass('comment-like')) {
						
						likeCounter = $item[0].querySelector('.like-count');
					}
					else {
						disLikeCounter = $item[0].querySelector('.dislike-count');
					}
					if (likeCounter) {
						likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
					}
					else if (disLikeCounter) {
						disLikeCounter.innerHTML = parseInt(disLikeCounter.innerHTML) + 1;
					}
					initNotify(text_success, 'green-info');
					$ratingLinks.addClass('disabled');
					setTimeout(function() {
						$ratingLinks.removeClass('disabled');
					}, 4000);
					if ($rating.length > 0) {
						var ratingValue = parseInt($rating.html());
						if (!isNaN(ratingValue)) {
							ratingValue += increment;
							$rating.html(ratingValue);
							if (ratingValue > 0) {
								$rating.addClass('positive');
							} else if (ratingValue < 0) {
								$rating.addClass('negative');
								$item.addClass('dim-comment');
							} else if (ratingValue == 0) {
								$rating.removeClass('positive').removeClass('negative');
								$item.removeClass('dim-comment');
							}
						}
					}
				} else {
					$ratingLinks.addClass('disabled');
					$container.addClass('disabled');
					setTimeout(function() {
						$ratingLinks.removeClass('disabled');
						$container.removeClass('disabled');
					}, 4000);
					initNotify(text_failure, 'red-info', '.comment-rate__holder a');
					// $.notify(text_failure, "error");
				}
			});
		} 
	});
};

// function initSlideTabs() {
//  $('.btn-keywords').on('click', function() {
//      $('.keywords-holder').removeClass('open');
//      var $this = $(this);
//      var $toggleBlock = $('#' + $this.attr('data-block'));
//      if ($toggleBlock.is(":hidden")) {
//          $this.addClass('open');
//      }
//      $("[data-opened]").slideUp();
//      $("[data-opened]").removeAttr('data-opened');
//      if ($this.hasClass('open')) {
//          $toggleBlock.attr("data-opened", true);
//          $toggleBlock.slideDown();
//      }
//      return false;
//  });
// }

// $( ".btn-keywords" ).on( "click", function() {
//  $( ".keywords-holder" ).toggleClass( "open");
// });
function ajaxVote() {
	$('.js-vote').on('click', function(){
			var $this = $(this);
			var $parent = $this.parent();
			var get_vote = $this.attr('data-vote');
			var get_id = $parent.attr('data-id');
			var ratingNode =  document.querySelector('.percent');
			var get_target = $parent.attr('data-target');
			var text_success = $parent.attr('data-text-success');
			var text_failure = $parent.attr('data-text-failure');
			var get_url = "?mode=async&format=json&action=rate&" + get_target + "_id=" + get_id + "&vote=" + get_vote;

			$.ajax({
					url: get_url,
					dataType: "text",
					success: function(msg) {
							var found_word = 'failure';
							if(msg.indexOf(found_word) != -1) {
								$parent.addClass('disabled');
								setTimeout(function() {
									$parent.removeClass('disabled');
								}, 4000);
								initNotify(text_failure, 'red-info');
							} else {
								var resultJSON = JSON.parse(msg),
								ratingVal = parseInt(resultJSON['data']['rating'] / 5 * 100 ) + '%';
								ratingNode.innerHTML = ratingVal;
								$parent.addClass('disabled');
								setTimeout(function() {
									$parent.removeClass('disabled');
								}, 4000);
								initNotify(text_success, 'green-info');
							}
					}
			});
			
			return false;
	});

}
function initKVSAjaxSorting() {
	$('body').on('click','.js-sorting [data-sort], .js-sorting [data-hd] , .js-sort-btn', function(){
			var $this = $(this);
			var $parent = $this.closest('.js-sorting');
			var $ajaxHolder = $this.closest('.ajax-block');
			var addParams = $this.attr('data-addparams');
			var params = {
					mode: 'async', 
					action: 'get_block', 
					block_id: $('[data-id]').attr('data-id'),
					sort_by: $this.attr('data-sort'),
					is_hd: $this.attr('data-hd'),
					mode_related: $this.attr('data-related'),
					section: $this.attr("data-section"),
					tag: $this.attr("data-tag"),
					country_id: $this.attr("data-country_id"),
					category_id: $this.attr("data-category_id"),
			};
			var str = $.param(params);
			if (addParams) {
					str += addParams;
			}
			var get_url = '?' + str;

			var $slider = $ajaxHolder.find('[data-slider]');
			if ($slider.length > 0) {
				$slider.slick('unslick');
			}

			$.ajax({
					url: get_url,
					success: function(data){
							if (data){
									var $result = $(data);
									$ajaxHolder.replaceWith($result);
									if ($slider.length > 0) {
										var funcName = $slider.attr('data-slider').toString();
										window[funcName]();
									}
									initScrollPane();
									setTimeout(function() {
										initSwipeToPlay('true');
									}, 1000);
							}
							// if (paginationConfiguredBlocks && paginationEnableBlock && window.params) {
							// 	paginationConfiguredBlocks = false;
							// 	paginationEnableBlock(window.params);
							// }
					}
			});
			return false;
	});
}
function initKVSALoadMorePagination() {
	$.fn.hasAttr = function(name) {
	    return this.attr(name) !== undefined;
	};
	$('body').on('click', '.js-show-more', function(){
		
		var $this = $(this),
			bodyElement = document.querySelector('body');
		var currentPage = $this.attr('data-page'),
			block_result = $this.attr('data-block-result'),
			itemClass = $this.attr('data-item-class');
		var count = parseInt(currentPage) + 1;
		var isHide = $this.attr('data-hide');
		if (bodyElement) {
			bodyElement.classList.add('ajax-loading');
		}
	    if($this.hasAttr('data-count')) {
	        count = $this.attr('data-count');
	    }
	    var from = $this.attr('data-from') || 'from',
	    	block_id = $this.attr('data-id'),
	    	total = $this.attr('data-total'),
			addParam = $this.attr('data-param');
	    $.ajax({
	        url: '?mode=async&action=get_block' + '&block_id=' + block_id + "&" + from + '=' + count + "&fromStart=" + currentPage + "&fromEnd=" + count + '&' + addParam,
	        success:function(data){
	            if(data){
					if (itemClass) {
						var $result = $(data).find('.'+ itemClass);
					}
					else {
						var $result = $(data).find('.thumb');
					}
					if (block_result) {
						$('.' + block_result).append($result);
					} else {
 						$this.prev().append($result);
					}
	                count++;
	                $this.attr('data-count', count);
	                if(count > total) {
	                    $this.hide();
	                }

	                var paginationBlock = $this.parent().find('.pagination');
	                var paginationAjax = $(data).find('.pagination');
	                paginationBlock.replaceWith(paginationAjax);
					initScrollPane();
					setTimeout(function() {
						initSwipeToPlay('true');
					}, 1000);
					if (isHide) {
						$this.css('display','none');
					}
					if (bodyElement) {
						bodyElement.classList.remove('ajax-loading');
					}
				}
	        }
	    });
	    return false;
	});
	var noOfInputs = $('.js-show-more').attr('data-page');
	$('.js-show-more').on('click', function() {
		var $this = $(this);
		var $this_holder = $this.parent();
		var index = $this.attr('data-index'),
				total_items = $this.attr('data-item-count'),
				output_index = $this.attr('data-output-index'),
				per_page = $this.attr('data-per-page');
			if (noOfInputs!=index) {
				noOfInputs++
			}
			else {
				// document.getElementById("displayCount").innerHTML = total_items-output_index*per_page;
				var parent = $this_holder[0];
				var displayCount = parent.querySelector('#displayCount'); 
				displayCount.innerHTML = parseInt(total_items-output_index*per_page );
			}
	});
}
function customScroll() {
	$(".nano").nanoScroller();
}
function initScrollPane() {
	var pane = jQuery('.scroll-pane');
	if (pane.length > 0) {
		pane.jScrollPane({animateScroll:50,mouseWheelSpeed:10,trackClickSpeed:30});
		var api = pane.data('jsp');	
		$(window).resize(function(){
		 api.reinitialise();
		});
		setTimeout('sdpof()', 10);
	}
}
function sdpof(){
	if ($(".jspDrag").length > 0){
	 var position = $('.jspDrag').position();
	 var jspTrack = $('.jspTrack').outerWidth();
	 $('.left_bloces').show();
	 $('.rieght_bloces').show();
	 //alert($('.jspDrag').outerWidth()+"+"+position.left+" - "+$('.jspTrack').outerWidth());
	  if(position.left==0){
		$('.left_bloces').hide();
	}else{
	 if(($('.jspDrag').outerWidth()+position.left)==$('.jspTrack').outerWidth()){
		 $('.rieght_bloces').hide();
		 
	 }
	}
	// alert(position.left);
	}
	setTimeout('sdpof()', 10);
}
function initTabs() {
	var parentNode = document.querySelector('body');
	parentNode.addEventListener('click', function(e) {
		if (e.target.classList.value.search('js-toggle') > -1) {
			var openedTarget = document.querySelector('[data-opened]');
			openedTarget.classList.add('hidden');
			openedTarget.removeAttribute('data-opened');
			document.querySelector('.js-toggle.active').classList.remove('active');
			e.target.classList.add('active');
			var toggleTarget = document.getElementById(e.target.getAttribute('data-block'));
			toggleTarget.classList.remove('hidden');
			toggleTarget.setAttribute('data-opened', 'true');
		}
	});
}
function initSlider() {
	if (document.querySelector('.slider')) {
		$('.slider').slick({
			nextArrow: '<span class="next-button"><svg class="svg-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="32" viewBox="0 0 17 32"><path d="M15.538 0.508c0.834 0.122 1.11 0.338 1.244 1.146-0.006 0.064 0.016 0.293-0.1 0.481l-13.59 13.613c-0.125 0.175-0.112 0.255-0.017 0.39l13.588 13.665c0.291 0.325 0.224 0.506 0.224 0.619-0.141 0.599-0.53 0.949-1.062 1.109-0.302 0.036-0.496-0.131-0.577-0.158l-15.155-15.16c-0.14-0.313-0.054-0.454 0.051-0.602l14.943-14.939c0.247-0.22 0.561-0.151 0.451-0.163z"></path></svg></span>',
			prevArrow: '<span class="prev-button"><svg class="svg-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="32" viewBox="0 0 17 32"><path d="M15.538 0.508c0.834 0.122 1.11 0.338 1.244 1.146-0.006 0.064 0.016 0.293-0.1 0.481l-13.59 13.613c-0.125 0.175-0.112 0.255-0.017 0.39l13.588 13.665c0.291 0.325 0.224 0.506 0.224 0.619-0.141 0.599-0.53 0.949-1.062 1.109-0.302 0.036-0.496-0.131-0.577-0.158l-15.155-15.16c-0.14-0.313-0.054-0.454 0.051-0.602l14.943-14.939c0.247-0.22 0.561-0.151 0.451-0.163z"></path></svg></span>',
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 2,
			arrows: true,
			dots: false,
			responsive: [
				{
				  breakpoint: 900,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				  }
				},
				{
				  breakpoint: 630,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 550,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				}
			]
		});
	}
}
function initScrollToggleHeader() {
	var headerElement = document.querySelector('.header'),
		mainNode = document.querySelector('main'),
		marker, currentPosition,
		flag = true;
	//setTimout needs because of the top banner
	setTimeout(function() {
		var mainNodePosition = mainNode.getBoundingClientRect();
		marker = currentPosition = mainNodePosition['top'] + 40;
		window.addEventListener("scroll", throttle(toggleHeader, 0));
	}, 1000);
	function toggleHeader() {
		mainNodePosition = mainNode.getBoundingClientRect();
		if (mainNodePosition['top'] > 0) {
			headerElement.style.position = 'absolute';
		}
		else {
			headerElement.style.position = 'fixed';
		}
		if (currentPosition > marker && currentPosition < window.pageYOffset && flag) {
			headerElement.classList.add('hidden');
			flag = false;
			currentPosition = window.pageYOffset;
		}
		else if (!flag && currentPosition > window.pageYOffset) {
			headerElement.classList.remove('hidden');
			flag = true;
		}
		currentPosition = window.pageYOffset;
	}

    function throttle (callback, limit) {
        var wait = false;                  
        return function () {               
            if (!wait) {                   
                callback.call();           
                wait = true;               
                setTimeout(function () {   
                    wait = false;          
                }, limit);
            }
        }
    }
}
function initSwipeMenu() {
	var listenerNode = document.querySelector('.menu-shadow');
	if (listenerNode) {
		// listenerNode.addEventListener('touchstart', function(event) {
		// 	$('body').removeClass('move');
		// 	$('.menu-shadow').removeClass('open');
		// }, false);
		$(".menu-shadow").swipe({
			swipeLeft: function swipeLeft(event, direction, distance, duration, fingerCount) {
				$('body').removeClass('move');
				$('.menu-shadow').removeClass('open');
			}, 
			allowPageScroll:"vertical",
			threshold: 80
		});
	}
}

function initSwipeToPlay(flag) {
	// $('a.item').click(function(e){
	// 	e.stopPropagation();
	// 	e.preventDefault();
	// });
	if (flag) {
		$("[data-preview]").swipe("destroy");
	}
	var timeout1,
		timeout2,
		firstSwipe = false,
    	interval;
		function trailerPlay(el) {
			var $this = el;
			var $video = $this.find('video');
			var $image = $this.find('img');
			if ($video.length) {
				$video.get(0).play();
				$image.hide();
			} else {
				var $loader = $('<div class="preview-progress"></div>');
				$this.append($loader);
				setTimeout(function () {
					$loader.addClass('full');
				});
				timeout1 = setTimeout(function () {
					//avoid downloading video with quick hover
					var video_url = $this.attr('data-preview');
					var $new_video = $('<video autoplay loop muted playsinline src="' + video_url + '">');
					// $new_video[0].onloadeddata = function(e) {
					// 	console.log("loaded",e);
					// };
					// $new_video[0].onerror = function(e){
					// 	console.log("error",e);
					// };
					function playVideo() {
						$this.append($new_video);
						$new_video.get(0).play();
						$image.hide();
						$loader.remove();
					}
					timeout2 = setTimeout(function () {
						if ($new_video.get(0).readyState > 0) {
							//play video if already loaded in 1000 ms
							playVideo();
						} else {
							interval = setInterval(function () {
								//wait and play once loaded
								if ($new_video.get(0).readyState > 0) {
									playVideo();
									clearInterval(interval);
								}
							}, 100);
						}
					}, 1000);
				}, 200);
			}
		}
	$("[data-preview]").swipe({
		swipeLeft: function swipeLeft(event, direction, distance, duration, fingerCount) {
			clearTimeout(timeout1);
			clearTimeout(timeout2);
			clearInterval(interval);
			setCookie("kt_rt_swipe","swipe");
			var videoArr = document.querySelectorAll('video');
			if(videoArr.length > 0) {
				videoArr.forEach(function(element) {
					element.pause(); 
				});
			}  
			if ($(this).hasClass('playing')) {
				$(this).removeClass("playing");
			}
			else {
				$('.playing').removeClass("playing");
				$(this).addClass("playing");
				trailerPlay($(this));
			}
			if (!$(this).hasClass('swiped')) {
				$(this).addClass("swiped");
			}
			if (!firstSwipe) {
				$('.swipe-info').addClass('hidden');
				firstSwipe = true;
			}
		}, 
		swipeRight: function swipeRight(event, direction, distance, duration, fingerCount) {
			clearTimeout(timeout1);
			clearTimeout(timeout2);
			clearInterval(interval);

			setCookie("kt_rt_swipe","swipe");
			var videoArr = document.querySelectorAll('video');
			if(videoArr.length > 0) {
				videoArr.forEach(function(element) {
					element.pause(); 
				});
			}  
			if ($(this).hasClass('playing')) {
				$(this).removeClass("playing");
			}
			else {
				$('.playing').removeClass("playing");
				$(this).addClass("playing");
				trailerPlay($(this));
			}
			if (!$(this).hasClass('swiped')) {
				$(this).addClass("swiped");
			}
			if (!firstSwipe) {
				$('.swipe-info').addClass('hidden');
				firstSwipe = true;
			}
		},
		allowPageScroll:"vertical",
		threshold: 80
	});
}
function setCookie(name,value) {
	var date = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + value + "; path=/; expires=" + date.toUTCString();
}
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
  }


function initToggleModelInfo() {
	var nodeItem = document.querySelector('.info-holder');
	if ( nodeItem ) {
		if (nodeItem.scrollHeight > 110) {
			$(".js-toggle-info").click(function(e) {
				e.stopPropagation();
				var $this = $(this);
				$this.parent().toggleClass('open');
			});
		}
		else {
			nodeItem.classList.remove('toggle_active');
		}
	}
}	
function initNotify(infoMsg, bgColor, noEvents) {
	var coords = document.querySelector('.content').getBoundingClientRect(),
		messageNode = document.querySelector('.action-notify');
		// messageNode.style.left = coords.left + "px";
	if (infoMsg) {
		document.querySelector('.action-notify span').innerHTML = infoMsg;
	}
	if (noEvents) {
		$(noEvents).css('pointer-events', 'none');
		setTimeout(function(){
			$(noEvents).css('pointer-events', 'auto');
		}, 3400);
	}
	messageNode.classList.remove('red-info', 'green-info');
	if (bgColor) {
		messageNode.classList.add('show', bgColor);
		setTimeout(function(){
			messageNode.classList.remove('show');
			messageNode.classList.remove(bgColor);
		}, 3000);
	}
	else {
		messageNode.classList.add('show');
		setTimeout(function(){
			messageNode.classList.remove('show');
		}, 3000);
	}
}
function initCategoryToggle() {
	var w = window.innerWidth;
	$( ".btn-toogle" ).on( "click", function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		var $this = $(this);
		if ($this.closest('.list').hasClass('open')) {
		  $this.closest('.list').removeClass('open');
		  $this.closest('.accordeon-thumb').removeClass('auto-height');
		}
		else {
		  $this.closest('.holder-list').find('.list.open').removeClass('open');
		  $this.closest('.list').addClass('open');
		  $this.closest('.accordeon-thumb').addClass('auto-height');
		  if (w < 480) {
			var thisParentNode = $this.parent().parent();
			scrollIt(
				thisParentNode[0].querySelector('.accordeon-menu'),
				300,
				'easeOutQuad');
			}
		}
	});
	var buttonNodeArr = document.querySelectorAll('.title-sidebar');
	if (buttonNodeArr.length > 0) {
		for (var i = 0; i < buttonNodeArr.length; i++) {
			buttonNodeArr[i].addEventListener('click', function(){
				if ($(this).parent().hasClass('nav-toggle')) {
					$('.accordeon-thumb').removeClass('nav-toggle');
				}
				else {
					$('.accordeon-thumb').removeClass('nav-toggle');
					$(this).parent().addClass('nav-toggle');
					if (w < 480) {
						var thisParentNode = this.parentNode;
						scrollIt(
							thisParentNode.querySelector('.accordeon'),
							300,
							'easeOutQuad');
					}
				}
			});
		}
	}
}
function scrollIt(destination, duration = 200, easing = 'linear', callback) {

	const easings = {
	  linear(t) {
		return t;
	  },
	  easeInQuad(t) {
		return t * t;
	  },
	  easeOutQuad(t) {
		return t * (2 - t);
	  },
	  easeInOutQuad(t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	  },
	  easeInCubic(t) {
		return t * t * t;
	  },
	  easeOutCubic(t) {
		return (--t) * t * t + 1;
	  },
	  easeInOutCubic(t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	  },
	  easeInQuart(t) {
		return t * t * t * t;
	  },
	  easeOutQuart(t) {
		return 1 - (--t) * t * t * t;
	  },
	  easeInOutQuart(t) {
		return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
	  },
	  easeInQuint(t) {
		return t * t * t * t * t;
	  },
	  easeOutQuint(t) {
		return 1 + (--t) * t * t * t * t;
	  },
	  easeInOutQuint(t) {
		return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
	  }
	};
  
	const start = window.pageYOffset;
	const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
	const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	const destinationOffset = typeof destination === 'number' ? destination - 40 : destination.offsetTop - 40;
	const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
	if ('requestAnimationFrame' in window === false) {
	  window.scroll(0, destinationOffsetToScroll);
	  if (callback) {
		callback();
	  }
	  return;
	}
  
	function scroll() {
	  const now = 'now' in window.performance ? performance.now() : new Date().getTime();
	  const time = Math.min(1, ((now - startTime) / duration));
	  const timeFunction = easings[easing](time);
	  window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
	  if (window.pageYOffset === destinationOffsetToScroll) {
		if (callback) {
		  callback();
		}
		return;
	  }
  
	  requestAnimationFrame(scroll);
	}
  
	scroll();
}
function initSwipeModel() {
	var swipeNode = document.querySelector('.swipe-model');
	if (swipeNode) {
		$(".swipe-model").swipe({
			swipeLeft: function swipeLeft(event, direction, distance, duration, fingerCount) {
				window.location.href = swipeNode.querySelector(".next_model").getAttribute('href');
			}, 
			swipeRight: function swipeRight(event, direction, distance, duration, fingerCount) {
				window.location.href = swipeNode.querySelector(".prev_model").getAttribute('href');
			},
			allowPageScroll:"vertical",
			threshold: 80
		});
	}
}
function initToggleVideoInfo() {
	var container = document.querySelector('.video-details');
	if (container) {
		if (container.scrollHeight > 66) {
			$('.toggle-show').click(function(){
				$(".video-details").toggleClass('open');
				$(this).toggleClass('open');
			});
		}
		else {
			var button = document.querySelector('.toggle-show');
			button.style.display = 'none';
		}
	}
}