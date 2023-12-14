import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  анкетаКлиента: DS.belongsTo('i-i-s-fffffff-анкета-клиента', { inverse: null, async: false }),
  гостиница: DS.belongsTo('i-i-s-fffffff-гостиница', { inverse: null, async: false }),
  жРИГ: DS.belongsTo('i-i-s-fffffff-ж-р-и-г', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-fffffff-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  анкетаКлиента: {
    descriptionKey: 'models.i-i-s-fffffff-администратор.validations.анкетаКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  гостиница: {
    descriptionKey: 'models.i-i-s-fffffff-администратор.validations.гостиница.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  жРИГ: {
    descriptionKey: 'models.i-i-s-fffffff-администратор.validations.жРИГ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-fffffff-администратор.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АдминистраторE', 'i-i-s-fffffff-администратор', {
    
  });

  modelClass.defineProjection('АдминистраторL', 'i-i-s-fffffff-администратор', {
    
  });
};
