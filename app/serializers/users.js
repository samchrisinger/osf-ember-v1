import DS from 'ember-data';
import DRFSerializer from 'ember-django-adapter/serializers/drf';

export default DRFSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
  }
});
