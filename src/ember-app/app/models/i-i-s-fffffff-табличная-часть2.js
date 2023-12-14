import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТабличнаяЧасть2Mixin
} from '../mixins/regenerated/models/i-i-s-fffffff-табличная-часть2';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТабличнаяЧасть2Mixin, Validations, {
});

defineProjections(Model);

export default Model;
