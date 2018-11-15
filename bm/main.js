$(document).ready(function () {
	ajaxForms();
	initKVSAjaxLoadMore();
	initCommentActions();
	initKVSAjaxSorting();
	ajaxVote();
	initKVSALoadMorePagination();
	customScroll();
	initPlayTrailerOnHover();
	changeInput();
	svg4everybody();
	initTabs();
	initSlider();
	inlineToggle();
	listenClickSlickArrow();
	newRowDrop();
	textareaResize();
	initCopyEmbed();
	seoCheck();
	$( function() {

		$('.toogle').click(function(e) {
		  e.stopPropagation();
		  $('.send-form').addClass('open');
		});

		$('.close-btn').click(function(e) {
		  e.stopPropagation();
		  $('.send-form').removeClass('open');
		});

		var timer;
		function handlerIn() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				$( ".main" ).addClass("open");
				$( ".menu-shadow" ).addClass("open");
			}, 250);
		}
		function handlerOut() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				$( ".main" ).removeClass("open");
				$( ".menu-shadow" ).removeClass("open");
			}, 700);
		}
		$( ".toogle-menu" ).hover(handlerIn, handlerOut);
		$( ".holder-category-menu" ).hover(handlerIn, handlerOut);
		//$( ".js_open" ).hover(handlerIn1, handlerOut1);


		$( ".btn-keywords" ).on( "click", function() {
			$( ".keywords-holder" ).toggleClass( "open");
		});

		$( ".btn-toogle" ).on( "click", function(e) {
		  e.preventDefault ? e.preventDefault() : e.returnValue = false;
		  var $this = $(this);
		  if ($this.closest('.list').hasClass('open')) {
			$this.closest('.list').removeClass('open');
			$this.closest('.accordeon-thumb').removeClass('auto-height');
			customScroll();
		  }
		  else {
			$this.closest('.holder-list').find('.list.open').removeClass('open');
			$this.closest('.list').addClass('open');
			$this.closest('.accordeon-thumb').addClass('auto-height');
			customScroll();
		  }
		});

		$( ".show" ).on( "click", function(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			var $this = $(this);
			$this.closest( ".accordeon-thumb" ).toggleClass( "open-show");
		});
		
		$( ".switch" ).on( "click", function() {
			$(this).closest( ".container" ).toggleClass( "shadow");
		});
		$( ".shadow-on" ).on( "click", function() {
			$('.embed-opened').removeClass('embed-opened');
			$( ".shadow" ).removeClass( "shadow");
		});
		$('.header').on( "click", function() {
			$('.embed-opened').removeClass('embed-opened');
			$(this).closest( ".shadow" ).removeClass( "shadow");
		});
		$(".embed-popap__description a").on( "click", function() {
			$('.embed-opened').removeClass('embed-opened');
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
	function newRowDrop() {
		var itemHolder = document.querySelector('.drop-array__holder');
		if (itemHolder) {
			var itemArr = document.querySelectorAll('.drop-array__item'),
				itemHolderWidth = itemHolder.clientWidth,
				totalWidth = 0;
			if (itemArr.length>0) {
				for(var i = 0; i<itemArr.length; i++) {
					totalWidth +=itemArr[i].clientWidth;
				}
			}
			if (totalWidth>itemHolderWidth) {
				var drop = document.querySelector('.drop-array');
					drop.classList.add('show-button');
			}
		}
		var buttonItem = document.querySelector('.drop-button');
			if(buttonItem) {
				buttonItem.addEventListener('click', function(){
					var parentItem = document.querySelector('.drop-array');
					if(parentItem.classList.contains('show-item')) {
						parentItem.classList.remove('show-item');
					}
					else {
						parentItem.classList.add('show-item');
					}
				});
			}
	}
	$('.popup-content').magnificPopup({
		type: 'inline',
		midClick: true      
	});
	
	$('.simple-ajax-popup').magnificPopup({
			type: 'ajax',
			removalDelay: 500,
			mainClass: 'mfp-fade'
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

	$(document).on("click touchstart", ".js-mobile-version", function(){
		$.cookie("desktop", '2', {
			expires: 365,
			domain: $(this).attr('data-url'),
			path: "/"
		});
	});
});
function initNotify(infoMsg, bgColor, noEvents) {
	var coords = document.querySelector('.content').getBoundingClientRect(),
		messageNode = document.querySelector('.green-notify');
		messageNode.style.left = coords.left + "px";
	if (infoMsg) {
		document.querySelector('.green-notify span').innerHTML = infoMsg;
	}
	if (noEvents) {
		$(noEvents).css('pointer-events', 'none');
		setTimeout(function(){
			$(noEvents).css('pointer-events', 'auto');
		}, 3400);
	}
	if (bgColor) {
		messageNode.classList.add('show', bgColor);
		setTimeout(function(){
			messageNode.classList.remove('show');
			setTimeout(function(){
				messageNode.classList.remove(bgColor);
			}, 500);
		}, 3000);
	}
	else {
		messageNode.classList.add('show');
		setTimeout(function(){
			messageNode.classList.remove('show');
		}, 3000);
	}
}
function initCopyEmbed() {
	var buttonNode = document.querySelector('.embed-button'),
		embedPopapToggle = document.querySelectorAll('.js-toggle-popap');
	if (buttonNode) {
		buttonNode.addEventListener('click', function(){
			document.getElementById("embed-code").select();
			document.execCommand('copy');
			initNotify('Код скопирован в буфер обмена');
		});
	}
	if (embedPopapToggle.length>0) {
		for(var i=0; i<embedPopapToggle.length; i++)
		embedPopapToggle[i].addEventListener('click', function(){
			document.querySelector('body').classList.toggle('embed-opened');
		});
		
	}
}
function textareaResize() {
	var textaereaNode = document.getElementById('embed-code');
	if (textaereaNode) {
		textaereaNode.style.height = textaereaNode.scrollHeight + "px";
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
				}, 2000);
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
		/*$('body').on('click','#countButton', function(e) {
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
		});*/
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
			if ($link.hasClass('comment-like')) {
				likeCounter = this.parentNode.querySelector('.like-count');
			}
			else {
				disLikeCounter = this.parentNode.querySelector('.dislike-count');
			}
			utilitiesAjaxRequest($link, {action: 'vote_comment', vote: increment, comment_id: commentId}, function(json) {
				if (json['status'] == 'success') {
					if (likeCounter) {
						likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;

					}
					else if (disLikeCounter) {
						disLikeCounter.innerHTML = parseInt(disLikeCounter.innerHTML) + 1;
					}
					initNotify(text_success);
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
					// $.notify(text_failure, "error");
					initNotify(text_failure, 'red-info', '.comment-rate__holder a');
				}
			});
		} 
	});
};
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
			var get_target = $parent.attr('data-target');
			var ratingNode =  document.querySelector('.percent');
			var text_success = $parent.attr('data-text-success');
			var text_failure = $parent.attr('data-text-failure');
			var get_url = "?mode=async&format=json&action=rate&" + get_target + "_id=" + get_id + "&vote=" + get_vote;

			$.ajax({
					url: get_url,
					dataType: "text",
					success: function(msg) {
							var found_word = 'failure';
							if(msg.indexOf(found_word) != -1) {
								initNotify('Вы уже голосовали', 'red-info', '.js-vote');
							} else {
								var resultJSON = JSON.parse(msg),
								ratingVal = parseInt(resultJSON['data']['rating'] / 5 * 100) + '%';
								ratingNode.innerHTML = ratingVal;
								initNotify('Спасибо за ваш голос', '', '.js-vote');
							}
					}
			});
			
			return false;
	});

}
function initKVSAjaxSorting() {
		$('body').on('click','.js-sorting [data-sort], .js-sorting [data-hd], .js-sort-btn', function(){
				console.log('ddd');
				var $this = $(this),
					$parent = $this.closest('.js-sorting'),
					$ajaxHolder = $this.closest('.ajax-block'),
					addParams = $this.attr('data-addparams'),
					idToClose = $this.attr('data-close-id'),
					idToSort = idToClose || $('[data-id]').attr('data-id'),
					params = {
						mode: 'async', 
						action: 'get_block', 
						block_id: idToSort,
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
										if ($('[data-child-id]').attr('data-child-id')) {
											var refreshBlocks = $('[data-child-id]').attr('data-child-id'),
												refreshBlocksArr = refreshBlocks.split(',');
											appendCustom(refreshBlocksArr);
										}
								}
								if (paginationConfiguredBlocks && paginationEnableBlock && window.params) {
									paginationConfiguredBlocks = false;
									paginationEnableBlock(window.params);
								}
						}
				});
				function appendCustom(refreshBlocksArr) {
					/*do not remove setTimeout. The point in the event loop*/
					for (var i = 0; i < refreshBlocksArr.length; i++) {
						(function(){
							var $ajHolder = $('#' + refreshBlocksArr[i] + '1');
							var params = {
									mode: 'async', 
									action: 'get_block', 
									block_id: refreshBlocksArr[i],
							};
							var str = $.param(params);
							if (addParams) {
									str += addParams;
							}
							var get_secondUrl = '?' + str;
							$.ajax({
									url: get_secondUrl,
									success: function(data_second){
										var $data_sc = $(data_second);
										$ajHolder.replaceWith($data_sc);
									}
							});
						}());
					}
				}
				return false;
		});
}
function initKVSALoadMorePagination() {
	$.fn.hasAttr = function(name) {
		return this.attr(name) !== undefined;
	};
	$('body').on('click', '.js-show-more', function(){
		var $this = $(this);
		var currentPage = $this.attr('data-page');
		var isHide = $this.attr('data-hide'),
			itemClass = $this.attr('data-item-class'),
			block_result = $this.attr('data-block-result');
		var count = parseInt(currentPage) + 1;
		if($this.hasAttr('data-count')) {
			count = $this.attr('data-count');
		}
		var from = $this.attr('data-from') || 'from';
		var block_id = $this.attr('data-id');
		var total = $this.attr('data-total');
		var addParam = $this.attr('data-param') || '';
		// if ($this.attr('data-param')) {
		// }
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
					if (isHide) {
						$this.css('display','none');
					}
				}
			}
		});
		return false;
	});
	var noOfInputs = $('.js-show-more').attr('data-page');
	$('.js-show-more').on('click', function(e) {
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
				if (e.currentTarget.querySelector('#displayCountModel')) {
					var countHolder = e.currentTarget.querySelector('#displayCountModel');
					countHolder.textContent = total_items-output_index*per_page;
				}
				else {
					$('#displayCount').html(total_items-output_index*per_page);
				}
			}
	});
}
$(window).load(function() {
	var bodyHeight = $(".keywords-holder").height();

	var box = document.querySelectorAll('.js-box');
	var rowHeight = "41";
	//console.log(box.scrollHeight);
	for (var i = 0; i < box.length; i++) {
			var controlHeight = box[i].getAttribute('data-height') || '90';
		if (box[i] !=null) {
			//if (bodyHeight<box.scrollHeight) {
				var seoCont = $(box[i]).find('.holder-custom-info');
				//console.log($(seoCont).height());
				//console.log(bodyHeight);
			if ($(seoCont).height()>controlHeight) {
				$(box[i]).find('.btn-keywords.hide').removeClass('hide');
				$(box[i]).find('.keywords').addClass('toogle');
			}
			else {
				if ($(box[i]).height()>rowHeight && box[i].children.length > 1) {
					$(box[i]).find('.btn-keywords.hide').removeClass('hide');
					$(box[i]).find('.keywords').addClass('toogle');
				}
			}
		}
	}
});


function customScroll() {
	var box = document.querySelector('.thumbs');
	if (box !=null) {
		var height = box.offsetHeight;
		height = height-"40";
		if (document.querySelector('.nano')) {
			document.querySelector('.nano').style.height = height+"px";
		}
	}
	$(".nano").nanoScroller();
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
		});
	}
}
function initPlayTrailerOnHover() {
    var timeout1;
    var timeout2;
    var interval;
    $('body').on('mouseenter', '[data-preview]', function() {
        var $this = $(this);
        var $video = $this.find('video');
        var $image = $this.find('img');
        if ($video.length) {
            $video.get(0).play();
            $image.hide();
        } else {
            var $loader = $('<div class="preview-progress"></div>');
            $this.append($loader);
            setTimeout(function() {
                $loader.addClass('full');
            });

            timeout1 = setTimeout(function() { //avoid downloading video with quick hover
                var video_url = $this.attr('data-preview');
                var $new_video = $('<video loop autoplay muted src="' + video_url + '">');

                function playVideo() {
                    $this.append($new_video);
                    $new_video.get(0).play();
                    $image.hide();
                    $loader.remove();
                }
                timeout2 = setTimeout(function() {
					console.log($new_video.get(0).readyState);

                    if ($new_video.get(0).readyState > 0) { //play video if already loaded in 1000 ms
                        playVideo();
                    } else {
                        interval = setInterval(function() { //wait and play once loaded
                            if ($new_video.get(0).readyState > 0) {
                                playVideo();
                                clearInterval(interval);
                            }
                        }, 100);
                    }
                }, 1000);
            }, 200);
        }
        
    }).on('mouseleave', '[data-preview]', function() {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearInterval(interval);
        var $this = $(this);
        var $video = $this.find('video');
        if ($video.length) {
            $video.get(0).pause();
        }
        // $this.find('img').show();
        $this.find('.preview-progress').remove();
    });
}
function listenClickSlickArrow() {
	/*$('.slick-arrow').on( "click", function(e) {
		var stateNextBtn = $('.next-button.slick-arrow').attr('aria-disabled'),
			statePrevBtn = $('.prev-button.slick-arrow').attr('aria-disabled');
		if (stateNextBtn === 'true') {
			$('.holder-high__thumb.slider').removeClass('next-shadow');
		}
		else {
			if (!document.querySelector('.next-shadow')) {
				$('.holder-high__thumb.slider').addClass('next-shadow');
			}
		}
		if (statePrevBtn === 'true') {
			$('.holder-high__thumb.slider').removeClass('prev-shadow');
		}
		else {
			if (!document.querySelector('.prev-shadow')) {
				$('.holder-high__thumb.slider').addClass('prev-shadow');
			}
		}
	});*/
}
function changeInput() {
	$( ".search-btn" ).on( "click", function(e) {
		var inputValue = document.querySelector('.js-input-check')
		if (inputValue.value.length == "0") {
			e.preventDefault();
			window.location.href = /categories/;
		}
	});
}
function inlineToggle() {
	$('.js-toggle-inline').on( "click", function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		$( ".info-holder__wrapper-info" ).toggleClass( "open-info");
	}); 
}
function addFav() {
	var title = document.title,
	  url = document.location,
	  UA = navigator.userAgent.toLowerCase(),
	  isFF = UA.indexOf('firefox') != -1,
	  isMac = UA.indexOf('mac') != -1,
	  isWebkit = UA.indexOf('webkit') != -1,
	  isIE = UA.indexOf('.net') != -1;
   	if ((isIE || isFF) && window.external) { // IE, Firefox
	  window.external.AddFavorite(url, title);
	  return false;
	}
	if (isMac || isWebkit) { // Webkit (Chrome, Opera), Mac
		var linkNode = document.createElement('a'),
			eventClick = new Event("click");
			linkNode.setAttribute('href','#popap');
			linkNode.classList.add("popup-content");
			linkNode.style.display = 'none';
			$(linkNode).magnificPopup({
				type: 'inline',
				midClick: true      
			});
			linkNode.dispatchEvent(eventClick);
			setTimeout(function() {
				$('.close-popap').on( "click", function() {
					$.magnificPopup.close();
				});
			}, 1000);
		return false;
	}
  }
function seoCheck() {
	var textHoder = document.querySelector(".custom-field-holder");
	if (textHoder) {
		var text = textHoder.textContent;
		if (!text) {
			document.querySelector(".custom-field-holder").style.display = 'none';
		}
	}
}