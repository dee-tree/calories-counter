import {resetForm} from './reset-form.js';
import {calculateCalories} from './calculate-calories.js';

const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');

const inputsGroup = document.querySelector('.inputs-group');

const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');

const resultBlock = document.querySelector('.counter__result');

const caloriesNorm = resultBlock.querySelector('#calories-norm');
const caloriesMin = resultBlock.querySelector('#calories-minimal');
const caloriesMax = resultBlock.querySelector('#calories-maximal');

const genderMaleInput = document.querySelector('#gender-male');

calculateCalories();
resetForm();

export {
    submitButton, resetButton, inputsGroup, resultBlock,
    genderMaleInput, ageInput, heightInput, weightInput,
    caloriesNorm, caloriesMin, caloriesMax
};