// Import stylesheets
import './style.css';

const form = document.getElementByID('defineform') as HTMLFormElement;

// const form: HTMLFormElement = document.querySelector('#defineform');


form.onsubmit = async (event: Event) => {
    event.preventDefault();
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload


};