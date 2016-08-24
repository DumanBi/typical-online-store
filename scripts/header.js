var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="logo">LOGO</div>
      </div>
    );
  }
});
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
