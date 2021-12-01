/** @jsx jsx */
import { AllWidgetProps, React, jsx } from "jimu-core";
import { IMConfig } from "../config";

import defaultMessages from "./translations/default";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import WebMap from 'esri/WebMap';
import { WidgetPlaceholder } from "jimu-ui";
const starIcon = require('jimu-ui/lib/icons/star.svg');
const { useState } = React;

export default function Widget(props: AllWidgetProps<IMConfig>) {
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>();

  const selectChangeHandler = (evt) => {
    if (jimuMapView) {
      if (evt.target.value !== '') {

        jimuMapView.view.map = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: evt.target.value
          }
        });
      } else {
        // set to default (todo)
      }
    }
  };

  let content;
  if (props.hasOwnProperty("useMapWidgetIds") &&
    props.useMapWidgetIds &&
    props.useMapWidgetIds.length === 1 &&
    props.config.webMapIds.length > 0 &&
    props.config.webMapIds.indexOf('') === -1) {
    content = <p className="shadow-lg m-3 p-3 bg-white rounded">
      <label style={{ maxWidth: "100%" }}>
        {defaultMessages.webMap}:<br />
        <select
          onChange={(evt) => {
            selectChangeHandler(evt);
          }}
          style={{ maxWidth: "100%" }}
        >
          <option value=""></option>
          {props.config.webMapIds.map((webMapId) => {
            return <option value={webMapId}>{webMapId}</option>;
          })}
        </select>
      </label>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={(jmv: JimuMapView) => {
          setJimuMapView(jmv);
        }}
      />
    </p>;
  } else {
    content = <WidgetPlaceholder icon={starIcon} widgetId={props.id} message={defaultMessages.placeholderMessage} />;
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