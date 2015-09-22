angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function(mvToastr) {
  return {
    notify: function(msg) {
      mvToastr.success(msg);
      toastr.options = {
        "timeOut": "2000"
      };
      console.log(msg);
    }
  }
})
