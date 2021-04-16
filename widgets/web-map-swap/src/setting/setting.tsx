import { React } from "jimu-core";
import { BaseWidgetSetting, AllWidgetSettingProps } from "jimu-for-builder";
import {
  JimuMapViewSelector,
  SettingRow,
  SettingSection,
} from "jimu-ui/advanced/setting-components";
import defaultI18nMessages from "./translations/default";
import { IMConfig } from "../config";

// interface IState {
//   layerTextareaValue: string;
// }

export default class Setting extends BaseWidgetSetting<
  AllWidgetSettingProps<IMConfig>,
  any
> {
  constructor(props) {
    super(props);

    // console.log(
    //   "TYPEOF undefined",
    //   typeof this.props.config?.layerUrls === undefined
    // );

    // this.state = {
    //   webMaps: []
    // };
  }

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  onTextChange = (event) => {
    console.log('onTextChange', event.target.value);
    this.props.onSettingChange({
      id: this.props.id,
      config: {
        webMapIds: event.target.value.split(',')
      }
    });
    // this.setState({ layerTextareaValue: event.target.value });

    // this.props.onSettingChange({
    //   id: this.props.id,
    //   config: this.props.config.set(
    //     "layerUrls",
    //     event.target.value.split("\n")
    //   ),
    // });
  };

  render() {
    return (
      <div className="view-layers-toggle-setting">
        <SettingSection
          title={this.props.intl.formatMessage({
            id: "selectedMapLabel",
            defaultMessage: defaultI18nMessages.selectedMap,
          })}
        >
          <SettingRow>
            <JimuMapViewSelector
              onSelect={this.onMapSelected}
              useMapWidgetIds={this.props.useMapWidgetIds}
            />
          </SettingRow>
        </SettingSection>

        <SettingSection
          title={this.props.intl.formatMessage({
            id: "webMapIds",
            defaultMessage: defaultI18nMessages.webMapIds,
          })}
        >
          <SettingRow>
            <textarea
              className="w-100 p-1"
              style={{ whiteSpace: "nowrap", minHeight: "100px" }}
              defaultValue={this.props.config.webMapIds?.join(',')}
              onChange={this.onTextChange}
            ></textarea>
          </SettingRow>
        </SettingSection>
      </div>
    );
  }
}