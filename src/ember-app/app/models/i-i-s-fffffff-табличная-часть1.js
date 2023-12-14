import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТабличнаяЧасть1Mixin
} from '../mixins/regenerated/models/i-i-s-fffffff-табличная-часть1';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабличнаяЧасть1Mixin, Validations, {
});

defineProjections(Model);

export default Model;
