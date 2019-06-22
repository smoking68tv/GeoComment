module.exports =  class {
    initMap(settings) {
        return new Promise((resolve, reject) => ymaps.ready(resolve))
            .then(() => {
                this.map = new ymaps.Map('map', settings);

                return this.map;
            });

    }
    async getPosition(e) {
        const coords = e.get('coords');
        const geocode = await ymaps.geocode(coords);
        const adress = geocode.geoObjects.get(0).properties.get('text');

        return {
            coords,
            adress
        }
    }
    async setPoint(e) {
        let point = new ymaps.Placemark([
            e.coords[0], e.coords[1]
        ]);
        this.map.geoObjects.add(point);
        point.events.add('click', async e => {
            console.log('sdf')
        })
    }
};