const initialState = {
    recipes: [
        {
            name: 'balinese chicken curry',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/Super-Family-Classics-Jamie-Oliver/dp/0718178440',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'berry pocket eggy bread',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/Super-Family-Classics-Jamie-Oliver/dp/0718178440',
            buy: true,
            meal_tag: 'breakfast'
        },
        {
            name: 'bombay chicken and cauliflower',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/dp/0718181239/ref=pd_lpo_sbs_dp_ss_1?pf_rd_p=569136327&pf_rd_s=lpo-top-stripe&pf_rd_t=201&pf_rd_i=0718178440&pf_rd_m=A3P5ROKL5A1OLE&pf_rd_r=VZE8QKHVBTYJVEAVDBJP',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'breakfast doughnuts',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/Super-Family-Classics-Jamie-Oliver/dp/0718178440',
            buy: true,
            meal_tag: 'breakfast'
        },
        {
            name: 'insanity burger',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/Jamies-Comfort-Food-Jamie-Oliver/dp/0718159535/ref=sr_1_1?s=books&ie=UTF8&qid=1481667808&sr=1-1&keywords=jamie+oliver+comfort+food',
            buy: true,
            meal_tag: 'dinner'
        },
        {
            name: 'juicy griddled steak',
            chef: 'Jamie Oliver',
            description: '',
            link: 'https://www.amazon.co.uk/dp/0718181239/ref=pd_lpo_sbs_dp_ss_1?pf_rd_p=569136327&pf_rd_s=lpo-top-stripe&pf_rd_t=201&pf_rd_i=0718178440&pf_rd_m=A3P5ROKL5A1OLE&pf_rd_r=VZE8QKHVBTYJVEAVDBJP',
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
            link: 'https://www.amazon.co.uk/d/Books/Lean-Minute-Meals-Workouts-Keep-You-Healthy/1509800662/ref=sr_1_1?s=books&ie=UTF8&qid=1481667840&sr=1-1&keywords=joe+wick+lean+in+15',
            buy: true,
            meal_tag: 'lunch'
        },
    ]
}

export default function recipesState(state = initialState) {
    return state
}
