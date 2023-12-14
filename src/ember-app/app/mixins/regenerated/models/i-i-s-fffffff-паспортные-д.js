import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гражданство: DS.attr('string'),
  датаРождения: DS.attr('date'),
  инГражданин: DS.attr('boolean'),
  номерПаспорта: DS.attr('number'),
  серияПаспорта: DS.attr('number'),
  фИО: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-fffffff-персонал', { inverse: null, async: false }),
  посетители1: DS.belongsTo('i-i-s-fffffff-посетители1', { inverse: null, async: false })
});

export let ValidationRules = {
  гражданство: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.гражданство.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  инГражданин: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.инГражданин.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  посетители1: {
    descriptionKey: 'models.i-i-s-fffffff-паспортные-д.validations.посетители1.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПаспортныеДE', 'i-i-s-fffffff-паспортные-д', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    серияПаспорта: attr('Серия паспорта', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 })
  });

  modelClass.defineProjection('ПаспортныеДL', 'i-i-s-fffffff-паспортные-д', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    серияПаспорта: attr('Серия паспорта', { index: 2 }),
    номерПаспорта: attr('Номер паспорта', { index: 3 })
  });
};
