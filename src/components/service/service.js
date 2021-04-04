export default class Service {

    async getResources(url) {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`could not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    async getUsers(url) {
        return await this.getResources(url);
    }

    async getUsersNumber(url) {
        return await this.getResources(url).length + 1;
    }

    async setUser(url, user) {

        //const response = 
        await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
/*        if (!response.ok){
            throw new Error('json error'); 
        }*/
    } 
}