import {
  defineNamespace,
  defineProjections,
  Model as АнкетаКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-анкета-клиента';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АнкетаКлиентаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
