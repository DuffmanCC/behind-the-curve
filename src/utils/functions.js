function middlePoint(lat1, lng1, lat2, lng2) {
  const φ1 = lat1 * Math.PI / 180, λ1 = lng1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δλ = (lng2 - lng1) * Math.PI / 180;

  const Bx = Math.cos(φ2) * Math.cos(Δλ);
  const By = Math.cos(φ2) * Math.sin(Δλ);

  const x = Math.sqrt((Math.cos(φ1) + Bx) * (Math.cos(φ1) + Bx) + By * By);
  const y = Math.sin(φ1) + Math.sin(φ2);
  const φ3 = Math.atan2(y, x);

  const λ3 = λ1 + Math.atan2(By, Math.cos(φ1) + Bx);

  const lat = φ3 * 180 / Math.PI;
  const lng = λ3 * 180 / Math.PI;

  return {
    lat: lat,
    lng: lng
  }
}

function getDistanceFromTwoPoints(lat1, lng1, lat2, lng2) {
  let R = 6371000; // Average earth radius
  let dLat = toRad(lat2 - lat1);
  let dLong = toRad(lng2 - lng1);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;

  return (d / 1000);
}

function toRad(x) {
  return x * Math.PI / 180;
}

export default {
  middlePoint: middlePoint,
  getDistanceFromTwoPoints: getDistanceFromTwoPoints,
  toRad: toRad
}