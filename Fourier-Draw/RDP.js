function getRdp(points, epsilon) {
  const rdpPoints = [];

  const total = points.length;
  const start = points[0];
  const end = points[total - 1];
  rdpPoints.push(start);
  rdp(0, total - 1, points, rdpPoints, epsilon);
  rdpPoints.push(end);

  return rdpPoints
}

function rdp(startIndex, endIndex, allPoints, rdpPoints, epsilon) {
  const nextIndex = findFurthest(allPoints, startIndex, endIndex, epsilon);
  if (nextIndex > 0) {
    if (startIndex != nextIndex) {
      rdp(startIndex, nextIndex, allPoints, rdpPoints, epsilon);
    }
    rdpPoints.push(allPoints[nextIndex]);
    if (endIndex != nextIndex) {
      rdp(nextIndex, endIndex, allPoints, rdpPoints, epsilon);
    }
  }
}


function findFurthest(points, a, b, epsilon) {
  let recordDistance = -1;
  const start = points[a];
  const end = points[b];
  let furthestIndex = -1;
  for (let i = a + 1; i < b; i++) {
    const currentPoint = points[i];
    const d = lineDist(currentPoint, start, end);
    if (d > recordDistance) {
      recordDistance = d;
      furthestIndex = i;
    }
  }
  if (recordDistance > epsilon) {
    return furthestIndex;
  } else {
    return -1;
  }
}


function lineDist(c, a, b) {
  const norm = scalarProjection(c, a, b);
  return p5.Vector.dist(c, norm);
}

function scalarProjection(p, a, b) {
  const ap = p5.Vector.sub(p, a);
  const ab = p5.Vector.sub(b, a);
  ab.normalize(); // Normalize the line
  ab.mult(ap.dot(ab));
  const normalPoint = p5.Vector.add(a, ab);
  return normalPoint;
}