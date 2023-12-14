import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКомнаты: DS.attr('number'),
  прибытие: DS.attr('date'),
  убытие: DS.attr('date')
});

export let ValidationRules = {
  номерКомнаты: {
    descriptionKey: 'models.i-i-s-fffffff-анкета-клиента.validations.номерКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  прибытие: {
    descriptionKey: 'models.i-i-s-fffffff-анкета-клиента.validations.прибытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  убытие: {
    descriptionKey: 'models.i-i-s-fffffff-анкета-клиента.validations.убытие.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АнкетаКлиентаE', 'i-i-s-fffffff-анкета-клиента', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    прибытие: attr('Прибытие', { index: 1 }),
    убытие: attr('Убытие', { index: 2 })
  });

  modelClass.defineProjection('АнкетаКлиентаL', 'i-i-s-fffffff-анкета-клиента', {
    номерКомнаты: attr('Номер комнаты', { index: 0 }),
    прибытие: attr('Прибытие', { index: 1 }),
    убытие: attr('Убытие', { index: 2 })
  });
};
