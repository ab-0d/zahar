const menuCategories = [
  {
    id: "juices",
    title: "عصائر طبيعية",
    subtitle: "فواكه طازجة تُعصر لحظة الطلب",
    image: "images/category-juice.png",
    items: [
      { name: "عصير موز", price: 1000 },
      { name: "عصير بطيخ", price: 1000 },
    ],
  },
  {
    id: "milkshake",
    title: "ميلك شيك",
    subtitle: "مشروب كريمي غني بطعمك المفضل",
    image: "images/category-milkshake.png",
    variants: [{ label: "ميلك شيك", price: 2000 }],
    flavorGroups: [{ title: "النكهات", flavors: ["شوكولاتة", "فراولة", "كاراميل", "موز"] }],
  },
  {
    id: "icecream-natural",
    title: "ايس كريم كرات طبيعي",
    subtitle: "اختر نكهاتك المفضلة من الفواكه والحلويات",
    image: "images/category-icecream-natural.png",
    variants: [
      { label: "3 كرات", price: 1000 },
      { label: "4 كرات", price: 1500 },
      { label: "5 كرات", price: 2000 },
    ],
    flavorGroups: [
      {
        title: "نكهات الفواكه",
        flavors: ["رمان", "فراولة", "ليمون", "علك", "موز", "برتقال", "جوز الهند", "فستق", "بلو بيري", "مانجا", "كيوي"],
      },
      {
        title: "نكهات الحلويات",
        flavors: ["أوريو", "لوتس", " دارك", "نستلة", "فانيلا", "نوتيلا", "كاراميل", "قهوة"],
      },
    ],
  },
  {
    id: "icecream-family",
    title: "العائلي",
    subtitle: "كاسات ايس كريم كرات طبيعي للمشاركة",
    image: "images/category-icecream-natural.png",
    variants: [
      { label: "عائلي 400 غرام", price: 4000 },
      { label: "عائلي 500 غرام", price: 5000 },
    ],
    flavorGroups: [
      {
        title: "النكهات المتاحة",
        flavors: ["رمان", "فراولة", "ليمون", "علك", "موز", "برتقال", "جوز الهند", "فستق", "بلو بيري", "مانجا", "كيوي", "أوريو", "لوتس", " دارك", "نستلة", "فانيلا", "نوتيلا", "كاراميل", "قهوة"],
      },
    ],
  },
  {
    id: "icecream-soft",
    title: "آيس كريم سوفت",
    subtitle: "بطعم الكاكاو والفانيلا، بالكاسة أو الكبوس",
    image: "images/category-icecream-soft.png",
    variants: [
      { label: "كاسة أو كبوس عادي", price: 1000 },
      { label: "كبوس إيطالي ", price: 1500 },
    ],
    flavorGroups: [{ title: "النكهات", flavors: ["كاكاو", "فانيلا" , "برتقال","ليمون"] }],
  },
  {
    id: "ice-coffee",
    title: "آيس كوفي",
    subtitle: "قهوة مثلجة بطعم الكراميل أو الكاكاو",
    image: "images/Ice-coffee.png",
    variants: [{ label: "آيس كوفي", price: 1000 }],
    flavorGroups: [{ title: "النكهات", flavors: ["كراميل", "كاكاو"] }],
  },
  {
    id: "izberry",
    title: "ازبري",
    subtitle: "مشروب مثلج منعش بتشكيلة واسعة من النكهات",
    image: "images/category-iceberry.png",
    variants: [{ label: "ازبري", price: 1000 }],
    flavorGroups: [
      {
        title: "النكهات",
        flavors: ["توت أسود", "كرز", "بلو بيري", "خوخ", "فراولة", "برتقال", "نعناع", "تفاح أخضر", "علك"],
      },
    ],
  },
  {
    id: "slush",
    title: "سلاش",
    subtitle: "آزبيري مثلج مع طبقة آيس كريم كرات أو سوفت من فوق",
    image: "images/category-slush.png",
    variants: [{ label: "سلاش", price: 1500 }],
     flavorGroups: [
      {
        title: "النكهات",
        flavors: ["توت أسود", "كرز", "بلو بيري", "خوخ", "فراولة", "برتقال", "تفاح أخضر" ],
      },
    ],
  },
];
