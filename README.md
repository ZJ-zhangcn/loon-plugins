# Loon Plugins

个人 Loon 插件与脚本仓库。

## 插件

### 盒马开屏广告

订阅地址：

```text
https://raw.githubusercontent.com/ZJ-zhangcn/loon-plugins/main/plugins/freshippo-splash.plugin
```

作用：移除盒马 App 启动开屏广告，仅处理 `pageType=70 / poweron_ad` 响应，避免直接拦截整个接口造成首页误伤。

MITM 域名：

```text
acs-m.freshippo.com
```
