import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  фИО: DS.attr('string'),
  администратор: DS.belongsTo('i-i-s-fffffff-администратор', { inverse: null, async: false }),
  посетители1: DS.belongsTo('i-i-s-fffffff-посетители1', { inverse: null, async: false }),
  табличнаяЧасть1: DS.hasMany('i-i-s-fffffff-табличная-часть1', { inverse: 'аОПИ', async: false })
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-fffffff-а-о-п-и.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-fffffff-а-о-п-и.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  администратор: {
    descriptionKey: 'models.i-i-s-fffffff-а-о-п-и.validations.администратор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  посетители1: {
    descriptionKey: 'models.i-i-s-fffffff-а-о-п-и.validations.посетители1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  табличнаяЧасть1: {
    descriptionKey: 'models.i-i-s-fffffff-а-о-п-и.validations.табличнаяЧасть1.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АОПИE', 'i-i-s-fffffff-а-о-п-и', {
    фИО: attr('ФИО', { index: 0 }),
    номерКомнаты: attr('Номер комнаты', { index: 1 })
  });

  modelClass.defineProjection('АОПИL', 'i-i-s-fffffff-а-о-п-и', {
    фИО: attr('ФИО', { index: 0 }),
    номерКомнаты: attr('Номер комнаты', { index: 1 })
  });
};
