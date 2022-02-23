export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector, profileId) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._profileId = profileId;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._job.textContent = userInfo.about;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}