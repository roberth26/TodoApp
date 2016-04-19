define( function ( require ) {
    var $         = require( 'jquery' );
    var Component = require( 'Component' );
    var Panel     = require( 'Panel/Panel' );
    var Styles    = require( './Styles' );

	return Component.extend({
		handleCreateTodo: function( e ) {
			e.preventDefault();
			var formData = $( e.target ).serializeArray();
			if ( formData[ 0 ].value != '' )
				this.getProps().createTodo( formData[ 0 ].value, formData[ 1 ].value );
		},
		render: function() {
			var props = this.getProps();
			return (
				new Panel({
					id: props.id + 'Panel__',
					title: 'Create a To-do',
					onClose: props.removeComponent.bind( null, props.index ),
					children: [
						$( '<form />' ).append([
							$( '<div />', {
								css: Styles.inputGroup
							}).append(
								$( '<input />', {
									type: 'text',
									name: 'TodoName',
									css: Styles.textField,
									placeholder: 'I need to...'
								}),
								$( '<button />', {
									text: 'Create',
									type: 'submit',
									css: Styles.button
								}),
								$( '<div style="clear:both;"></div>' )
							),
							$( '<textarea />', {
								name: 'TodoDescription',
								placeholder: 'Description',
								css: Styles.textArea
							}),

						]).submit( this.handleCreateTodo )
					]
				})
			);
		}
	});
});