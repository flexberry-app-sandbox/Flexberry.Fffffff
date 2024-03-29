import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.belongsTo('i-i-s-fffffff-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-fffffff-персонал.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПерсоналE', 'i-i-s-fffffff-персонал', {
    
  });

  modelClass.defineProjection('ПерсоналL', 'i-i-s-fffffff-персонал', {
    
  });
};
