define( function ( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleClick: function( e ) {
			e.preventDefault();
			this.getProps().resetState();
		},
		render: function() {
			var props = this.getProps();
			return (
				$( '<header />', {
					css: Styles.header
				}).append(
					$( '<div />', {
						css: Styles.container
					}).append([
						$( '<h1 />', {
							text: 'To-do App',
							css: Styles.title
						}),
						$( '<a />', {
							text: 'Reset State',
							href: '#',
							css: Styles.resetBtn,
							click: this.handleClick
						}),
						$( '<a />', {
							text: 'Repo',
							href: 'https://github.com/roberth26/TodoApp',
							target: '_blank',
							css: Styles.repoBtn
						})
					])
				)
			);
		}
	});
});