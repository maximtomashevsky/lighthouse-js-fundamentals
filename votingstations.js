const chooseStations = function (stations) {
  let appropriate = [];
  for (let x = 0; x < stations.length; ++x) {
    if (stations[x][1] >= 20 && (stations[x][2] === "school" || stations[x][2] === "community centre")) {
      appropriate.push(stations[x][0]);
    }
  }
  return appropriate;
}

const stations1 = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
chooseStations(stations1);


