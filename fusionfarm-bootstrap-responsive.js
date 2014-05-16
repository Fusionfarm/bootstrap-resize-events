var Fusionfarm = {
	bootstrap: {
		actions: {
			xsmall: function() {
				// do xsmall stuff
			},
			small: function() {
				// do small stuff
			},
			medium: function() {
				// do medium stuff
			},
			large: function() {
				// do large stuff
			}
		},
		// http://getbootstrap.com/css/#grid-options
		grid: {
			xsmall:  768, // <
			small:   768, // >=
			medium:  992, // >=
			large:  1200, // >=
			current:''
		},
		responsive: function(){
			var winWidth = jQuery(window).width();
			if((winWidth < this.grid.medium)&&(winWidth >= this.grid.small)) { //tablet
				if(this.grid.current != 'tablet') {
					this.grid.current = 'tablet'
					console.log('tablet');
				}
			}
			else if(winWidth < this.grid.xsmall){  //mobile
				if(this.grid.current != 'mobile') {
					this.grid.current = 'mobile'
					console.log('mobile');
				}
			}
			else{  //desktop
				if(this.grid.current != 'desktop') {
					this.grid.current = 'desktop'
					console.log('desktop');
				}
			}
		},
	}



};

(function($) {
    $(document).ready(function() {
    	Fusionfarm.bootstrap.responsive();
    	$(window).resize(function() {
    		Fusionfarm.bootstrap.responsive();
    	});
    });
})(jQuery);