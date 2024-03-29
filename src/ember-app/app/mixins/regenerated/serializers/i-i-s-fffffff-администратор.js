import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      анкетаКлиента: { serialize: 'odata-id', deserialize: 'records' },
      гостиница: { serialize: 'odata-id', deserialize: 'records' },
      жРИГ: { serialize: 'odata-id', deserialize: 'records' },
      персонал: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
