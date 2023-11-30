var visitorCount = 0;

// A látogatók számának növelése minden alkalommal, amikor valaki meglátogatja az oldalt

window.onload = function() {
  visitorCount++;
};

// A látogatók számának lekérése

function getVisitorCount() {
  return visitorCount;
}
// A látogatók számának lekérése

var visitorCount = getVisitorCount();

// A látogatók számának megjelenítése a `span` elemben

document.querySelector("#visitor-count").textContent = visitorCount;
