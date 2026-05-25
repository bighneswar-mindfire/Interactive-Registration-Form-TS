import { type AppState } from '../../types/types';

export const Form = (state: AppState): HTMLElement => {
  const container = document.createElement('div');

  const h2 = document.createElement('h2');
  h2.textContent = 'Registration Form';
  container.appendChild(h2);

  const form = document.createElement('form');
  form.id = 'regForm';

  const createInputGroup = (
    labelText: string,
    id: string,
    type: string,
    name: string,
    value: string
  ) => {
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = name;
    input.value = value;

    const errorLabel = document.createElement('label');
    errorLabel.className = 'validation';
    if (!state.errors[name]) errorLabel.classList.add('hide');
    errorLabel.textContent = state.errors[name] || '';

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(errorLabel);
    form.appendChild(document.createElement('br'));
  };

  const { name, mail, phone, gender } = state.formData;

  createInputGroup('Full name:', 'name', 'text', 'name', name);
  createInputGroup('Email address:', 'mail', 'email', 'mail', mail);
  createInputGroup('Phone number:', 'phone', 'tel', 'phone', phone);

  // gender
  const genderLabel = document.createElement('label');
  genderLabel.textContent = 'Gender:';
  form.appendChild(genderLabel);

  const radioContainer = document.createElement('div');
  radioContainer.className = 'radio-group';

  ['Male', 'Female', 'Other'].forEach((g) => {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'gender';
    radio.value = g;
    radio.id = `${g.toLowerCase()}`;
    if (gender === g) radio.checked = true;

    const rLabel = document.createElement('label');
    rLabel.textContent = `${g}`;
    rLabel.setAttribute('for', `${g.toLowerCase()}`);

    radioContainer.appendChild(radio);
    radioContainer.appendChild(rLabel);
  });
  form.appendChild(radioContainer);

  const gError = document.createElement('label');
  gError.className = `validation ${state.errors.gender ? '' : 'hide'}`;
  gError.textContent = state.errors.gender || '';
  form.appendChild(gError);
  form.appendChild(document.createElement('br'));

  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = state.editingId ? 'Update' : 'Submit';
  form.appendChild(submit);

  container.appendChild(form);
  return container;
};
