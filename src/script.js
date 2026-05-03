const categories = [
  {
    id: "ops",
    name: "运营",
    sub: ["3D海报", "KV海报"]
  },
  {
    id: "app",
    name: "APP",
    sub: ["App 图标", "金刚区图标", "空状态", "启动页", "引导页", "功能图", "应用截图"]
  },
  {
    id: "poster",
    name: "海报",
    sub: ["电影海报", "拼贴海报", "演出活动", "发布会", "节日营销"]
  },
  {
    id: "illustration",
    name: "插画",
    sub: ["扁平", "情景故事", "3D", "治愈"]
  },
  {
    id: "brand",
    name: "品牌",
    sub: ["Logo", "VI", "包装", "宣传"]
  },
  {
    id: "concept",
    name: "概念",
    sub: ["科幻", "暗黑", "自然", "未来都市"]
  }
];

const homeSections = [
  { cat: "ops" },
  { cat: "ops", sub: "KV海报" },
  { cat: "app" },
  { cat: "poster" },
  { cat: "poster", sub: "拼贴海报" },
  { cat: "app", sub: "金刚区图标" },
  { cat: "app", sub: "空状态" },
  { cat: "illustration" },
  { cat: "brand" }
];

const categoryIntros = {
  app: "覆盖图标、启动页、功能图和应用截图，适合移动产品的视觉起稿。",
  ops: "3D 海报和 KV 海报，帮助快速找到运营设计方向。",
  poster: "电影海报、拼贴海报、发布会和节日营销海报，提供更有情绪的画面参考。",
  illustration: "扁平、3D 和情景故事插画，适合产品介绍与品牌表达。",
  brand: "Logo、VI、包装和宣传视觉，聚焦品牌识别与质感呈现。"
};

const items = [
  {
    image: "./assets/app-icons/bichon-shop.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '比熊商店'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/xiaoxiang-fast-food.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '小象快餐'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/pigeon-audiobook.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '鸽子听书'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/flash-chat.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '闪聊'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/quick-vocabulary.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '快速记单词'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/whiskey-glass.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '喝杯酒'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/flower-delivery.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named '鲜花快送'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/kingkong-icons/ingredients-set-a.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以生鲜电商 App 视觉设计师的标准，制作首页金刚区图标，包含米饭、面包、牛奶、鸡蛋、肉类、蔬菜、苹果、海鲜、坚果、食用油、酱油、蛋糕等 12 个生鲜食材分类，统一白色背景圆角卡片，3D 拟物质感，干净精致，适合首页类目导航。"
  },
  {
    image: "./assets/kingkong-icons/food-set-a.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以餐饮外卖 App 视觉设计师的标准，制作首页金刚区图标，包含面条、汉堡、蛋糕、包子、披萨、咖啡、薯条、沙拉、酸奶、冰淇淋、饼干、牛奶等 12 个外卖品类，统一黏土风格 3D 拟物，圆润可爱，白色背景圆角卡片。"
  },
  {
    image: "./assets/kingkong-icons/ingredients-set-b.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以高端生鲜会员 App 视觉设计师的标准，制作首页金刚区图标，包含牛油果、面包、酸奶、三文鱼、番茄、巧克力、燕麦、蜂蜜、奶酪、西兰花、鸡蛋、草莓等 12 个食材，写实质感、白色背景圆角卡片，突出新鲜、健康、高级感。"
  },
  {
    image: "./assets/kingkong-icons/food-set-b.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以本地生活外卖 App 视觉设计师的标准，制作首页金刚区图标，包含汉堡、蛋糕、牛肉面、咖啡、奶茶、薯条、包子、披萨、烤鸡、沙拉、酸奶、西瓜等 12 个外卖品类，黏土风格 3D 拟物，圆润饱满，白色背景圆角卡片。"
  },
  {
    image: "./assets/kingkong-icons/beauty-cosmetics.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以美妆电商 App 视觉设计师的标准，制作粉色调首页金刚区图标，包含口红、粉饼、眼影、化妆刷、粉底液、眼线液笔、睫毛膏、腮红、香水、面霜、面膜、润唇膏 12 个美妆品类，柔光高级质感，白色背景圆角卡片，每张图带文字标签。"
  },
  {
    image: "./assets/kingkong-icons/office-productivity.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以企业办公协作 App 视觉设计师的标准，制作蓝色系首页金刚区图标，包含文档、表格、演示、邮件、日历、云盘、任务、文件夹、通讯录、会议、审批、通知 12 个办公功能，3D 拟物质感，白色背景圆角卡片，每张图带文字标签。"
  },
  {
    image: "./assets/kingkong-icons/fitness-equipment.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以健身电商 App 视觉设计师的标准，制作黑色高级感首页金刚区图标，包含哑铃、壶铃、杠铃片、跑步机、动感单车、跳绳、摇摇杯、蛋白粉、运动手表、瑜伽垫、训练手套、体脂秤 12 个健身品类，写实拟物质感，白色背景圆角卡片。"
  },
  {
    image: "./assets/kingkong-icons/music-audio.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "以音乐播放 App 视觉设计师的标准，制作首页金刚区图标，包含音符、黑胶、均衡器、耳机、心动音乐、音乐文件夹、视频、麦克风、播放列表、扬声器、CD、收音机 12 个音乐功能，3D 拟物质感、彩色点缀，白色背景圆角卡片。"
  },
  {
    image: "./assets/empty-states/social.webp",
    cat: "app",
    sub: "空状态",
    ratio: "9 / 16",
    prompt:
      "A set of empty state illustration designs for a 'Social' APP, with the following requirements:\n6 illustrations, 3D clay style.\nEach illustration is placed in an independent container, with unified layout.\nPure white background, large spacing, large blank space, clean and concise composition.\nDribbble standard.\nOverall output ratio 9:16."
  },
  {
    image: "./assets/empty-states/music.webp",
    cat: "app",
    sub: "空状态",
    ratio: "9 / 16",
    prompt:
      "A set of empty state illustration designs for a 'Music' APP, with the following requirements:\n6 illustrations, 3D clay style.\nEach illustration is placed in an independent container, with unified layout.\nPure white background, large spacing, large blank space, clean and concise composition.\nDribbble standard.\nOverall output ratio 9:16."
  },
  {
    image: "./assets/empty-states/general.webp",
    cat: "app",
    sub: "空状态",
    ratio: "9 / 16",
    prompt:
      "A set of empty state illustration designs for a 'General' APP, with the following requirements:\n6 illustrations, 3D clay style.\nEach illustration is placed in an independent container, with unified layout.\nPure white background, large spacing, large blank space, clean and concise composition.\nDribbble standard.\nOverall output ratio 9:16."
  },
  {
    image: "./assets/empty-states/ai.webp",
    cat: "app",
    sub: "空状态",
    ratio: "9 / 16",
    prompt:
      "A set of empty state illustration designs for an 'AI' APP, with the following requirements:\n6 illustrations, 3D clay style.\nEach illustration is placed in an independent container, with unified layout.\nPure white background, large spacing, large blank space, clean and concise composition.\nDribbble standard.\nOverall output ratio 9:16."
  },
  {
    image: "./assets/empty-states/ecommerce.webp",
    cat: "app",
    sub: "空状态",
    ratio: "9 / 16",
    prompt:
      "A set of empty state illustration designs for an 'E-commerce' APP, with the following requirements:\n6 illustrations, 3D clay style.\nEach illustration is placed in an independent container, with unified layout.\nPure white background, large spacing, large blank space, clean and concise composition.\nDribbble standard.\nOverall output ratio 9:16."
  },
  {
    image: "./assets/empty-states/reading.webp",
    cat: "app",
    sub: "空状态",
    ratio: "9 / 16",
    prompt:
      "A set of empty state illustration designs for a 'Reading' APP, with the following requirements:\n6 illustrations, 3D clay style.\nEach illustration is placed in an independent container, with unified layout.\nPure white background, large spacing, large blank space, clean and concise composition.\nDribbble standard.\nOverall output ratio 9:16."
  },
  {
    image: "./assets/ops-c4d/vacation-guide.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble 、 3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、多巴胺、抽象艺术、干净极简背景、视觉感受新颖年轻欢快、精致、细腻。主题是：去班味 旅行指南"
  },
  {
    image: "./assets/ops-c4d/urban-nomad-project.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble  3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、多巴胺、抽象艺术、干净极简背景、视觉感受新颖年轻欢快、精致、细腻。主题是：城市游牧计划"
  },
  {
    image: "./assets/ops-c4d/join-us-recruitment.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "以互联网公司品牌运营视觉设计师的标准，制作竖版 3D 招聘海报，主题「JOIN US 加入我们 · 团队招新 · WE NEED YOU · 寻找发光的你 · INNOVATE COLLABORATE GROW」。米白背景，居中堆叠紫色粉色黄色立体几何造型与笑脸气球，中央悬挂工牌 JOIN US，列出创意策划、视觉设计、内容运营、社群运营 4 个岗位，整体年轻、热情、潮玩 3D 黏土风。"
  },
  {
    image: "./assets/ops-c4d/play-wild-dopamine.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble  3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、多巴胺、抽象艺术、干净极简背景、视觉感受欢快、精致、细腻。主题是：放肆去玩"
  },
  {
    image: "./assets/ops-c4d/play-wild-skateboard.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Cutting-edge standards for internet visual design masters, Behance and Dribbble 3D illustration style posters, C4D style, soft light rendering, high saturation, dopamine, abstract art, clean minimalist background, visually fresh, youthful, and cheerful, exquisite and delicate. The theme is: Play Wildly"
  },
  {
    image: "./assets/ops-c4d/may-day-mountain-tent.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "以节日营销视觉设计师的标准，为 51 劳动节制作竖版 3D 海报，主题「51 去露营 · 去拥抱自然·去感受美好 · LET'S GO CAMPING」。米白色简洁背景，黄色与粉色立体气球字 51 和绿色黑色立体字 去露营，下方一座雪顶小山、黄白条纹帐篷、营地篝火、笑脸花朵和小溪，整体小清新、3D 黏土风、留白构图。"
  },
  {
    image: "./assets/ops-c4d/may-day-girl-camping.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "互联网运营视觉设计大师的标准，dribbble  3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、抽象艺术、干净极简背景、视觉感受欢快、精致、细腻。主题是：51去露营"
  },
  {
    image: "./assets/ops-c4d/may-day-island-tent.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "互联网运营视觉设计大师的标准，dribbble  3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、抽象艺术、干净极简背景、视觉感受欢快、精致、细腻。主题是：51去露营"
  },
  {
    image: "./assets/ops-c4d/youth-shop-carnival.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Style: 3D C4D render, Pop Mart style, toy aesthetic, vibrant lighting.\nMaterials: Multi-texture contrast (fluffy plush, premium leather, glossy metal, electronic screen).\nElements: Anthropomorphic cartoon hand, luxury bag overflowing with cute objects, vintage gadgets, neon glowing heart.\nColors: High-contrast palette (Electric Blue, Warm Brown, Canary Yellow), soft cloud background.\nVibe: Youthful shopping festival, playful, trendy, healing."
  },
  {
    image: "./assets/ops-kv/street-life-festival-life.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble  3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、多巴胺、抽象艺术、干净极简背景、视觉感受新颖年轻欢快、精致、细腻。主题是：马路生活节。比例：16:9 4K"
  },
  {
    image: "./assets/ops-kv/street-life-festival-street.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble  3D 插画风格的海报、C4D 风格、柔光渲染、高饱和度、多巴胺、抽象艺术、干净极简背景、视觉感受新颖年轻欢快、精致、细腻。主题是：马路生活节。比例：16:9 4K"
  },
  {
    image: "./assets/ops-kv/morning-energy-breakfast.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble  3D 粘土插画风格的竖屏海报、抽象艺术、干净极简背景、视觉感受新颖年轻欢快、精致、细腻。主题是：早餐元气季。比例：16:9 4K"
  },
  {
    image: "./assets/ops-kv/weekend-food-festival.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "前沿互联网运营视觉设计大师的标准，behance、dribbble  3D 粘土插画风格的竖屏海报、抽象艺术、干净极简背景、视觉感受新颖年轻欢快、精致、细腻。主题是：周末美食节。比例：16:9 4K"
  },
  {
    image: "./assets/posters/algorithm-fog.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：算法雾都"
  },
  {
    image: "./assets/posters/snowfall-like-fire.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：发如雪"
  },
  {
    image: "./assets/posters/love-in-21bc.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：爱在西元前"
  },
  {
    image: "./assets/posters/sunny-day.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：晴天"
  },
  {
    image: "./assets/posters/wanderer-of-the-world.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：天涯过客"
  },
  {
    image: "./assets/posters/love-confession-balloon.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：告白气球"
  },
  {
    image: "./assets/posters/cold-war-1994.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：寒战"
  },
  {
    image: "./assets/posters/tempted-three-hearts.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "模仿电影海报制作大师，国际电影海报质量，制作一张电影海报，电影名字是：三心两意"
  },
  {
    image: "./assets/posters/collage/neo-creation-exhibition.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Neo Creation Exhibition 2024 — New Objects for a New Age. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/neo-realm.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Neo Realm International Design & Visionary Art Exhibition. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/graphic-design-exhibition.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: International Graphic Design Exhibition 2025 — Creative Connects the Future. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/vintage-market-yellow.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Weekend Vintage Market — fluorescent yellow gramophone edition. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/vintage-market-pink.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Weekend Vintage Market — magenta gramophone edition. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/langyuan-arts-festival.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Langyuan Arts Festival 2024 — a celebration of creativity & community. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/pet-market.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Pet Market — pets and people live together. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/city-sonic-arts-festival.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. Chinese title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: City Sonic Arts Festival 2024 — finding echo in the noise of the city. Aspect ratio 9:16, 4K resolution."
  }
];

const state = {
  view: "home",
  category: "app",
  sub: categories[0].sub[0]
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const brand = document.querySelector(".brand");
const primaryNav = document.querySelector("#primaryNav");
const navIndicator = document.querySelector("#navIndicator");
const subNav = document.querySelector("#subNav");
const subPill = document.querySelector("#subPill");
const layout = document.querySelector(".layout");
const grid = document.querySelector("#grid");
const toast = document.querySelector("#toast");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxPrompt = document.querySelector("#lightboxPrompt");
const lightboxCounter = document.querySelector("#lightboxCounter");
const lightboxClose = document.querySelector("#lightboxClose");
const lightboxPrev = document.querySelector("#lightboxPrev");
const lightboxNext = document.querySelector("#lightboxNext");
const lightboxCopy = document.querySelector("#lightboxCopy");

let visibleItems = [];
let lightboxIndex = -1;
let lightboxOpenTl;

gsap.defaults({ duration: 0.5, ease: "power2.out" });

let isFirstPrimaryRender = true;
let isFirstSubRender = true;

function bindImageLoading(root) {
  if (!root) return;
  const images = root.querySelectorAll(".home-tile img, .card img");
  images.forEach((img) => {
    const parent = img.closest(".home-tile, .card");
    if (!parent) return;
    if (img.complete && img.naturalWidth > 0) {
      parent.classList.add("is-loaded");
      return;
    }
    const onDone = () => parent.classList.add("is-loaded");
    img.addEventListener("load", onDone, { once: true });
    img.addEventListener("error", onDone, { once: true });
  });
}

const emptyStateHTML = `
  <div class="empty-state" role="status">
    <p class="empty-state-text">作者正在加急制作中</p>
    <a class="empty-state-link" href="https://x.com/faaaannng" target="_blank" rel="noopener noreferrer" aria-label="作者 X 主页" title="X / Twitter">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
      </svg>
    </a>
  </div>
`;

function renderPrimary() {
  Array.from(primaryNav.children).forEach((el) => {
    if (el !== navIndicator) el.remove();
  });

  const homeBtn = document.createElement("button");
  homeBtn.type = "button";
  homeBtn.dataset.view = "home";
  homeBtn.textContent = "首页";
  if (state.view === "home") homeBtn.classList.add("active");
  primaryNav.insertBefore(homeBtn, navIndicator);

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.cat = cat.id;
    btn.textContent = cat.name;
    if (state.view === "category" && cat.id === state.category) btn.classList.add("active");
    primaryNav.insertBefore(btn, navIndicator);
  });
}

function renderSub() {
  if (state.view === "home") {
    subNav.innerHTML = "";
    return;
  }

  const current = categories.find((c) => c.id === state.category);
  if (!current) return;

  subNav.innerHTML = "";
  current.sub.forEach((s) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.sub = s;
    btn.textContent = s;
    if (s === state.sub) btn.classList.add("active");
    li.append(btn);
    subNav.append(li);
  });
}

function renderHome() {
  layout.dataset.view = "home";
  visibleItems = [];
  grid.className = "home";
  grid.innerHTML = `
    <section class="home-hero" aria-labelledby="homeTitle">
      <h1 id="homeTitle">给互联网设计师的 AI 图片提示词灵感库</h1>
      <p>覆盖 APP、运营、海报、插画与品牌等设计场景，每张图都配有可直接复制的 AI 提示词，让灵感随取随用，全部由 image2 完成</p>
    </section>
    <div class="home-sections">
      ${homeSections
        .map((section) => {
          const cat = categories.find((category) => category.id === section.cat);
          if (!cat) return "";
          const title = section.sub || cat.name;
          const previewLimit = section.sub === "KV海报" ? 4 : 5;
          const previews = items
            .filter((item) => item.cat === section.cat && (!section.sub || item.sub === section.sub))
            .slice(0, previewLimit);
          const subAttr = section.sub ? ` data-sub="${section.sub}"` : "";
          const body = previews.length
            ? `<div class="home-section-row">
                ${previews
                  .map(
                    (item) => `
                  <button class="home-tile" type="button" data-cat="${cat.id}" data-sub="${item.sub}" aria-label="${cat.name} · ${item.sub}" style="aspect-ratio: ${item.ratio || "4 / 3"}">
                    <img src="${item.image}" alt="" loading="lazy" decoding="async" />
                  </button>
                `
                  )
                  .join("")}
              </div>`
            : emptyStateHTML;
          return `
            <section class="home-section" aria-label="${title}"${subAttr}>
              <header class="home-section-head">
                <h2>${title}</h2>
                <button class="home-view-all" type="button" data-cat="${cat.id}"${subAttr}>查看全部</button>
              </header>
              ${body}
            </section>
          `;
        })
        .join("")}
    </div>
  `;

  bindImageLoading(grid);

  if (reducedMotion) return;
  gsap.fromTo(
    grid.querySelectorAll(".home-hero, .home-section"),
    { autoAlpha: 0, y: 16 },
    { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.05, overwrite: true }
  );
}

function selectHome() {
  state.view = "home";
  renderPrimary();
  renderSub();
  renderHome();
  moveIndicator();
  movePill();
}

function selectCategory(categoryId, sub) {
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return;

  state.view = "category";
  state.category = category.id;
  state.sub = sub || category.sub[0] || "";
  isFirstSubRender = true;

  renderPrimary();
  renderSub();
  renderGrid();
  moveIndicator();
  movePill();
}

function moveIndicator() {
  const active = primaryNav.querySelector("button.active");
  if (!active) return;

  const navRect = primaryNav.getBoundingClientRect();
  const btnRect = active.getBoundingClientRect();
  const x = btnRect.left - navRect.left;
  const width = btnRect.width;

  if (isFirstPrimaryRender || reducedMotion) {
    gsap.set(navIndicator, { x, width, yPercent: -50 });
    isFirstPrimaryRender = false;
    return;
  }

  gsap.to(navIndicator, {
    x,
    width,
    yPercent: -50,
    duration: 0.45,
    ease: "power3.out",
    overwrite: true
  });
}

function movePill() {
  const active = subNav.querySelector("button.active");
  if (!active) {
    gsap.to(subPill, { autoAlpha: 0, duration: 0.2, overwrite: true });
    return;
  }

  const wrapRect = subPill.parentElement.getBoundingClientRect();
  const btnRect = active.getBoundingClientRect();
  const x = btnRect.left - wrapRect.left;
  const y = btnRect.top - wrapRect.top;

  if (isFirstSubRender || reducedMotion) {
    gsap.set(subPill, {
      x,
      y,
      width: btnRect.width,
      height: btnRect.height,
      autoAlpha: 1
    });
    isFirstSubRender = false;
    return;
  }

  gsap.to(subPill, {
    x,
    y,
    width: btnRect.width,
    height: btnRect.height,
    autoAlpha: 1,
    duration: 0.4,
    ease: "power3.out",
    overwrite: true
  });
}

function renderGrid() {
  layout.dataset.view = "category";
  grid.className = "grid";
  if (state.sub) {
    grid.dataset.sub = state.sub;
  } else {
    delete grid.dataset.sub;
  }
  visibleItems = items.filter((item) => {
    if (item.cat !== state.category) return false;
    return item.sub === state.sub;
  });

  if (!visibleItems.length) {
    grid.innerHTML = emptyStateHTML;
    return;
  }

  grid.innerHTML = visibleItems
    .map(
      (item, index) => `
      <article class="card" tabindex="0" role="button" aria-label="查看大图" data-index="${index}"${item.ratio ? ` style="aspect-ratio: ${item.ratio}"` : ""}>
        <img src="${item.image}" alt="" loading="lazy" decoding="async" />
        <div class="card-overlay">
          <p class="card-prompt">${item.prompt}</p>
          <button class="copy-btn" type="button" data-prompt="${encodeURIComponent(item.prompt)}">复制提示词</button>
        </div>
      </article>
    `
    )
    .join("");

  bindImageLoading(grid);
  animateCards();
}

function animateCards() {
  const cards = grid.querySelectorAll(".card");
  if (!cards.length) return;

  if (reducedMotion) {
    gsap.set(cards, { autoAlpha: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    cards,
    { autoAlpha: 0, y: 14 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      stagger: { each: 0.04, from: "start" },
      overwrite: true
    }
  );
}

const cardHoverOptions = { duration: 0.35, ease: "power2.out" };

function bindCardHover() {
  grid.addEventListener("pointerenter", handleCardEnter, true);
  grid.addEventListener("pointerleave", handleCardLeave, true);
}

function handleCardEnter(event) {
  const card = event.target.closest?.(".card");
  if (!card || event.target !== card) return;
  if (reducedMotion) return;
  const img = card.querySelector("img");
  gsap.to(card, { y: -3, ...cardHoverOptions, overwrite: "auto" });
  gsap.to(img, { scale: 1.05, ...cardHoverOptions, overwrite: "auto" });
}

function handleCardLeave(event) {
  const card = event.target.closest?.(".card");
  if (!card || event.target !== card) return;
  if (reducedMotion) return;
  const img = card.querySelector("img");
  gsap.to(card, { y: 0, ...cardHoverOptions, overwrite: "auto" });
  gsap.to(img, { scale: 1, ...cardHoverOptions, overwrite: "auto" });
}

let toastTl;
function showToast() {
  if (!toastTl) {
    toastTl = gsap
      .timeline({ paused: true })
      .fromTo(
        toast,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.28, ease: "power3.out" }
      )
      .to(
        toast,
        { autoAlpha: 0, y: 6, duration: 0.28, ease: "power2.in" },
        "+=1.4"
      );
  }
  toastTl.restart();
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const t = document.createElement("textarea");
    t.value = text;
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.append(t);
    t.select();
    document.execCommand("copy");
    t.remove();
  }
  showToast();
}

brand.addEventListener("click", (event) => {
  event.preventDefault();
  selectHome();
});

primaryNav.addEventListener("click", (event) => {
  const homeBtn = event.target.closest("button[data-view='home']");
  if (homeBtn) {
    if (state.view !== "home") selectHome();
    return;
  }

  const btn = event.target.closest("button[data-cat]");
  if (!btn || (state.view === "category" && btn.dataset.cat === state.category)) return;
  selectCategory(btn.dataset.cat);
});

subNav.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-sub]");
  if (!btn || btn.dataset.sub === state.sub) return;

  state.sub = btn.dataset.sub;
  renderSub();
  renderGrid();
  movePill();
});

grid.addEventListener("click", (event) => {
  const viewAll = event.target.closest(".home-view-all");
  if (viewAll) {
    selectCategory(viewAll.dataset.cat, viewAll.dataset.sub);
    return;
  }

  const tile = event.target.closest(".home-tile");
  if (tile) {
    selectCategory(tile.dataset.cat, tile.dataset.sub);
    return;
  }

  const copyBtn = event.target.closest(".copy-btn");
  if (copyBtn) {
    event.stopPropagation();
    copyText(decodeURIComponent(copyBtn.dataset.prompt));
    return;
  }

  const card = event.target.closest(".card");
  if (!card) return;
  const index = Number(card.dataset.index);
  if (Number.isInteger(index)) openLightbox(index);
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".card");
  if (!card) return;
  if (event.target.closest(".copy-btn")) return;
  event.preventDefault();
  const index = Number(card.dataset.index);
  if (Number.isInteger(index)) openLightbox(index);
});

function openLightbox(index) {
  if (!visibleItems.length) return;
  lightboxIndex = Math.max(0, Math.min(index, visibleItems.length - 1));
  applyLightboxItem();

  lightbox.hidden = false;
  lightbox.dataset.open = "true";
  document.body.classList.add("lightbox-open");

  gsap.killTweensOf([lightbox, ".lightbox-figure"]);

  if (reducedMotion) {
    gsap.set(lightbox, { autoAlpha: 1 });
    gsap.set(".lightbox-figure", { autoAlpha: 1, y: 0, scale: 1 });
    return;
  }

  if (!lightboxOpenTl) {
    lightboxOpenTl = gsap.timeline({ paused: true });
    lightboxOpenTl
      .fromTo(lightbox, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: "power2.out" })
      .fromTo(
        ".lightbox-figure",
        { autoAlpha: 0, y: 14, scale: 0.985 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" },
        "-=0.1"
      );
  }
  lightboxOpenTl.restart();
}

function closeLightbox() {
  if (lightbox.dataset.open !== "true") return;
  delete lightbox.dataset.open;
  document.body.classList.remove("lightbox-open");

  gsap.killTweensOf([lightbox, ".lightbox-figure"]);

  const finalize = () => {
    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
  };

  if (reducedMotion) {
    gsap.set(lightbox, { autoAlpha: 0 });
    finalize();
    return;
  }

  gsap.to(lightbox, {
    autoAlpha: 0,
    duration: 0.2,
    ease: "power2.in",
    onComplete: finalize
  });
}

function applyLightboxItem() {
  const item = visibleItems[lightboxIndex];
  if (!item) return;

  const wrap = lightboxImage.closest(".lightbox-image-wrap");
  lightboxImage.classList.remove("is-loaded");
  wrap?.classList.add("is-loading");

  const handleLoaded = () => {
    lightboxImage.classList.add("is-loaded");
    wrap?.classList.remove("is-loading");
  };
  lightboxImage.addEventListener("load", handleLoaded, { once: true });
  lightboxImage.addEventListener("error", handleLoaded, { once: true });

  const [rw, rh] = (item.ratio || "1 / 1").split("/").map((s) => parseFloat(s.trim()));
  const isWide = rw && rh && rw / rh > 1.2;
  lightbox.dataset.layout = isWide ? "wide" : "tall";

  lightboxImage.src = item.image;
  lightboxImage.alt = item.prompt;
  lightboxPrompt.textContent = item.prompt;
  lightboxPrompt.scrollTop = 0;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${visibleItems.length}`;
  lightboxCopy.dataset.prompt = encodeURIComponent(item.prompt);

  if (lightboxImage.complete && lightboxImage.naturalWidth > 0) {
    handleLoaded();
  }

  const onlyOne = visibleItems.length <= 1;
  lightboxPrev.disabled = onlyOne;
  lightboxNext.disabled = onlyOne;
}

function navigateLightbox(direction) {
  if (visibleItems.length <= 1) return;
  const next = (lightboxIndex + direction + visibleItems.length) % visibleItems.length;
  lightboxIndex = next;
  applyLightboxItem();

  if (reducedMotion) return;

  gsap.fromTo(
    lightboxImage,
    { opacity: 0, scale: 0.96 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.32,
      ease: "power3.out",
      overwrite: "auto",
      clearProps: "transform"
    }
  );
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
lightboxNext.addEventListener("click", () => navigateLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.classList.contains("lightbox-stage")) {
    closeLightbox();
  }
});

lightboxCopy.addEventListener("click", () => {
  const prompt = lightboxCopy.dataset.prompt;
  if (prompt) copyText(decodeURIComponent(prompt));
});

document.addEventListener("keydown", (event) => {
  if (lightbox.dataset.open !== "true") return;
  if (event.key === "Escape") closeLightbox();
  else if (event.key === "ArrowLeft") navigateLightbox(-1);
  else if (event.key === "ArrowRight") navigateLightbox(1);
});

window.addEventListener(
  "resize",
  (() => {
    let frame;
    return () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        moveIndicator();
        movePill();
      });
    };
  })()
);

renderPrimary();
renderSub();
bindCardHover();
renderHome();

requestAnimationFrame(() => {
  moveIndicator();
  movePill();
});

(function loadGitHubStars() {
  const el = document.querySelector("#topbarStarCount");
  if (!el) return;

  const repo = "houshifang/image";
  const cacheKey = `gh-stars:${repo}`;
  const cacheTTL = 1000 * 60 * 30;

  const formatCount = (n) => {
    if (n < 1000) return String(n);
    if (n < 10000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    return Math.round(n / 1000) + "k";
  };

  const setCount = (n) => {
    el.textContent = formatCount(n);
  };

  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
    if (cached && Date.now() - cached.time < cacheTTL) {
      setCount(cached.value);
      return;
    }
  } catch {}

  fetch(`https://api.github.com/repos/${repo}`)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((data) => {
      const stars = data.stargazers_count ?? 0;
      setCount(stars);
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ value: stars, time: Date.now() }));
      } catch {}
    })
    .catch(() => {
      el.textContent = "★";
    });
})();
