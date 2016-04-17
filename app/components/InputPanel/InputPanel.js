define( [ 'jquery', 'Component', 'Panel/Panel', './Styles' ],
	function( $, Component, Panel, Styles ) {
		return Component.extend({
			handleCreateTodo: function( e ) {
				e.preventDefault();
				var formData = $( e.target ).serializeArray();
				if ( formData[ 0 ].value != '' )
					this.getProps().createTodo( formData[ 0 ].value, formData[ 1 ].value );
			},
			render: function() {
				return (
					new Panel({
						id: this.getProps().id + 'Panel__',
						title: 'Create a To-do',
						onClose: this.getProps().removeChild.bind( null, this.getProps().index ),
						children: [
							$( '<form />' ).append([
								$( '<input />', {
									type: 'text',
									name: 'TodoName',
									placeholder: 'Add a to-do...'
								}),
								$( '<textarea />', {
									name: 'TodoDescription',
									placeholder: 'Description...'
								}),
								$( '<button />', {
									text: 'Add',
									type: 'submit'
								})
							]).submit( this.handleCreateTodo )
						]
					})
				);
			}
		});
	}
);