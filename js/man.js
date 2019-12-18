$(document).ready(function(){
	$('.menu__btn').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('menu__btn_active');
		$('.menu__list').toggleClass('menu__list_unactive');
	});


	// const modalLinkOrder = $("[data-toggle='modal-order']");
	// const modalLinkCallback = $("[data-toggle='modal-callback']");
	// const modalClose = $('.modal__close');
	// const modalWindow = $(".modal-window");

	// modalLinkOrder.on('click', (e) => {
	// 	e.preventDefault();
	// 	$('body').addClass('overflow-hidden');
	// 	$('.modal__title').text($(this).attr('data-title'));
	// 	$($(this).attr('data-toggle')).toggleClass('modal-visible');
	// })

	// modalClose.on('click', (e) => {
	// 	e.preventDefault();
	// 	$('body').removeClass('overflow-hidden');
	// 	$($(this).attr('data-toggle')).toggleClass('modal-visible');
	// });

	// modalLinkCallback.on('click', (e) => {
	// 	e.preventDefault();
	// 	$('body').addClass('overflow-hidden');
	// 	$('.modal__title').text($(this).attr('data-title'));
	// 	$($(this).attr('data-toggle')).toggleClass('modal-visible');
	// })

	// modalClose.on('click', (e) => {
	// 	e.preventDefault();
	// 	$('body').removeClass('overflow-hidden');
	// 	$($(this).attr('data-toggle')).toggleClass('modal-visible');
	// });










	// $(".layer").on("click", "a", function (event) {
	// 	event.preventDefault();
	// 	$('.menu-btn').toggleClass('menu-btn-active');
	// 	$('.layer').toggleClass('layer-unactive');
	
	// 	var id = $(this).attr('href'),
	// 		top = $(id).offset().top;
	// 	$('body,html').animate({ scrollTop: top }, 1000);
	// });
});
