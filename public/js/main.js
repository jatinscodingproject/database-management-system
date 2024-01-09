document.addEventListener('DOMContentLoaded', function () {
    const add_another_field = document.querySelector('.add_another_field');
    const new_field_name = document.querySelector('.field_name');
    const new_field_data_type = document.querySelector('.field_data_type');
    const table_name = document.querySelectorAll('.table_name').value;
    
    // Check if the element is found before adding the event listener
    if (add_another_field) {
        add_another_field.addEventListener('click', function (e) {
            e.preventDefault();

            const form = document.querySelector('#create_table_form');
            const formData = new FormData(form);
            const tableName = formData.get('table_create');
            const fieldname = formData.get('field_create');
            const field_data_type = formData.get('field_data_type');

            // table_name = tableName
            // new_field_name = fieldname
            // new_field_data_type= field_data_type

            // adding another field name functionality to field name
            const new_input_tag = document.createElement('input');
            new_input_tag.type = 'text';
            new_input_tag.placeholder = 'field name';
            new_field_name.appendChild(new_input_tag); // Use appendChild to add a new element to the existing one

            // adding another data type functionalty to field data type
            const element_to_add = `
                                    <select>
                                    <option value="string">STRING</option>
                                    <option value="boolean">BOOLEAN</option>
                                    <option value="int">INTEGER</option>
                                    <option value="json">JSON</option>
                                    <option value="double">DOUBLE</option>
                                    </select><br><br>
                                   `;
            new_field_data_type.innerHTML += element_to_add;
        });
    }
});
