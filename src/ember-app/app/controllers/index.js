import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-fffffff-посетители1-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-посетители1-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-посетители1-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-fffffff-а-о-п-и-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-а-о-п-и-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-а-о-п-и-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-fffffff-паспортные-д-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-паспортные-д-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-паспортные-д-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-fffffff-анкета-клиента-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-анкета-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-анкета-клиента-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-fffffff-должность-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-fffffff-администратор-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-администратор-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-администратор-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-fffffff-гостиница-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-гостиница-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-гостиница-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-fffffff-ж-р-и-г-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-ж-р-и-г-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-ж-р-и-г-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-fffffff-персонал-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-fffffff-персонал-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})