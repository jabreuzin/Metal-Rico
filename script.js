const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addeventlistener('click', () => {
        select.classlist.toggle('select-clicked')
        menu.classlist.toggle('menu-open')
    })
    options.forEach(options =>{
        option.addeventlistener('click', () => {
            selected.innertext = option.innertext;
            select.classlist.remove('select-clicked')
            menu.classlist.remove('menu-open')
            options.forEach(option => {
                option.classlist.remove('active')
            })
            option.classlist.add('active')
        })
    })
})

