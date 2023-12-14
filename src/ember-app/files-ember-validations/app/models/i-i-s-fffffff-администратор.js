import {
  defineNamespace,
  defineProjections,
  Model as АдминистраторMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-администратор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АдминистраторMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
