const backgroundImages = [
  {
    name: 'clearpic',
    codes: [1000],
  },
  {
    name: 'sunpic',
    codes: [1003],
  },
  {
    name: 'cloudypic',
    codes: [1006, 1009],
  },
  {
    name: 'mistypic',
    codes: [1030, 1135, 1147],
  },
  {
    name: 'rainpic',
    codes: [1063, 1069, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1273, 1276],
  },
  {
    name: 'snowpic',
    codes: [1066, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
  },
  {
    name: 'thunderpic',
    codes: [1087],
  },
];

export default function getBackgroundImage(code) {
  return backgroundImages.filter(item => item.codes.includes(code))[0].name;
}
