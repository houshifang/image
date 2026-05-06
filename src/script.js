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
    sub: ["电影海报", "拼贴海报", "艺术海报", "渐变艺术"]
  },
  {
    id: "illustration",
    name: "插画",
    sub: ["黏土", "多巴胺", "夸张", "扁平", "情景故事", "3D", "治愈"]
  }
];

const homeSections = [
  { cat: "ops" },
  { cat: "poster", sub: "拼贴海报" },
  { cat: "illustration", sub: "多巴胺" },
  { cat: "poster", sub: "渐变艺术" },
  { cat: "ops", sub: "KV海报" },
  { cat: "poster" },
  { cat: "poster", sub: "艺术海报" },
  { cat: "app", sub: "金刚区图标" },
  { cat: "app", sub: "空状态" },
  { cat: "illustration", sub: "黏土" },
  { cat: "illustration", sub: "夸张" },
  { cat: "app" }
];

const categoryIntros = {
  app: "覆盖图标、启动页、功能图和应用截图，适合移动产品的视觉起稿。",
  ops: "3D 海报和 KV 海报，帮助快速找到运营设计方向。",
  poster: "电影海报、拼贴海报、艺术海报与渐变艺术，提供更有情绪的画面参考。",
  illustration: "黏土、多巴胺、夸张、扁平、3D 和情景故事插画，适合产品介绍与品牌表达。"
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
      <p>覆盖 APP、运营、海报与插画等设计场景，每张图都配有可直接复制的 AI 提示词，让灵感随取随用，全部由 image2 完成</p>
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
