import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерЖурнала: DS.attr('number'),
  табличнаяЧасть2: DS.hasMany('i-i-s-fffffff-табличная-часть2', { inverse: 'жРИГ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-fffffff-ж-р-и-г.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЖурнала: {
    descriptionKey: 'models.i-i-s-fffffff-ж-р-и-г.validations.номерЖурнала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  табличнаяЧасть2: {
    descriptionKey: 'models.i-i-s-fffffff-ж-р-и-г.validations.табличнаяЧасть2.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖРИГE', 'i-i-s-fffffff-ж-р-и-г', {
    номерЖурнала: attr('Номер журнала', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    табличнаяЧасть2: hasMany('i-i-s-fffffff-табличная-часть2', 'Табличная часть2', {
      номерКомнаты: attr('Номер комнаты', { index: 0 }),
      прибытие: attr('Прибытие', { index: 1 }),
      убытие: attr('Убытие', { index: 2 })
    })
  });

  modelClass.defineProjection('ЖРИГL', 'i-i-s-fffffff-ж-р-и-г', {
    номерЖурнала: attr('Номер журнала', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
