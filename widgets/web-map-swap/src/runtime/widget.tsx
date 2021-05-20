/** @jsx jsx */
import { AllWidgetProps, React, jsx } from "jimu-core";
import { IMConfig } from "../config";

import defaultMessages from "./translations/default";
import * as FeatureLayer from "esri/layers/FeatureLayer";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import * as WebMap from "esri/WebMap";
import { WidgetPlaceholder } from "jimu-ui";
const starIcon = require('jimu-ui/lib/icons/star.svg');

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
    let content;
    if (this.props.hasOwnProperty("useMapWidgetIds") &&
      this.props.useMapWidgetIds &&
      this.props.useMapWidgetIds.length === 1 &&
      this.props.config.webMapIds.length > 0 &&
      this.props.config.webMapIds.indexOf('') === -1) {
      content = <p className="shadow-lg m-3 p-3 bg-white rounded">
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
        <JimuMapViewComponent
          useMapWidgetId={this.props.useMapWidgetIds?.[0]}
          onActiveViewChange={(jmv: JimuMapView) => {
            this.setState({
              jimuMapView: jmv,
            });
          }}
        />
      </p>;
    } else {
      content = <WidgetPlaceholder icon={starIcon} widgetId={this.props.id} message={defaultMessages.placeholderMessage} />;
    }
    return (
      <div
        className="widget-view-layers-toggle jimu-widget"
        style={{ overflow: "auto" }}
      >
        {content}
      </div>
    );
  }
}