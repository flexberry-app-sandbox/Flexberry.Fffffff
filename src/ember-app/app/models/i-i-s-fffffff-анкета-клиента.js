import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АнкетаКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-fffffff-анкета-клиента';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АнкетаКлиентаMixin, Validations, {
});

defineProjections(Model);

export default Model;
