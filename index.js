// Import stylesheets
import './style.css';
const form = document.querySelector('#defineform');
form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(formData);
    const text = formData.get('defineword');
    console.log(text);
    return false; // prevent reload
};
