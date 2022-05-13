export default class SwapiService {

    _apiBase = "https://swapi.dev/api"

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok){
            throw new Error(`NOT FETCH ${res.status}`)
        }
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResourse(`/people/`)
        return res.results
    }
    getPerson(id){
        return this.getResourse(`/people/${id}/`)
    }
    async getAllPlanet() {
        const res = await this.getResourse(`/planets/`)
        return res.results
    }
    getPlanet(id){
        return this.getResourse(`/planets/${id}/`)
    }
    async getAllStarships(){
        const res = await this.getResourse(`/starships/`)
        return res.results
    }
    getStarship(id){
        return this.getResourse(`/starships/${id}/`)
    }
}

const swapi = new SwapiService()

swapi.getPerson(3).then( elem => {

    console.log(elem.name)

})