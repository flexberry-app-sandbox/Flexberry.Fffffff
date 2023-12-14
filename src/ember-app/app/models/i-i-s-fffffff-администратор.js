import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АдминистраторMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-администратор';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АдминистраторMixin, Validations, {
});

defineProjections(Model);

export default Model;
