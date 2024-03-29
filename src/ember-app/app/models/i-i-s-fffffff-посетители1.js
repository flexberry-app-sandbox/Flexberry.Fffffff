import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Посетители1Mixin
} from '../mixins/regenerated/models/i-i-s-fffffff-посетители1';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Посетители1Mixin, Validations, {
});

defineProjections(Model);

export default Model;
