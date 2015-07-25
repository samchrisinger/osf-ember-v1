import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('profile-citation-preview', 'Integration | Component | profile citation preview', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile-citation-preview}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile-citation-preview}}
      template block text
    {{/profile-citation-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
