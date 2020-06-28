const movies = [
    {
        'name': 'The Shawshank Redemption',
        'id': '1',
        'img': 'http://www.impawards.com/1994/posters/shawshank_redemption_ver1.jpg',
        'price': 8.99
    },
    {
        'name': 'Forrest Gump',
        'id': '2',
        'img': 'http://www.impawards.com/1994/posters/forrest_gump.jpg',
        'price': 19.99
    },
    {
        'name': 'Léon: The Professional',
        'id': '3',
        'img': 'http://www.impawards.com/1994/posters/professional_ver1.jpg',
        'price': 14.99
    },
    {
        'name': 'Life is Beautiful',
        'id': '4',
        'img': 'http://www.impawards.com/1998/posters/life_is_beautiful_ver1.jpg',
        'price': 9.99
    },
    {
        'name': 'Titanic',
        'id': '5',
        'img': 'http://www.impawards.com/1997/posters/titanic_ver2.jpg',
        'price': 16.99
    },
    {
        'name': `Schindler's List`,
        'id': '6',
        'img': 'http://www.impawards.com/1993/posters/schindlers_list.jpg',
        'price': 14.99
    },
    {
        'name': 'Inception',
        'id': '7',
        'img': 'http://www.impawards.com/2010/posters/inception_ver3.jpg',
        'price': 14.99
    },
    {
        'name': `Hachiko: A Dog's Story`,
        'id': '8',
        'img': 'http://www.impawards.com/2009/posters/hachiko_a_dogs_story.jpg',
        'price': 12.99
    },
    {
        'name': 'The Legend of 1900',
        'id': '9',
        'img': 'http://www.impawards.com/1999/posters/legend_of_nineteen_hundred.jpg',
        'price': 9.99
    },
    {
        'name': 'The Truman Show',
        'id': '10',
        'img': 'http://www.impawards.com/1998/posters/truman_show_ver1.jpg',
        'price': 14.99
    },
    {
        'name': 'Wall-E',
        'id': '11',
        'img': 'http://www.impawards.com/2008/posters/wall_e.jpg',
        'price': 9.99
    },
    {
        'name': 'The Chorus',
        'id': '12',
        'img': 'http://www.impawards.com/2004/posters/chorus.jpg',
        'price': 7.99
    },
    {
        'name': 'Interstellar',
        'id': '13',
        'img': 'http://www.impawards.com/2014/posters/interstellar_ver4.jpg',
        'price': 16.99
    },
    {
        'name': 'Zootopia',
        'id': '14',
        'img': 'http://www.impawards.com/2016/posters/zootopia_ver3.jpg',
        'price': 19.99
    },
    {
        'name': 'The Godfather',
        'id': '15',
        'img': 'https://filipamoreno.files.wordpress.com/2019/10/tg.jpg',
        'price': 9.99
    },
    {
        'name': 'The Godfather Part II',
        'id': '16',
        'img': 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        'price': 16.99
    },
    {
        'name': 'The Godfather Part III',
        'id': '17',
        'img': 'http://www.impawards.com/1990/posters/godfather_part_iii_ver2.jpg',
        'price': 16.99
    },
    {
        'name': 'The Pursuit of Happyness',
        'id': '18',
        'img': 'http://www.impawards.com/2006/posters/pursuit_of_happyness.jpg',
        'price': 12.99
    },
    {
        'name': 'Flipped',
        'id': '19',
        'img': 'http://www.impawards.com/2010/posters/flipped.jpg',
        'price': 12.99
    },
    {
        'name': 'The Intouchables',
        'id': '20',
        'img': 'http://www.impawards.com/intl/france/2011/posters/intouchables_ver2.jpg',
        'price': 13.99
    },
    {
        'name': 'Batman Begins',
        'id': '21',
        'img': 'http://www.impawards.com/2005/posters/batman_begins_ver4.jpg',
        'price': 8.99
    },
    {
        'name': 'The Dark Knight',
        'id': '22',
        'img': 'http://www.impawards.com/2008/posters/dark_knight_ver5.jpg',
        'price': 14.99
    },
    {
        'name': 'The Dark Knight Rises',
        'id': '23',
        'img': 'http://www.impawards.com/2012/posters/dark_knight_rises.jpg',
        'price': 14.99
    },
    {
        'name': 'The Lord of the Rings: The Fellowship of the Ring',
        'id': '24',
        'img': 'http://www.impawards.com/2001/posters/lord_of_the_rings_the_fellowship_of_the_ring_ver4.jpg',
        'price': 14.99
    },
    {
        'name': 'The Lord of the Rings: The Two Towers',
        'id': '25',
        'img': 'http://www.impawards.com/2002/posters/lord_of_the_rings_the_two_towers_ver3.jpg',
        'price': 14.99
    },
    {
        'name': 'The Lord of the Rings: The Return of the King',
        'id': '26',
        'img': 'http://www.impawards.com/2003/posters/lord_of_the_rings_the_return_of_the_king_ver7.jpg',
        'price': 14.99
    },
    {
        'name': 'Life of Pi',
        'id': '27',
        'img': 'http://www.impawards.com/2012/posters/life_of_pi.jpg',
        'price': 14.99
    },
    {
        'name': 'Catch Me If You Can',
        'id': '28',
        'img': 'http://www.impawards.com/2002/posters/catch_me_if_you_can.jpg',
        'price': 14.99
    },
    {
        'name': 'The Matrix',
        'id': '29',
        'img': 'http://www.impawards.com/1999/posters/matrix_ver1.jpg',
        'price': 14.99
    },
    {
        'name': 'The Matrix Revolutions',
        'id': '30',
        'img': 'http://www.impawards.com/2003/posters/matrix_revolutions.jpg',
        'price': 14.99
    },
    {
        'name': 'The Matrix Reloaded',
        'id': '31',
        'img': 'http://www.impawards.com/2003/posters/matrix_reloaded.jpg',
        'price': 14.99
    },
    
]

export default movies;