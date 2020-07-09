
//react component class
class MyFirstGrid extends React.Component {
    
    constructor(props) {
      super(props);
      this.chart1 = [];
      
      let stats = this.props.stats;
      this.props.stats_names.map((name) =>  {
        let color = "red"
        let dir = "desc"
        let fav = stats[name].icon
        if(stats[name].change > 0){
          color = "green"
          dir = "asc"
        }
        this.chart1.push(
          <div key={name} className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <span className="count_top"><i className={"fa fa-" + fav}></i> {stats[name].label}</span>
            <div className="count">{stats[name].value}</div>
            <span className="count_bottom"><i className={color}><i className={"fa fa-sort-" + dir}></i>{stats[name].change} </i> From last Week</span>
          </div>
        )
      })
    }

  resize_layout(obj, old_, new_, p, e, element) {
    window.Bokeh.index[new_['i']].resize_layout();
  }

  get_id(tag_str) {
      return tag_str.split('id=')[1].split('"')[1]
  }
  get_data_root_id(tag_str){
      return tag_str.split('data-root-id=')[1].split('"')[1]
  }
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'z', x: 2, y: 0, w: 10, h: 5},
      {i: this.get_data_root_id(this.props.line), x: 1, y: 6, w: 10, h: 6},
      {i: this.get_data_root_id(this.props.region), x: 1, y: 16, w: 3, h: 9},
      {i: this.get_data_root_id(this.props.platform), x: 4, y: 16, w: 3, h: 9},
      {i: this.get_data_root_id(this.props.table), x: 7, y: 16, w: 4, h: 9},
    ];
    
    console.log(this.parent)
    return <ReactGridLayout
              className="layout"
              cols={12}
              rowHeight={30}
              width={1800}
              layout={layout}
              onResize={this.resize_layout}
              margin={[10,10]}
              draggableCancel='.bk-root'>

          <div key="z" id="z" className="row tile_count list">
            {this.chart1}
          </div>
           
            <div key={this.get_data_root_id(this.props.line)} id="a" className="x_panel tile">
              <h3>Network Activities <small>Traffic per day</small></h3>
              <div className="clearfix"></div>
              <div className="bk-root" id={this.get_id(this.props.line)} data-root-id={this.get_data_root_id(this.props.line)} />
            </div>

            <div key={this.get_data_root_id(this.props.region)} id="b" className="x_panel tile">
                <h2>By Region</h2>
                <div className="clearfix"></div>
                <div className="bk-root" id={this.get_id(this.props.region)} data-root-id={this.get_data_root_id(this.props.region)} />
            </div>

            <div key={this.get_data_root_id(this.props.platform)} id="c" className="x_panel tile">
                <h2>By Platform</h2>
                <div className="clearfix"></div>
                <div className="bk-root" id={this.get_id(this.props.platform)} data-root-id={this.get_data_root_id(this.props.platform)} />
            </div>
            <div key={this.get_data_root_id(this.props.table)} id="d" className="x_panel tile">
                <h2>Details</h2>
                <div className="clearfix"></div>
                <div className="bk-root" id={this.get_id(this.props.table)} data-root-id={this.get_data_root_id(this.props.table)} />
            </div>

      </ReactGridLayout>
  }
}
let generate_dashboard = function(stats, stats_names, line, region, platform, table){
    ReactDOM.render(<MyFirstGrid 
        stats={stats}
        stats_names={stats_names}
        line={line}
        region={region}
        platform={platform}
        table={table}
    />, document.getElementById('mydiv'))
}
