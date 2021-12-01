/** @jsx jsx */

import { jsx, React } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import {
  JimuMapViewSelector,
  SettingRow,
  SettingSection,
} from "jimu-ui/advanced/setting-components";
import defaultI18nMessages from "./translations/default";
// import { IMConfig } from "../config";
import { TextArea } from "jimu-ui";

export default function Setting(
  props: AllWidgetSettingProps<any>
): React.ReactElement {

  const onMapSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  };

  const onTextChange = (event) => {
    const values = event.target.value.split('\n');
    props.onSettingChange({
      id: props.id,
      config: {
        webMapIds: values
      }
    });
  };

  return (
    <div className="view-layers-toggle-setting">
      <SettingSection
        title={props.intl.formatMessage({
          id: "selectedMapLabel",
          defaultMessage: defaultI18nMessages.selectedMap,
        })}
      >
        <SettingRow>
          <JimuMapViewSelector
            onSelect={onMapSelected}
            useMapWidgetIds={props.useMapWidgetIds}
          />
        </SettingRow>
      </SettingSection>

      <SettingSection
        title={props.intl.formatMessage({
          id: "webMapIds",
          defaultMessage: defaultI18nMessages.webMapIds,
        })}
      >
        <SettingRow label={defaultI18nMessages.onePerLine}></SettingRow>
        <SettingRow>
          <TextArea
            className="w-100 p-1"
            style={{ whiteSpace: "nowrap", minHeight: "100px" }}
            defaultValue={props.config.webMapIds?.join('\n')}
            onChange={onTextChange}
          ></TextArea>
        </SettingRow>
      </SettingSection>
    </div>
  );
}