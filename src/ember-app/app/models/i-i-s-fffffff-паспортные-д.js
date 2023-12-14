import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПаспортныеДMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-паспортные-д';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПаспортныеДMixin, Validations, {
});

defineProjections(Model);

export default Model;
