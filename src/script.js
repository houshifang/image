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
    sub: ["电影海报", "拼贴海报", "艺术海报", "渐变艺术", "科技海报"]
  },
  {
    id: "illustration",
    name: "插画",
    sub: ["黏土", "多巴胺", "夸张", "表现主义肖像", "超现实叙事", "扁平", "情景故事", "3D", "治愈"]
  },
  {
    id: "ip",
    name: "IP",
    sub: ["卡通IP", "AI Bot IP 角色设计", "软雕塑角色", "毛绒角色"]
  }
];

const homeSections = [
  { cat: "ip", sub: "毛绒角色" },
  { cat: "illustration", sub: "表现主义肖像" },
  { cat: "ip", sub: "AI Bot IP 角色设计" },
  { cat: "ops" },
  { cat: "poster", sub: "拼贴海报" },
  { cat: "illustration", sub: "多巴胺" },
  { cat: "poster", sub: "渐变艺术" },
  { cat: "ip", sub: "卡通IP" },
  { cat: "poster" },
  { cat: "poster", sub: "艺术海报" },
  { cat: "app", sub: "金刚区图标" },
  { cat: "app", sub: "空状态" },
  { cat: "illustration", sub: "黏土" },
  { cat: "illustration", sub: "夸张" },
  { cat: "poster", sub: "科技海报" },
  { cat: "ops", sub: "KV海报" },
  { cat: "app" },
  { cat: "illustration", sub: "超现实叙事" },
  { cat: "ip", sub: "软雕塑角色" }
];

const categoryIntros = {
  app: "覆盖图标、启动页、功能图和应用截图，适合移动产品的视觉起稿。",
  ops: "3D 海报和 KV 海报，帮助快速找到运营设计方向。",
  poster: "电影海报、拼贴海报、艺术海报、渐变艺术与科技海报，提供更有情绪的画面参考。",
  illustration: "黏土、多巴胺、夸张、扁平、3D 和情景故事插画，适合产品介绍与品牌表达。",
  ip: "卡通 IP 形象、AI Bot 角色设计与多角度设定稿，适合品牌吉祥物、AI 助手与周边视觉起稿。"
};

const items = [
  {
    image: "./assets/app-icons/bichon-shop.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Bichon Shop'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/xiaoxiang-fast-food.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Little Elephant Fast Food'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/pigeon-audiobook.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Pigeon Audiobook'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/flash-chat.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Flash Chat'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/quick-vocabulary.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Quick Vocabulary'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/whiskey-glass.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Have a Drink'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/app-icons/flower-delivery.webp",
    cat: "app",
    sub: "App 图标",
    ratio: "1 / 1",
    prompt:
      "A macOS app icon for an app named 'Flower Express'. A single squircle icon with smooth continuous rounded corners, centered on a white canvas with padding, occupying about 80% of the canvas. Modern light skeuomorphic macOS App Store style. Only one icon."
  },
  {
    image: "./assets/kingkong-icons/ingredients-set-a.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a fresh-grocery e-commerce app visual designer, design a set of homepage king-kong category icons covering 12 fresh ingredient categories — rice, bread, milk, eggs, meat, vegetables, apples, seafood, nuts, cooking oil, soy sauce and cake. Unified white background rounded-corner cards, 3D skeuomorphic texture, clean and refined, suited for homepage category navigation."
  },
  {
    image: "./assets/kingkong-icons/food-set-a.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a food-delivery app visual designer, design a set of homepage king-kong category icons covering 12 takeaway categories — noodles, burger, cake, baozi (steamed bun), pizza, coffee, fries, salad, yogurt, ice cream, biscuits and milk. Unified clay-style 3D skeuomorphism, round and cute, on white background rounded-corner cards."
  },
  {
    image: "./assets/kingkong-icons/ingredients-set-b.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a premium fresh-grocery membership app visual designer, design a set of homepage king-kong category icons covering 12 ingredients — avocado, bread, yogurt, salmon, tomato, chocolate, oats, honey, cheese, broccoli, eggs and strawberry. Photorealistic texture, white background rounded-corner cards, emphasizing freshness, health and a premium feel."
  },
  {
    image: "./assets/kingkong-icons/food-set-b.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a local-life food-delivery app visual designer, design a set of homepage king-kong category icons covering 12 takeaway categories — burger, cake, beef noodles, coffee, milk tea, fries, baozi (steamed bun), pizza, roast chicken, salad, yogurt and watermelon. Clay-style 3D skeuomorphism, round and full, on white background rounded-corner cards."
  },
  {
    image: "./assets/kingkong-icons/beauty-cosmetics.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a beauty e-commerce app visual designer, design a pink-toned set of homepage king-kong category icons covering 12 beauty categories — lipstick, face powder, eyeshadow, makeup brush, foundation, eyeliner pen, mascara, blush, perfume, face cream, face mask and lip balm. Soft-lit premium texture, white background rounded-corner cards, each tile with a text label."
  },
  {
    image: "./assets/kingkong-icons/office-productivity.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of an enterprise office-collaboration app visual designer, design a blue-toned set of homepage king-kong category icons covering 12 office functions — document, spreadsheet, presentation, email, calendar, cloud drive, tasks, folder, contacts, meeting, approval and notifications. 3D skeuomorphic texture, white background rounded-corner cards, each tile with a text label."
  },
  {
    image: "./assets/kingkong-icons/fitness-equipment.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a fitness e-commerce app visual designer, design a sleek black premium set of homepage king-kong category icons covering 12 fitness categories — dumbbell, kettlebell, weight plate, treadmill, spin bike, jump rope, shaker bottle, protein powder, sports watch, yoga mat, training gloves and body-fat scale. Photorealistic skeuomorphic texture, white background rounded-corner cards."
  },
  {
    image: "./assets/kingkong-icons/music-audio.webp",
    cat: "app",
    sub: "金刚区图标",
    ratio: "9 / 16",
    prompt:
      "Following the standards of a music-player app visual designer, design a set of homepage king-kong category icons covering 12 music functions — music note, vinyl record, equalizer, headphones, liked music, music folder, video, microphone, playlist, speaker, CD and radio. 3D skeuomorphic texture with colorful accents, on white background rounded-corner cards."
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
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, dopamine palette, abstract art, clean minimalist background, visually fresh, youthful and cheerful, refined and delicate. Theme: Shake Off the Office Vibe — Travel Guide."
  },
  {
    image: "./assets/ops-c4d/urban-nomad-project.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, dopamine palette, abstract art, clean minimalist background, visually fresh, youthful and cheerful, refined and delicate. Theme: Urban Nomad Project."
  },
  {
    image: "./assets/ops-c4d/join-us-recruitment.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Following the standards of an internet brand-operations visual designer, create a vertical 3D recruitment poster with the theme \"JOIN US · Team Recruitment · WE NEED YOU · Find Your Glow · INNOVATE COLLABORATE GROW\". Off-white background, a centered stack of purple, pink and yellow 3D geometric shapes mixed with smiley balloons, a JOIN US ID badge hanging in the middle, listing 4 open roles — Creative Planning, Visual Design, Content Operations, Community Operations. Overall young, enthusiastic, designer-toy 3D clay style."
  },
  {
    image: "./assets/ops-c4d/play-wild-dopamine.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, dopamine palette, abstract art, clean minimalist background, visually cheerful, refined and delicate. Theme: Play Wildly."
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
      "Following the standards of a holiday marketing visual designer, create a vertical 3D poster for May 1st Labor Day with the theme \"5/1 Go Camping · Embrace Nature · Feel the Good · LET'S GO CAMPING\". Off-white minimalist background, yellow-and-pink 3D balloon letters \"5/1\" and green-and-black 3D letters \"Go Camping\". Below: a snow-capped little mountain, a yellow-and-white striped tent, a campfire, smiley flowers and a small stream. Overall fresh and small-town style, 3D clay aesthetic, generous whitespace composition."
  },
  {
    image: "./assets/ops-c4d/may-day-girl-camping.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Internet operations visual design master standard, Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, abstract art, clean minimalist background, visually cheerful, refined and delicate. Theme: 5/1 Go Camping."
  },
  {
    image: "./assets/ops-c4d/may-day-island-tent.webp",
    cat: "ops",
    sub: "3D海报",
    ratio: "9 / 16",
    prompt:
      "Internet operations visual design master standard, Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, abstract art, clean minimalist background, visually cheerful, refined and delicate. Theme: 5/1 Go Camping."
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
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, dopamine palette, abstract art, clean minimalist background, visually fresh, youthful and cheerful, refined and delicate. Theme: Street Life Festival. Ratio: 16:9, 4K."
  },
  {
    image: "./assets/ops-kv/street-life-festival-street.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D illustration style poster, C4D style, soft-light rendering, high saturation, dopamine palette, abstract art, clean minimalist background, visually fresh, youthful and cheerful, refined and delicate. Theme: Street Life Festival. Ratio: 16:9, 4K."
  },
  {
    image: "./assets/ops-kv/morning-energy-breakfast.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D clay-illustration style vertical poster, abstract art, clean minimalist background, visually fresh, youthful and cheerful, refined and delicate. Theme: Morning Energy Breakfast Season. Ratio: 16:9, 4K."
  },
  {
    image: "./assets/ops-kv/weekend-food-festival.webp",
    cat: "ops",
    sub: "KV海报",
    ratio: "16 / 9",
    prompt:
      "Cutting-edge internet operations visual design master standard, Behance / Dribbble 3D clay-illustration style vertical poster, abstract art, clean minimalist background, visually fresh, youthful and cheerful, refined and delicate. Theme: Weekend Food Festival. Ratio: 16:9, 4K."
  },
  {
    image: "./assets/posters/algorithm-fog.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Algorithm Fog City."
  },
  {
    image: "./assets/posters/snowfall-like-fire.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Hair Like Snow."
  },
  {
    image: "./assets/posters/love-in-21bc.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Love in Another Era."
  },
  {
    image: "./assets/posters/sunny-day.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Sunny Day."
  },
  {
    image: "./assets/posters/wanderer-of-the-world.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Wanderer at the Horizon."
  },
  {
    image: "./assets/posters/love-confession-balloon.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Love Confession Balloon."
  },
  {
    image: "./assets/posters/cold-war-1994.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Cold War."
  },
  {
    image: "./assets/posters/tempted-three-hearts.webp",
    cat: "poster",
    sub: "电影海报",
    ratio: "9 / 16",
    prompt:
      "Emulate a master of cinematic poster design, with international film-poster quality. Create a movie poster. Film title: Tempted Hearts."
  },
  {
    image: "./assets/posters/collage/neo-creation-exhibition.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Neo Creation Exhibition 2024 — New Objects for a New Age. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/neo-realm.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Neo Realm International Design & Visionary Art Exhibition. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/graphic-design-exhibition.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: International Graphic Design Exhibition 2025 — Creative Connects the Future. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/vintage-market-yellow.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Weekend Vintage Market — fluorescent yellow gramophone edition. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/vintage-market-pink.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Weekend Vintage Market — magenta gramophone edition. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/langyuan-arts-festival.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Langyuan Arts Festival 2024 — a celebration of creativity & community. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/pet-market.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: Pet Market — pets and people live together. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/collage/city-sonic-arts-festival.webp",
    cat: "poster",
    sub: "拼贴海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design, Neo editorial magazine layout, design exhibition poster. A stylized exhibition title as the dominant visual with custom-designed artistic typography. Tightly composed editorial layout. Fluorescent color blocks as borders, overlaid with paper texture and subtle noise grain to evoke a sticker-collage feel. Black-and-white photographic background base. High-saturation single-color 3D object with a slightly rough surface material. Collage composition that is irregular yet retains design order. Minimal whitespace background. Magazine-grade professional layout. Decorative small elements such as stamps, arrows, English captions and the ® symbol. International design exhibition tone, awwwards / Behance professional caliber. Poster theme: City Sonic Arts Festival 2024 — finding echo in the noise of the city. Aspect ratio 9:16, 4K resolution."
  },
  {
    image: "./assets/posters/art/refuse-involution.webp",
    cat: "poster",
    sub: "艺术海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design poster, neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance award-grade visual quality.\n\nTheme: Refuse Involution.\n\nBuild a powerful core visual metaphor for the theme — translate the abstract concept into a sculptural, iconic, installation-like object. The core object should appear cut, layered, stretched, stacked, reconstructed, wrapped or deconstructed, carrying clear conceptual meaning rather than decorative ornament.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typographic layout: oversized bold black English headline at the top, secondary subtitle, annotation text, exhibition-style information hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials & rendering: premium product-rendering quality, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: predominantly black, white and gray with a single striking accent color and very limited secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean rendering, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution."
  },
  {
    image: "./assets/posters/art/information-overload.webp",
    cat: "poster",
    sub: "艺术海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design poster, neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance award-grade visual quality.\n\nTheme: Information Overload.\n\nBuild a powerful core visual metaphor for the theme — translate the abstract concept into a sculptural, iconic, installation-like object. The core object should appear cut, layered, stretched, stacked, reconstructed, wrapped or deconstructed, carrying clear conceptual meaning rather than decorative ornament.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typographic layout: oversized bold black English headline at the top, secondary subtitle, annotation text, exhibition-style information hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials & rendering: premium product-rendering quality, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: predominantly black, white and gray with a single striking accent color and very limited secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean rendering, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution."
  },
  {
    image: "./assets/posters/art/recycle-rebuild-tomorrow.webp",
    cat: "poster",
    sub: "艺术海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design poster, neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance award-grade visual quality.\n\nTheme: Re:Cycle — Redesign Today, Rebuild Tomorrow.\n\nBuild a powerful core visual metaphor for the theme — translate the abstract concept into a sculptural, iconic, installation-like object. The core object should appear cut, layered, stretched, stacked, reconstructed, wrapped or deconstructed, carrying clear conceptual meaning rather than decorative ornament.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typographic layout: oversized bold black English headline at the top, secondary subtitle, annotation text, exhibition-style information hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials & rendering: premium product-rendering quality, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: predominantly black, white and gray with a single striking accent color and very limited secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean rendering, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution."
  },
  {
    image: "./assets/posters/art/new-intelligence.webp",
    cat: "poster",
    sub: "艺术海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design poster, neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance award-grade visual quality.\n\nTheme: What's Inside the New Intelligence — The Age of AI.\n\nBuild a powerful core visual metaphor for the theme — translate the abstract concept into a sculptural, iconic, installation-like object. The core object should appear cut, layered, stretched, stacked, reconstructed, wrapped or deconstructed, carrying clear conceptual meaning rather than decorative ornament.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typographic layout: oversized bold black English headline at the top, secondary subtitle, annotation text, exhibition-style information hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials & rendering: premium product-rendering quality, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: predominantly black, white and gray with a single striking accent color and very limited secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean rendering, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution."
  },
  {
    image: "./assets/posters/art/stay-focused.webp",
    cat: "poster",
    sub: "艺术海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design poster, neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance award-grade visual quality.\n\nTheme: Stay Focused.\n\nBuild a powerful core visual metaphor for the theme — translate the abstract concept into a sculptural, iconic, installation-like object. The core object should appear cut, layered, stretched, stacked, reconstructed, wrapped or deconstructed, carrying clear conceptual meaning rather than decorative ornament.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typographic layout: oversized bold black English headline at the top, secondary subtitle, annotation text, exhibition-style information hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials & rendering: premium product-rendering quality, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: predominantly black, white and gray with a single striking accent color and very limited secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean rendering, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution."
  },
  {
    image: "./assets/posters/art/daydream-worker.webp",
    cat: "poster",
    sub: "艺术海报",
    ratio: "9 / 16",
    prompt:
      "International top-tier graphic design poster, neo-editorial / contemporary editorial style, D&AD / Awwwards / Behance award-grade visual quality.\n\nTheme: Daydream Worker — Creating my true self in the ocean of fiction.\n\nBuild a powerful core visual metaphor for the theme — translate the abstract concept into a sculptural, iconic, installation-like object. The core object should appear cut, layered, stretched, stacked, reconstructed, wrapped or deconstructed, carrying clear conceptual meaning rather than decorative ornament.\n\nClean, minimal light-gray background with generous whitespace.\n\nHigh-contrast modern editorial typographic layout: oversized bold black English headline at the top, secondary subtitle, annotation text, exhibition-style information hierarchy.\n\nSwiss editorial grid system with intentional breaks, asymmetric balance, precise alignment, strong rhythm, refined spacing.\n\nCentered or near-centered composition with strong vertical tension.\n\nMaterials & rendering: premium product-rendering quality, matte surfaces, subtle reflections, hard-edge cuts, slight inter-layer translucency, suspended sliced structures, refined details, crisp silhouettes.\n\nColor: predominantly black, white and gray with a single striking accent color and very limited secondary accents — restrained, high-end, contemporary.\n\nLighting: soft studio lighting, subtle shadows, ultra-clean rendering, highly polished but non-glossy, razor-sharp details.\n\nMood: conceptual, intellectual, exhibition-grade, contemporary, premium, restrained, iconic.\n\nAspect ratio 9:16, 4K, ultra sharp, ultra detailed, ultra clean, high resolution."
  },
  {
    image: "./assets/posters/gradient-art/infinite-love-marathon-guitar.webp",
    cat: "poster",
    sub: "渐变艺术",
    ratio: "9 / 16",
    prompt:
      "Swiss International style, modern minimalist flat vector poster, 9:16 aspect ratio, diagonal sliced layout. Top-left: Traditional Chinese title in serif type paired with elegant connected script serif English. Bottom-right: core symbolic graphic for the poster — abstract flat vector illustration, fluorescent color gradients, subtle grain noise, decorative pixel icons, contemporary cultural festival poster, modern design exhibition quality. Theme: Infinite Love Marathon Concerts. 4K."
  },
  {
    image: "./assets/posters/gradient-art/strawberry-music-festival.webp",
    cat: "poster",
    sub: "渐变艺术",
    ratio: "9 / 16",
    prompt:
      "Swiss International style, modern minimalist flat vector poster, 9:16 aspect ratio, diagonal sliced layout. Top-left: Traditional Chinese title in serif type paired with elegant connected script serif English. Bottom-right: core symbolic graphic for the poster — abstract flat vector illustration, fluorescent color gradients, subtle grain noise, decorative pixel icons, contemporary cultural festival poster, modern design exhibition quality. Theme: Strawberry Music Festival. 4K."
  },
  {
    image: "./assets/posters/gradient-art/infinite-love-marathon-floral.webp",
    cat: "poster",
    sub: "渐变艺术",
    ratio: "9 / 16",
    prompt:
      "Swiss International style, modern minimalist flat vector poster, 9:16 aspect ratio, diagonal sliced layout. Top-left: Traditional Chinese title in serif type paired with elegant connected script serif English. Bottom-right: core symbolic graphic for the poster — abstract flat vector illustration, fluorescent color gradients, subtle grain noise, decorative pixel icons, contemporary cultural festival poster, modern design exhibition quality. Theme: Infinite Love Marathon Concerts (floral key visual). 4K."
  },
  {
    image: "./assets/posters/gradient-art/xiami-music-festival.webp",
    cat: "poster",
    sub: "渐变艺术",
    ratio: "9 / 16",
    prompt:
      "Swiss International style, modern minimalist flat vector poster, 9:16 aspect ratio, diagonal sliced layout. Top-left: Traditional Chinese title in serif type paired with elegant connected script serif English. Bottom-right: core symbolic graphic for the poster — abstract flat vector illustration, fluorescent color gradients, subtle grain noise, decorative pixel icons, contemporary cultural festival poster, modern design exhibition quality. Theme: Xiami Music Festival. 4K."
  },
  {
    image: "./assets/posters/gradient-art/weekend-daydream-plan.webp",
    cat: "poster",
    sub: "渐变艺术",
    ratio: "9 / 16",
    prompt:
      "Swiss International style, modern minimalist flat vector poster, 9:16 aspect ratio, diagonal sliced layout. Top-left: Traditional Chinese title in serif type paired with elegant connected script serif English. Bottom-right: core symbolic graphic for the poster — abstract flat vector illustration, fluorescent color gradients, subtle grain noise, decorative pixel icons, contemporary cultural festival poster, modern design exhibition quality. Theme: Weekend Daydream Plan. 4K."
  },
  {
    image: "./assets/posters/gradient-art/summer-bubble-lab.webp",
    cat: "poster",
    sub: "渐变艺术",
    ratio: "9 / 16",
    prompt:
      "Swiss International style, modern minimalist flat vector poster, 9:16 aspect ratio, diagonal sliced layout. Top-left: Traditional Chinese title in serif type paired with elegant connected script serif English. Bottom-right: core symbolic graphic for the poster — abstract flat vector illustration, fluorescent color gradients, subtle grain noise, decorative pixel icons, contemporary cultural festival poster, modern design exhibition quality. Theme: Summer Bubble Lab. 4K."
  },
  {
    image: "./assets/posters/tech/ai-programming-competition-2024.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech event poster, 9:16 vertical, deep black background, generous negative space. Futuristic 3D glass hero: glowing cube flanked by code brackets, neon blue and purple gradient lighting, C4D / Octane frosted-glass quality. Bold title: AI Programming Competition with gradient AI wordmark; tagline: Code the future. Intelligent solutions. Footer row: calendar June 21–23 2024, globe Online Worldwide, trophy Total Prize Pool $100,000+; purple outlined Register Now pill CTA."
  },
  {
    image: "./assets/posters/tech/beijing-ai-coding-competition.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. Beijing AI coding competition poster, 9:16 vertical, pure black background, neon blue and purple glow. Hero: large Chinese title 北京AI 编码大赛, subtitle 智能·创新·突破. Center: translucent 3D code symbol </> above glowing wireframe Temple of Heaven and futuristic Beijing skyline on a circular tiered pedestal. Bottom: four icon columns — AI geek challenge rocket trophy with Chinese microcopy; CTA pill 即将开启; footer 2024.06 敬请期待."
  },
  {
    image: "./assets/posters/tech/developer-code-supercharged.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International tech product launch poster, 9:16 vertical, minimalist deep black background. Premium 3D frosted glass hexagon hero enclosing glass code glyphs </>; subtle purple-blue edge highlights. Centered typography: Super / Developer metallic gradient headline; grey tagline Your code. Supercharged.; small monospace LAUNCHING 2024.06.06 with soft blue-purple glow; tiny terminal glyph badge at bottom. Apple / Linear / Notion-adjacent restraint."
  },
  {
    image: "./assets/posters/tech/super-developer-launch.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech launch visual poster, minimalist futuristic design, deep pure black background, generous negative space, 9:16 vertical composition. Tech visual style similar to Apple, Toss, Notion and Linear. Clean minimalist 3D hero graphic; rendering quality: premium C4D / Octane Render look, frosted glass material. Typography and layout: centered composition. Theme: Super Developer."
  },
  {
    image: "./assets/posters/tech/hackathon-2025.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech launch visual poster, minimalist futuristic design, deep pure black background, generous negative space, 9:16 vertical composition. Tech visual style similar to Apple, Toss, Notion and Linear. Clean minimalist 3D hero graphic; rendering quality: premium C4D / Octane Render look, frosted glass material. Typography and layout: centered composition. Theme: HACKATHON — Build, Innovate, Impact."
  },
  {
    image: "./assets/posters/tech/future-one-breakthrough.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech launch visual poster, minimalist futuristic design, deep pure black background, generous negative space, 9:16 vertical composition. Tech visual style similar to Apple, Toss, Notion and Linear. Clean minimalist 3D hero graphic; rendering quality: premium C4D / Octane Render look, frosted glass material. Typography and layout: centered composition. Theme: Future One — The Next Breakthrough, new product imminent."
  },
  {
    image: "./assets/posters/tech/shanghai-ai-coding-2026.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech launch visual poster, minimalist futuristic design, deep pure black background, generous negative space, 9:16 vertical composition. Tech visual style similar to Apple, Toss, Notion and Linear. Clean minimalist 3D hero graphic; rendering quality: premium C4D / Octane Render look, frosted glass material. Typography and layout: centered composition. Theme: Shanghai AI Coding Competition 2026."
  },
  {
    image: "./assets/posters/tech/the-future-is-now.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech launch visual poster, minimalist futuristic design, deep pure black background, generous negative space, 9:16 vertical composition. Tech visual style similar to Apple, Toss, Notion and Linear. Clean minimalist 3D hero graphic; rendering quality: premium C4D / Octane Render look, frosted glass material. Typography and layout: centered composition. Theme: The Future Is Now — technology changes the world, innovation drives the future."
  },
  {
    image: "./assets/posters/tech/infinite-loading.webp",
    cat: "poster",
    sub: "科技海报",
    ratio: "9 / 16",
    prompt:
      "Create an image. International top-tier tech launch visual poster, minimalist futuristic design, deep pure black background, generous negative space, 9:16 vertical composition. Tech visual style similar to Apple, Toss, Notion and Linear. Clean minimalist 3D hero graphic; rendering quality: premium C4D / Octane Render look, frosted glass material. Typography and layout: centered composition. Theme: Infinite Loading."
  },
  {
    image: "./assets/illustration/clay/clay-muzik-radio.webp",
    cat: "illustration",
    sub: "黏土",
    ratio: "3 / 4",
    prompt:
      "3D illustration, clay style, soft plastic material, toy-like character design,\n\nartistic abstract sculpting, dopamine color palette,\n\nsoft studio lighting, global illumination, soft shadows,\n\npastel base tones with vibrant accents,\n\ncentered composition, single hero object, clean background,\n\nfloating decorative elements,\n\nsticker collage details, UI labels, badges, playful icons (stars, music notes, shapes),\n\nmicro typography, fictional brand text,\n\njoyful, playful, whimsical yet well-designed,\n\neditorial-grade quality, Behance / Awwwards standard.\n\n— Theme: \"Muzik\" portable boombox music player"
  },
  {
    image: "./assets/illustration/clay/clay-game-on-arcade.webp",
    cat: "illustration",
    sub: "黏土",
    ratio: "3 / 4",
    prompt:
      "3D illustration, clay style, soft plastic material, toy-like character design,\n\nartistic abstract sculpting, dopamine color palette,\n\nsoft studio lighting, global illumination, soft shadows,\n\npastel base tones with vibrant accents,\n\ncentered composition, single hero object, clean background,\n\nfloating decorative elements,\n\nsticker collage details, UI labels, badges, playful icons (stars, music notes, shapes),\n\nmicro typography, fictional brand text,\n\njoyful, playful, whimsical yet well-designed,\n\neditorial-grade quality, Behance / Awwwards standard.\n\n— Theme: \"GAME ON\" retro handheld game console"
  },
  {
    image: "./assets/illustration/clay/clay-smooth-blender.webp",
    cat: "illustration",
    sub: "黏土",
    ratio: "3 / 4",
    prompt:
      "3D illustration, clay style, soft plastic material, toy-like character design,\n\nartistic abstract sculpting, dopamine color palette,\n\nsoft studio lighting, global illumination, soft shadows,\n\npastel base tones with vibrant accents,\n\ncentered composition, single hero object, clean background,\n\nfloating decorative elements,\n\nsticker collage details, UI labels, badges, playful icons (stars, music notes, shapes),\n\nmicro typography, fictional brand text,\n\njoyful, playful, whimsical yet well-designed,\n\neditorial-grade quality, Behance / Awwwards standard.\n\n— Theme: \"SMOOTH\" fruit smoothie blender"
  },
  {
    image: "./assets/illustration/clay/clay-hello-flower.webp",
    cat: "illustration",
    sub: "黏土",
    ratio: "3 / 4",
    prompt:
      "3D illustration, clay style, soft plastic material, toy-like character design,\n\nartistic abstract sculpting, dopamine color palette,\n\nsoft studio lighting, global illumination, soft shadows,\n\npastel base tones with vibrant accents,\n\ncentered composition, single hero object, clean background,\n\nfloating decorative elements,\n\nsticker collage details, UI labels, badges, playful icons (stars, music notes, shapes),\n\nmicro typography, fictional brand text,\n\njoyful, playful, whimsical yet well-designed,\n\neditorial-grade quality, Behance / Awwwards standard.\n\n— Theme: \"HELLO!\" retro TV flower planter"
  },
  {
    image: "./assets/illustration/clay/clay-vinyl-player.webp",
    cat: "illustration",
    sub: "黏土",
    ratio: "3 / 4",
    prompt:
      "3D illustration, clay style, soft plastic material, toy-like character design,\n\nartistic abstract sculpting, dopamine color palette,\n\nsoft studio lighting, global illumination, soft shadows,\n\npastel base tones with vibrant accents,\n\ncentered composition, single hero object, clean background,\n\nfloating decorative elements,\n\nsticker collage details, UI labels, badges, playful icons (stars, music notes, shapes),\n\nmicro typography, fictional brand text,\n\njoyful, playful, whimsical yet well-designed,\n\neditorial-grade quality, Behance / Awwwards standard.\n\n— Theme: \"GOOD VIBES\" portable vinyl record player"
  },
  {
    image: "./assets/illustration/clay/clay-vending-machine.webp",
    cat: "illustration",
    sub: "黏土",
    ratio: "3 / 4",
    prompt:
      "3D illustration, clay style, soft plastic material, toy-like character design,\n\nartistic abstract sculpting, dopamine color palette,\n\nsoft studio lighting, global illumination, soft shadows,\n\npastel base tones with vibrant accents,\n\ncentered composition, single hero object, clean background,\n\nfloating decorative elements,\n\nsticker collage details, UI labels, badges, playful icons (stars, music notes, shapes),\n\nmicro typography, fictional brand text,\n\njoyful, playful, whimsical yet well-designed,\n\neditorial-grade quality, Behance / Awwwards standard.\n\n— Theme: \"HAVE A NICE DAY!\" beverage vending machine"
  },
  {
    image: "./assets/illustration/dopamine/dopamine-gift-haul.webp",
    cat: "illustration",
    sub: "多巴胺",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a happy boy hugging a giant stack of colorful gift boxes, holiday shopping haul"
  },
  {
    image: "./assets/illustration/dopamine/dopamine-present-dash.webp",
    cat: "illustration",
    sub: "多巴胺",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a leaping delivery boy carrying a towering pile of birthday presents, gift-run dash"
  },
  {
    image: "./assets/illustration/dopamine/dopamine-office-rush.webp",
    cat: "illustration",
    sub: "多巴胺",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a glasses-wearing office worker dashing with a cardboard box of files and a splashing coffee cup, Monday morning rush"
  },
  {
    image: "./assets/illustration/dopamine/dopamine-skater-idea.webp",
    cat: "illustration",
    sub: "多巴胺",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a hoodie-wearing creative kid skateboarding in mid-air with a laptop labeled \"IDEA\", brainstorming on the move"
  },
  {
    image: "./assets/illustration/dopamine/dopamine-traveler-map.webp",
    cat: "illustration",
    sub: "多巴胺",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a backpacker explorer pointing forward with a folded map and camera around the neck, solo travel adventure"
  },
  {
    image: "./assets/illustration/dopamine/dopamine-saas-workspace.webp",
    cat: "illustration",
    sub: "多巴胺",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a SaaS-hoodie product designer floating with a laptop, surrounded by dashboard UI cards, charts and task widgets, hero illustration for a SaaS landing page"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-app-bounce.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a tiny-headed kid mid-air bounce surrounded by floating mobile app UI cards (calendar, checkmark, photo icon), playful onboarding illustration"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-pastel-leap.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a pastel-colored acrobat character throwing both hands up in a triumphant mid-air leap on chunky color-block sneakers"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-strawberry-rocker.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a strawberry-themed musician kid with a strawberry-shaped electric guitar, throwing a rock-on hand sign, fruity music festival vibe"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-camping-invite.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a backpacker holding a wooden sign that says \"Let's go camping!\" with tent and outdoor badges, weekend camping invitation"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-designer-stylus.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a beret-wearing illustrator holding a stylus pen mid-air, brushes peeking out of pocket, designer's creative leap"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-bike-trick.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a cyclist popping a wheelie on a yellow bike with one hand holding an energy drink, weekend bike ride trick"
  },
  {
    image: "./assets/illustration/exaggerated/exaggerated-dog-walk.webp",
    cat: "illustration",
    sub: "夸张",
    ratio: "3 / 4",
    prompt:
      "A complete single 3D illustration, exaggerated artistic editorial illustration style, not storyboard, not a collage layout.\n\nThe subject is an exaggerated cartoon character with a tiny head, round chubby body, extremely elongated limbs, oversized hands and oversized shoes, off-balance center of gravity, frozen mid-air in a dramatic jumping pose, with strong tension and comedic energy.\n\nOverall form looks like a soft sculpture toy — round, chunky, bouncy, exaggerated — not anatomically correct.\n\nMaterials are matte soft rubber, fuzzy fabric, knitted texture, plasticine feel, with fine fiber details, slight grain, hand-sculpted touch — avoid glossy plastic toy look, avoid translucent glass look, avoid high reflections.\n\nHigh-saturation dopamine color palette, bold color clashes, large flat color blocks, bright but not over-glowing.\n\nClean white background, minimal space, only a soft oval shadow on the ground, no complex scene.\n\nFloating abstract graphic elements around the character: stars, squiggle lines, balls, cubes, icons, symbols — all rendered as soft rubber or paper props to enhance motion and design feel.\n\nSoft studio lighting, global illumination, soft shadows, low contrast, clean commercial render.\n\nC4D / Blender 3D illustration, stylized soft sculpture, matte clay material, fuzzy fabric texture, knitted surface detail, playful editorial 3D illustration, high quality.\n\n— Theme: a young guy mid-leap walking his happy beagle on a leash, weekend dog walk vibe"
  },
  {
    image: "./assets/ip/aibot/ai-bot-glossy-halloween.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%.\n\nUpper section: scene key visual (KV). The 6 characters are in a complete office setting, doing something together, with a sense of story and a cinematic feel, rather than posing for a staged shot.\nLower section: a pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The same 6 characters are shown in front view in both the upper and lower sections, with completely identical features. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\nUse the visual styles of 3D Translucent Jelly Art, Iridescent Glossy Material, Abstract Geometric Mascots, Inflated Soft Forms, and Designer Art Toys.\n\nOverall requirements: each character has a different silhouette, color, and personality, but they share the same design DNA—the same material, shape language, and facial feature system—so they clearly look like one family. Their overall character is simple, modern, and gender-neutral.\n\nNo text, logos, or watermarks. Do not imitate existing IP."
  },
  {
    image: "./assets/ip/aibot/ai-bot-punctuation.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%.\n\n**Upper section: scene key visual (KV).** The 6 characters are in a complete modern creative office setting, working together around a computer to accomplish something, with a clear storyline and a cinematic feel, rather than posing for a staged shot. The scene has realistic spatial depth, natural character interactions, soft ambient light, and cinematic composition.\n\n**Lower section: individual character display.** A pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The upper and lower sections contain exactly the same 6 characters, with consistent silhouettes, colors, facial features, and signature features. All characters are shown in front view, fully visible and uncropped. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\n**Character style:**\n\nUse a modern internet brand IP design style, combining 3D Fuzzy Art, Abstract Geometric Mascots, Soft Plush Sculpture, Playful Designer Toys, Minimal Character Design, and Whimsical Art Toys.\n\n**1. Shape language:**\\\nCreate 6 clearly recognizable characters based on simple, rounded, irregular abstract geometric shapes. Silhouettes may include distorted triangles, stars, clouds, teardrops, commas, flowers, and so on, but do not be confined to standard geometric shapes. Emphasize natural, free-form, slightly asymmetrical organic silhouettes, like soft, fluffy, unusually shaped plush cushions.\n\nUse an integrated head-and-body design: the entire body is one complete geometric shape, without a separate head, torso, arms, or legs. The bodies are full and plump, with soft edges and no sharp structures, and have a strong sense of 3D volume and sculpture.\n\n**2. Material texture:**\\\nUse refined 3D short-fur materials (Short Fuzzy Fur, Velvet Plush, Microfiber Flocking), with character surfaces covered in fine, evenly distributed, soft, tiny fibers. The fur has realistic layers of fibers and delicate light scattering, conveying a soft, fluffy, warm texture that makes people want to touch it.\n\nEmphasize the interesting contrast between plush material and abstract geometric shapes. The materials should be refined and delicate; do not use overly long, messy hair, do not make it look like real animal fur, and do not use plastic, rubber, or metallic textures.\n\n**3. Facial feature system:**\\\nUse a minimalist yet exaggerated cartoon facial feature system, with the eyes as the characters' main identifying features.\n\nThe eyes are raised, three-dimensional circular or oval structures, with white eye rims, colored eyelids, or simplified geometric pupils. Express different emotions through subtle variations in eye size, how open or closed the eyelids are, pupil direction, eye tilt, and so on.\n\nMouths are extremely simplified: they may be tiny dots, short arcs, or simple geometric cutouts, or there may be no mouth at all.\n\nThe characters' expressions have a slightly absurd and humorous quality, conveying different personalities such as endearingly dopey, sleepy, curious, cool, mischievous, and lazy. Do not use realistic human facial features, and do not add complex eyebrows, noses, or teeth.\n\n**4. Color system:**\\\nUse highly saturated yet soft modern candy colors (Soft Candy Colors, Pastel Gradients). Give each of the 6 characters a different main color, such as sky blue, cream yellow, dreamy purple, coral pink, mint green, and peach orange.\n\nEach character centers on one main color, with subtle variations in light and shade and natural soft gradients allowed on the surface, creating rich color layers through lighting and materials. The overall colors should be bright, clean, and harmonious, without complex patterns or large areas of hard decorative elements.\n\n**5. Character personalities:**\\\nThe 6 characters have clearly different silhouettes, colors, gazes, and personalities, but share a completely unified design language. Each character's individuality is expressed mainly through its geometric silhouette, eye design, subtle expression, and body posture, rather than through clothing, accessories, or complex body structures.\n\nThe characters have an innocent, quirky, humorous, lazy, and approachable quality, combining the friendliness of modern internet products with the artistic quality of contemporary designer toys. Cute but not childish, abstract but not difficult to understand.\n\n**6. Lighting and rendering:**\\\nUse high-quality 3D rendering, Soft Cinematic Lighting, Global Illumination, Ambient Occlusion, Subtle Rim Lighting, and Soft Shadows.\n\nIn the scene key visual, combine soft natural window light with warm indoor lighting to create a realistic spatial atmosphere and a cinematic feel.\n\nIn the individual character display, use consistent, soft studio lighting so that the fur fibers, rounded volumes, and subtle geometric structures are clearly visible. Display the characters floating, without ground shadows or display bases.\n\n**Overall requirements:**\\\nThe 6 characters have different silhouettes, colors, and personalities, but share the same design DNA—consistent short-fur material, rounded organic geometric shapes, a minimalist yet exaggerated facial feature system, and a refined 3D lighting language. It should be immediately clear that they belong to the same IP family.\n\nThe overall character is simple, modern, youthful, fun, and gender-neutral, with the visual quality of a premium internet brand IP and the collectible appeal of independent contemporary art toys.\n\nStrictly maintain consistency between the upper scene and the lower character designs. There must be no incorrect character counts, duplicate characters, or inconsistent character features.\n\nNo text, logos, or watermarks. Do not imitate existing IP. No clothing, complex accessories, real animal bodies, or traditional humanoid cartoon structures."
  },
  {
    image: "./assets/ip/aibot/ai-bot-fuzzy-friends.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "“Generate in the style shown in the image: a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%.\\\n\\\nUpper section: scene key visual (KV). The 6 characters are in a complete office setting, doing something together, with a sense of story and a cinematic feel, rather than posing for a staged shot.\\\nLower section: a pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The same 6 characters are shown in front view in both the upper and lower sections, with completely identical features. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\\\n**Overall visual requirements:**\nModern internet brand IP design, 3D Fuzzy Art, Abstract Geometric Mascots, Shaggy Fur, Minimal Googly Eyes, Thin Stick Legs, Whimsical Designer Toys, Playful Character Design, Soft Cinematic Lighting.\n\nEmphasize the interesting contrast between abstract geometric shapes and plush materials. The visuals should be simple, modern, and international, combining the collectible appeal of contemporary toys with the emotional expressiveness of animated films.\n\\\nOverall requirements: each character has a different silhouette, color, and personality, but they share the same design DNA—the same material, shape language, and facial feature system—so they clearly look like one family. Their overall character is simple, modern, and gender-neutral.\\\n\\\nNo text, logos, or watermarks. Do not imitate existing IP."
  },
  {
    image: "./assets/ip/aibot/ai-bot-colorful-team-variant.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections, with the upper section occupying 40% and the lower section occupying 60%.\n\n**Character design:**\\\nUse simple, rounded, abstract geometric shapes, with bodies like soft candies, jelly, or rubber toys, plump volume, full silhouettes, and no sharp edges. The 6 characters use purple, coral red, sky blue, pink, bright yellow, and lime green respectively, in a highly saturated candy color palette.\n\nEach character has a different body silhouette and signature features, such as cloud shapes, antenna shapes, teardrop shapes, ring shapes, block shapes, and flower shapes. The facial features consistently use exaggerated, protruding large white eyeballs, black pupils, and minimalist small mouths, with different gaze directions and expressions conveying lively, curious, clever, mischievous, endearingly dopey, and other personalities.\n\n**Materials and rendering:**\\\nA 3D soft vinyl toy texture, soft, delicate, and slightly matte, with extremely subtle embossed surface textures, soft subsurface scattering, full volume, rounded bevels, and refined 3D rendering at the level of a cartoon animated film. A unified material system and visual language, without metallic or mechanical qualities or complex structures.\n\n**Upper 40%: scene key visual (KV)**\\\nThe 6 characters gather in a warm, bright creative studio, exploring, discussing, and creating together around a laptop. The characters are naturally staggered in depth: some curiously observe the screen, some communicate excitedly, and some think intently, forming a moment of teamwork with a sense of story, rather than a neatly staged shot.\n\nThe environment includes a wooden desktop, a desk lamp, windows, greenery, bookshelves, and a small amount of stationery. Afternoon sunlight enters through a side window, and the desk lamp provides warm local illumination, creating soft, natural layers of light and shadow, realistic contact shadows, depth of field, and a cinematic atmosphere. The composition is rich but not cluttered, with a clear visual focal point.\n\n**Lower 60%: standard character display**\\\nA pure black background, with no gradients or textures. The 6 characters are neatly arranged in a grid of 3 columns × 2 rows, with one character in each cell, facing the camera, similar in size, centered, evenly spaced, and surrounded by ample negative space.\n\nThe upper and lower sections must contain exactly the same 6 characters, with body silhouettes, colors, facial features, materials, and signature features corresponding one-to-one, without adding or omitting any.\n\n**Overall visual style:**\\\nModern internet brand IP design, an international visual aesthetic, minimalist, lively, fun, youthful, and gender-neutral. Vivid candy colors, unified design DNA, combining the collectible appeal of contemporary toys with the emotional expressiveness of animated films.\n\nConnect the upper and lower sections with a clean, straight line, without borders. No text, letters, numbers, logos, or watermarks. Do not imitate existing well-known IP.\n\n3:4 image ratio, high-definition, refined rendering."
  },
  {
    image: "./assets/ip/aibot/ai-bot-cosmic-magic.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%.\n\nUpper section: scene key visual (KV). The 6 characters are in a complete office setting, doing something together, with a sense of story and a cinematic feel, rather than posing for a staged shot.\nLower section: a pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The same 6 characters are shown in front view in both the upper and lower sections, with completely identical features. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\nCharacter material: 3D plush\nCharacter style: simple geometric shapes\n\nOverall requirements: each character has a different silhouette, color, and personality, but they share the same design DNA—the same material, shape language, and facial feature system—so they clearly look like one family. Their overall character is simple, modern, and gender-neutral.\n\nNo text, logos, or watermarks. Do not imitate existing IP."
  },
  {
    image: "./assets/ip/aibot/ai-bot-geometric-studio.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters for the internet in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%. The work of an internet visual designer.\n\nUpper section: scene key visual (KV). The 6 characters are in a complete office setting, doing something together, with a sense of story and a cinematic feel, rather than posing for a staged shot.\nLower section: a pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The same 6 characters are shown in front view in both the upper and lower sections, with completely identical features. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\nCharacter material: 3D\nCharacter style: simple, quirky, abstract geometric shapes. No arms, no expressions, only eyes.\n\nOverall requirements: each character has a different silhouette, color, and personality, but they share the same design DNA—the same material, shape language, and facial feature system—so they clearly look like one family. Their overall character is simple, modern, and gender-neutral.\n\nNo text, logos, or watermarks. Do not imitate existing IP."
  },
  {
    image: "./assets/ip/aibot/ai-bot-soft-companions.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%.\n\nUpper section: scene key visual (KV). The 6 characters are in a complete office setting, doing something together, with a sense of story and a cinematic feel, rather than posing for a staged shot.\nLower section: a pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The same 6 characters are shown in front view in both the upper and lower sections, with completely identical features. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\nCharacter material: 3D plush\nCharacter style: simple geometric shapes\n\nOverall requirements: each character has a different silhouette, color, and personality, but they share the same design DNA—the same material, shape language, and facial feature system—so they clearly look like one family. Their overall character is simple, modern, and gender-neutral.\n\nNo text, logos, or watermarks. Do not imitate existing IP."
  },
  {
    image: "./assets/ip/aibot/ai-bot-nature-camp.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters in a 3:4 portrait image, divided into upper and lower sections: the upper section occupies 40%, and the lower section occupies 60%.\n\nUpper section: scene key visual (KV). The 6 characters are in a complete setting, experiencing a moment together, with a sense of story and a cinematic feel, rather than posing for a staged shot.\nLower section: a pure black background, with the 6 characters displayed individually, neatly arranged in 3 columns and 2 rows. The same 6 characters appear in the upper and lower sections, with completely identical features.\n\nInvent the characters freely: each character has a different silhouette, color, and personality, but they share the same design DNA—the same material, shape language, and facial feature system—so they clearly look like one family. Their overall character is approachable, simple, and gender-neutral.\n\nThe composition must be spacious: the characters should occupy a small proportion of the image. Do not enlarge them, fill the frame with them, or place them against the edges. Each character should occupy only about half of its allotted area. Leave plenty of empty space between characters and between the characters and the image edges, giving the overall composition ample breathing room.\n\nNo text, logos, or watermarks. Do not imitate existing IP."
  },
  {
    image: "./assets/ip/aibot/ai-bot-colorful-team.webp",
    cat: "ip",
    sub: "AI Bot IP 角色设计",
    ratio: "3 / 4",
    prompt:
      "Generate a set of 6 original AI agent Bot IP characters. Use a 3:4 portrait image, divided into upper and lower sections within a single image: the upper section occupies 40% of the image height, and the lower section occupies 60% of the image height.\n\nLayout (must be followed strictly):\nUpper 40%: scene key visual (KV), a complete scene image that fills the upper area, without white borders. Invent a setting suitable for this group of characters and a specific event taking place, so that all 6 characters are truly living in the scene and doing something together, like a moment captured from an animated film, rather than posing for a group photo facing the camera. Requirements: a complete environment (the space, furniture, and props all serve this event); depth through foreground, middle ground, and background; cinematic lighting and atmosphere created by real light sources within the scene (such as a lamp or light from a window); and a clear visual focal point. The characters interact realistically with the environment (operating something, carrying things, watching, cooperating), and their poses, gazes, and positions all serve the event, rather than lining up and looking at the camera. The characters' sizes in the scene vary naturally according to spatial perspective. They are illuminated by the environmental light, with realistic contact shadows beneath their feet and around them, as if they have always belonged in this space.\nLower 60%: individual displays of the 6 characters, arranged in a neat grid of 3 columns and 2 rows, with 6 cells in total and only 1 character in each cell, centered, front-facing, in a standard standing pose, consistent in size, and evenly spaced, against a pure white background with neutral, even lighting, contrasting with the scene above.\nThe upper and lower sections contain the same 6 characters: each character below must correspond one-to-one with a character in the scene above, with exactly the same silhouette, main color, facial features, material, and distinguishing features. Do not add, omit, or duplicate characters, or change their colors or shapes. The lower section is the standard character appearance reference, while the upper section shows them within the story. Poses and expressions may differ, but identifying features must not change.\nUse a clean, straight dividing line between the upper and lower sections, without borders, cards, or a title area. Do not add any typographic text anywhere in the image. Leave generous spacing and empty space between characters.\n\nUnified rules (must be followed strictly):\nAll characters share the same design DNA: the same soft material, the same rounded shape language with no sharp corners, the same minimalist facial feature system, and the same 3D rendering style; no sense of gender or age; an approachable, endearingly dopey character with a hint of intelligence; and basically consistent body proportions across the characters.\n\nAreas for creative freedom (do not use a template):\nInvent each character's body silhouette, main color, expression, and distinguishing features, and also invent the subject of the upper scene, its event, and the interactions between characters. Each character must be clearly different: no repeated silhouettes, main colors, or personalities, so that they can be distinguished at a glance; yet together, they must clearly look like one family. There are no restrictions on how to differentiate them: use silhouettes, colors, expressions, local features, or minimalist small accessories. Do not rely on complex props or clothing.\n\nBackground: the lower section has a pure white background, #FFFFFF, with no gradients, textures, or scenery. The upper section has a complete scene background, filling the area without empty space, with colors and lighting that contrast distinctly with the pure white section below.\n\nDo not include: any text, letters, numbers, brand logos, or watermarks; do not imitate any existing well-known IP; no metallic robots, circuits, mechanical structures, or glowing high-tech aesthetics (scene props are not subject to this restriction, but the characters themselves must not become mechanical); no realistic humans, complex facial features, extra limbs, or frightening or aggressive expressions.\nOutput dimensions: 3:4 portrait."
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-gonk.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：GONK\n形象描述：酸性绿哑光梨形软胶丑萌怪；小白圆眼远距铺开、一字横线嘴两颗小长方门牙微露；紫坑条针织帽配黑底白字织唛「WHATEVER.」；米色斜挎腰包黑背带、黑底白字贴片「MEH.」；腰侧紫色 X 形创可贴。\n品牌主色：磨砂纯黑（Hero 满铺底）+ 酸性绿角色主体 + 酸绿霓虹作强调色（副标/手绘箭头）。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈梨形略带坠感，上窄下宽；\n四肢短粗、手臂略长自然下垂，站姿发呆松弛，不要卖萌站姿。\n非教条动物物种，形体像被指尖捏过一道的软胶水怪；可有极短小尾巴或无尾均可。\n\n面部特征极简：\n白眼珠面积极小直线嘴，两颗小长方白牙呆板外露；\n眼神放空、呆滞、无所谓，不要笑意。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n紫针织帽、「WHATEVER.」帽标、米色腰包「MEH.」贴片、撞色黑背带与紫色 X 创可贴。\n配件文字可以是 “MEH.” / “WHATEVER.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色为主，黑底与酸绿主角强对比点缀紫/米色辅料。\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，像高端潮玩官方设定页。\n\n【整体版式】\n竖版白色外框画布，黑色+白色两块区域上下结构感干净；\n2个区块上下堆叠，整体像潮玩品牌官方角色发布页但更怪更潮。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景使用磨砂纯黑高对比满铺。\n左上角巨大粗体白无衬线英文名 “GONK”。\n紧接一行酸绿色副标口号：Not fast. Not smart. Just GONK.\n其下 2-3 行更小白色冷幽默简介，例如：\n\"Usually hungry.\nOften confused.\nAlways GONK.\"\n左下角可加手绘感酸绿色随意弯箭头指向角色，增加独立 zine 气质。\n右侧酸性绿角色上半身或四分之三特写，占 Banner 右侧体积约 60% 以上，下缘裁切溢出分割线，氛围松弛怪萌。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰或白色圆角卡片细描边，左上黑字 “Multiview”。\n横向四格等距：正视、侧视、后视、45°，全身、等比例等高、纯白底无投影。\n每格下缘可用淡灰小字 Front / Side / Back / 45°。\n保持同一丑萌比例、同一配件与呆萌无所谓表情。"
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-droop.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：DROOP\n形象描述：梨形酸性绿软胶怪诞生物（非现实物种），宽距小白圆眼、蜜桃色扁管大嘴，长臂短腿松弛下垂；戴蓝色小号锥形派对帽与印「whatever.」黑色斜挎迷你腰包。\n品牌主色：酸性绿（高饱和、偏潮流的亮黄绿，可作整屏 Hero 主色块）。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈梨形略带坠感，上窄下宽，\n四肢比例怪诞：手臂偏长自然下垂过腰际，小腿短粗呈柱形，脚简化成圆钝块，\n站姿微微发呆或松弛站立，不要标准可爱站姿。\n\n身体不做甜美圆润「萌系」比例，更像被轻轻捏过的软胶怪诞小兽。\n\n面部特征极简：\n小圆眼或大小略不一致的眼睛，\n眼神空白、呆滞、无辜但有点怪；\n嘴巴可以是很小的一条横线，或轻微下撇；\n表情不要开心，不要卖萌，要“冷静、发呆、无所谓”。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n比如小号斜挎包印白字 “whatever.”、歪戴蓝色锥形小派对帽、圆形木色帽顶小球。\n配件文字可以是 “MEH.” / “NO PLANS” / “OK.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色：\n主体色使用高饱和但偏潮流的颜色，\n局部色与主体色形成清晰但不刺眼的对比，\n例如：酸性绿身体 + 奶油白角 + 深灰配件；\n番茄橙背景 + 米白角 + 黑色小包；\n电光蓝身体 + 芥末黄配件 + 米白腹部。\n\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，\n像高端潮玩品牌官方角色设定图。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页，\n但视觉气质更怪、更潮、更有独立设计师玩具感。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景填充品牌主色，使用高饱和纯色块，\n左上角放置角色英文名，粗体大字，白色或深色，\n字体要厚重、现代、有潮流品牌感。\n\n名称下方配2-3行小字角色简介，字体轻盈，\n文案不要太可爱，要有冷幽默，例如：\n\"DROOP is not in a rush.\nHe likes slow days, weird snacks, and even weirder dreams.\nStay chill. Stay you.\"\n\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，\n底部自然溢出Banner边界，形成裁切感构图。\n角色不要摆可爱姿势，可以微微歪头、眼神放空、手臂自然下垂，\n氛围怪萌、松弛、有记忆点。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置 “Multiview” 英文标题。\n\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图。\n四个角色等比例、等高度、纯白底，无阴影。\n每个视图都要保持同一个丑萌角色特征：\n轻微失衡的五官、松弛下垂的手臂、不完美但有趣的体态、简洁潮流配件。"
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-blurp.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：BLURP\n形象描述：青绿色蛋形丑萌玩偶，头身近似 1:1；大白圆眼小瞳孔呆滞、粉红色宽椭圆嘴露两颗小方牙；戴蓝色坑条针织帽配白底黑字贴片「NO PLANS」与明黄色斜挎腰包（黑拉链、白底贴片「MEH.」）。\n品牌主色：番茄橙（Hero Banner 高饱和主底色）与高饱和青绿色角色主角撞色。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈立姿蛋形／略扁椭球，\n四肢短促微外八，手心脚简化为圆滑小块，站姿呆滞松弛。\n\n不做动物教条物种，整体像一颗带点「喝醉」站姿的潮流软胶蛋仔；可有极短小尾巴或无尾均可。\n\n面部特征极简：\n小圆眼或大小略不一致的眼睛，\n眼神空白、呆滞、无辜但有点怪；\n嘴巴可以是很小的一条横线，或轻微下撇；\n表情不要开心，不要卖萌，要“冷静、发呆、无所谓”。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n比如蓝针织帽 +「NO PLANS」织唛贴片、黄色迷你胸前腰包 +「MEH.」贴片。\n配件文字可以是 “MEH.” / “NO PLANS” / “OK.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色：\n主体色使用高饱和但偏潮流的颜色，\n局部色与主体色形成清晰但不刺眼的对比，\n例如：酸性绿身体 + 奶油白角 + 深灰配件；\n番茄橙背景 + 米白角 + 黑色小包；\n电光蓝身体 + 芥末黄配件 + 米白腹部。\n\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，\n像高端潮玩品牌官方角色设定图。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页，\n但视觉气质更怪、更潮、更有独立设计师玩具感。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景填充品牌主色，使用高饱和纯色块，\n左上角放置角色英文名，粗体大字，白色或深色，\n字体要厚重、现代、有潮流品牌感。\n\n名称下方配2-3行小字角色简介，字体轻盈，\n文案不要太可爱，要有冷幽默，例如：\n\"BLURP lives for questionable ideas and midnight snacks.\nProbably not a hero.\nDefinitely unique.\"\n\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，\n底部自然溢出Banner边界，形成裁切感构图。\n角色不要摆可爱姿势，可以微微歪头、眼神放空、手臂自然下垂，\n氛围怪萌、松弛、有记忆点。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置 “Multiview” 英文标题。\n\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图。\n四个角色等比例、等高度、纯白底，无阴影。\n每个视图都要保持同一个丑萌角色特征：\n轻微失衡的五官、松弛下垂的手臂、不完美但有趣的体态、简洁潮流配件。"
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-nana-weirdcute.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片。\n\n【角色基础设定】\n角色名称：NaNa\n形象描述：犀牛抽象丑萌化：哑光灰磨砂软胶身体、米色钝短独角与小圆鼻孔；挎番茄橙迷你腰包黑色贴片白字「MEH.」，腹侧米色创可贴小点缀。\n品牌主色：番茄橙（Hero Banner）+ 哑光灰犀牛主体色 + 黑/米色低对比点缀。\n\n【角色气质】\n整体不是传统可爱，不要甜美，不要萌宠感。\n角色风格是“丑萌 ugly-cute / weird cute / awkward charm”，\n有一点笨拙、有一点无厘头、有一点反差幽默，\n像独立设计师玩具、潮流艺术玩偶、怪诞但高级的收藏级IP。\n角色看起来不完美，但非常有记忆点。\n\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，\n头部圆润夸张，但五官比例故意轻微失衡，\n整体轮廓像一个笨拙的软胶怪物玩偶。\n\n躯干饱满呈蛋形或不规则水滴形，\n四肢短促但略微下垂，手臂偏长一点，动作松弛无力，\n站姿微微呆滞，不要标准可爱姿势。\n\n犀牛特征需要被抽象化处理：\n短粗的犀牛角，位置略夸张；\n小耳朵或不对称耳朵；\n圆钝鼻部，鼻孔很小；\n身体整体像一只被压扁一点的软胶犀牛。\n\n面部特征极简：\n小圆眼或大小略不一致的眼睛，\n眼神空白、呆滞、无辜但有点怪；\n嘴巴可以是很小的一条横线，或轻微下撇；\n表情不要开心，不要卖萌，要“冷静、发呆、无所谓”。\n\n可以加入1-2个增强丑萌记忆点的小配件：\n比如橙色短款斜挎包印「MEH.」哑光贴片、米色 X 形小创可贴贴纸、撞色腰包细黑背带。\n配件文字可以是 “MEH.” / “NO PLANS” / “OK.” / “SLOW” 等短句。\n配件要简洁，不要复杂。\n\n【材质与颜色】\n全身哑光磨砂软胶质感，轻微手工捏塑感，\n避免高光、避免强反射、避免玻璃感。\n表面可以有非常细微的橡皮泥纹理、软胶颗粒感、轻微不平整感。\n\n配色控制在2-3色：\n主体色使用高饱和但偏潮流的颜色，\n局部色与主体色形成清晰但不刺眼的对比，\n例如：酸性绿身体 + 奶油白角 + 深灰配件；\n番茄橙背景 + 米白角 + 黑色小包；\n电光蓝身体 + 芥末黄配件 + 米白腹部。\n\n柔和摄影棚散射光，无强投影，\n商业产品级3D渲染精度，\n像高端潮玩品牌官方角色设定图。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页，\n但视觉气质更怪、更潮、更有独立设计师玩具感。\n\n【区块一 —— Hero Banner，占总高约60%】\n背景填充品牌主色，使用高饱和纯色块，\n左上角放置角色英文名，粗体大字，白色或深色，\n字体要厚重、现代、有潮流品牌感。\n\n名称下方配2-3行小字角色简介，字体轻盈，\n文案不要太可爱，要有冷幽默，例如：\n\"NaNa takes life slowly.\nBig body. Small brain. Zero rush.\nJust NaNa.\"\n\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，\n底部自然溢出Banner边界，形成裁切感构图。\n角色不要摆可爱姿势，可以微微歪头、眼神放空、手臂自然下垂，\n氛围怪萌、松弛、有记忆点。\n\n【区块二 —— 多视图，占总高约40%】\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置 “Multiview” 英文标题。\n\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图。\n四个角色等比例、等高度、纯白底，无阴影。\n每个视图都要保持同一个丑萌角色特征：\n轻微失衡的五官、松弛下垂的手臂、不完美但有趣的体态、简洁潮流配件。"
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-zazi.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "Create an image: a professional cartoon IP character design sheet, portrait layout 2:3. Bold white logotype \"ZAZI\" top-left on a saturated purple hero panel plus short English personality blurb below. Upper area: hero 3D render of a playful rounded purple cartoon dragon toy — small yellow horns, big round black eyes, tiny smile with one tooth, cream ribbed belly, yellow scarf with star charm, small wings, waving pose; soft matte PVC / vinyl toy shading, Behance mascot quality. Lower \"Multiview\" band on white: four turnaround renders (front, side, back, three-quarter) consistent proportions, toy-like collectible style. Unified lighting, ultra clean composition, exhibition-grade portfolio sheet."
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-moko.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "Create an image: cartoon IP mascot design sheet, 2:3 vertical. Vibrant flat green hero block with oversized white headline \"MOKO\" and short English biography text underneath. Upper 3D hero close-up — soft pastel green elephant with round ears and tiny eyes, wearing cream straw sun hat with leaf badge and matching cross-body pouch; cuddly plush / vinyl toy rendering, cheerful modern branding. Bottom white section labeled \"Multiview\": four poses (front, left profile, back, mirrored three-quarter) showing hat, strap, ears and tail continuity. Cohesive toy-scale proportions, crisp studio renders, mascot brand-book layout."
  },
  {
    image: "./assets/ip/cartoon-ip/ip-cartoon-nana.webp",
    cat: "ip",
    sub: "卡通IP",
    ratio: "2 / 3",
    prompt:
      "生成一张国际3D IP 设计大师做的IP 竖版 2:3 的图片\n\n【角色基础设定】\n角色名称：NaNa\n形象描述：犀牛\n品牌主色：明黄色（高饱和度、活泼醒目，可与浅米色犄角/肚皮作低对比点缀）\n\n【造型结构】\n3D盲盒潮玩IP风格，头身比约1:1，头部圆润夸张，\nIP整体设计有夸张感，独特感，现代感，\n躯干饱满呈蛋形，四肢短促圆柱状，线条简洁流畅。\n面部特征极简，大号圆形眼睛，表情克制呆萌。\n全身哑光磨砂软胶质感，无高光无反射，\n配色控制在2-3色，局部色与主体色保持低对比度和谐关系。\n柔和摄影棚散射光，无强投影，商业产品级渲染精度。\n\n【整体版式】\n竖版白色为基础底色，\n2个区块上下堆叠排列，\n整体风格干净专业，类似潮玩品牌官方角色设定发布页。\n\n区块一——Hero Banner（占总高约60%）：\n背景填充品牌主色（与角色主体颜色一致的饱和色块），\n左上角放置角色英文名，粗体大字，白色或深色，\n名称下方配2-3行小字角色简介，字体轻盈，\n右侧呈现角色上半身或四分之三视角特写，\n角色体积占Banner右侧60%以上，底部自然溢出Banner边界，\n形成裁切感构图，氛围活泼。\n\n区块二——多视图（占总高约40%）：\n浅灰色或白色圆角矩形卡片，卡片有细描边，\n卡片顶部左对齐放置\"Multiview\"英文标题，\n卡片内横向等距排列四个角色视图，\n从左到右依次为正视图、侧视图、后视图、45°视图，\n四个角色等比例、等高度、纯白底，无阴影。"
  },
  {
    image: "./assets/ip/soft-sculpture/lavender-sherpa-and-shades.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D designer-toy portrait of a broad-shouldered man standing with his arms folded. Give him a close buzz cut, thick oval black sunglasses, a black stud earring, and a huge tightly curled black beard and mustache. Dress him in an oversized pale lavender sherpa jacket with balloon sleeves and black buttons, wide cropped black trousers, and exaggerated black lug-sole boots. Use a slightly low camera angle against a seamless vermilion-orange studio backdrop. Light the curled fleece and beard to bring out their texture against the smooth matte face and boots."
  },
  {
    image: "./assets/ip/soft-sculpture/silver-bob-record-collector.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 three-quarter-view portrait of a relaxed 3D designer-toy record collector, framed from the head to the upper thighs. Give him a silver-lavender wavy bob with a full fringe, chunky periwinkle visor sunglasses with dark lenses, a dark beard, and a subtle smile. Dress him in a fuzzy cobalt sweater with oversized sleeves and cream trousers. Have him cradle a black vinyl record tilted toward the camera, with a pale blue center label and several chunky silver rings visible on his fingers. Use an icy-blue seamless backdrop and soft diffuse light to reveal the fine sweater fibers and concentric record grooves."
  },
  {
    image: "./assets/ip/soft-sculpture/lavender-curls-skater.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D designer-toy portrait of a laid-back skater sitting on a low pale concrete block. Give him a cloud of springy lavender curls, oversized round white glasses, half-lidded eyes, a long coral nose, a small black mustache, and a lopsided grin. Dress him in an oversized cobalt-and-ivory striped knit sweater, wide cobalt trousers, and chunky cream sneakers. Rest a black skateboard with a layered wood edge and cream wheels across his lap, with one hand draped over the deck. Use a three-quarter view, a pale periwinkle studio background, and soft light to separate the yarn, curls, matte skin, and concrete."
  },
  {
    image: "./assets/ip/soft-sculpture/neon-knit-mechanic.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body portrait of a mischievous 3D designer-toy mechanic. Give her matte coral skin, cobalt eye makeup, silver ear and septum rings, and pale lavender hair with blunt bangs, two pointed tufts, and thick braids that curl outward. Dress her in an oversized neon-chartreuse cable-knit turtleneck with cobalt motifs, a blue tool harness and coiled cable, and matching lace-up boots with enormous white lug soles. Let a long blue adjustable wrench hang beside one leg. Use a seamless periwinkle set and diffused light that reveals the yarn fibers, molded skin, and metal hardware."
  },
  {
    image: "./assets/ip/soft-sculpture/cobalt-puffer-fashion.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D fashion portrait of a platinum-blonde figure with blunt bangs and sculpted waves, chin lowered and blue eyes looking up. Build an oversized electric-blue coat from interlocking, velvety padded lobes that swell around the shoulders and sleeves. Add a vivid orange top, an asymmetric chartreuse pleated skirt, an orange sock, and chunky ivory platform sneakers. Drape a glittery violet mini bag on a fine silver crossbody chain and put a black phone in one hand. Center the figure against a seamless lavender-blue backdrop with soft studio light that defines each padded volume."
  },
  {
    image: "./assets/ip/soft-sculpture/sparkler-devil.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body portrait of a lanky purple 3D designer-toy devil holding a lit sparkler beside his head. Give him two tall black horns curving upward, pointed ears, indigo curls, amber half-lidded eyes, a crooked smile, and an arrow-tipped tail curling out to one side. Dress him in an oversized cobalt chunky-knit sweater covered in yellow and orange stars, a black studded belt, cuffed blue jeans with a ripped knee, and ivory fleece slippers. Use a seamless golden-orange studio set, warm rim light, and distinct textures for the knit stitches, matte skin, and smooth horns."
  },
  {
    image: "./assets/ip/soft-sculpture/blue-hoodie-stare.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 3D designer-toy portrait of a shaved-headed character hunched on a low white folding stool, knees apart and hands clasped inside enormous white cuffs. Give him a cobalt-blue balloon-sleeved hoodie, matching shorts, white sneakers, prominent ears, and sharply angled brows for a defiant stare. Center the full body low in the frame against a seamless cornflower-blue studio backdrop. Use smooth matte soft-vinyl surfaces, diffused light, and a gentle floor shadow."
  },
  {
    image: "./assets/ip/soft-sculpture/redhead-in-black.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 studio portrait of a stylized 3D collectible with chunky copper curls, drooping eyes, a long nose, and a weary expression. Seat him low with his knees bent, one cheek resting in his palm and the other hand hanging loosely over his knee. Dress him in a roomy black suit with wide trousers and plain black shoes. Use a three-quarter full-body composition, a seamless off-white background, matte sculpted surfaces, and soft shadows that preserve the folds of the black fabric."
  },
  {
    image: "./assets/ip/soft-sculpture/spa-day-elder.webp",
    cat: "ip",
    sub: "软雕塑角色",
    ratio: "2 / 3",
    prompt:
      "Render a grumpy elderly spa guest as a rounded 3D designer toy in a vertical 2:3 studio portrait. Give him an enormous cloudlike white beard and mustache, a tall white towel turban, a padded white bathrobe, and oversized matching slippers. Seat him with knees together and a cucumber slice pinched in each fist, looking sideways under heavy brows. Set the ivory figure against a saturated cornflower-blue seamless backdrop with soft side lighting and a faint grounding shadow."
  },
  {
    image: "./assets/ip/plush-characters/cloud-knit-dog-walker.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D fashion-toy portrait of an eccentric dog walker with cloud-white hair, white cat-eye frames with reddish lenses, and sculptural round earrings. Wrap the character in an enormous ivory coat made of thick, loosely braided wool, over pale trousers and colorful chunky shoes. Lead three tiny fluffy white dogs on fine white leashes across the bottom of the frame. Use a deep cobalt seamless background and diffuse studio lighting that brings out the oversized knit stitches."
  },
  {
    image: "./assets/ip/plush-characters/orange-haired-guitarist.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Render a lanky 3D toy musician perched on butter-yellow steps, with a long nose, an orange halo of curly hair, white over-ear headphones, and a shaggy lilac knit top. Put a small cobalt electric guitar across his lap, loose cream trousers over chunky tan sneakers, and a miniature amp beside him. Frame the full body vertically at 2:3 against a pale sky-blue set with a diagonal stair rail. Light the curls, yarn loops, and suede-like footwear with gentle daylight."
  },
  {
    image: "./assets/ip/plush-characters/pink-afro-lounge.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 seated fashion portrait of a stylized 3D doll whose giant cotton-candy-pink afro dominates the upper half of the frame. Add narrow pink oval glasses, silver statement earrings, a bored sideways stare, and an oversized powder-blue fuzzy knit sweater over pale jeans. Sink her into a lime-green chair and keep the blue setting understated. Use soft frontal light, sculpted facial features, and a fine halo of flyaway plush fibers."
  },
  {
    image: "./assets/ip/plush-characters/green-punk-florist.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 waist-up 3D character portrait of a scowling florist with spiky grass-green hair, thick green brows and mustache, a very long pink nose, and a small nose ring. Dress him in a textured green knit cardigan and gray-green fingerless gloves. Give him a small sprig to hold and surround him with dense pink, yellow, orange, and violet flowers against a clear blue sky. Use shallow depth of field and soft daylight to separate the tactile yarn and hair from the floral backdrop."
  },
  {
    image: "./assets/ip/plush-characters/ringside-orange-juice.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 3D character portrait of a compact, sulky figure sipping orange juice through a straw beside white boxing-ring ropes. Give her a sharp cobalt-blue cat-ear-shaped hairstyle, large white disc earrings, a pale pink fuzzy outfit with balloon sleeves, and oversized multicolor running shoes. Use a low full-body framing with a pale blue background and a warm ivory ring floor. Render fine fuzzy fibers, soft studio shadows, and a dry sideways glare."
  },
  {
    image: "./assets/ip/plush-characters/blue-coat-fashion-grande-dame.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D fashion portrait of a stern older doll with an enormous cloud-white bouffant, angular white cat-eye glasses, and chunky gold earrings. Bundle her in an oversized cobalt teddy coat with a broad collar and a white tasseled tie, with only tiny pale pointed shoes peeking underneath. Set her against a minimal cool-gray interior with a subtle blue accent. Emphasize the dense brushed-pile texture and soft, even studio lighting."
  },
  {
    image: "./assets/ip/plush-characters/cobalt-skate-kid.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 3D collectible portrait of a mischievous young skater with an electric-blue bowl cut, sharply slanted brows, and silver hoop earrings. Seat the figure low in an oversized fuzzy cobalt-and-white striped sweater and heavy white platform sneakers, sipping through a straw from a small cup. Let the skateboard and its pale wheels peek out behind the figure on the right. Use a periwinkle seamless studio set with cool diffuse lighting and visible sweater fibers."
  },
  {
    image: "./assets/ip/plush-characters/striped-sweater-drummer.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D character portrait of a relaxed drummer with tousled ivory hair, blue over-ear headphones, small orange-red sunglasses, and an oversized fuzzy cobalt sweater with broad white stripes. Sit him at a compact blue drum kit on white stands, one stick raised and the other poised over a drumhead. Add loose blue trousers, off-white sneakers, and a takeaway cup near the kit. Use a seamless sky-blue set with gentle side lighting and soft floor shadows."
  },
  {
    image: "./assets/ip/plush-characters/orange-sherpa-basketball-fan.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 3D collectible portrait of a stocky basketball fan reclining on a small folding chair. Give him short blond curls, narrow wraparound sunglasses, and a bulbous tangerine sherpa outfit with varsity-blue lettering and the number 37. Add white socks, exaggerated cream high-tops, and a small cream-colored ball balanced on a raised finger. Use a three-quarter full-body view on a simple periwinkle backdrop with soft side lighting that catches the fleece pile."
  },
  {
    image: "./assets/ip/plush-characters/periwinkle-cloud-head.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D art-toy portrait of a tiny seated character under an enormous horizontal oval of fluffy periwinkle hair. Let only a sliver of the pink face and tired eyes show under the hair. Match the hair with a pear-shaped fuzzy blue sweater and enormous ribbed cuffs, then contrast them with skinny pink shins and huge white sneakers. Center the nearly symmetrical silhouette on a pale blue seamless set with soft, cool lighting and delicate rim-lit fibers."
  },
  {
    image: "./assets/ip/plush-characters/butter-yellow-ponytail.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 3D fashion-toy portrait of a woman with an enormous butter-yellow fuzzy ponytail, a matching oversized knit sweater, and white platform sneakers. Sit her cross-legged on a low blue trackside bench with a red-orange drink and a straw, looking sideways from under half-lowered lids. Use a saturated royal-blue sports set with crisp white lane lines, a three-quarter view, and soft light on the wool and fleece."
  },
  {
    image: "./assets/ip/plush-characters/cream-knit-mustache.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 full-body 3D portrait of a portly toy figure in a nearly monochrome palette of oatmeal and cream. Give him a wide horizontal tuft of curly fleece hair, a dramatic curled mustache, and half-lidded pink eyes. Dress him in an oversized cable-knit turtleneck and tapered beige trousers, and place a miniature white teacup in one hand. Set the upright figure against a muted blue-gray studio background with diffuse light that distinguishes the yarn, curls, and matte skin."
  },
  {
    image: "./assets/ip/plush-characters/scarlet-coat-violinist.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 3D fashion-toy portrait of a sharp-eyed violinist with a glossy black bob and blunt bangs, seated cross-legged on a pale block. Dress her in an oversized scarlet plush coat and tall black platform boots. Place a saturated cobalt violin at her shoulder, with the blue bow cutting diagonally across the composition. Use a clean pale periwinkle backdrop, a centered full-body view, and soft studio light that separates the fuzzy coat from the smooth boots and instrument."
  },
  {
    image: "./assets/ip/plush-characters/plush-illustrator-and-puppy.webp",
    cat: "ip",
    sub: "毛绒角色",
    ratio: "2 / 3",
    prompt:
      "Create a vertical 2:3 cozy 3D character scene of a curly-haired illustrator drawing on a tablet with a stylus, seated in a rounded cream beanbag with a tiny white fluffy dog tucked beside her. Give her blue-and-white headphones, white sunglasses perched on her head, a cobalt fuzzy sweater with a white daisy on the sleeve, loose cream pants, and white sneakers with blue stripes. Add stacked books, a daisy mug, a blue dome lamp, and a monstera against a cornflower-blue room. Use soft daylight and tactile knit and fleece textures."
  },
  {
    image: "./assets/illustration/surreal-narrative/three-coats-at-dusk.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 surreal fashion scene with three figures seen from behind at dusk, shoulder to shoulder in oversized orange coats patterned with ragged black and navy diamonds. Let bare lower legs and pale boots emerge beneath the repeating silhouettes. Place them among dark green rolling hills and tall yellow buds, with a pale moon in a salmon-orange sky and a heavy charcoal cloud. Use opaque gouache-like paint, visible broad strokes, flattened perspective, and a quiet folk-tale mood."
  },
  {
    image: "./assets/illustration/surreal-narrative/witch-in-leopard-coat.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 storybook fashion portrait of a pale woman with long blue-black hair, red cheeks, and a broad, drooping black witch hat. Let her oversized warm-ochre leopard coat fill the foreground, patterned with irregular black rings and turned up at the collar. Frame her looking back over one shoulder among tall orange flowers against dark, moss-green woodland. Use opaque gouache-like layering, visible dry-brush edges, and a moody palette of ink black, ochre, and burnt orange."
  },
  {
    image: "./assets/illustration/surreal-narrative/unicorn-and-orange-blossoms.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 fairy-tale portrait of a solemn orange-haired figure in a tiny gold crown, a blue-and-cream ruff, and a large green-and-ivory checkerboard cloak. Place a white unicorn close behind her shoulder, with its long face beside hers and its horn pointing toward the upper-right corner. Fill the center with a small bouquet of orange flowers and use a flat deep teal background. Render the scene with irregular gouache-like brushwork and a quiet, direct gaze."
  },
  {
    image: "./assets/illustration/surreal-narrative/man-and-watching-lamp.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 surreal interior with a solemn mustached man sitting stiffly in a forest-green armchair. Give him a blunt black bob, an oversized brown leopard-print coat, narrow cream pinstriped trousers, and black shoes. Place an orange floor lampshade with a single large painted eye to his right, above a red and blue patterned rug. Use a warm rust wall, a frontal composition, flattened perspective, and layered matte brush marks for a dry, uncanny sense of humor."
  },
  {
    image: "./assets/illustration/expressionist-portraits/blue-faced-striped-portrait.webp",
    cat: "illustration",
    sub: "表现主义肖像",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 expressionist bust portrait of a weary figure with a swept black crop, a long angular lavender-blue face, oversized coral ears and nose, and downturned yellow-orange eyelids. Turn the shoulders away while the face tilts back toward the viewer. Fill the lower half with a black-and-ivory striped jacket with a lime-green collar against a solid midnight-blue background. Use matte gouache-like color, visible paper grain, and rough, confident brush edges."
  },
  {
    image: "./assets/illustration/expressionist-portraits/orange-bob-blue-glasses.webp",
    cat: "illustration",
    sub: "表现主义肖像",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 expressionist bust of an aloof man with a geometric orange bob, oversized square cobalt glasses, a long rose-pink nose, and a curled dark handlebar mustache. Dress him in a high-neck sweater with wide navy and slate-blue stripes that curve over his shoulders. Turn the bust slightly while keeping his eyes near the center. Use a deep forest-green ground, opaque paint, and soft dry-brush grain."
  },
  {
    image: "./assets/illustration/expressionist-portraits/dandy-and-blue-anemone.webp",
    cat: "illustration",
    sub: "表现主义肖像",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 expressionist portrait of a mustached dandy tilting his long coral nose upward to smell a pale blue anemone. Let the flower and its tall green stem rise along the left side of his face. Give him swept black hair, a single upturned green eye, an orange ribbed shirt, a black bow tie, and a bold black-and-cream striped jacket. Use a flat ultramarine background, simplified shapes, and visible gouache-like brush texture."
  },
  {
    image: "./assets/illustration/expressionist-portraits/copper-curls-over-the-shoulder.webp",
    cat: "illustration",
    sub: "表现主义肖像",
    ratio: "2 / 3",
    prompt:
      "Paint a tight vertical 2:3 three-quarter portrait of a suspicious man looking back over his shoulder. Give him flame-orange pin curls, a tangled copper beard, heavy green eyes, an exaggerated crimson nose, and freckled pink-violet skin. Let broad navy and lavender stripes on his jacket sweep diagonally across the lower-right corner. Use a dusty blue background, grainy opaque brushwork, and expressionist distortion of the facial planes."
  },
  {
    image: "./assets/illustration/surreal-narrative/sunflower-coat-and-flames.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 surreal bust portrait of a figure in a dark green coat densely patterned with orange sunflowers. Cover the head with a nearly featureless black hood and let curling orange and yellow flames rise around it like an uneven crown. Leave a narrow warm band of neck visible above the collar. Set the figure against textured midnight teal, with flattened forms, opaque gouache-like layers, and a strong warm-cool contrast."
  },
  {
    image: "./assets/illustration/surreal-narrative/secret-in-the-blue-flowers.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 surreal garden scene in which a dark-haired, black-bearded man peers out from a dense field of cobalt-blue flowers and tall olive stems. Give him an orange-and-cream gingham sleeve and one upright index finger pressed to his lips. Place his face just below center, with foreground petals overlapping the figure and dark foliage filling the entire frame. Use opaque gouache-like paint, a flattened botanical pattern, and textured petals with small yellow centers."
  },
  {
    image: "./assets/illustration/expressionist-portraits/starry-periwinkle-portrait.webp",
    cat: "illustration",
    sub: "表现主义肖像",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 expressionist fashion bust of an aloof violet-blue figure with a sharply cut white bob and blunt fringe, coral nose and ears, and one heavy-lidded yellow eye in three-quarter view. Wrap the shoulders in a bulky black-and-electric-blue checkerboard coat with fuzzy painted edges. Scatter a handful of gold eight-point stars across the deep cobalt background. Use matte opaque paint, visible grain, and a controlled palette with strong color contrast."
  },
  {
    image: "./assets/illustration/expressionist-portraits/ginger-crop-checkered-coat.webp",
    cat: "illustration",
    sub: "表现主义肖像",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 expressionist portrait of a gaunt figure looking back over one shoulder. Give him a closely cropped rust-orange bowl cut, tired pale blue eyes, a long red nose, a small hoop earring, and dark lips. Wrap his neck and shoulders in a sculptural black-and-off-white checkered coat that breaks into stripes along the sleeve. Use a textured deep petrol-blue background, opaque brushwork, and mottled pinks in the face."
  },
  {
    image: "./assets/illustration/surreal-narrative/flying-oranges-at-the-market.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 comic market scene of a startled shopper in a vivid red-orange coat, with wild black hair, huge white hoop earrings, and one hand raised. Tilt an open brown paper grocery bag across the foreground as oranges tumble out and bounce through the air. Angle the storefront behind her and add fragments of hand-painted shop signage. Use exaggerated eyes, a diagonal composition, saturated vermilion and cobalt, and opaque, visibly brushed paint."
  },
  {
    image: "./assets/illustration/surreal-narrative/headphones-on-the-commute.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 surreal commuter scene with a shaggy-haired man wearing oversized silver headphones, blue rectangular glasses, and a pin-covered black leather jacket over a blue striped shirt. Give him a wide-open singing mouth and a small black dog with a pale muzzle in his lap. Pack the row behind him with deadpan passengers and repeat the orange framing and green seat backs. Use matte gouache-like color, expressive caricature, and a tightly cropped frontal composition."
  },
  {
    image: "./assets/illustration/surreal-narrative/secret-in-the-pink-bells.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 surreal woodland close-up of a brown-bearded man hiding in dense foliage, with wide eyes glancing sideways and an index finger lifted to his lips. Surround him with tall blue flower spikes and repeated hanging pink bell-shaped blossoms with golden centers. Let leaves and stems cut across his hair and beard, keeping the face low in the frame. Use a near-black green ground, layered gouache-like strokes, and warm pink blossoms against cool blue stems."
  },
  {
    image: "./assets/illustration/surreal-narrative/bouquet-in-the-doorway.webp",
    cat: "illustration",
    sub: "超现实叙事",
    ratio: "2 / 3",
    prompt:
      "Paint a vertical 2:3 storybook scene of a wide-eyed, black-haired man with a huge dark mustache, standing in a coral-pink doorway in a cobalt coat. Give him a bouquet so large that blue anemones and coral-orange flowers hide most of his chest and rise around his face, with long green stems gathered in his arms. Let several curious faces peek from the room behind him. Use flattened perspective, saturated complementary colors, and grainy opaque brushwork for an awkward, affectionate mood."
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
      <p>覆盖 APP、运营、海报、插画与 IP 等设计场景，每张图都配有可直接复制的 AI 提示词。</p>
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

(function setupFooter() {
  const yearEl = document.querySelector("#footerYear");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const scrollToTop = () => {
    const behavior = reducedMotion ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  };

  const footerBrand = document.querySelector("#footerBrand");
  footerBrand?.addEventListener("click", (event) => {
    event.preventDefault();
    if (state.view !== "home") selectHome();
    scrollToTop();
  });

  const footerCats = document.querySelector("#footerCats");
  footerCats?.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-cat]");
    if (!btn) return;
    selectCategory(btn.dataset.cat);
    scrollToTop();
  });
})();

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
