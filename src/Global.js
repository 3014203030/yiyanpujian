const carousel_picList = [
  'https://s1.ax1x.com/2020/04/29/Jo1QmV.jpg',
  'https://s1.ax1x.com/2020/04/29/Jo1VYQ.jpg',
  'https://s1.ax1x.com/2020/04/29/Jo1478.jpg',
  'https://s1.ax1x.com/2020/04/29/Jo3X2d.jpg',
  'https://s1.ax1x.com/2020/04/29/Jo8erq.jpg',
  'https://s1.ax1x.com/2020/04/29/JoL1ts.jpg',
  'https://s1.ax1x.com/2020/04/29/JoLGpq.jpg',
  'https://s1.ax1x.com/2020/04/29/JoLDhR.jpg',
  'https://s1.ax1x.com/2020/04/29/JoLT3t.jpg',
  'https://s1.ax1x.com/2020/04/29/JolKaD.jpg',
];
const consensus_pic = 'https://s1.ax1x.com/2020/04/29/JTpr6A.png';
const clinical_pic = 'https://s1.ax1x.com/2020/04/29/JTpee0.png';
const colorListLength = 20;

function getRandColor() {
  var tem = Math.round(Math.random() * colorListLength);
  return colorList[tem]
}

export default {
  carousel_picList,
  consensus_pic,
  clinical_pic,
  colorListLength,
  getRandColor
}
