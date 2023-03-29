export default class RestoService {
    _apiBase = 'http://localhost:3000'

    async getResurce(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
       
        return await res.json();
    }
    
    async getMenuItems() {
        return await this.getResurce(`/menu/`);
    }
}