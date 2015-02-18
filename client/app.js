var Greeting = React.createClass({
  render: function(){
    return (
      <div className="greeting">
        Hello, world!
      </div>
    );
  }
});

React.render(
  <Greeting />,
  document.getElementById('main')
);