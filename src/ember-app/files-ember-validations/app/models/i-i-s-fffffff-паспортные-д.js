import {
  defineNamespace,
  defineProjections,
  Model as ПаспортныеДMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-паспортные-д';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПаспортныеДMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
