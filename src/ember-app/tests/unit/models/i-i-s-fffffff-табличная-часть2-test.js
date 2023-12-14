import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fffffff-табличная-часть2', 'Unit | Model | i-i-s-fffffff-табличная-часть2', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fffffff-а-о-п-и',
    'model:i-i-s-fffffff-администратор',
    'model:i-i-s-fffffff-анкета-клиента',
    'model:i-i-s-fffffff-гостиница',
    'model:i-i-s-fffffff-должность',
    'model:i-i-s-fffffff-ж-р-и-г',
    'model:i-i-s-fffffff-паспортные-д',
    'model:i-i-s-fffffff-персонал',
    'model:i-i-s-fffffff-посетители1',
    'model:i-i-s-fffffff-табличная-часть1',
    'model:i-i-s-fffffff-табличная-часть2',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
