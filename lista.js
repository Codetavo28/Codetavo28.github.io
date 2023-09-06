const inputAgg = document.querySelector("#agg-tareas");
const aggBtn = document.querySelector("#agg-button");
const form = document.querySelector("#agregar");
const todasBtn = document.querySelector("#todas")
const hechasBtn = document.querySelector("#hechas")
const pendientesBtn = document.querySelector("#pendientes")

const REGEX_Agg = /^(?!.*\s{2,})[\s\S]{1,280}[^ ]$/;

inputAgg.addEventListener('input', e => {
    const aggValidation = REGEX_Agg.test(inputAgg.value);

  if(!aggValidation) {
    aggBtn.disabled = true;
    
  } else {
    aggBtn.disabled = false;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const li =document.createElement('li');
  li.innerHTML = `
  <div class="tasks"> 
  <button class="delete-button">
      <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
  </button>

  <p class="text-task">${inputAgg.value}</p>

<button class="check-button">
  <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</button>
</div>
`;
list.append(li);
localStorage.setItem('listTask', list.innerHTML);
});


list.addEventListener('click', e => {
  if (e.target.closest('.delete-icon')) {
      e.target.closest('.delete-icon').parentElement.parentElement.parentElement.remove();
      localStorage.setItem('listTask', list.innerHTML);
  }
});

list.addEventListener('click', e => {
const btn = e.target.closest('.check-icon');
const selec = e.target.closest('.check-icon').parentElement.parentElement;

 if(selec.classList.contains('tasks')){
  selec.classList.remove('tasks');
  selec.classList.add('tasks-done');

  btn.innerHTML = `<svg class="return-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
</svg>`;

 } else {
  selec.classList.remove('tasks-done');
  selec.classList.add('tasks');

  btn.innerHTML =  `<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`;
 }

 localStorage.setItem('listTask', list.innerHTML);

});

































window.onload = () => {
  list.innerHTML = localStorage.getItem('listTask');
}


                

 