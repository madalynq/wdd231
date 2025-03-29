document.getElementById("timestamp").value = new Date().toISOString();

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");

const buttons = document.querySelectorAll("button[id^='openButton']");

const membershipDetails = {
    openButton1: "Non-Profit Membership: Ideal for nonprofits, offering directory listing, networking access, and community support.",
    openButton2: "Bronze Membership: Entry-level membership with business directory listing, event discounts, and promotional opportunities.",
    openButton3: "Silver Membership: Enhanced benefits including marketing exposure, sponsorship opportunities, and exclusive workshops.",
    openButton4: "Gold Membership: Premium membership with VIP networking, business advocacy, and top-tier promotional perks."
};


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const membershipText = membershipDetails[button.id] || "Membership details unavailable.";
        dialogBoxText.innerHTML = membershipText;
        dialogBox.showModal();
    });
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});