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
      programme: 'BEng of Computer Science',
      details: {
        CGA: '3.132/4.3'
      }
    }, {
      logo: 'assets/img/logos/KAIST.png',
      logoStyle: 'width: 70%',
      institution: 'The Korea Advanced Insitute of Science and Technology (KAIST)',
      time: 'Jan 2015 - Jun 2015',
      programme: 'Exchange Programme',
      details: {
        TGA: '3.3/4.3',
        Programmes: 'Studied: 2-D Design, Computer Network, Financial Management, Basic Korean I for Foreign students'
      }
    }],
    recognitions: [{
      time: 2014,
      logo: 'assets/img/logos/HackUST.png',
      logoStyle: 'width: 70%',
      award: 'Audience Favourite Award (Team Award)',
      organiser: 'HackUST 2014, THe HKUST',
      details: 'Openlore – A project made for Hackathon competition held in the HKUST, aiming at providing an all-in-one solution for online-learning and course content management.'
    }, {
      time: 2012,
      logo: 'assets/img/logos/HKUST_Logo.svg',
      award: 'School of Engineering Scholarship and University Scholarship',
      organiser: 'The HKUST',
      details: 'Award to student in recognition to their outstanding performance in HKDSE public examination.'
    }],
    works: [{
      logo: 'assets/img/logos/compass.svg',
      title: 'Full-stack web developer | Intern | Remote | Full-time',
      time: 'Aug 2015 – Present',
      company: 'Startup Compass Inc., San Francisco, the USA',
      duties: 'Responsible for building the benchmarking platform from front-end (Angular.JS) and back-end side (Ruby + Postgresql).'
    }, {
      logo: 'assets/img/logos/fanswifi.png',
      title: 'Full-stack web developer',
      time: 'Jun 2016 – Jul 2016',
      company: 'Fanswifi., Hong Kong',
      duties: 'Contributed to building social login feature, from both front-end and back- end side (Node.JS in ES6 for APIs+ PHP for static assets server).'
    }, {
      logo: 'assets/img/logos/keptme.png',
      title: 'Software Engineer Intern | Part-time',
      time: 'Sep 2015 – Nov 2015',
      company: 'Keptme, HK',
      duties: 'Responsible for front-end development of the web platform.'
    }, {
      logo: 'assets/img/logos/thecareerworks.png',
      title: 'Technical Support Role',
      time: 'July 2012 – May 2014',
      company: 'Omnitech Info Solutions (Career Works), HK',
      duties: 'Provide technical support services as a helpdesk role and standby for solving technical issues encountered by the staff workers of the investment banks we serve.'
    }, {
      logo: 'assets/img/logos/PCCW.png',
      title: 'Network Operation Engineer | Intern',
      time: 'July 2013 – August 2013',
      company: 'PCCW, HK',
      duties: 'Assist in providing programming support of the Web server set up, web portal modification and web application programming.'
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
      resumeMode: false
    }
  });
}
let mainApp = registerElements();