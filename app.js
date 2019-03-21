const btnSubmit = document.querySelector('button[type="submit"]');
const addInput = document.querySelector('#message');
const list = document.querySelector('.list');
let newComment = document.querySelector('.newComment');

btnSubmit.addEventListener('click', (e)=> {
        e.preventDefault();
        let newDiv = document.createElement('div');
        newDiv.innerText= addInput.value;
        list.appendChild(newDiv);
        newComment.style.display='block';
});
