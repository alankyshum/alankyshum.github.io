const DATA = {
  'vue-aside': {
    contacts: [{
      type: 'Email',
      items: [{
        text: 'alan_shum@outlook.com',
        href: 'mail-to:alan_shum@outlook.com'
      }]
    }, {
      type: 'Phone',
      items: [{
        text: '+852 6741 2369',
        href: 'tel:+85267412369'
      }, {
        text: '+1 650 425 7471',
        href: 'tel:+16504257471'
      }]
    }, {
      type: 'Social',
      inline: true,
      items: [{
        icon: 'fa fa-facebook',
        href: 'https://www.facebook.com/alanshumky'
      }, {
        icon: 'fa fa-twitter',
        href: 'https://twitter.com/alan200994'
      }, {
        icon: 'fa fa-linkedin',
        href: 'https://www.linkedin.com/in/kyshum/'
      }]
    }]
  },
  'vue-main': {
    roles: [
      'a Tech 💕 Enthusiat',
      'a Full-Stack 🤓 Developer',
      'a 👶 brother of 2 elder sisters',
      'a 🇭🇰  Hong Konger',
      'living in 🇺🇸  San Francisco'
    ]
  }
}

function registerComponents() {
  const vueComponentsTemplates = document.querySelectorAll('[id*=vue-]');
  const componentsList = {};
  for (let template of vueComponentsTemplates) {
    componentsList[template.id] = Vue.component(template.id, {
      template: document.getElementById(template.id).innerHTML,
      data: () => DATA[template.id] || {}
    });
  }
  return componentsList;
}
const components = registerComponents();

function registerElements() {
  new Vue({
    el: '#mainApp'
  });
}
registerElements();