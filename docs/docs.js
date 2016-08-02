import './docs.html';
import './docsObjective.html';
import './docsAlliances.html';
import './docsBattles.html';
import './docsMovement.html';
import './docsTutorial.html';
import './docsTurns.html';
import './docsLinks.html';
import './docsBlock.js';
import './docs.less';

Template.docsBase.helpers({
  getTemplate: function(templateName) {
    return Blaze.toHTML(Template[templateName]);
  }
})
