import {
    ageInput,
    genderMaleInput,
    heightInput,
    inputsGroup,
    resetButton,
    resultBlock,
    submitButton,
    weightInput
} from './script.js';

const allInputsGroup = document.querySelectorAll('#age, #height, #weight');
const minPhysicalActivityInput = document.querySelector('#activity-minimal');

const onResetButtonClick = () => {
    resetInputs();
    disableSubmitButton();
    disableResetButton();
    hideResultBlock();
};

const resetInputs = () => {
    genderMaleInput.checked = true;
    allInputsGroup.forEach(input => {
        input.value = '';
    });
    minPhysicalActivityInput.checked = true;
};

const disableSubmitButton = () => {
    submitButton.disabled = true;
};

const disableResetButton = () => {
    resetButton.disabled = true;
};

const hideResultBlock = () => {
    resultBlock.classList.add('counter__result--hidden');
};

const onFieldsInput = () => {
    resetButton.disabled = !(ageInput.value || heightInput.value || weightInput.value);
};

const resetForm = () => {
    inputsGroup.addEventListener('input', onFieldsInput);
    resetButton.addEventListener('click', onResetButtonClick);
};

export {resetForm};