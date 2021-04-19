/** @jsx jsx */
import { AllWidgetProps, React, jsx } from "jimu-core";
import { IMConfig } from "../config";

import defaultMessages from "./translations/default";
import FeatureLayer = require("esri/layers/FeatureLayer");
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import WebMap = require("esri/WebMap");


interface IState {
  jimuMapView: JimuMapView;
  featureLayerOnMap: FeatureLayer;
}

export default class WebMapSwap extends React.PureComponent<
  AllWidgetProps<IMConfig>,
  IState
> {
  constructor(props) {
    super(props);
    this.state = {
      jimuMapView: undefined,
      featureLayerOnMap: undefined,
    };
  }

  selectChangeHandler = (evt) => {
    if (this.state.jimuMapView) {
      this.state.jimuMapView.view.map = new WebMap({
        portalItem: {
          // autocasts as new PortalItem()
          id: evt.target.value
        }
      });
    }
  };

  render() {
    return (
      <div
        className="widget-view-layers-toggle jimu-widget"
        style={{ overflow: "auto" }}
      >
        {this.props.hasOwnProperty("useMapWidgetIds") &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            // The JimuMapViewComponent gives us a connection to the
            // ArcGIS JS API MapView object. We store it in the State.
            <JimuMapViewComponent
              useMapWidgetIds={this.props.useMapWidgetIds}
              onActiveViewChange={(jmv: JimuMapView) => {
                this.setState({
                  jimuMapView: jmv,
                });
              }}
            />
          )}
        <p className="shadow-lg m-3 p-3 bg-white rounded">
          <label>
            {defaultMessages.webMap}:<br />
            <select
              onChange={(evt) => {
                this.selectChangeHandler(evt);
              }}
              style={{ maxWidth: "100%" }}
            >
              <option value=""></option>
              {this.props.config.webMapIds.map((webMapId) => {
                return <option value={webMapId}>{webMapId}</option>;
              })}
            </select>
          </label>
        </p>
      </div>
    );
  }
}