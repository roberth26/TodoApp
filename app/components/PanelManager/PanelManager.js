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
					title: 'Panels',
					onClose: props.removeComponent.bind( null, props.index ),
					children: [
						$( '<div />', {
							css: Styles.wrapper
						}).append(
							$( '<div />', {
								css: Styles.container
							}).append([
								$( '<button />', {
									text: 'TodoList',
									css: Styles.button
								}).click( props.addComponent.bind( null, 'TodoList' ) ),
								$( '<button />', {
									text: 'PanelManager',
									css: Styles.button
								}).click( props.addComponent.bind( null, 'PanelManager' ) ),
								$( '<button />', {
									text: 'InfoPanel',
									css: Styles.button
								}).click( props.addComponent.bind( null, 'InfoPanel' ) ),
								$( '<button />', {
									text: 'InputPanel',
									css: Styles.button
								}).click( props.addComponent.bind( null, 'InputPanel' ) ),
								$( '<button />', {
									text: 'MacroPanel',
									css: Styles.button
								}).click( props.addComponent.bind( null, 'MacroPanel' ) ),
							])
						)
					]
				})
			);
		}
	});
});