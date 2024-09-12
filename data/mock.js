const products = [
  {
    name: "쿠쿠 밥솥",
    description: "쿠쿠하세요~~",
    price: 310000,
    tags: ["쿠쿠쿠쿠쿸"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/92/1725209779217/CRP-DHP0610FD.png"
    ],
    ownerId: 92,
    favoriteCount: 0,
    createdAt: new Date("2024-09-01T15:56:53.858Z"),
    updatedAt: new Date("2024-09-02T01:15:56.841Z")
  },
  {
    name: "토스터",
    description: "토스트를 만들기 위한 토스터~",
    price: 19000,
    tags: ["토스터"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/72/1724836584916/2.jpg"
    ],
    ownerId: 72,
    favoriteCount: 0,
    createdAt: new Date("2024-08-27T12:26:55.629Z"),
    updatedAt: new Date("2024-08-30T10:42:33.978Z")
  },
  {
    name: "상품 이름",
    description: "string",
    price: 0,
    tags: [],
    images: ["https://example.com/..."],
    ownerId: 78,
    favoriteCount: 1,
    createdAt: new Date("2024-08-25T17:41:10.901Z"),
    updatedAt: new Date("2024-09-04T08:20:57.019Z")
  },
  {
    name: "화사한 분위기의 수련",
    description: "무료 이미지 꽃, 수련, water lily",
    price: 12000,
    tags: ["꽃", "수련", "water lily"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/36/1724120702896/water-lily-8175845_1280.jpg"
    ],
    ownerId: 36,
    favoriteCount: 1,
    createdAt: new Date("2024-08-20T02:26:50.914Z"),
    updatedAt: new Date("2024-08-21T02:06:50.311Z")
  },
  {
    name: "밝은 분위기의 벽지와 전등",
    description: "무료 이미지 전등, 벽지, 인테리어",
    price: 36000,
    tags: ["전등", "벽지", "인테리어"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/36/1724119838524/pexels-colour-creation-28649-112811.jpg"
    ],
    ownerId: 36,
    favoriteCount: 1,
    createdAt: new Date("2024-08-20T02:12:42.228Z"),
    updatedAt: new Date("2024-08-21T02:06:47.586Z")
  },
  {
    name: "갤럭시북4",
    description: "또 다른 갤럭시를 만나보세요",
    price: 1000000,
    tags: [],
    images: [
      "https://images.samsung.com/kdp/event/sec/2024/0301_galaxy_book4_ultra/buying/slide_v7/gbu_buying_defalut_pc.jpg"
    ],
    ownerId: 29,
    favoriteCount: 1,
    createdAt: new Date("2024-08-16T02:27:54.293Z"),
    updatedAt: new Date("2024-08-21T02:06:41.073Z")
  },
  {
    name: "갤럭시 탭 S7",
    description: "삼성 갤럭시 탭 S7",
    price: 350000,
    tags: [],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991844193/5146532.png"
    ],
    ownerId: 1,
    favoriteCount: 6,
    createdAt: new Date("2024-07-29T05:45:03.249Z"),
    updatedAt: new Date("2024-07-29T05:45:03.249Z")
  },
  {
    name: "보스 헤드폰",
    description: "보스 노이즈 캔슬링 헤드폰 700",
    price: 350000,
    tags: [],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991827255/3514562.png"
    ],
    ownerId: 1,
    favoriteCount: 12,
    createdAt: new Date("2024-07-29T05:45:03.249Z"),
    updatedAt: new Date("2024-07-29T05:45:03.249Z")
  },
  {
    name: "사무용 의자",
    description: "편안한 사무용 의자",
    price: 120000,
    tags: ["가구"],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991812368/2313561.png"
    ],
    ownerId: 1,
    favoriteCount: 4,
    createdAt: new Date("2024-07-29T05:45:03.249Z"),
    updatedAt: new Date("2024-07-29T05:45:03.249Z")
  },
  {
    name: "스니커즈",
    description: "편안한 스니커즈",
    price: 100000,
    tags: [],
    images: [
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/3/1721991853452/5389615.png"
    ],
    ownerId: 1,
    favoriteCount: 10,
    createdAt: new Date("2024-07-29T05:45:03.249Z"),
    updatedAt: new Date("2024-07-29T05:45:03.249Z")
  }
];

export default products;
