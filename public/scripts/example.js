  var TodoApp = React.createClass({
            getInitialState: function() {
                return {
                    items: []
                };
            },    
            render: function(){
                return ( 
                  <div> 
                    <TodoForm handleOnSubmit={this.handleOnSubmit} items_TodoApp={this.state.items}/> 
                  </div> 
                ); 
            },
            handleOnSubmit: function(item){
                //All logic to add to list will come here
                var newArray=item
                this.state.items.push(newArray)    
                this.setState(this.state.items);
                console.log(this.state.items);
            }
  });

    /* [TODO FORM] */
var TodoForm = React.createClass({
            getInitialState: function() {
                return {
                    item: ""
                };
            },
            handleSubmit: function(e) {
                e.preventDefault()
                this.props.handleOnSubmit(this.state.item)
            },
            onChange: function(e) {
                this.setState({
                    item: e.target.value
                });
            },
            render: function() {
                    return ( 
                      <div>
                        <form onSubmit = {this.handleSubmit} >
                          <input type = 'text' ref = 'item' onChange = {this.onChange} value = {this.state.item} /> 
                          <input type='submit' value='Add' />
                        </form> 
                        <TodoList items_TodoList = {this.props.items_TodoApp} /> 
                      </div>
                    ); 
                  } 
  });
 
    /* [TODO LIST] */
var TodoList = React.createClass({
            render: function() {
                var createItem = function(itemText) {
                    return ( <TodoListItem key={itemText} val={itemText} /> ); 
                  }; 
                return <ul>{this.props.items_TodoList.map(createItem)}</ul >;
                }
});

    /* [TODO LISTITEM] */ 
var TodoListItem = React.createClass({ 
      render: function(){ 
        return (
          <li>{this.props.val}</li> 
          ); 
      } 
});


ReactDOM.render(
  <TodoApp />,
  document.getElementById('content')
);
