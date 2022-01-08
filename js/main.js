// NUEVA VENTA
const modalAdd = document.querySelector('.modal-container-add');
const btnAdd = document.getElementById('add')
const btnCancel = document.getElementById('cancel');
const btnSave = document.getElementById('addSave')
const form = document.getElementById('form-add') 
const table = document.getElementById('table')
const selectSalesWoman = document.getElementById('salesWoman')
 

btnCancel.addEventListener('click', ()=>{
    modalAdd.style.visibility='hidden';
})

btnAdd.addEventListener('click', ()=>{
    modalAdd.style.visibility = 'visible';
    form.addEventListener('submit', agregarVenta)
})


const agregarVenta = (e) => {
    e.preventDefault()
    const list = document.createElement('tr')

    //guardo value de los options
    const optionSalesWoman = selectSalesWoman.options[selectSalesWoman.selectedIndex].value;

    list.innerHTML = `<td>${optionSalesWoman}</td>`
    table.appendChild(list)
}


/*

window.addEventListener('click', (e) =>{
    if (e.target === modalAdd){
        modalAdd.style.visibility='hidden';
    }
})
*/