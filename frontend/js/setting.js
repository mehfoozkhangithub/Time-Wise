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

let themeParent = document.querySelector(".theme")
let openThemeSetting = document.querySelector(".theme-parent");
let themeContent = document.querySelector(".theme-content");
let themeArrowDown = openThemeSetting.querySelector(".fa-angle-down");
let themeArrowRight = openThemeSetting.querySelector(".fa-angle-right");

let accountSettingChild = document.querySelector(".account-setting-child");

let editProfileBtn = document.querySelector(".edit-profile");

let editProfileContainer = document.querySelector(".edit-profile-container");

let changePass = document.querySelector(".change-pass");
let changePassParent = document.querySelector(".change-pass-parent");

let twoFactor = document.querySelector(".two-factor");
let factorLogin = document.querySelector(".two-factor-login");
let factorLoginbtn = document.querySelector(".factor-login-btn");
let factorOtpPage = document.querySelector(".two-factor-otp");
let factorOtpVerifyBtn = document.querySelector(".otp-verify-btn");
let factorSuccessMsg = document.querySelector(".two-factor-success-msg");

let privacyBtn = document.querySelector(".privacy");
let privacyContainer = document.querySelector(".privacy-parent-container");

let helpBtn = document.querySelector(".help_support");
let helpParent = document.querySelector(".help-support-parent");


// ACCOUNT SETTING

let isAccountSettingOpen = false;

openAccountSetting.addEventListener("click", () => {
    if (!isAccountSettingOpen) {
        accountContent.classList.add("open-account-content");
        accountArrowDown.style.display = "flex";
        accountArrowRight.style.display = "none";
        accountSettingChild.style.display = "flex";

        editProfileContainer.style.display= "none";
        changePassParent.style.display = "none";
        factorLogin.style.display = "none";
        factorOtpPage.style.display = "none";
        factorSuccessMsg.style.display = "none";
        privacyContainer.style.display = "none";
        helpParent.style.display = "none";        

        isAccountSettingOpen = true;
    } 
    else {
        accountContent.classList.remove("open-account-content");
        accountArrowDown.style.display = "none";
        accountArrowRight.style.display = "flex";
        accountSettingChild.style.display = "flex";

        editProfileContainer.style.display= "none";
        changePassParent.style.display = "none";
        factorLogin.style.display = "none";
        factorOtpPage.style.display = "none";
        factorSuccessMsg.style.display = "none";
        privacyContainer.style.display = "none";
        helpParent.style.display= "none";

        isAccountSettingOpen = false;
    }
});

// APPEARANCE SETTING

let isAppearance = false;

appearanceParent.addEventListener("click", () => {
    if(!isAppearance){
        appearanceArrowDown.style.display = "block";
        appearanceArrowRight.style.display = "none";
        themeParent.style.display = "flex";
        isAppearance = true;
    }
    else{
        appearanceArrowDown.style.display = "none";
        appearanceArrowRight.style.display = "block";
        themeParent.style.display = "none";
        isAppearance = false;
    }
})


// THEME SETTING

let isThemeOpen = false;

openThemeSetting.addEventListener("click", () => {
    if (!isThemeOpen) {
        themeContent.classList.add("open-theme-content");
        themeArrowDown.style.display = "flex";
        themeArrowRight.style.display = "none";
        isThemeOpen = true;
    } else {
        themeContent.classList.remove("open-theme-content");
        themeArrowDown.style.display = "none";
        themeArrowRight.style.display = "flex";
        isThemeOpen = false;
    }
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
    editProfileContainer.style.display= "flex"
    accountSettingChild.style.display = "none";
        changePassParent.style.display = "none";
        factorLogin.style.display = "none";
        privacyContainer.style.display= "none";
        helpParent.style.display= "none";
});

// Change password

changePass.addEventListener("click", () => {
    changePassParent.style.display = "flex";
    accountSettingChild.style.display = "none";
    editProfileContainer.style.display= "none";
    factorLogin.style.display = "none";
    privacyContainer.style.display= "none";
    helpParent.style.display= "none";
})


// Two-Factor Authentication

twoFactor.addEventListener("click", () => {
    factorLogin.style.display = "flex";
    accountSettingChild.style.display = "none";
    editProfileContainer.style.display= "none";
    changePassParent.style.display = "none";
    privacyContainer.style.display= "none";
    helpParent.style.display= "none";
})

factorLoginbtn.addEventListener("click", () => {
    factorOtpPage.style.display = "flex";
    factorLogin.style.display = "none";
})

factorOtpVerifyBtn.addEventListener("click", () => {
    factorSuccessMsg.style.display = "flex";
    factorOtpPage.style.display = "none";
})


// Privacy Policy

privacyBtn.addEventListener("click", () => {
    privacyContainer.style.display= "flex";
    accountSettingChild.style.display = "none";
    editProfileContainer.style.display= "none";
    factorLogin.style.display = "none";
    changePassParent.style.display = "none";
    helpParent.style.display= "none";

});

// Help & Support

helpBtn.addEventListener("click", () => {
    helpParent.style.display= "flex";
    accountSettingChild.style.display = "none";
    editProfileContainer.style.display= "none";
    factorLogin.style.display = "none";
    changePassParent.style.display = "none";
    privacyContainer.style.display= "none";
})