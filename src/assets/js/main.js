$(function() {
	
	$('.input-group').find('.form-control').focus(function(){
		$(this).closest('.input-group').addClass("input-group-focus");
	}).blur(function() {
		$(this).closest('.input-group').removeClass("input-group-focus");
	});

	

	

	$('.dropdown > a').click(function() {

		let $this = $(this);

		if ( $this.closest('.dropdown').find('.dropdown-menu').hasClass('active') ) {
			$this.closest('.dropdown').find('.dropdown-menu').removeClass('active');
		}

		setTimeout(function() {
			$this.closest('.dropdown').find('.dropdown-menu').addClass('active')
		}, 100);

	});


});