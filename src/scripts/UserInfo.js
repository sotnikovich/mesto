export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._userName = document.querySelector(nameSelector);
        this._jobName = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return {
            name = this._userName.textContent,
            job = this._jobName.textContent
        }
    }

    setUserInfo({ name, job }) {
        this._userName.textContent = name;
        this._jobName.textContent = job;
    }
}