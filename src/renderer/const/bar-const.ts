export const USER_SET_OPTIONS = [
  // {
  //   label: '打卡',
  //   key: 'card',
  // },
  // {
  //   label: '听歌升级',
  //   key: 'card_music',
  // },
  // {
  //   label: '歌曲次数',
  //   key: 'listen',
  // },
  {
    label: '退出登录',
    key: 'logout'
  },
  {
    label: '设置',
    key: 'set'
  }
];

export const SEARCH_TYPES = [
  {
    label: '单曲',
    key: 1
  },
  {
    label: '专辑',
    key: 10
  },
  // {
  //   label: '歌手',
  //   key: 100,
  // },
  {
    label: '歌单',
    key: 1000
  },
  // {
  //   label: '用户',
  //   key: 1002,
  // },
  {
    label: 'MV',
    key: 1004
  },
  {
    label: 'B站',
    key: 2000
  }
  // {
  //   label: '歌词',
  //   key: 1006,
  // },
  // {
  //   label: '电台',
  //   key: 1009,
  // },
  // {
  //   label: '视频',
  //   key: 1014,
  // },
  // {
  //   label: '综合',
  //   key: 1018,
  // },
];

export const SEARCH_TYPE = {
  MUSIC: 1, // 单曲
  ALBUM: 10, // 专辑
  ARTIST: 100, // 歌手
  PLAYLIST: 1000, // 歌单
  MV: 1004, // MV
  BILIBILI: 2000 // B站视频
} as const;
