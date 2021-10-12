const forms = document.forms[0];
input.value = 'Search Here';
input.addEventListener('focus', function(){
    if (input.value==='Search here') {
        input.value = ''
    }
}, false);

const form = document.forms['search'];
form.addEventListener ('submit', () => alert('form submitted'), false);

function search() {
    alert('Form submitted');
};