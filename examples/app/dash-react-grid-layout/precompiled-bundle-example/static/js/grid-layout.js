var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//react component class
var MyFirstGrid = function (_React$Component) {
  _inherits(MyFirstGrid, _React$Component);

  function MyFirstGrid(props) {
    _classCallCheck(this, MyFirstGrid);

    var _this = _possibleConstructorReturn(this, (MyFirstGrid.__proto__ || Object.getPrototypeOf(MyFirstGrid)).call(this, props));

    _this.chart1 = [];

    var stats = _this.props.stats;
    _this.props.stats_names.map(function (name) {
      var color = "red";
      var dir = "desc";
      var fav = stats[name].icon;
      if (stats[name].change > 0) {
        color = "green";
        dir = "asc";
      }
      _this.chart1.push(React.createElement(
        "div",
        { key: name, className: "col-md-2 col-sm-4 col-xs-6 tile_stats_count" },
        React.createElement(
          "span",
          { className: "count_top" },
          React.createElement("i", { className: "fa fa-" + fav }),
          " ",
          stats[name].label
        ),
        React.createElement(
          "div",
          { className: "count" },
          stats[name].value
        ),
        React.createElement(
          "span",
          { className: "count_bottom" },
          React.createElement(
            "i",
            { className: color },
            React.createElement("i", { className: "fa fa-sort-" + dir }),
            stats[name].change,
            " "
          ),
          " From last Week"
        )
      ));
    });
    return _this;
  }

  _createClass(MyFirstGrid, [{
    key: "resize_layout",
    value: function resize_layout(obj, old_, new_, p, e, element) {
      window.Bokeh.index[new_['i']].resize_layout();
    }
  }, {
    key: "get_id",
    value: function get_id(tag_str) {
      return tag_str.split('id=')[1].split('"')[1];
    }
  }, {
    key: "get_data_root_id",
    value: function get_data_root_id(tag_str) {
      return tag_str.split('data-root-id=')[1].split('"')[1];
    }
  }, {
    key: "render",
    value: function render() {
      // layout is an array of objects, see the demo for more complete usage
      var layout = [{ i: 'z', x: 2, y: 0, w: 10, h: 5 }, { i: this.get_data_root_id(this.props.line), x: 1, y: 6, w: 10, h: 6 }, { i: this.get_data_root_id(this.props.region), x: 1, y: 16, w: 3, h: 9 }, { i: this.get_data_root_id(this.props.platform), x: 4, y: 16, w: 3, h: 9 }, { i: this.get_data_root_id(this.props.table), x: 7, y: 16, w: 4, h: 9 }];

      console.log(this.parent);
      return React.createElement(
        ReactGridLayout,
        {
          className: "layout",
          cols: 12,
          rowHeight: 30,
          width: 1800,
          layout: layout,
          onResize: this.resize_layout,
          margin: [10, 10],
          draggableCancel: ".bk-root" },
        React.createElement(
          "div",
          { key: "z", id: "z", className: "row tile_count list" },
          this.chart1
        ),
        React.createElement(
          "div",
          { key: this.get_data_root_id(this.props.line), id: "a", className: "x_panel tile" },
          React.createElement(
            "h3",
            null,
            "Network Activities ",
            React.createElement(
              "small",
              null,
              "Traffic per day"
            )
          ),
          React.createElement("div", { className: "clearfix" }),
          React.createElement("div", { className: "bk-root", id: this.get_id(this.props.line), "data-root-id": this.get_data_root_id(this.props.line) })
        ),
        React.createElement(
          "div",
          { key: this.get_data_root_id(this.props.region), id: "b", className: "x_panel tile" },
          React.createElement(
            "h2",
            null,
            "By Region"
          ),
          React.createElement("div", { className: "clearfix" }),
          React.createElement("div", { className: "bk-root", id: this.get_id(this.props.region), "data-root-id": this.get_data_root_id(this.props.region) })
        ),
        React.createElement(
          "div",
          { key: this.get_data_root_id(this.props.platform), id: "c", className: "x_panel tile" },
          React.createElement(
            "h2",
            null,
            "By Platform"
          ),
          React.createElement("div", { className: "clearfix" }),
          React.createElement("div", { className: "bk-root", id: this.get_id(this.props.platform), "data-root-id": this.get_data_root_id(this.props.platform) })
        ),
        React.createElement(
          "div",
          { key: this.get_data_root_id(this.props.table), id: "d", className: "x_panel tile" },
          React.createElement(
            "h2",
            null,
            "Details"
          ),
          React.createElement("div", { className: "clearfix" }),
          React.createElement("div", { className: "bk-root", id: this.get_id(this.props.table), "data-root-id": this.get_data_root_id(this.props.table) })
        )
      );
    }
  }]);

  return MyFirstGrid;
}(React.Component);

var generate_dashboard = function generate_dashboard(stats, stats_names, line, region, platform, table) {
  ReactDOM.render(React.createElement(MyFirstGrid, {
    stats: stats,
    stats_names: stats_names,
    line: line,
    region: region,
    platform: platform,
    table: table
  }), document.getElementById('mydiv'));
};