define( function ( require ) {
    var $            = require( 'jquery' );
    var Component    = require( 'Component' );
    var Row          = require( 'Row/Row' );
    var Styles       = require( './Styles' );
    var Header       = require( 'Header/Header' );
    var InputPanel   = require( 'InputPanel/InputPanel' );
    var TodoList     = require( 'TodoList/TodoList' );
    var InfoPanel    = require( 'InfoPanel/InfoPanel' );
    var MacroPanel   = require( 'MacroPanel/MacroPanel' );
    var PanelManager = require( 'PanelManager/PanelManager' );
    var Styles       = require( './Styles' );

    var savedTodos = JSON.parse( window.localStorage.getItem( '__TodoAppState__' ) );

	return Component.extend({
		state: {
			todos: [], /* savedTodos ? savedTodos : [] */
			children: [
				'InputPanel',
				'TodoList',
				'InfoPanel'
			],
			sidebarChildren: [
				'MacroPanel',
				'InfoPanel',
				'PanelManager'
			]
		},
		saveState: function() {
			//window.localStorage.setItem( 'Todos', JSON.stringify( this.getState().todos ) );
		},
		createTodo: function( todoTitle, todoDescription ) {
			var todos = this.getState().todos;
			todos.push({
				title: todoTitle,
				description: todoDescription,
				completed: false,
				startTime: new Date(),
				endTime: null,
				id: Math.random() * 10000
			});
			this.setState({
				todos: todos
			});
			this.saveState();
		},
		removeTodo: function( index ) {
			var todos = this.getState().todos;
			todos.splice( index, 1 );
			this.setState({
				todos: todos
			});
			this.saveState();
		},
		removeCompletedTodos: function() {
			var todos = this.getState().todos;
			this.setState({
				todos: todos.filter( function( todo ) {
					return !todo.completed;
				})
			});
			this.saveState();
		},
		removeAllTodos: function() {
			if ( window.confirm( 'Are you sure you want remove all to-dos?' ) ) {
				this.setState({
					todos: []
				});
				this.saveState();
			}
		},
		completeTodo: function( index ) {
			console.log( 'CompleteTodo()' );
			var todos = this.getState().todos;
			todos[ index ].completed = true;
			todos[ index ].endTime = new Date();
			this.setState({
				todos: todos
			});
			this.saveState();
		},
		completeAllTodos: function() {
			if ( window.confirm( 'Are you sure you want to mark all to-dos as completed?' ) ) {
				var todos = this.getState().todos;
				$.each( todos, function( index, todo ) {
					todo.completed = true;
					todo.endTime = new Date();
				});
				this.setState({
					todos: todos
				});
				this.saveState();
			}
		},
		resetTodo: function( index ) {
			var todos = this.getState().todos;
			todos[ index ].completed = false;
			todos[ index ].endTime = null;
			this.setState({
				todos: todos
			});
			this.saveState();
		},
		resetAllTodos: function() {
			if ( window.confirm( 'Are you sure you want reset all to-dos?' ) ) {
				var todos = this.getState().todos;
				this.setState({
					todos: $.each( todos, function( index, todo ) {
						todo.completed = false;
						todo.endTime = null;
					})
				});
				this.saveState();
			}
		},
		removeChild: function( childIndex ) {
			var children = this.getState().children;
			children.splice( childIndex, 1 );
			this.setState({
				children: children
			});
			this.saveState();
		},
		removeSidebarChild: function( childIndex ) {
			var children = this.getState().sidebarChildren;
			children.splice( childIndex, 1 );
			this.setState({
				sidebarChildren: children
			});
			this.saveState();
		},
		createComponent: function( componentName ) {
			switch( componentName ) {
				case 'InfoPanel':
					return InfoPanel;
				case 'InputPanel':
					return InputPanel;
				case 'TodoList':
					return TodoList;
				case 'MacroPanel':
					return MacroPanel;
				case 'PanelManager':
					return PanelManager;
			}
		},
		render: function() {
			var state = this.getState();
			var props = this.getProps();
			return (
				$( '<div />', {
					css: Styles.app
				}).append(
					new Header({
						id: 'Header-01__',
						text: 'Hello'
					})
				).append( 
					$( '<div />', {
						css: Styles.container
					}).append(
						new Row({
							id: props.id + 'App__Row__',
							children: [
								state.children.length ?
									$( '<div />', {
										'class': state.sidebarChildren.length ? 'col_9' : 'col'
									}).append(
										state.children.map( function( child, index ) {
											return new this.createComponent( child )({
												id: 'AppChild-0' + ( index + 1 ),
												index: index,
												todos: state.todos,
												createTodo: this.createTodo,
												removeTodo: this.removeTodo,
												removeCompletedTodos: this.removeCompletedTodos,
												removeAllTodos: this.removeAllTodos,
												completeTodo: this.completeTodo,
												completeAllTodos: this.completeAllTodos,
												resetTodo: this.resetTodo,
												resetAllTodos: this.resetAllTodos,
												removeComponent: this.removeChild
											});
										}.bind( this ))
									)
								:
									null,
								state.sidebarChildren.length ?
									$( '<div />', {
										'class': state.children.length ? 'col_3' : 'col'
									}).append(
										state.sidebarChildren.map( function( child, index ) {
											return new this.createComponent( child )({
												id: 'AppSidebarChild-0' + ( index + 1 ),
												index: index,
												todos: state.todos,
												createTodo: this.createTodo,
												removeTodo: this.removeTodo,
												removeCompletedTodos: this.removeCompletedTodos,
												removeAllTodos: this.removeAllTodos,
												completeTodo: this.completeTodo,
												completeAllTodos: this.completeAllTodos,
												resetTodo: this.resetTodo,
												resetAllTodos: this.resetAllTodos,
												removeComponent: this.removeSidebarChild
											});
										}.bind( this ))
									)
								: null
							]
						})
					)
				)
			);
		}
	});
});