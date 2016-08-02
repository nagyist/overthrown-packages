import './docsBlock.html';

Template.docsBlock.events({
  'click .docsToggleLink': function(event, template) {
    event.preventDefault();
    let docsGroupContent = template.find('.docsGroupContent');
    $(docsGroupContent).toggle(80);
  }
})
