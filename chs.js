/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Multiplier:": "乘数：",
    "New Rate:": "新汇率：",
    "Population:": "人口：",
    "Price:": "价格：",
    "Put up billboards in": "把广告牌放进",
    "Raise Commercial tax (": "提高商业税（",
    "Raise commercial taxes": "提高商业税",
    "Raise Industrial tax (": "提高工业税（",
    "Raise industrial taxes": "提高工业税",
    "Raise Residential tax (": "提高住宅税（",
    "Raise residential taxes": "提高住宅税",
    "Read": "阅读",
    "Rename": "改名",
    "Reset game.": "重置游戏。",
    "Residential": "住宅",
    "Add a road to": "将道路添加到",
    "Add Commercial Zones": "添加商业区",
    "Add Industrial Zones": "添加工业区",
    "Add Residential Zones": "添加住宅区",
    "Build a power plant in": "建一座发电厂到",
    "Build a school in": "建一所学校到",
    "Built:": "建筑：",
    "City:": "城市：",
    "Commercial": "商业",
    "Current demand:": "当前需求：",
    "Current income:": "当前收入：",
    "Current rate:": "当前利率：",
    "Daily Income:": "每日收入：",
    "Gain population faster": "更快地获得人口",
    "Increase commercial demand": "增加商业需求",
    "Increase industrial demand": "增加工业需求",
    "Increase residential demand": "增加住宅需求",
    "Industrial": "工业",
    "Infinity seconds": "无限秒",
    "The City": "城市",
    "Time to purchase:": "购买时间：",
    "Times.": "时代。",
    "Total built:": "总建筑：",
    "Total zoned:": "总区域：",
    "Treasury:": "财政：",
    "Type income:": "类型收入：",
    "Upgrade demand:": "升级需求：",
    "Upgrade income:": "升级收益：",
    "Upgrade rate:": "升级率：",
    "capacity:": "容量：",
    "Finally, why isn't the mayor expanding industry?": "最后，为什么市长不扩大产业？",
    "Housing is currently in demand! Why won't the mayor zone some more residential? While on the subject of getting more citizens into the city, the proposal to": "目前房屋供不应求！ 为什么市长不把更多的住宅区划出来？ 在让更多市民进入城市的主题上，建议",
    "Like residential, businesses want to set up shop! Now's the time to add more commercial zones.": "像住宅一样，商家要开店！ 现在是添加更多商业区的时候了。",
    "Opinion": "观点",
    "Sports": "运动",
    "The City doesn't yet have a sports time, as no one lives here yet.": "这座城市还没有运动时间，因为还没有人住在这里。",
    "The City News": "城市新闻",
    "would likely help fill those built houses faster in the future.": "将来可能会帮助更快地填满这些建成的房屋。",
    "Shelbyville Sharks": "谢尔比维尔鲨鱼",
    "so businesses can function here?": "所以企业可以在这里运作吗？",
    "suffered a crushing defeat against rival team the": "在与对手球队的比赛中惨败",
    "The City Llamas": "城市骆驼",
    "tied rival team the": "追平对手球队",
    "to": "至",
    "to encourage people to move in?": "鼓励人们搬进来？",
    "to entice industry into the city. While high industrial and commercial demand drive up residential demand, one wonders if there is a better way.": "吸引工业进城。 虽然高工业和商业需求推高了住宅需求，但人们想知道是否有更好的方法。",
    ". Go team!": ". 去组队！",
    ". The": ". 这",
    ". The Quidditch game ended with the Llamas down by": ". 魁地奇比赛以美洲驼队的比分落后而告终",
    "After a long and well played Chess match, local sports team the": "经过漫长而精彩的国际象棋比赛，当地体育队",
    "Airball": "气球",
    "Brockian Ultra-Cricket": "布罗克超板球",
    "Chess": "棋",
    "For reasons unclear to this reporter, the mayor seems to be considering whether to": "由于记者不清楚的原因，市长似乎正在考虑是否",
    ". It was indeed a dark day for The City.": ". 对于城市来说，这确实是黑暗的一天。",
    ". The Airball game ended with the Llamas down by": ". 气球 比赛以 骆驼 落败而告终",
    ". The Chess game ended with the Llamas down by": ". 国际象棋比赛以美洲驼落后而告终",
    ". The Dungeons & Dungeons game ended with the Llamas down by": ". 地下城与地下城的游戏以 美洲驼队 的优势结束",
    "After a long and well played Blernsball match, local sports team the": "在一场漫长而精彩的 布伦斯球 比赛之后，当地运动队",
    "Dungeons & Dungeons": "地下城与地下城",
    "game will surely go down as one of the best in the history of the sport.": "这场比赛肯定会成为这项运动历史上最好的比赛之一。",
    "handily defeated rival team the": "轻松击败对手球队",
    "Hoboken Zephyrs": "霍博肯和风",
    "in": "在",
    "Like residential, zoned commercial still lies empty. When will the mayor": "与住宅一样，分区商业仍然空置。 市长什么时候",
    "Local sports team the": "当地运动队",
    "New New York Yankees": "纽约洋基队",
    "North Shore High Lions": "北岸高狮",
    "Quidditch": "魁地奇",
    "Unlike residential, zoned commercial still lies empty. When will the mayor": "与住宅不同，分区商业仍然空置。 市长什么时候",
    "Zoned residential is currently being unused. Has the mayor considered the proposal to": "分区住宅目前未使用。 市长是否考虑过该提议",
    ". The Blernsball game ended with the Llamas down by": ". 布伦斯球 比赛以 骆驼队 的优势结束",
    ". The Brockian Ultra-Cricket game ended with the Llamas down by": ". 布罗克超板球 比赛以 美洲驼队 落败而告终",
    ". The Laserball game ended with the Llamas down by": ". 激光球比赛以 美洲驼队 的优势结束",
    "Santa Destroy Warriors": "圣诞老人摧毁勇士",
    "connect a highway to": "连接一条高速公路到",
    "Connect a highway to": "连接一条高速公路到",
    "build a factory in": "建一座工厂在",
    "Build a factory in": "建一座工厂在",
    "Build a hospital in": "建一所医院在",
    "Blernsball": "布伦斯球",
    "Build a mall in": "建立一个商场在",
    "Build a seaport in": "建造一座海港在",
    "Connect the railway to": "将铁路连接到",
    "Build an airport in": "建一座机场在",
    "Build an army base in": "建一座军事基地在",
    "Build direct": "建造指挥所在",
    "education budget.": "教育预算。",
    "Increase": "增加",
    "monorail to mall.": "单轨电车到商场。",
    "After a long and well played Dungeons & Dungeons match, local sports team the": "在一场漫长而精彩的 地下城 & 地下城 比赛之后，当地运动队",
    "Housing is currently in demand! Why won't the mayor zone some more residential or raise that tax rate of 12%? While on the subject of getting more citizens into the city, the proposal to": "目前房屋供不应求！ 为什么市长不增加一些住宅区或提高 12% 的税率？ 在让更多市民进入城市的主题上，建议",
    "Laserball": "激光球",
    "advertise": "刊登广告",
    "Advertise": "刊登广告",
    "After a long and well played Quidditch match, local sports team the": "在一场漫长而精彩的魁地奇比赛之后，当地运动队",
    "Build a college in": "建立一所大学在",
    "Check": "检查",
    "in other cities": "在其他城市",
    "in other cities.": "在其他城市。",
    "legalize gambling in": "赌博合法化在",
    "Legalize gambling in": "赌博合法化在",
    "null": "null",
    "null Llamas": "空骆驼",
    "null News": "新闻",
    "website.": "网站。",
    "Absorb neighboring city into": "将周边城市吸纳进",
    "healthcare budget.": "医疗保健预算。",
    "Add parks to": "将公园添加到",
    "in other countries.": "在其他国家。",
    "Mall to CITY Megamall.": "购物中心到 城市购物中心。",
    "QQ群号:": "QQ群号：",
    "Repeal environmental protections.": "废除环境保护。",
    "Upgrade": "升级",
    "After a long and well played Brockian Ultra-Cricket match, local sports team the": "经过一场漫长而精彩的 Brockian Ultra-Cricket 比赛后，当地运动队",
    "allow anonymously held corporations": "允许匿名持有公司",
    "Allow anonymously held corporations.": "允许匿名持有公司。",
    "automate": "自动化",
    "Automate": "自动化",
    "Build a marina in": "建造一个码头",
    "Build a mine in": "建造矿山在",
    "Build a spaceport in": "建造一个太空港",
    "Build a zoo in": "建一个动物园",
    "Build cloning vats in": "建造一个克隆池在",
    "Build worker housing near": "在建造工人住房靠近",
    "construction": "建造",
    "construction.": "建造。",
    "DongHuanShi": "东环市",
    "DongHuanShi Llamas": "东环狮羊驼",
    "DongHuanShi News": "东环市新闻",
    "Finally, why isn't the mayor expanding industry? Is the mayor just going to increase the 16% taxes since there's not enough zones to meet demand? Harsh.": "最后，为什么市长不扩大产业？市长是否会因为没有足够的区域满足需求而仅仅增加 16% 的税收？苛刻。",
    "Housing is currently in demand! Why won't the mayor zone some more residential or raise that tax rate of 14%? While on the subject of getting more citizens into the city, the proposal to": "住房目前需求旺盛！为什么市长不增加一些住宅区或提高 14% 的税率？在让更多公民进入城市的问题上，建议",
    "Legalize prositution in": "使卖淫合法化",
    "Like residential, businesses want to set up shop! Now's the time to either bump up that tax rate of 20% or add more commercial zones.": "就像电气一样，企业也想开店！现在是提高 20% 税率或增加更多商业区的时候了。",
    "Power Plant to fission.": "核电站裂变。",
    "remove liquor restrictions": "取消酒类限制",
    "Remove liquor restrictions.": "取消酒类限制。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Zone ": "区域 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)♣$/,
    /^([\d\.]+)♥$/,
    /^([\d\.]+)♦$/,
    /^([\d\.]+)¤$/,
    /^([\d\.]+)e\+([\d\.]+)♥$/,
    /^([\d\.]+)e\+([\d\.]+)♦$/,
    /^([\d\.]+)e\+([\d\.]+)♣$/,
    /^([\d\.]+)e\+([\d\.]+)¤$/,
    /^([\d\.]+)x$/,
    /^([\d\.]+)\%$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^♥x([\d\.,]+)$/,
    /^♦x([\d\.,]+)$/,
    /^♣x([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^Sat (.+)$/,
    /^Sun (.+)$/,
    /^Tue (.+)$/,
    /^Thu (.+)$/,
    /^Fri (.+)$/,
    /^Mon (.+)$/,
    /^Wed (.+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)♥ per second$/, '$1♥ 每秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) second$/, '$1 秒'],
    [/^([\d\.]+)e\+([\d\.]+) second$/, '$1e\+$2 秒s'],
    [/^([\d\.]+)e\+([\d\.]+) seconds$/, '$1e\+$2 秒s'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);