import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalize(type, payload, key) {
        return this._super(type, humps.camelizeKeys(payload), key);
    },
    normalizePayload(payload) {
        return {[payload.data.type]: payload.data};
    },
});
