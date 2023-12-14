import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  анкетаКлиента: DS.belongsTo('i-i-s-fffffff-анкета-клиента', { inverse: null, async: false })
});

export let ValidationRules = {
  анкетаКлиента: {
    descriptionKey: 'models.i-i-s-fffffff-посетители1.validations.анкетаКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Посетители1E', 'i-i-s-fffffff-посетители1', {
    
  });

  modelClass.defineProjection('Посетители1L', 'i-i-s-fffffff-посетители1', {
    
  });
};
