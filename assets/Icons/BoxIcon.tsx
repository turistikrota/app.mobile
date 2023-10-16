import React from "react";
import { Path, Svg } from "react-native-svg";

type Draw =
  | string
  | {
      d: string;
      fill?: string;
    };

type Icon = {
  draws: Draw[];
};

const Icons: Record<string, Icon> = {
  account: {
    draws: [
      "M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z",
      "M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z",
    ],
  },
  user: {
    draws: [
      "M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z",
    ],
  },
  map: {
    draws: [
      "m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z",
    ],
  },
  category: {
    draws: [
      "M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z",
    ],
  },
  owner: {
    draws: [
      "M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z",
      "M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z",
    ],
  },
  reservation: {
    draws: [
      "M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z",
      "m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z",
    ],
  },
  wallet: {
    draws: [
      "M16 12h2v4h-2z",
      "M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z",
    ],
  },
  chat: {
    draws: [
      "M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z",
      "M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z",
    ],
  },
  "file-archive": {
    draws: [
      "M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6h-3v2H9v2h2v2H9v2h2v8H7v-6h2v-2H7V8h2V6H7V4h2V2H6zm7 2 5 5h-5V4z",
      "M8 15h2v2H8z",
    ],
  },
  settings: {
    draws: [
      "M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z",
      "m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z",
    ],
  },
  support: {
    draws: [
      "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z",
    ],
  },
  lock: {
    draws: [
      "M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z",
    ],
  },
  route: {
    draws: [
      "m21.781 13.875-2-2.5A1 1 0 0 0 19 11h-6V9h6c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5a1 1 0 0 0-.781.375l-2 2.5a1.001 1.001 0 0 0 0 1.25l2 2.5A1 1 0 0 0 5 9h6v2H5c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6v4h2v-4h6a1 1 0 0 0 .781-.375l2-2.5a1.001 1.001 0 0 0 0-1.25zM4.281 5.5 5.48 4H19l.002 3H5.48L4.281 5.5zM18.52 16H5v-3h13.52l1.2 1.5-1.2 1.5z",
    ],
  },
  menu: {
    draws: ["M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"],
  },
  home: {
    draws: [
      "M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z",
    ],
  },
  bell: {
    draws: [
      "M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z",
    ],
  },
  question: {
    draws: [
      "M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z",
    ],
  },
  world: {
    draws: [
      "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z",
    ],
  },
  logout: {
    draws: [
      "M16 13v-2H7V8l-5 4 5 4v-3z",
      "M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z",
    ],
  },
  login: {
    draws: [
      "m13 16 5-4-5-4v3H4v2h9z",
      "M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z",
    ],
  },
  "user-plus": {
    draws: [
      "M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z",
    ],
  },
  profile: {
    draws: [
      "M12 10c1.151 0 2-.848 2-2s-.849-2-2-2c-1.15 0-2 .848-2 2s.85 2 2 2zm0 1c-2.209 0-4 1.612-4 3.6v.386h8V14.6c0-1.988-1.791-3.6-4-3.6z",
      "M19 2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h4l3 3 3-3h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 15-2 2-2-2H5V4h14l.002 13H14z",
    ],
  },
  edit: {
    draws: [
      "m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z",
      "M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z",
    ],
  },
  vip: {
    draws: [
      "M6.42 9.87 12 20.78l5.58-10.91H6.42zM5.9 4.01 2 9.24h3.62l.28-5.23zm6.1-.59L6.63 9.24h10.74L12 3.42zM2.04 9.87l9.09 10.58L5.72 9.87H2.04zM11.53 3h-.15l-4.84.51a.09.09 0 0 1 0 .05l-.27 5.15zm1.34 17.45 9.09-10.58h-3.68l-5.41 10.58zm4.58-16.87a.09.09 0 0 1 0-.05l-4-.42-1-.11 5.26 5.71zm.65.43.28 5.23H22l-2.22-2.98-1.68-2.25z",
    ],
  },
  "chevron-right": {
    draws: [
      "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z",
    ],
  },
  plus: {
    draws: ["M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"],
  },
  trash: {
    draws: [
      "M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z",
      "M9 10h2v8H9zm4 0h2v8h-2z",
    ],
  },
  devices: {
    draws: [
      "M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z",
    ],
  },
  windows: {
    draws: [
      "m3 5.557 7.357-1.002.004 7.097-7.354.042L3 5.557zm7.354 6.913.006 7.103-7.354-1.011v-6.14l7.348.048zm.892-8.046L21.001 3v8.562l-9.755.077V4.424zm9.758 8.113-.003 8.523-9.755-1.378-.014-7.161 9.772.016z",
    ],
  },
  apple: {
    draws: [
      "M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z",
    ],
  },
  chrome: {
    draws: [
      {
        d: "M10.742 2.04c-1.404.183-3.06.808-4.281 1.626-1.01.664-2.397 2.02-2.309 2.251.193.501 3.28 5.658 3.33 5.562.038-.067.095-.279.123-.49.25-1.385 1.425-2.704 2.897-3.253.568-.221.683-.221 5.495-.27l4.917-.047-.395-.646c-1.385-2.26-3.522-3.819-6.197-4.512-.731-.193-2.81-.318-3.58-.22z",
        fill: "#DD5144",
      },
      {
        d: "M3.2 7.217c-.453.799-.983 2.415-1.107 3.358-.588 4.273 1.568 8.4 5.379 10.315.894.452 2.174.885 2.732.933l.356.029 1.674-2.838c.915-1.559 1.655-2.849 1.636-2.868-.02-.019-.231.039-.481.125-1.569.53-3.387.086-4.57-1.116-.424-.424-1.002-1.357-2.84-4.542C4.71 8.41 3.642 6.601 3.603 6.601c-.028 0-.211.279-.403.616z",
        fill: "#1DA462",
      },
      {
        d: "M15.15 8.804c1.222 1.242 1.655 3.003 1.116 4.59-.086.26-1.212 2.271-2.501 4.485-1.29 2.203-2.349 4.031-2.349 4.06 0 .115 1.328.057 2.175-.087 4.32-.74 7.573-4.002 8.265-8.276.26-1.558.164-2.925-.307-4.503l-.25-.837h-6.707l.557.568z",
        fill: "#F9D33C",
      },
      {
        d: "M10.608 8.563C9.598 8.987 8.905 9.7 8.53 10.71c-.173.453-.202.713-.173 1.424.03.75.068.963.347 1.511.366.75.962 1.329 1.751 1.703.462.221.654.25 1.54.25.895 0 1.077-.029 1.559-.26.712-.326 1.462-1.077 1.79-1.79.23-.48.259-.663.259-1.558 0-.886-.029-1.078-.25-1.54-.375-.788-.952-1.386-1.703-1.75-.568-.28-.742-.318-1.56-.348-.788-.019-.99.01-1.48.212z",
        fill: "#4285F4",
      },
    ],
  },
  firefox: {
    draws: [
      "M21.634 11.138a2.16 2.16 0 0 0-.06-.286l-.187.236a6.354 6.354 0 0 0-.228-1.274 8.66 8.66 0 0 0-.591-1.511 5.33 5.33 0 0 0-.54-.92c-.109-.17-.203-.296-.221-.322-.362-.589-.767-.947-1.249-1.621a4.942 4.942 0 0 1-.615-1.679 6.091 6.091 0 0 0-.303 1.097c-.483-.489-.913-.846-1.168-1.08-1.267-1.183-1.113-1.79-1.113-1.79s-2.364 2.635-1.342 5.377a5.278 5.278 0 0 0 1.764 2.347c.989.813 2.052 1.452 2.609 3.101a5.2 5.2 0 0 0-1.967-2.087c.253.602.38 1.232.371 1.884a4.468 4.468 0 0 1-4.476 4.465 4.28 4.28 0 0 1-.985-.109 4.117 4.117 0 0 1-1.107-.379 4.4 4.4 0 0 1-1.334-1.226v-.007a.372.372 0 0 0 .075.024c.187.067.372.118.567.153a3.558 3.558 0 0 0 2.245-.263c.708-.396 1.139-.685 1.484-.574.348.109.608-.22.373-.565a1.853 1.853 0 0 0-1.79-.692c-.711.101-1.36.599-2.28.117-.067-.032-.117-.066-.176-.101-.06-.042.202.051.134.009a4.138 4.138 0 0 1-.582-.347c-.009-.009.145.043.126.033a2.235 2.235 0 0 1-.608-.614 1.118 1.118 0 0 1-.04-.973.844.844 0 0 1 .38-.354l.192.1s-.059-.1-.085-.151c.01-.008.019 0 .035-.008.102.042.329.159.455.236a.6.6 0 0 1 .212.186s.043-.017.009-.108a.511.511 0 0 0-.221-.263h.018c.093.051.178.102.261.167.076-.186.119-.368.112-.563a.825.825 0 0 0-.043-.313c-.035-.067.017-.093.075-.025a.545.545 0 0 0-.051-.152s.034-.051.051-.062c.043-.04.084-.082.136-.107.293-.185.599-.347.92-.474a6.52 6.52 0 0 0 .515-.228c.067-.042.127-.084.186-.136.22-.185.364-.438.413-.718.01-.04.01-.074.01-.107v-.069c-.034-.144-.279-.245-1.553-.372a1.104 1.104 0 0 1-.911-.852v.007a2.035 2.035 0 0 0-.051.146c.016-.053.033-.094.051-.146v-.007a3.257 3.257 0 0 1 1.249-1.553c.031-.025-.126.007-.093-.017.102-.051.211-.103.329-.145.059-.018-.245-.134-.515-.11a1.545 1.545 0 0 0-.473.11c.067-.049.252-.118.21-.118a2.837 2.837 0 0 0-.97.363c0-.033.01-.06.018-.083a1.474 1.474 0 0 0-.6.464v-.112a2.706 2.706 0 0 0-.295.28h-.008a3.92 3.92 0 0 0-2.205-.184l-.008-.009h.008a1.684 1.684 0 0 1-.387-.439l-.01.007-.015-.016c-.053-.068-.093-.152-.147-.246-.04-.06-.074-.136-.116-.21 0 0 0-.008-.008-.008-.01 0-.026.077-.033.049a2.668 2.668 0 0 1-.179-1.053H5.28a1.12 1.12 0 0 0-.448.589c-.041.086-.067.128-.092.179v-.028l.024-.125c-.006.009-.006.017-.017.025a1.06 1.06 0 0 0-.15.23 1.117 1.117 0 0 0-.103.243v-.042c0-.034.009-.085 0-.067l-.009.023a5.968 5.968 0 0 0-.506 1.902c-.016.118-.016.228-.016.337v.018a4.422 4.422 0 0 0-.514.683 9.703 9.703 0 0 0-1.082 2.659c.161-.354.354-.701.583-1.021a9.332 9.332 0 0 0-.659 3.454c.076-.346.169-.684.278-1.022a8.737 8.737 0 0 0 .787 4.062 9.397 9.397 0 0 0 3.738 4.229 8.052 8.052 0 0 0 2.169 1.048c.102.033.213.074.313.109-.034-.018-.059-.035-.092-.042a9.912 9.912 0 0 0 2.818.413c3.387 0 4.501-1.292 4.61-1.418.16-.151.303-.331.396-.541.068-.024.127-.05.195-.084l.041-.016c.051-.026.075-.034.075-.034a7.11 7.11 0 0 0 1.437-.896 3.475 3.475 0 0 0 1.326-1.951c.125-.286.125-.6.024-.894.05-.084.094-.161.101-.178a7.954 7.954 0 0 0 1.199-3.876v-.116a4.918 4.918 0 0 0-.072-.872z",
    ],
  },
  opera: {
    draws: [
      "M8.71 6.366C7.604 7.67 6.888 9.602 6.838 11.765v.471c.05 2.165.766 4.094 1.872 5.397 1.434 1.865 3.564 3.046 5.948 3.046a7.218 7.218 0 0 0 4.006-1.225 9.943 9.943 0 0 1-7.139 2.533A9.995 9.995 0 0 1 2 12C2 6.477 6.478 2 12 2h.038a9.971 9.971 0 0 1 6.627 2.545c-1.173-.773-2.543-1.225-4.009-1.225-2.382 0-4.514 1.184-5.95 3.046h.004zM22 12a9.971 9.971 0 0 1-3.335 7.455c-2.564 1.25-4.954.375-5.747-.172 2.52-.553 4.422-3.6 4.422-7.283 0-3.686-1.901-6.73-4.422-7.283.792-.545 3.183-1.42 5.747-.172A9.971 9.971 0 0 1 22 12z",
    ],
  },
  mobile: {
    draws: [
      "M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z",
    ],
  },
  help: {
    draws: [
      "M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z",
      "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z",
    ],
  },
  info: {
    draws: [
      "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z",
      "M11 11h2v6h-2zm0-4h2v2h-2z",
    ],
  },
  "arrow-back": {
    draws: [
      "M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z",
    ],
  },
  shield: {
    draws: [
      "M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z",
    ],
  },
  star: {
    draws: [
      "m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z",
    ],
  },
  trophy: {
    draws: [
      "M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.799 6.91 4.819 7.012A6.001 6.001 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09a6.01 6.01 0 0 0 4.181-2.898C20.201 14.91 22 12.31 22 8V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.216 12.078 4 9.299 4 8zm8 8c-2.206 0-4-1.794-4-4V4h8v8c0 2.206-1.794 4-4 4zm6-3.17V6h2v2c0 1.299-.216 4.078-2 4.83z",
    ],
  },
  group: {
    draws: [
      "M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z",
      "M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z",
    ],
  },
  x: {
    draws: [
      "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z",
    ],
  },
  filter: {
    draws: [
      "M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z",
    ],
  },
  sort: {
    draws: ["M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"],
  },
  export: {
    draws: [
      "M11 16h2V7h3l-4-5-4 5h3z",
      "M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2z",
    ],
  },
};

type IconName = keyof typeof Icons;

type Props = {
  name: IconName;
  color?: string;
  width?: number;
  height?: number;
};

const BoxIcon: React.FC<Props> = ({
  name,
  color = "rgba(0, 0, 0, 1)",
  width = 24,
  height = 24,
}) => {
  const icon = Icons[name];
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      transform=""
    >
      {icon.draws.map((d, i) => (
        <Path
          key={i}
          d={typeof d === "string" ? d : d.d}
          fill={typeof d !== "string" ? d.fill : undefined}
        />
      ))}
    </Svg>
  );
};

export default BoxIcon;
