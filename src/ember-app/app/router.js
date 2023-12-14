import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fffffff-а-о-п-и-l');
  this.route('i-i-s-fffffff-а-о-п-и-e',
  { path: 'i-i-s-fffffff-а-о-п-и-e/:id' });
  this.route('i-i-s-fffffff-а-о-п-и-e.new',
  { path: 'i-i-s-fffffff-а-о-п-и-e/new' });
  this.route('i-i-s-fffffff-администратор-l');
  this.route('i-i-s-fffffff-администратор-e',
  { path: 'i-i-s-fffffff-администратор-e/:id' });
  this.route('i-i-s-fffffff-администратор-e.new',
  { path: 'i-i-s-fffffff-администратор-e/new' });
  this.route('i-i-s-fffffff-анкета-клиента-l');
  this.route('i-i-s-fffffff-анкета-клиента-e',
  { path: 'i-i-s-fffffff-анкета-клиента-e/:id' });
  this.route('i-i-s-fffffff-анкета-клиента-e.new',
  { path: 'i-i-s-fffffff-анкета-клиента-e/new' });
  this.route('i-i-s-fffffff-гостиница-l');
  this.route('i-i-s-fffffff-гостиница-e',
  { path: 'i-i-s-fffffff-гостиница-e/:id' });
  this.route('i-i-s-fffffff-гостиница-e.new',
  { path: 'i-i-s-fffffff-гостиница-e/new' });
  this.route('i-i-s-fffffff-должность-l');
  this.route('i-i-s-fffffff-должность-e',
  { path: 'i-i-s-fffffff-должность-e/:id' });
  this.route('i-i-s-fffffff-должность-e.new',
  { path: 'i-i-s-fffffff-должность-e/new' });
  this.route('i-i-s-fffffff-ж-р-и-г-l');
  this.route('i-i-s-fffffff-ж-р-и-г-e',
  { path: 'i-i-s-fffffff-ж-р-и-г-e/:id' });
  this.route('i-i-s-fffffff-ж-р-и-г-e.new',
  { path: 'i-i-s-fffffff-ж-р-и-г-e/new' });
  this.route('i-i-s-fffffff-паспортные-д-l');
  this.route('i-i-s-fffffff-паспортные-д-e',
  { path: 'i-i-s-fffffff-паспортные-д-e/:id' });
  this.route('i-i-s-fffffff-паспортные-д-e.new',
  { path: 'i-i-s-fffffff-паспортные-д-e/new' });
  this.route('i-i-s-fffffff-персонал-l');
  this.route('i-i-s-fffffff-персонал-e',
  { path: 'i-i-s-fffffff-персонал-e/:id' });
  this.route('i-i-s-fffffff-персонал-e.new',
  { path: 'i-i-s-fffffff-персонал-e/new' });
  this.route('i-i-s-fffffff-посетители1-l');
  this.route('i-i-s-fffffff-посетители1-e',
  { path: 'i-i-s-fffffff-посетители1-e/:id' });
  this.route('i-i-s-fffffff-посетители1-e.new',
  { path: 'i-i-s-fffffff-посетители1-e/new' });
});

export default Router;
