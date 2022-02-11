export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._userName = nameSelector;
        this._jobName = jobSelector;
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._jobName.textContent
        }
    };

    setUserInfo(info) {
        this._userName.textContent = info.name;
        this._jobName.textContent = info.job;
    }
};
