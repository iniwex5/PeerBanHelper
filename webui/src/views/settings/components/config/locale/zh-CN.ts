export default {
  'page.settings.tab.config.title': '基础设置',
  'page.settings.tab.config.tips': '这里保存了PBH运行必不可少的一些基础设置',

  'page.settings.tab.config.unit.day': '天',

  'page.settings.tab.config.language': '语言',
  'page.settings.tab.config.language.default': '跟随系统',
  'page.settings.tab.config.language.tips':
    '此处是后端程序的语言，包含返回信息日志等，这{not} WebUI 语言！',
  'page.settings.tab.config.language.tips.not': '不是',

  'page.settings.tab.config.plus.button': '点击打开',

  'page.settings.tab.config.privacy.errorReport': '启用错误报告',

  'page.settings.tab.config.server.title': 'WebUI',
  'page.settings.tab.config.server.port': '端口',
  'page.settings.tab.config.server.port.error': '端口号必须在1-65535之间',
  'page.settings.tab.config.server.address': '地址',
  'page.settings.tab.config.server.prefix': '前缀',
  'page.settings.tab.config.server.prefix.tips':
    '当 PBH 需要将阻止列表的 URL 传递给下载器时，它将使用此地址作为前缀。请确保您的下载器可以访问此 URL',
  'page.settings.tab.config.server.prefix.error': '前缀不能以 "/" 结尾',
  'page.settings.tab.config.server.cors': '允许 CORS',
  'page.settings.tab.config.server.cors.tips':
    '允许 CORS 跨站，仅在使用外部 PBH WebUI 时才应该启用',

  'page.settings.tab.config.logger.title': '日志',
  'page.settings.tab.config.logger.hide_finish_log': '隐藏完成日志',
  'page.settings.tab.config.logger.hide_finish_log.tips':
    '是否隐藏 [完成] 已检查 XX 的 X 个活跃 Torrent 和 X 个对等体 的日志消息',

  'page.settings.tab.config.lookup.title': '查询',
  'page.settings.tab.config.lookup.dnsReverseLookup': '启用 DNS 反向查找',
  'page.settings.tab.config.lookup.dnsReverseLookup.tips':
    '启用 DNS 反查，能够通过 IP 反查域名，但可能增加你所使用 DNS 服务器的压力，并可能导致 DNS 服务器对你采取降低服务质量的措施',

  'page.settings.tab.config.persist.title': '持久化',
  'page.settings.tab.config.persist.banlist': '持久化封禁列表',
  'page.settings.tab.config.persist.ban_logs_keep_days': '封禁日志保留天数',

  'page.settings.tab.config.btn.enable': '启用 BTN 模块',
  'page.settings.tab.config.btn.doc': '使用前请阅读文档：',
  'page.settings.tab.config.btn.enableSubmit': '启用提交',
  'page.settings.tab.config.btn.enableSubmit.modal.title': '警告',
  'page.settings.tab.config.btn.enableSubmit.modal.content': `BTN 网络基于所有启用此功能的用户提交的数据，对 Peers 进行可信度验证，通过启用此选项，您也会加入 BTN 网络并提交您的 Torrent 上的活动。以下信息将被发送到 BTN 实例:`,
  'page.settings.tab.config.btn.enableSubmit.modal.content2':
    '您的 Torrent 列表（包括：Torrent 种子摘要的二次不可逆哈希和 Torrent 大小），连接到您的 Torrent 的所有 Peers （包括：IP地址、端口号、PeerID、UserAgent（ClientName），Peer协议，Peer总下载量，Peer总上传量，Peer瞬时上传速度，Peer瞬时下载速度，Peer下载进度，以及您的下载器名称）',
  'page.settings.tab.config.btn.enableSubmit.modal.content3': '确定要开启提交吗？',

  'page.settings.tab.config.ipDatabase.title': 'IP 数据库',
  'page.settings.tab.config.ipDatabase.autoUpdate': '启用自动更新',
  'page.settings.tab.config.ipDatabase.city': '城市数据库',
  'page.settings.tab.config.ipDatabase.asn': 'ASN 数据库',

  'page.settings.tab.config.proxy': '代理',
  'page.settings.tab.config.proxy.type': '代理类型',
  'page.settings.tab.config.proxy.type.0': '不使用代理',
  'page.settings.tab.config.proxy.type.1': '系统代理',
  'page.settings.tab.config.proxy.type.2': 'HTTP 代理',
  'page.settings.tab.config.proxy.type.3': 'SOCKS5 代理',
  'page.settings.tab.config.proxy.host': '地址',
  'page.settings.tab.config.proxy.port': '端口',
  'page.settings.tab.config.proxy.non_proxy_hosts': '不使用代理的地址',
  'page.settings.tab.config.proxy.non_proxy_hosts.tips':
    '代理例外地址，使用 {separator} 分隔不同条目',

  'page.settings.tab.config.performance.title': '性能',
  'page.settings.tab.config.performance.useEcoQOS': '使用 Windows EcoQos API',
  'page.settings.tab.config.performance.useEcoQOS.tips':
    '启用 Windows 平台上的 {link}以节约能源消耗，程序运行速度将降低，定时任务可能推迟'
}
