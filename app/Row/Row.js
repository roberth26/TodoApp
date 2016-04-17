define( [ 'jquery', 'Component' ], function( $, Component ) {
	return function Row() {
		return Component.extend({
			render:	function( props ) {
				return (
					$( '<div />', {
						style: 'margin: 0 -15px 15px -15px'
					}).append(
						props.children
					).append(
						$( '<div style="clear:both;"></div>' )
					)
				);
			}
		});
	}
});