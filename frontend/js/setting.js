// getting elements from html
let openAccountSetting = document.querySelector(".account-parent");
let accountContent = document.querySelector(".account-content");
let accountArrowDown = openAccountSetting.querySelector(".fa-angle-down");
let accountArrowRight = openAccountSetting.querySelector(".fa-angle-right");

let openNoticeSetting = document.querySelector(".notifi-parent");
let notifiContent = document.querySelector(".notifi-content");
let notifiArrowDown = openNoticeSetting.querySelector(".fa-angle-down");
let notifiArrowRight = openNoticeSetting.querySelector(".fa-angle-right");

let appearanceParent = document.querySelector(".appearance-parent");
let appearanceArrowDown = appearanceParent.querySelector(".fa-angle-down");
let appearanceArrowRight = appearanceParent.querySelector(".fa-angle-right");

let editProfileBtn = document.querySelector(".edit-profile");

let changePass = document.querySelector(".change-pass");

let twoFactor = document.querySelector(".two-factor");
let factorLoginbtn = document.querySelector(".factor-login-btn");
let factorOtpVerifyBtn = document.querySelector(".otp-verify-btn");

let privacyBtn = document.querySelector(".privacy");

let helpBtn = document.querySelector(".help_support");

let aboutBtn = document.querySelector(".about-parent");
let aboutContent = document.querySelector(".about-content");
let aboutArrowRight = aboutBtn.querySelector(".fa-angle-right");
let aboutArrowDown = aboutBtn.querySelector(".fa-angle-down");


// Hide All section, Only show clicked content
function hideAllSections() {
    document.querySelector(".account-setting-child").style.display = "none";
    document.querySelector(".edit-profile-container").style.display = "none";
    document.querySelector(".change-pass-parent").style.display = "none";
    document.querySelector(".two-factor-login").style.display = "none";
    document.querySelector(".two-factor-otp").style.display = "none";
    document.querySelector(".two-factor-success-msg").style.display = "none";
    document.querySelector(".privacy-parent-container").style.display = "none";
    document.querySelector(".help-support-parent").style.display = "none";
    document.querySelector(".appearance-container").style.display = "none";
}


// ACCOUNT SETTING

let isAccountSettingOpen = false;

openAccountSetting.addEventListener("click", () => {
    if (!isAccountSettingOpen) {
        hideAllSections();
        accountContent.classList.add("open-account-content");
        accountArrowDown.style.display = "flex";
        accountArrowRight.style.display = "none";
        document.querySelector(".account-setting-child").style.display = "flex";


        isAccountSettingOpen = true;
    }
    else {
        hideAllSections();
        accountContent.classList.remove("open-account-content");
        accountArrowDown.style.display = "none";
        accountArrowRight.style.display = "flex";
        document.querySelector(".account-setting-child").style.display = "flex";


        isAccountSettingOpen = false;
    }
});

// APPEARANCE SETTING & Theme


appearanceParent.addEventListener("click", () => {
    hideAllSections();
    document.querySelector(".appearance-container").style.display = "flex";
})


const spans = document.querySelectorAll('.light-theme-colors > span');
const lightBox = document.querySelector('.light-left > div');
const lightBoxSpan = document.querySelector(".light-left > div > span")

// Define the colors for each Box
const BoxColors = ["#bcebc9", "#acd6fc", "#acd6fc", "#30563f", "#5c4c2b", "#6e3b42", "#32433d"];

// Define the colors for each BoxSpan
const BoxSpanColors = ["#37cf56", "#0089ff", "#0089ff", "#41ba52", "#b07d1a", "#f7464a", "#4d8b51"]

spans.forEach((span, index) => {
    span.addEventListener('mouseenter', () => {
        lightBox.style.backgroundColor = BoxColors[index];
        lightBoxSpan.style.backgroundColor = BoxSpanColors[index];
    });

    span.addEventListener('mouseleave', () => {
        lightBox.style.backgroundColor = ''; // reset to default
        lightBoxSpan.style.backgroundColor = ''; // reset to default
    });
});


// NOTISFICATION SETTING

let isNotifiOpen = false;

openNoticeSetting.addEventListener("click", () => {
    if (!isNotifiOpen) {
        notifiContent.classList.add("open-notifi-content");
        notifiArrowDown.style.display = "flex";
        notifiArrowRight.style.display = "none";
        isNotifiOpen = true;
    } else {
        notifiContent.classList.remove("open-notifi-content");
        notifiArrowDown.style.display = "none";
        notifiArrowRight.style.display = "flex";
        isNotifiOpen = false;
    }
});

// Displaying edit profile by clicking edit profile button

editProfileBtn.addEventListener("click", () => {
    hideAllSections();
    document.querySelector(".edit-profile-container").style.display = "flex"
});

// Change password

changePass.addEventListener("click", () => {
    hideAllSections();
    document.querySelector(".change-pass-parent").style.display = "flex";
})


// Two-Factor Authentication

twoFactor.addEventListener("click", () => {
    hideAllSections();
    document.querySelector(".two-factor-login").style.display = "flex";
})

factorLoginbtn.addEventListener("click", () => {
    document.querySelector(".two-factor-otp").style.display = "flex";
    document.querySelector(".two-factor-login").style.display = "none";
})

factorOtpVerifyBtn.addEventListener("click", () => {
    document.querySelector(".two-factor-success-msg").style.display = "flex";
    document.querySelector(".two-factor-otp").style.display = "none";
})


// Privacy Policy

privacyBtn.addEventListener("click", () => {
    hideAllSections();
    document.querySelector(".privacy-parent-container").style.display = "flex";

});

// Help & Support

helpBtn.addEventListener("click", () => {
    hideAllSections();
    document.querySelector(".help-support-parent").style.display = "flex";
});

// About

let isAboutOpen = false;

aboutBtn.addEventListener("click", () => {
    if (!isAboutOpen) {
        aboutContent.classList.add("open-about-content");
        aboutArrowDown.style.display = "block";
        aboutArrowRight.style.display = "none"
        isAboutOpen = true;
    }
    else {
        aboutContent.classList.remove("open-about-content");
        aboutArrowDown.style.display = "none";
        aboutArrowRight.style.display = "block"
        isAboutOpen = false;
    }
});

