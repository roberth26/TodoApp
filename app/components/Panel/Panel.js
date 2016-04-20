define( function ( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Styles    = require( './Styles' );

	return Component.extend({
		state: {
			isMinimized: false
		},
		handleMinimize: function() {
			this.setState({
				isMinimized: !this.getState().isMinimized
			});
			var onMinimize = this.getProps().onMinimize;
			if ( onMinimize ) onMinimize();
		},
		handleClose: function() {
			var onClose = this.getProps().onClose;
			if ( onClose ) onClose();
		},
		render: function() {
			return (
				$( '<div />', {
					css: Styles.panel
				}).append(
					$( '<div />', {
						css: Styles.header
					}).append(
						$( '<button />', {
							html: '&times;',
							css: Styles.button
						}).click( this.handleClose )			
					).append(
						$( '<button />', {
							html: this.getState().isMinimized ? '+' : '&ndash;',
							css: Styles.button
						}).click( this.handleMinimize )
					).append(
						$( '<h3 />', {
							text: this.getProps().title,
							css: Styles.title
						})
					).append( $( '<div style="clear:both;"></div>' ) ) // clearfix
				).append(
					$( '<div />', {
						css: this.getState().isMinimized ? Styles.contentMinimized : Styles.content
					}).append(
						this.getProps().children
					).append( $( '<div style="clear:both;"></div>' ) ) // clearfix
				)
			);
		}
	});
});