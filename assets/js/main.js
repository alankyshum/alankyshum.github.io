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
    buttonText: 'Resume',
    roles: [
      'a Tech 💕 Enthusiat',
      'a Full-Stack 🤓 Developer',
      'a 👶 brother of 2 elder sisters',
      'a 🇭🇰  Hong Konger',
      'living in 🇺🇸  San Francisco'
    ],
    education: [{
      logo: 'assets/img/logos/HKUST_Logo.svg',
      institution: 'The Hong Kong University of Science and Technology (HKUST)',
      time: '2012-2016',
      details: {
        CGA: '3.132/4.3',
        Major: 'BEng of Computer Science'
      }
    }, {
      logo: 'assets/img/logos/KAIST.png',
      institution: 'The Korea Advanced Insitute of Science and Technology (KAIST)',
      time: 'Jan 2015 - Jun 2015',
      details: {
        TGA: '3.3/4.3',
        Programmes: 'Studied: 2-D Design, Computer Network, Financial Management, Basic Korean I for Foreign students'
      }
    }]
  }
};

const METHODS = {
  'vue-main': {
    toggleResumeMode() {
      mainApp.resumeMode = !mainApp.resumeMode;
      this.buttonText = mainApp.resumeMode ? 'Home' : 'Resume'
    }
  }
};

function registerComponents() {
  const vueComponentsTemplates = document.querySelectorAll('[id*=vue-]');
  const componentsList = {};
  for (let template of vueComponentsTemplates) {
    componentsList[template.id] = Vue.component(template.id, {
      template: document.getElementById(template.id).innerHTML,
      data: () => DATA[template.id] || {},
      methods: METHODS[template.id] || null
    });
  }
  return componentsList;
}
const components = registerComponents();

function registerElements() {
  return new Vue({
    el: '#mainApp',
    data: {
      resumeMode: true
    }
  });
}
const mainApp = registerElements();