const Map = require('../module/api');

export default class {
    constructor() {
        this.myMap = new Map();
        this.pointsOnMap = [];
        this.init();
    }
    async init() {
        this.yApi = await this.myMap.initMap({
            center: [56.8375,60.5985],
            zoom: 13,
            controls: ['zoomControl']
        }),
        this.yApi.events.add('click', async e => {
            this.point = await this.myMap.getPosition(e);
            this.pointsOnMap.push({
                lat: this.point.coords[0],
                long: this.point.coords[1],
                adress: this.point.adress
            });
            this.myMap.setPoint(this.point);
        })
        
    }
}