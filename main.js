var hogwarts = {
  location: 'Scotland',
  houses: [
    {
      name: 'Griffindor',
      img: 'http://images1.wikia.nocookie.net/__cb20120922143611/harrypotter/images/7/70/G_final.jpg',
      values: [
        'courage',
        'bravery',
        'nerve',
        'chivalry'
      ],
      mascot: 'lion',
      colors: [
        'scarlet',
        'gold'
      ],
      founder: 'Godric Gryffindor',
      students: [
        'Harry Potter',
        'Hermione Granger',
        'Ron Weasley'
      ]
    },
    {
      name: 'Hufflepuff',
      img: 'http://images3.wikia.nocookie.net/__cb20111027164827/harrypotter/images/3/3f/H_final.jpg',
      values: [
        'hardwork',
        'patience',
        'justice',
        'loyalty'
      ],
      mascot: 'badger',
      colors: [
        'canary yellow',
        'black'
      ],
      founder: 'Helga Hufflepuff',
      students: [
        'Cedric Diggory',
        'Susan Bones',
        'Nymphadora Tonks'
      ]
    },
    {
      name: 'Ravenclaw',
      img: 'http://images2.wikia.nocookie.net/__cb20111021043857/harrypotter/images/d/da/R_final.jpg',
      values: [
        'intelligence',
        'creativity',
        'learning',
        'wit'
      ],
      mascot: 'eagle',
      colors: [
        'blue',
        'bronze'
      ],
      founder: 'Rowena Ravenclaw',
      students: [
        'Luna Lovegood',
        'Cho Chang',
        'Padma Patil'
      ]
    },
    {
      name: 'Slytherin',
      img: 'http://images3.wikia.nocookie.net/__cb20111027165214/harrypotter/images/d/da/S_final.jpg',
      values: [
        'ambition',
        'cunning',
        'leadership',
        'resourcefulness'
      ],
      mascot: 'serpent',
      colors: [
        'green',
        'silver'
      ],
      founder: 'Salazar Slytherin',
      students: [
        'Draco Malfoy',
        'Pansy Parkinson',
        'Tom Riddle'
      ]
    }
  ]
}

$(document).ready(function(){
  
  function createHouse(house){
    var $section = $('<section>').appendTo($('main'));
    var $img = $('<img>').attr('src', house.img).appendTo($section)
    var $name = $('<h2>').text(house.name).appendTo($section);
    var $founder = $('<p>').text('founder: ' + house.founder).appendTo($section);
    var $mascot = $('<p>').text('mascot: ' + house.mascot).appendTo($section);
    var $values = createListSection('Values', house.values).appendTo($section);
    var $colors = createListSection('Colors', house.colors).appendTo($section);
    var $students = createListSection('Students', house.students).appendTo($section);
  }

  function createListSection(title, array){
    var $container = $('<div>')
    var $header = $('<h3>').text(title).appendTo($container);
    var $ul = $('<ul>').appendTo($container);
    array.forEach(function(item){
      var $li = $('<li>').text(item).appendTo($ul)
    })
    return $container;
  }

  hogwarts.houses.forEach(createHouse);
})