import { FormattedMessage, React } from "jimu-core";
import { BaseWidgetSetting, AllWidgetSettingProps } from "jimu-for-builder";
import {
  JimuMapViewSelector,
  SettingRow,
  SettingSection,
} from "jimu-ui/advanced/setting-components";
import defaultI18nMessages from "./translations/default";
import { IMConfig } from "../config";

export default class Setting extends BaseWidgetSetting<
  AllWidgetSettingProps<IMConfig>,
  any
> {
  constructor(props) {
    super(props);
  }

  onMapSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  onTextChange = (event) => {
    const values = event.target.value.split('\n');
    this.props.onSettingChange({
      id: this.props.id,
      config: {
        webMapIds: values
      }
    });
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
          <SettingRow label={defaultI18nMessages.onePerLine}></SettingRow>
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