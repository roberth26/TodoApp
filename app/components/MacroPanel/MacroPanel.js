define( [ 'jquery', 'Component', 'Panel/Panel', './Styles' ],
	function( $, Component, Panel, Styles ) {
		return Component.extend({
			render: function() {
				var props = this.getProps();
				return (
					new Panel({
						id: props.id + 'Panel__',
						title: 'Macros',
						children: [
							$( '<button />', {
								text: 'button',
								css: Styles.button
							}),
							$( '<button />', {
								text: 'button',
								css: Styles.button
							}),
							$( '<button />', {
								text: 'button',
								css: Styles.button
							}),
							$( '<button />', {
								text: 'button',
								css: Styles.button
							}),
							$( '<button />', {
								text: 'button',
								css: Styles.buttonLast
							})
						]
					})
				);
			}
		});
	}
);