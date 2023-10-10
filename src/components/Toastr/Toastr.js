import toastr from "toastr";

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

export function showMessage(title,message,type) {
    toastr[type](message,title);
  }
  
export function showErrorMessage(message) {
    showMessage("ERRO",message,'error');
  }
  
export function showWarningMessage(message) {
    showMessage("ALERTA",message,'warning');
  }
  
export function showSucessMessage(message) {
    showMessage("SUCESSO",message,'success');
  }
  