// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));

document.querySelector("#results").innerHTML = `
<p>Thank you for your interst in joining our Chamber of Commerce!</p>
<p>Application for "${myInfo.get('business-name')}," has been submitted by "${myInfo.get('last')}, ${myInfo.get('first')}" and will be processed within 3 business days.</p>
<p>Phone number provided: ${myInfo.get('phone')}</p>
<p>Application Submitted at ${myInfo.get('timestamp')}</p>
<p>A confirmation email will be sent to: ${myInfo.get('email')}`;