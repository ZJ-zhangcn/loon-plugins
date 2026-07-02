let body = $response.body || "";

try {
  const obj = JSON.parse(body);
  const adData = obj && obj.body && obj.body.advertisementData;
  const config = adData && adData.advertiseConfigData;

  const title = String((config && config.advertiseTitle) || "");
  const code = String((config && config.advertiseCode) || "");
  const hasCountdown = Number(config && config.countDown) > 0;
  const isCgbHomePopup =
    !!adData &&
    (title.includes("APP首页标准版浮窗") || code === "GGW2603131555" || hasCountdown);

  if (isCgbHomePopup) {
    if (config) {
      config.advertiseStatus = "0";
      config.countDown = 0;
      config.popTimes = 0;
      config.backup = "duration=0|interval=0|closeTime=0";
    }

    if (Array.isArray(adData.advertiseMaterialData)) {
      adData.advertiseMaterialData = [];
    }
  }

  $done({ body: JSON.stringify(obj) });
} catch (error) {
  $done({});
}
