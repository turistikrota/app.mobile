export type DeviceItem = {
    device_uuid: string;
    device_name: string;
    device_type: string;
    device_os: string;
    ip_address: string;
    last_login: string;
    is_current: boolean;
  };

  export type DeviceItemWithoutCurrent = {
    device_uuid: string;
    device_name: string;
    device_type: string;
    device_os: string;
    ip_address: string;
    last_login: string;
  };
  
  export function isDeviceItems(arg: any): arg is DeviceItem[] {
    return (
      arg &&
      arg.length > 0 &&
      arg.every(
        (item: any) =>
          typeof item.device_uuid !== "undefined" &&
          typeof item.device_name !== "undefined" &&
          typeof item.device_type !== "undefined" &&
          typeof item.device_os !== "undefined" &&
          typeof item.ip_address !== "undefined" &&
          typeof item.last_login !== "undefined" &&
          typeof item.is_current !== "undefined"
      )
    );
  }