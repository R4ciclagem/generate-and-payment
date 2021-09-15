
export function keyPressAlphaValidation(event: any) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}

export function keyPressNumbersValidation(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }