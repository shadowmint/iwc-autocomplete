(function(data) {
  define(["require", "exports", 'jquery', 'iwc'], function(require, exports, $, iwc) {
    var Autocomplete = (function() {
      function Autocomplete() {}
      Autocomplete.prototype.content = function() {
        console.log(data.markup);
        return data.markup;
      };

      Autocomplete.prototype.init = function() {
        console.log(this.data);
      };
      return Autocomplete;
    })();
    exports.Autocomplete = Autocomplete;

    var AutocompleteFactory = (function() {
      function AutocompleteFactory() {
        this.stylesheet = data.styles;
      }
      AutocompleteFactory.prototype.query = function(root) {
        return $(root).find('.component--iwc-autocomplete');
      };

      AutocompleteFactory.prototype.factory = function() {
        return new Autocomplete();
      };
      return AutocompleteFactory;
    })();
    exports.AutocompleteFactory = AutocompleteFactory;

    iwc.register(new AutocompleteFactory());
  });
  //# sourceMappingURL=script.js.map

})({
  styles: ".component--iwc-autocomplete {\n  border: 2px solid #efffff; }\n\n/*# sourceMappingURL=styles.css.map */\n",
  markup: "<input type=\"text\"/><div class=\"hints\"></div>",
  resources: {}
});