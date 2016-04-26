define( function ( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Panel     = require( 'Panel/Panel' );
    var Styles    = require( './Styles' );

	return Component.extend({
		render: function() {
			var props = this.getProps();
			return (
				new Panel({
					id: props.id + 'Panel__',
					title: 'Macros',
					onClose: props.removeComponent.bind( null, props.index ),
					children: [
						$( '<div />', {
							css: Styles.wrapper
						}).append(
							$( '<div />', {
								css: Styles.container
							}).append([
								$( '<button />', {
									text: 'Complete All',
									css: Styles.button,
									click: props.completeAllTodos
								}),
								$( '<button />', {
									text: 'Reset All',
									css: Styles.button,
									click: props.resetAllTodos
								}),
								$( '<button />', {
									text: 'Remove Completed',
									css: Styles.button,
									click: props.removeCompletedTodos
								}),
								$( '<button />', {
									text: 'Remove All',
									css: Styles.button,
									click: props.removeAllTodos
								})
							])
						)
					]
				})
			);
		}
	});
});