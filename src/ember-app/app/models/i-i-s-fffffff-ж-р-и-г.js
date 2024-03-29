import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЖРИГMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-ж-р-и-г';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖРИГMixin, Validations, {
});

defineProjections(Model);

export default Model;
