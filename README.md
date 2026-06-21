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

### 招商银行开屏广告

订阅地址：

```text
https://raw.githubusercontent.com/ZJ-zhangcn/loon-plugins/main/plugins/cmb-startup-ad.plugin
```

作用：移除招商银行 App 启动开屏广告配置，并兜底屏蔽 `mbappinitads` 开屏素材。

MITM 域名：

```text
webappcfg.paas.cmbchina.com, s3gw.cmbimg.cn
```

### 12306 广告域名屏蔽

订阅地址：

```text
https://raw.githubusercontent.com/ZJ-zhangcn/loon-plugins/main/plugins/12306-ad-domain.plugin
```

作用：屏蔽 12306 明确广告域名 `ad.12306.cn`。测试确认它不影响开屏等待页，仅作为广告域名屏蔽规则使用。
