var Fusionfarm = {
	bootstrap: {
		action: {
			mobile: function() { // xsmall
				// do xsmall stuff
			},
			tablet: function() { // small
				// do small stuff
			},
			desktop: function() { // medium
				// do medium stuff
			},
			large: function() { // large
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
					this.grid.current = 'tablet';
					this.action.tablet();
				}
			}
			else if(winWidth < this.grid.xsmall){  //mobile
				if(this.grid.current != 'mobile') {
					this.grid.current = 'mobile';
					this.action.mobile();
				}
			}
			else if((winWidth > this.grid.medium)&&(winWidth <= this.grid.large)) { //desktop
				if(this.grid.current != 'desktop') {
					this.grid.current = 'desktop';
					this.action.desktop();
				}
			}
			else { // large
				if(this.grid.current != 'large') {
					this.grid.current = 'large';
					this.action.large();
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
