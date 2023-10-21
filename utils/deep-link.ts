type DeepLinkUrls = {
  label: string;
  appPath?: (params: RegExpMatchArray) => string;
  regexp: RegExp;
};

const deepLinkUrls: DeepLinkUrls[] = [
  {
    label: "place detail",
    appPath: (matches) => `/place/${matches[2]}`,
    regexp:
      /^(https?:\/\/)?(places\.turistikrota\.com|yerler\.turistikrota\.com)\/([a-z0-9-]+)\/?(\?.*)?$/,
  },
  {
    label: "place list",
    regexp:
      /^(https?:\/\/)?(places\.turistikrota\.com|yerler\.turistikrota\.com)\/?(\?.*)?$/,
    appPath: (matches) => `/${matches[3]}`,
  },
];

export const getDeepUrl = (url: string) => {
  for (const { regexp } of deepLinkUrls) {
    const matches = url.match(regexp);
    if (!matches) continue;
    const appPath = deepLinkUrls.find(
      (item) => item.regexp === regexp
    )?.appPath;
    if (!appPath) continue;
    return appPath(matches);
  }
};
