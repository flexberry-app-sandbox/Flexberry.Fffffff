import {
  defineNamespace,
  defineProjections,
  Model as ТабличнаяЧасть1Mixin
} from '../mixins/regenerated/models/i-i-s-fffffff-табличная-часть1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабличнаяЧасть1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
