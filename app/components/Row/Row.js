define( [ 'jquery', 'Component' ],
	function( $, Component ) {
		return Component.extend({
			render:	function() {
				return (
					$( '<div />', {
						style: 'margin: 0 -15px 15px -15px'
					}).append(
						this.getProps().children
					).append(
						$( '<div style="clear:both;"></div>' )
					)
				);
			}
		});
	}
);