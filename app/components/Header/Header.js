define( function ( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleClick: function( e ) {
			e.preventDefault();
			if ( confirm( 'Are you sure you want to reset the app state and lose all changes and data?' ) )
				this.getProps().resetState();
		},
		render: function() {
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
							css: Styles.link
						}).click( this.handleClick ),
						$( '<a />', {
							text: 'View Repository',
							href: 'https://github.com/roberth26/TodoApp',
							target: '_blank',
							css: Styles.link
						})
					])
				)
			);
		}
	});
});