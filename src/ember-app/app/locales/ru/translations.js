import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFffffffАОПИLForm from './forms/i-i-s-fffffff-а-о-п-и-l';
import IISFffffffАдминистраторLForm from './forms/i-i-s-fffffff-администратор-l';
import IISFffffffАнкетаКлиентаLForm from './forms/i-i-s-fffffff-анкета-клиента-l';
import IISFffffffГостиницаLForm from './forms/i-i-s-fffffff-гостиница-l';
import IISFffffffДолжностьLForm from './forms/i-i-s-fffffff-должность-l';
import IISFffffffЖРИГLForm from './forms/i-i-s-fffffff-ж-р-и-г-l';
import IISFffffffПаспортныеДLForm from './forms/i-i-s-fffffff-паспортные-д-l';
import IISFffffffПерсоналLForm from './forms/i-i-s-fffffff-персонал-l';
import IISFffffffПосетители1LForm from './forms/i-i-s-fffffff-посетители1-l';
import IISFffffffАОПИEForm from './forms/i-i-s-fffffff-а-о-п-и-e';
import IISFffffffАдминистраторEForm from './forms/i-i-s-fffffff-администратор-e';
import IISFffffffАнкетаКлиентаEForm from './forms/i-i-s-fffffff-анкета-клиента-e';
import IISFffffffГостиницаEForm from './forms/i-i-s-fffffff-гостиница-e';
import IISFffffffДолжностьEForm from './forms/i-i-s-fffffff-должность-e';
import IISFffffffЖРИГEForm from './forms/i-i-s-fffffff-ж-р-и-г-e';
import IISFffffffПаспортныеДEForm from './forms/i-i-s-fffffff-паспортные-д-e';
import IISFffffffПерсоналEForm from './forms/i-i-s-fffffff-персонал-e';
import IISFffffffПосетители1EForm from './forms/i-i-s-fffffff-посетители1-e';
import IISFffffffАОПИModel from './models/i-i-s-fffffff-а-о-п-и';
import IISFffffffАдминистраторModel from './models/i-i-s-fffffff-администратор';
import IISFffffffАнкетаКлиентаModel from './models/i-i-s-fffffff-анкета-клиента';
import IISFffffffГостиницаModel from './models/i-i-s-fffffff-гостиница';
import IISFffffffДолжностьModel from './models/i-i-s-fffffff-должность';
import IISFffffffЖРИГModel from './models/i-i-s-fffffff-ж-р-и-г';
import IISFffffffПаспортныеДModel from './models/i-i-s-fffffff-паспортные-д';
import IISFffffffПерсоналModel from './models/i-i-s-fffffff-персонал';
import IISFffffffПосетители1Model from './models/i-i-s-fffffff-посетители1';
import IISFffffffТабличнаяЧасть1Model from './models/i-i-s-fffffff-табличная-часть1';
import IISFffffffТабличнаяЧасть2Model from './models/i-i-s-fffffff-табличная-часть2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fffffff-а-о-п-и': IISFffffffАОПИModel,
    'i-i-s-fffffff-администратор': IISFffffffАдминистраторModel,
    'i-i-s-fffffff-анкета-клиента': IISFffffffАнкетаКлиентаModel,
    'i-i-s-fffffff-гостиница': IISFffffffГостиницаModel,
    'i-i-s-fffffff-должность': IISFffffffДолжностьModel,
    'i-i-s-fffffff-ж-р-и-г': IISFffffffЖРИГModel,
    'i-i-s-fffffff-паспортные-д': IISFffffffПаспортныеДModel,
    'i-i-s-fffffff-персонал': IISFffffffПерсоналModel,
    'i-i-s-fffffff-посетители1': IISFffffffПосетители1Model,
    'i-i-s-fffffff-табличная-часть1': IISFffffffТабличнаяЧасть1Model,
    'i-i-s-fffffff-табличная-часть2': IISFffffffТабличнаяЧасть2Model
  },

  'application-name': 'Fffffff',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fffffff',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fffffff',
          title: 'Fffffff'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-fffffff-посетители1-l': {
            caption: 'Посетители1L',
            title: 'Посетители1'
          },
          'i-i-s-fffffff-а-о-п-и-l': {
            caption: 'АОПИL',
            title: 'АОПИ'
          },
          'i-i-s-fffffff-паспортные-д-l': {
            caption: 'ПаспортныеДL',
            title: 'Паспортные Д'
          },
          'i-i-s-fffffff-анкета-клиента-l': {
            caption: 'АнкетаКлиентаL',
            title: 'Анкета клиента'
          },
          'i-i-s-fffffff-должность-l': {
            caption: 'ДолжностьL',
            title: 'Должность'
          },
          'i-i-s-fffffff-администратор-l': {
            caption: 'АдминистраторL',
            title: 'Администратор'
          },
          'i-i-s-fffffff-гостиница-l': {
            caption: 'ГостиницаL',
            title: 'Гостиница'
          },
          'i-i-s-fffffff-ж-р-и-г-l': {
            caption: 'ЖРИГL',
            title: 'ЖРИГ'
          },
          'i-i-s-fffffff-персонал-l': {
            caption: 'ПерсоналL',
            title: 'Персонал'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-fffffff-а-о-п-и-l': IISFffffffАОПИLForm,
    'i-i-s-fffffff-администратор-l': IISFffffffАдминистраторLForm,
    'i-i-s-fffffff-анкета-клиента-l': IISFffffffАнкетаКлиентаLForm,
    'i-i-s-fffffff-гостиница-l': IISFffffffГостиницаLForm,
    'i-i-s-fffffff-должность-l': IISFffffffДолжностьLForm,
    'i-i-s-fffffff-ж-р-и-г-l': IISFffffffЖРИГLForm,
    'i-i-s-fffffff-паспортные-д-l': IISFffffffПаспортныеДLForm,
    'i-i-s-fffffff-персонал-l': IISFffffffПерсоналLForm,
    'i-i-s-fffffff-посетители1-l': IISFffffffПосетители1LForm,
    'i-i-s-fffffff-а-о-п-и-e': IISFffffffАОПИEForm,
    'i-i-s-fffffff-администратор-e': IISFffffffАдминистраторEForm,
    'i-i-s-fffffff-анкета-клиента-e': IISFffffffАнкетаКлиентаEForm,
    'i-i-s-fffffff-гостиница-e': IISFffffffГостиницаEForm,
    'i-i-s-fffffff-должность-e': IISFffffffДолжностьEForm,
    'i-i-s-fffffff-ж-р-и-г-e': IISFffffffЖРИГEForm,
    'i-i-s-fffffff-паспортные-д-e': IISFffffffПаспортныеДEForm,
    'i-i-s-fffffff-персонал-e': IISFffffffПерсоналEForm,
    'i-i-s-fffffff-посетители1-e': IISFffffffПосетители1EForm
  },

});

export default translations;
