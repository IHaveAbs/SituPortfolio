// Portfolio gallery data.
// Each key matches a nav data-subcategory (or a single-gallery category).
// Loaded globally by index.html so gallery.html can read window.GALLERIES[key].
window.GALLERIES = {
  // ---------- ART ----------
  paintings: {
    title: "Paintings",
    items: [
      { src: "media/photos/art/paintings/painting-mirror-lake-silver-key.jpg", title: "Mirror Lake — Silver Key", description: "Scholastic Art Silver Key (2023). An autumn lily pond, its still water mirroring red and gold foliage." },
      { src: "media/photos/art/paintings/painting-portofino-harbor.jpg", title: "Portofino Harbor", description: "A sunlit Mediterranean harbor with boats reflected in calm blue water." },
      { src: "media/photos/art/paintings/painting-stone-bridge-village.jpg", title: "Stone Bridge Village", description: "A quiet European village with a stone arch bridge over a green stream." },
      { src: "media/photos/art/paintings/painting-autumn-pond-with-kite.jpg", title: "Autumn Pond with a Kite", description: "Bare trees over a reflective pond, a kite drifting in the sky." },
      { src: "media/photos/art/paintings/painting-park-road.jpg", title: "Park Road", description: "A tree-lined park road receding under an overcast autumn sky." },
      { src: "media/photos/art/paintings/painting-mother-and-child.jpg", title: "Mother and Child", description: "A mother cradling a sleeping child against a collaged dreamscape." },
      { src: "media/photos/art/paintings/painting-young-cowboy.jpg", title: "Young Cowboy", description: "A loosely brushed portrait of a boy in a straw hat and red neckerchief." },
      { src: "media/photos/art/paintings/painting-woman-in-forest.jpg", title: "Woman in the Forest", description: "A woman in a pale dress within a dense, richly textured woodland." },
      { src: "media/photos/art/paintings/painting-orange-tram.jpg", title: "Orange Tram", description: "A palette-knife street scene with an orange tram climbing a hillside lane." },
      { src: "media/photos/art/paintings/painting-mountain-lake-cottages.jpg", title: "Mountain Lake Cottages", description: "A gouache landscape of white cottages beside a still lake below rugged mountains." },
      { src: "media/photos/art/paintings/painting-fruit-and-blue-vase.jpg", title: "Fruit and Blue Vase", description: "A bold oil still life of fruit around a blue-and-white porcelain vase." },
      { src: "media/photos/art/paintings/painting-lotus-and-crab.jpg", title: "Lotus and Crab", description: "A traditional Chinese ink-and-wash painting of a lotus blossom and a crab." },
      { src: "media/photos/art/paintings/painting-seated-woman-floral-dress.jpg", title: "Seated Woman in a Floral Dress", description: "An oil portrait of a seated young woman in a white floral dress." },
      { src: "media/photos/art/paintings/painting-self-portrait-white-shirt.jpg", title: "Self-Portrait in a White Shirt", description: "A loosely brushed oil self-portrait in an open-collared white shirt." },
      { src: "media/photos/art/paintings/painting-figure-in-the-dark.jpg", title: "Figure in the Dark", description: "A luminous pale figure emerging from a dark green ground." },
      { src: "media/photos/art/paintings/painting-figure-in-red.jpg", title: "Figure in Red", description: "An abstract-expressionist figure set against fiery reds." },
      { src: "media/photos/art/paintings/painting-reaching-hands.jpg", title: "Reaching Hands (Painting)", description: "A dynamic painting of outstretched hands around an open-mouthed head." },
      { src: "media/photos/art/paintings/painting-autumn-trees-by-the-water.jpg", title: "Autumn Trees by the Water", description: "Golden autumn trees reflected in a still pond." },
      { src: "media/photos/art/paintings/painting-sunflower-in-blue-vase.jpg", title: "Sunflower in a Blue Vase", description: "An acrylic still life of a sunflower in a blue vase." }
    ]
  },
  drawings: {
    title: "Drawings & Sketches",
    items: [
      { src: "media/photos/art/drawings/drawing-weathered-old-man.jpg", title: "Weathered Old Man", description: "A charcoal portrait of a smiling, deeply lined old man." },
      { src: "media/photos/art/drawings/drawing-head-study.jpg", title: "Head Study", description: "A charcoal head study of a young man." },
      { src: "media/photos/art/drawings/drawing-kettle-still-life.jpg", title: "Kettle Still Life", description: "A copper kettle, inkwell, and pussy willows on draped cloth." },
      { src: "media/photos/art/drawings/drawing-sculpture-still-life.jpg", title: "Sculpture Still Life", description: "A graphite study of an abstract bronze form beside a carving." },
      { src: "media/photos/art/drawings/drawing-sleeping-cherub.jpg", title: "Sleeping Cherub", description: "A graphite still life of a winged cherub statue, a candle, and cloth." },
      { src: "media/photos/art/drawings/drawing-anime-girl.jpg", title: "Anime Girl", description: "A pencil sketch of an anime-style girl in a ruffled dress." },
      { src: "media/photos/art/drawings/drawing-ruins-and-figures.jpg", title: "Ruins and Figures", description: "A pen-and-ink surreal scene of figures and a boat before crumbling ruins." },
      { src: "media/photos/art/drawings/drawing-classical-head-study.jpg", title: "Classical Head Study", description: "A graphite study of a curly-haired Greek plaster bust." },
      { src: "media/photos/art/drawings/drawing-carafe-and-wine-glass.jpg", title: "Carafe and Wine Glass", description: "A graphite still life of a carafe, an apple, and a wine glass on draped cloth." },
      { src: "media/photos/art/drawings/drawing-young-man-charcoal.jpg", title: "Young Man in Charcoal", description: "A loose, dramatic charcoal portrait of a young man." },
      { src: "media/photos/art/drawings/drawing-greyhound-colored-pencil.jpg", title: "Love Me Tender", description: "A vibrant colored-pencil drawing of a greyhound in a striped scarf." },
      { src: "media/photos/art/drawings/drawing-laughing-bust-study.jpg", title: "Laughing Bust", description: "A graphite study of an animated classical bust with a tilted-back head." },
      { src: "media/photos/art/drawings/drawing-jug-and-small-chair.jpg", title: "Jug and Small Chair", description: "A pen-and-ink still life of a jug beside a miniature wooden chair." },
      { src: "media/photos/art/drawings/drawing-face-and-glacier-collage.jpg", title: "Face and Glacier", description: "A black-and-white photomontage merging a sculpted face with a glacier landscape." },
      { src: "media/photos/art/drawings/drawing-man-profile-portrait.jpg", title: "Profile Portrait", description: "A pencil portrait of a man in profile." },
      { src: "media/photos/art/drawings/drawing-bearded-man-portrait.jpg", title: "Bearded Man", description: "A charcoal portrait of a bearded man in a headscarf." },
      { src: "media/photos/art/drawings/drawing-sphere-and-drapery-study.jpg", title: "Sphere and Drapery", description: "A graphite value study of a sphere on draped cloth." },
      { src: "media/photos/art/drawings/drawing-young-woman-portrait.jpg", title: "Young Woman", description: "A charcoal portrait of a young woman." },
      { src: "media/photos/art/drawings/drawing-surreal-piano-collage.jpg", title: "Lifting the Piano", description: "A black-and-white surreal photomontage of a figure lifting a piano." }
    ]
  },
  printmaking: {
    title: "Printmaking — Woodblock & Linocut",
    videos: [
      { id: "vNt0RV7xbME", title: "Carving a woodblock" }
    ],
    items: [
      { src: "media/photos/art/printmaking/print-reaching-hands-linocut.jpg", title: "Reaching Hands", description: "A bold black-and-white linocut of a hooded figure amid swirling hands." },
      { src: "media/photos/art/printmaking/print-sunflower.jpg", title: "Sunflower", description: "A woodblock print of a single bold sunflower." },
      { src: "media/photos/art/printmaking/print-expressive-face.jpg", title: "Expressive Face", description: "A woodblock print of an anguished, mask-like face." },
      { src: "media/photos/art/printmaking/print-red-mountain.jpg", title: "Red Mountain", description: "A red-inked woodblock of a snow-streaked mountain above pines." },
      { src: "media/photos/art/printmaking/print-profile-head.jpg", title: "Profile Head", description: "A woodblock print of a youth's upturned profile." },
      { src: "media/photos/art/printmaking/print-seated-figures-interior.jpg", title: "Seated Figures", description: "A woodblock of figures resting in a vaulted, window-lit interior." },
      { src: "media/photos/art/printmaking/print-fragmented-face-block.jpg", title: "Fragmented Face (carved block)", description: "The carved woodblock itself — a fragmented, cubist-style face." },
      { src: "media/photos/art/printmaking/print-seated-male-block.jpg", title: "Seated Figure (carved block)", description: "A carved woodblock of a seated figure among pots by a shore." },
      { src: "media/photos/art/printmaking/print-carving-process.jpg", title: "In the Studio", description: "Carving a woodblock at the printmaking table." },
      { src: "media/photos/art/printmaking/print-man-and-figures.jpg", title: "Man and Figures", description: "A black-and-white woodblock print of a man's face amid carved figures." }
    ]
  },
  awards: {
    title: "Scholastic Art & Writing Awards",
    intro: "Regional Scholastic Art & Writing Awards (California College of the Arts region).",
    items: [
      { src: "media/photos/art/awards/award-2023-silver-key-mirror-lake.jpg", title: "Silver Key — “Mirror Lake”", description: "Painting · 2023." },
      { src: "media/photos/art/awards/award-2023-honorable-mention-angels-dream.jpg", title: "Honorable Mention — “Angel’s Dream”", description: "Drawing & Illustration · 2023." },
      { src: "media/photos/art/awards/award-2025-honorable-mention-morning-or-night.jpg", title: "Honorable Mention — “Morning or Night”", description: "Painting · 2025." },
      { src: "media/photos/art/awards/award-2025-honorable-mention-natures-time.jpg", title: "Honorable Mention — “Nature’s Time”", description: "Painting · 2025." }
    ]
  },

  photography: {
    title: "Photography",
    intro: "Nature, flowers, and street scenes shot around the neighborhood.",
    items: [
      { src: "media/photos/art/photography/photo-bougainvillea-cottage.jpg", title: "Bougainvillea Cottage", description: "A Spanish-style cottage framed by magenta bougainvillea over an arched door." },
      { src: "media/photos/art/photography/photo-red-plum-blossoms.jpg", title: "Red Plum Blossoms", description: "Crimson plum blossoms against a winter-blue sky." },
      { src: "media/photos/art/photography/photo-rose-garden.jpg", title: "Rose Garden at Golden Hour", description: "Peach and pink roses in warm late-afternoon light." },
      { src: "media/photos/art/photography/photo-birds-of-paradise.jpg", title: "Birds of Paradise", description: "Orange bird-of-paradise flowers against a bright blue sky." },
      { src: "media/photos/art/photography/photo-autumn-fire.jpg", title: "Autumn Fire", description: "A street tree ablaze in red and orange autumn foliage." },
      { src: "media/photos/art/photography/photo-gold-meets-crimson.jpg", title: "Gold Meets Crimson", description: "Two trees in brilliant gold and fiery red flank a sidewalk." },
      { src: "media/photos/art/photography/photo-cherry-blossom-tree.jpg", title: "Cherry Blossom Tree", description: "A cherry blossom tree in peak bloom under a clear sky." },
      { src: "media/photos/art/photography/photo-spring-canopy.jpg", title: "Spring Canopy", description: "White cherry blossoms arching overhead with blue sky beyond." },
      { src: "media/photos/art/photography/photo-loquat-harvest.jpg", title: "Loquat Harvest", description: "Ripening golden loquats among glossy green leaves." },
      { src: "media/photos/art/photography/photo-rose-of-sharon.jpg", title: "Pink Rose of Sharon", description: "A shrub covered in pink blooms along a sunlit path." },
      { src: "media/photos/art/photography/photo-valley-overlook.jpg", title: "Valley Overlook", description: "Golden hillsides rolling toward a hazy valley and distant mountains." },
      { src: "media/photos/art/photography/photo-rainbow-over-cypress.jpg", title: "Rainbow Over the Cypress", description: "A rainbow arcing across a stormy sky above tall cypress trees." },
      { src: "media/photos/art/photography/photo-bougainvillea-lawn.jpg", title: "Bougainvillea and Lawn", description: "Magenta bougainvillea spilling over a Spanish-style house." },
      { src: "media/photos/art/photography/photo-white-hedge-redwoods.jpg", title: "White Hedge and Redwoods", description: "A white-flowering hedge beneath tall redwoods." },
      { src: "media/photos/art/photography/photo-autumn-maple-fence.jpg", title: "Autumn Maple", description: "A fiery autumn maple beside a chain-link fence." }
    ]
  },

  // ---------- ACTIVITIES ----------
  badminton: {
    title: "Badminton",
    items: [
      { src: "media/photos/activities/badminton/badminton-at-the-net.jpg", title: "At the Net", description: "Warming up at the net in a Lynbrook jersey." },
      { src: "media/photos/activities/badminton/badminton-on-court.jpg", title: "On Court", description: "Ready on court in team colors." },
      { src: "media/photos/activities/badminton/badminton-varsity-team-2025-26.jpg", title: "Varsity Team 2025–26", description: "Lynbrook High School varsity badminton team." },
      { src: "media/photos/activities/badminton/badminton-junior-varsity-team.jpg", title: "JV Team", description: "The Lynbrook junior varsity badminton team." }
    ]
  },
  juggling: {
    title: "Juggling",
    videos: [
      { id: "KhB_bZHoecI", title: "Juggling" }
    ],
    items: [
      { src: "media/photos/activities/juggling/juggling-outdoor-practice.jpg", title: "Outdoor Practice", description: "Juggling beanbags with friends on a sunny lawn." },
      { src: "media/photos/activities/juggling/juggling-devil-stick.jpg", title: "Devil Stick", description: "Balancing a devil stick at a park meetup." }
    ]
  },
  chess: {
    title: "Chess",
    items: [
      { src: "media/photos/activities/chess/chess-first-place-plaque.jpg", title: "First Place", description: "US Amateur Team West — 1st-place plaque, with trophies and medals." },
      { src: "media/photos/activities/chess/chess-trophy-collection.jpg", title: "Trophy Collection", description: "A display of chess trophies and medals." }
    ]
  },

  // ---------- SINGLE-GALLERY CATEGORIES ----------
  community: {
    title: "Community & School",
    items: [
      { src: "media/photos/community/community-shelter-craft-table.jpg", title: "Shelter Craft Day", description: "A group activity with residents at a shelter courtyard." },
      { src: "media/photos/community/school-graduation-day.jpg", title: "Graduation Day", description: "With classmates on graduation day." },
      { src: "media/photos/community/school-commencement.jpg", title: "Commencement", description: "The class gathered on the field for the ceremony." },
      { src: "media/photos/community/school-8th-grade-party.jpg", title: "8th-Grade Party", description: "Photo-booth fun with friends." }
    ]
  },
  personal: {
    title: "Personal",
    items: [
      { src: "media/photos/personal/personal-lego-build.jpg", title: "LEGO Architect", description: "Beside an elaborate multi-story LEGO build." },
      { src: "media/photos/personal/personal-handmade-crafts.jpg", title: "Handmade Crafts", description: "A display of handmade paper and craft creations." },
      { src: "media/photos/personal/personal-museum-pose.jpg", title: "Museum Mischief", description: "Mimicking a bronze sculpture at an art museum." },
      { src: "media/photos/personal/personal-cooking-class.jpg", title: "Cooking Class", description: "In a chef’s hat at a cooking class." },
      { src: "media/photos/personal/personal-family-portrait.jpg", title: "Family", description: "A family portrait." },
      { src: "media/photos/personal/personal-family-portrait-2.jpg", title: "Family", description: "A family portrait at home." }
    ]
  }
};
