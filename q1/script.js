let table = document.createElement('TABLE');

let browserName = document.createElement('TR');
browserName.setAttribute('class', 'row');
browserName.innerHTML = `<td>Browser Name</td><td>${navigator.appVersion.substring(79, 85)}</td>`;

let browserVersion = document.createElement('TR');
browserVersion.setAttribute('class', 'row');
browserVersion.innerHTML = `<td>Browser Version</td> <td>${navigator.appVersion.substring(0, 3)}</td>`;

let screenWidth = document.createElement('TR');
screenWidth.setAttribute('class', 'row');
screenWidth.innerHTML = `<td>Screen Size</td><td>${window.screen.width}</td>`;

let screenHeight = document.createElement('TR');
screenHeight.setAttribute('class', 'row');
screenHeight.innerHTML = `<td>Screen Width</td><td>${window.screen.height}</td>`;


table.appendChild(browserName);
table.appendChild(browserVersion);
table.appendChild(screenWidth);
table.appendChild(screenHeight);


let rows = document.getElementsByClassName('.row');

document.body.append(table);

console.log(table);