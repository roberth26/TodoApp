define( [ 'jquery', 'Component', './Styles' ],
	function( $, Component, Styles ) {
		return Component.extend({
			state: {
				text: 'World!'
			},
			handleClick: function() {
				this.setState({
					text: 'CHANGED!!!!!'
				});
			},
			render: function() {
				return (
					$( '<header />', {
						css: Styles.header
					}).append(
						$( '<div />', {
							css: Styles.container
						}).append(
							$( '<h1 />', {
								text: 'To-do App',
								css: Styles.title
							})
						).append(
							$( '<a />', {
								text: 'View Repository',
								href: 'https://github.com/roberth26/TodoApp',
								target: '_blank',
								css: Styles.link
							})
						)
					)
				);
			}
		});
	}
);