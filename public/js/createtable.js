document.addEventListener('DOMContentLoaded',function(){
    const add_table = document.querySelector('.add_table');
    const main_contaainer = document.querySelector('.table_name_container');

    if(add_table){
        add_table.addEventListener('click',function(e){
            e.preventDefault();

            const form = document.querySelector('#create_table_form');
            const formData = new FormData(form);
            const tableName = formData.get('table_create');
            const fieldname = formData.get('field_create');
            const field_data_type = formData.get('field_data_type');


            // creating new div where create table can display and we can views the entities of it
            const newDiv = document.createElement('div');
            newDiv.className = 'table_to_add';

            //creating anchor tag when user hits the table it can view that table
            const h3 = document.createElement('h3');
            h3.innerText = tableName;
            const divide_by_line = document.createElement('hr');

            newDiv.appendChild(h3);
            newDiv.appendChild(divide_by_line);
            main_contaainer.appendChild(newDiv);
            window.alert('table created successfully')
            window.location.href = '/'
        })
    }

})
