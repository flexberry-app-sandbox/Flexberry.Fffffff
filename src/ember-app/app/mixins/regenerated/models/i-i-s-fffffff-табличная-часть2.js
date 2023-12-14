import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  прибытие: DS.attr('date'),
  убытие: DS.attr('date'),
  жРИГ: DS.belongsTo('i-i-s-fffffff-ж-р-и-г', { inverse: 'табличнаяЧасть2', async: false })
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-fffffff-табличная-часть2.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прибытие: {
    descriptionKey: 'models.i-i-s-fffffff-табличная-часть2.validations.прибытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  убытие: {
    descriptionKey: 'models.i-i-s-fffffff-табличная-часть2.validations.убытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  жРИГ: {
    descriptionKey: 'models.i-i-s-fffffff-табличная-часть2.validations.жРИГ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧ2E', 'i-i-s-fffffff-табличная-часть2', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    прибытие: attr('Прибытие', { index: 1 }),
    убытие: attr('Убытие', { index: 2 })
  });
};
