import {
    resultBlock,
    submitButton,
    inputsGroup,
    ageInput,
    heightInput,
    weightInput,
    genderMaleInput,
    caloriesNorm,
    caloriesMax,
    caloriesMin
} from './script.js';

const activityInput = document.querySelector('.radios-group');
let activityIdx = 1.2;

const onFieldsInput = () => {
    submitButton.disabled = !(ageInput.value && heightInput.value && weightInput.value);
};

const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    calculateFormulas();
    resultBlock.classList.remove('counter__result--hidden');
};

const calculateFormulas = () => {
    const sexIdx = genderMaleInput.checked ? 5 : -161;
    const savedWeight = Math.round(((10 * weightInput.value) + (6.25 * heightInput.value) - (5 * ageInput.value) + sexIdx)
        * activityIdx);
    const incWeight = Math.round(savedWeight * 1.15);
    const decWeight = Math.round(savedWeight * 0.85);

    caloriesNorm.textContent = String(savedWeight);
    caloriesMax.textContent = String(incWeight);
    caloriesMin.textContent = String(decWeight);
};

const calculateCalories = () => {
    inputsGroup.addEventListener('input', onFieldsInput);
    activityInput.addEventListener('change', (evt) => {
        switch (evt.target.id) {
            case 'activity-minimal':
                activityIdx = 1.2;
                break;
            case 'activity-low':
                activityIdx = 1.375;
                break;
            case 'activity-medium':
                activityIdx = 1.55;
                break;
            case 'activity-high':
                activityIdx = 1.725;
                break;
            case 'activity-maximal':
                activityIdx = 1.9;
                break;
        }
    });
    submitButton.addEventListener('click', onSubmitButtonClick);
};

export {calculateCalories};