/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input
* */

const elementBlur = (e) => {
  let targetElement = e.target;
    const isValid = validateRegex(targetElement);
    resetField(e);

    if(targetElement.value && isValid){
      // format value for leading zeros and decimal
      targetElement.value = targetElement.value.replace(/^0+/, '');

      if (targetElement.value.charAt(0) === '.') {
        targetElement.value = '0' + targetElement.value;
      }
      targetElement.classList.add('c-numeric-input--valid');

    }else if(targetElement.value && !isValid){
      let errorSpan = document.createElement('span');
      errorSpan.classList.add('c-numeric-input__error-msg');
      errorSpan.innerHTML = 'invalid input';

      targetElement.classList.add('c-numeric-input--error');

      if(targetElement.nextSibling.className!='c-numeric-input__error-msg'){
        targetElement.after(errorSpan)
      }

    }
}

const validateRegex = (e) => {
  const isValidNumber = /^-?\d*\.?\d*[0-9]$/.test(e.value);
  return isValidNumber;
}

const resetField = (e) => { 
  let targetElement = e.target
  targetElement.className = 'c-numeric-input'
  if(targetElement.nextSibling.className=='c-numeric-input__error-msg'){
    targetElement.nextSibling.remove()
  }
}

const NumericInput = {
  init: () => {
    document.querySelectorAll('.c-numeric-input').forEach(elem => {
      elem.addEventListener('blur', NumericInput.onBlur)
      elem.addEventListener('focus', NumericInput.focusField)
    });
  },
  focusField: (e) => resetField(e),
  onBlur: (e) => elementBlur(e)
};
document.addEventListener('DOMContentLoaded', NumericInput.init);
