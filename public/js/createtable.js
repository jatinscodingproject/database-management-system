document.addEventListener('DOMContentLoaded',function(){
    const add_table = document.querySelector('.add_table');
    const main_contaainer = document.querySelector('.table_name_container');
    const table_name = document.querySelector('.table_name').value;

    if(add_table){
        add_table.addEventListener('click',function(e){
            e.preventDefault();

            // creating new div where create table can display and we can views the entities of it
            const newDiv = document.createElement('div');
            newDiv.className = 'table_to_add';

            //creating anchor tag when user hits the table it can view that table
            const anchor_tag = document.createElement('a');
            anchor_tag.style.textDecoration = 'None';
            anchor_tag.style.color = 'black';
            anchor_tag.style.fontSize = '18px';
            anchor_tag.innerText = table_name;
            const divide_by_line = document.createElement('hr');

            newDiv.appendChild(anchor_tag);
            newDiv.appendChild(divide_by_line);
            main_contaainer.appendChild(newDiv);
            console.log(1)
        })
    }

})
