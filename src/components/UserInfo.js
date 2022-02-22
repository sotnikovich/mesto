export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector, profileId) {
        this._userName = document.querySelector(nameSelector);
        this._jobName = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._profileId = profileId;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._jobName.textContent
        }
    }

    setUserInfo(info) {
        this._userName.textContent = info.name;
        this._jobName.textContent = info.job;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}