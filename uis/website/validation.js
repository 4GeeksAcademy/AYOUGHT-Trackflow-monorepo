
"use strict";

// =======================================
// HEALTHCORE FORM VALIDATION
// =======================================

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("applicationForm");
  const status = document.getElementById("formStatus");

  if (!form || !status) return;

  const fields = [
    "fullName",
    "email",
    "phone",
    "location",
    "message"
  ].map(id => document.getElementById(id));

  // ---------------------------------------
  // FIND THE ERROR ELEMENT FOR A FIELD
  // ---------------------------------------

  function getErrorElement(field) {
    return document.getElementById(
      `${field.id}Error`
    );
  }

  // ---------------------------------------
  // VALIDATE INDIVIDUAL FIELD
  // ---------------------------------------

  function getValidationMessage(field) {

    const value = field.value.trim();

    if (!value) {
      return "This field is required.";
    }

    switch (field.id) {

      case "fullName":
        if (value.length < 2) {
          return "Enter a name with at least 2 characters.";
        }
        break;

      case "email":
        if (!field.validity.valid) {
          return "Enter a valid email address.";
        }
        break;

      case "phone": {
        const digits = value.replace(/\D/g, "");

        if (!/^\+?[\d\s().-]+$/.test(value) ||
            digits.length < 7 || digits.length > 15) {
          return "Enter a valid phone number with its country code if needed.";
        }
        break;
      }

      case "location":
        if (!field.value) {
          return "Please select your service location.";
        }
        break;

      case "message":
        if (value.length < 10) {
          return "Please enter at least 10 characters.";
        }
        break;
    }

    return "";
  }

  // ---------------------------------------
  // DISPLAY VALIDATION RESULT
  // ---------------------------------------

  function validateField(field) {

    const errorElement = getErrorElement(field);
    const message = getValidationMessage(field);
    const hasError = Boolean(message);

    if (errorElement) {
      errorElement.textContent = message;
    }

    field.setAttribute(
      "aria-invalid",
      String(hasError)
    );

    field.classList.toggle(
      "border-red-600",
      hasError
    );

    field.classList.toggle(
      "border-slate-300",
      !hasError
    );

    return !hasError;
  }

  // ---------------------------------------
  // REAL-TIME VALIDATION
  // ---------------------------------------

  fields.forEach(field => {

    if (!field) return;

    field.addEventListener("blur", () => {
      validateField(field);
    });

    field.addEventListener("input", () => {

      if (field.getAttribute("aria-invalid") === "true") {
        validateField(field);
      }

      clearStatus();
    });

    field.addEventListener("change", () => {
      validateField(field);
      clearStatus();
    });

  });

  // ---------------------------------------
  // CLEAR STATUS MESSAGE
  // ---------------------------------------

  function clearStatus() {
    status.textContent = "";
    status.className = "mt-6 font-medium";
  }

  // ---------------------------------------
  // FORM SUBMISSION
  // ---------------------------------------

  form.addEventListener("submit", event => {

    event.preventDefault();

    let isFormValid = true;
    let firstInvalidField = null;

    fields.forEach(field => {

      if (!field) {
        isFormValid = false;
        return;
      }

      const valid = validateField(field);

      if (!valid) {
        isFormValid = false;

        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }

    });

    if (!isFormValid) {

      status.textContent =
        "Please correct the highlighted fields before submitting.";

      status.className =
        "mt-6 font-medium text-red-700";

      if (firstInvalidField) {
        firstInvalidField.focus();
      }

      return;
    }

    // Demonstration only:
    // No information is sent to a server.

    status.textContent =
      "Success! Your information passed validation. " +
      "This demonstration did not send or save your inquiry.";

    status.className =
      "mt-6 font-medium text-green-700";

    status.focus();

  });

  // ---------------------------------------
  // RESET FORM
  // ---------------------------------------

  form.addEventListener("reset", () => {

    fields.forEach(field => {

      if (!field) return;

      field.removeAttribute("aria-invalid");

      field.classList.remove("border-red-600");
      field.classList.add("border-slate-300");

      const errorElement = getErrorElement(field);

      if (errorElement) {
        errorElement.textContent = "";
      }

    });

    clearStatus();

  });

});
