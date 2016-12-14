const initialState = {
    recipes: [
        {
            name: 'balinese chicken curry',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/0718178440/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0718178440&linkCode=as2&tag=recipes017-21"',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'berry pocket eggy bread',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/0718178440/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0718178440&linkCode=as2&tag=recipes017-21"',
            buy: true,
            meal_tag: 'breakfast'
        },
        {
            name: 'bombay chicken and cauliflower',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/0718181239/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0718181239&linkCode=as2&tag=recipes017-21',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'breakfast doughnuts',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/0718178440/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0718178440&linkCode=as2&tag=recipes017-21"',
            buy: true,
            meal_tag: 'breakfast'
        },
        {
            name: 'insanity burger',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/0718159535/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0718159535&linkCode=as2&tag=recipes017-21',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'juicy griddled steak',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/0718181239/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=0718181239&linkCode=as2&tag=recipes017-21',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'moroccan chicken with sweet potato mash',
            chef: 'BBC Good Food',
            description: '',
            link: 'http://www.bbcgoodfood.com/recipes/764636/moroccan-chicken-with-sweet-potato-mash',
            buy: false,
            meal_tag: 'lunch'
        },
        {
            name: 'tomatoes chorizo and egg',
            chef: 'Joe Wicks',
            description: '',
            link: 'https://www.amazon.co.uk/gp/product/1509800662/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=1509800662&linkCode=as2&tag=recipes017-21',
            buy: true,
            meal_tag: 'lunch'
        },
    ]
}

export default function recipesState(state = initialState) {
    return state
}
