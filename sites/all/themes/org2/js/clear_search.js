// Thanks Brad for this script http://eosrei.net/articles/2011/03/clear-form-field-click-js-behaviors-drupal-7
(function ($) {
Drupal.behaviors.clear_search = {
  attach: function(context) {
    $('#search-block-form .form-text', context).once(function(){  
      this.defaultValue = this.value;
      $(this).click(function(){
        if(this.value == this.defaultValue){
          $(this).val("");
        }
        return false;
      });
      $(this).blur(function(){
        if(this.value == ""){
          $(this).val(this.defaultValue);
        }
      });
    });
  }
}
})(jQuery);