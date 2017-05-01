$(window).scroll(function() {
		$('#dpm_prod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});
		$('#dpm_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+320) {
				$(this).addClass("fadeIn");
			}
		});
		
		$('#dpm_model').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+80) {
				$(this).addClass("slideLeft");
			}
		});

		$('#dbl_prod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+350) {
				$(this).addClass("slideRight");
			}
		});

		$('#dbl_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+320) {
				$(this).addClass("fadeIn");
			}
		});

		$('#dbl_model').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+120) {
				$(this).addClass("slideLeft");
			}
		});

		$('#tbl_prod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+450) {
				$(this).addClass("slideRight");
			}
		});

		$('#tbl_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+200) {
				$(this).addClass("fadeIn");
			}
		});

		$('#tbl_model').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+90) {
				$(this).addClass("slideLeft");
			}
		});

		$('#sta_prod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass("slideRight");
			}
		});

		$('#sta_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+200) {
				$(this).addClass("fadeIn");
			}
		});

		$('#sta_model').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+90) {
				$(this).addClass("slideLeft");
			}
		});

		$('#sx_prod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('#sx_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+200) {
				$(this).addClass("fadeIn");
			}
		});

		$('#sx_model').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+90) {
				$(this).addClass("slideLeft");
			}
		});

		$('#smr_prod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});

		$('#smr_text').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+200) {
				$(this).addClass("bigEntrance");
			}
		});


		$('#smr_model').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+100) {
				$(this).addClass("slideLeft");
			}
		});


});


