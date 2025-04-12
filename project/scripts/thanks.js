const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));

document.querySelector("#results").innerHTML = `
<p>Welcome to the Crew! You'll be recieving emails shortly so you can follow along. Feel free to suggest a project that interests you! </p>
<p>Phone number provided: <span class="bold">${myInfo.get('phone')}</span></p>
<p>Application Submitted at <span class="bold">${myInfo.get('timestamp')}</span></p>
<p>A confirmation email will be sent to: <span class="bold">${myInfo.get('email')}</span></p>`;