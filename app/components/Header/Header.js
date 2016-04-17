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
								text: 'To-Do App',
								css: Styles.title
							})
						).append(
							$( '<a />', {
								text: 'View Repository',
								href: 'https://github.com/roberth26/todo_app',
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