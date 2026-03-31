(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
      return;
    }
    fn();
  }

  function showFeedback(form, message, tone) {
    if (typeof window.eduMaxToast === "function") {
      window.eduMaxToast(message, tone || "success");
      return;
    }

    alert(message);
  }

  function setupForms() {
    var forms = Array.prototype.slice.call(document.querySelectorAll("[data-validate-form]"));

    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          var firstInvalid = form.querySelector(":invalid");
          if (firstInvalid && typeof firstInvalid.reportValidity === "function") {
            firstInvalid.reportValidity();
          } else if (firstInvalid) {
            firstInvalid.focus();
          }
          return;
        }

        var message = form.dataset.successMessage || "Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.";
        showFeedback(form, message, "success");
        form.reset();
        form.classList.remove("was-validated");
      });
    });
  }

  ready(setupForms);
})();

