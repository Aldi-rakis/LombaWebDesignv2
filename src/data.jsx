import menu1  from '../src/assets/blog/berita-1.jpg'
import menu2  from '../src/assets/blog/berita-2.jpg'
import menu3  from '../src/assets/menu/menu1.jpeg'



const dummy = [
    {
        id: 1,
        name: "Cheese Burger",
        img :  menu1,
        price: 30000,
        desc: "Our signature Cheese Burger is crafted with juicy, tender beef, topped with a slice of perfectly melted cheese, and fresh, crispy lettuce. The salad is hand-picked and freshly prepared, adding an exceptional crunch. Complemented by a creamy and secret special sauce, it gives an unforgettable taste experience.",
        remainingDays: 3,
        rating: 1.5,
        testimonials: [
            { user: "Alice", comment: "The flavor was decent, but the sauce could use some improvement." },
            { user: "Bob", comment: "Not my favorite, but it was okay for the price." },
            { user: "Charlie", comment: "The burger was a bit too greasy for my taste." },
            { user: "Daisy", comment: "I wish there were more veggies in the burger." },
            { user: "Ethan", comment: "It’s alright, but I prefer something less heavy." },
        ]
    },
    {
        id: 2,
        name: "Toffe’s Cake",
        img :  menu2, 
        price: 10000,
        desc: "Toffe’s Cake is a delightful dessert with a moist texture, layered with creamy toffee sauce that brings a rich sweetness. It’s topped with caramelized sugar for an added crunch. Perfectly paired with tea or coffee, this cake will satisfy your sweet cravings.",
        remainingDays: 7,
        rating: 4.2,
        testimonials: [
            { user: "Fiona", comment: "A fantastic cake! The toffee flavor is just amazing." },
            { user: "George", comment: "Sweet and delicious, a perfect dessert after dinner." },
            { user: "Hannah", comment: "I love the texture, and it’s not overly sweet." },
            { user: "Ian", comment: "Perfect with a cup of coffee!" },
            { user: "Jane", comment: "Toffee flavor is balanced, not too strong." },
            { user: "Kelly", comment: "Couldn’t resist another slice!" },
        ]
    },
    {
        id: 3,
        name: "Dancake",
        img :  menu3,
        price: 40000,
        desc: "Dancake is a fluffy and light cake, generously layered with rich cream and topped with fresh berries. Its delicate sponge cake base combined with creamy filling offers a balanced taste, making it a perfect dessert or a treat for special occasions.",
        remainingDays: 5,
        rating: 4.7,
        testimonials: [
            { user: "Liam", comment: "So light and fluffy! The best cake I’ve had in a while." },
            { user: "Mia", comment: "The berries really add a fresh taste to it." },
            { user: "Noah", comment: "A lovely treat, will definitely order again." },
            { user: "Olivia", comment: "Perfectly balanced sweetness." },
            { user: "Paul", comment: "Great texture, not too heavy or rich." },
        ]
    },
    {
        id: 4,
        name: "Crispy Sandwich",
        price: 10000,
        desc: "This Crispy Sandwich is made with freshly baked bread, loaded with a selection of tender meats, fresh lettuce, and our homemade mayo spread. Its crunchy texture and savory filling make it a satisfying meal on the go.",
        remainingDays: 4,
        rating: 4.3,
        testimonials: [
            { user: "Quinn", comment: "Loved the crispy texture, perfect for a quick lunch." },
            { user: "Rachel", comment: "Could use a bit more filling, but very tasty!" },
            { user: "Sam", comment: "The mayo spread is a highlight." },
            { user: "Tina", comment: "Good balance of flavors, fresh and crunchy." },
            { user: "Uma", comment: "The bread was fresh and crispy, just what I like!" },
        ]
    },
    {
        id: 5,
        name: "Thai Soup",
        price: 22000,
        desc: "Our Thai Soup combines the richness of coconut milk with aromatic spices and herbs, giving it a smooth yet spicy flavor. With fresh vegetables and tender chicken chunks, it’s a wholesome, comforting dish perfect for a chilly day.",
        remainingDays: 2,
        rating: 4.6,
        testimonials: [
            { user: "Victor", comment: "Amazing depth of flavor, perfect for a cold day!" },
            { user: "Wendy", comment: "The spices are spot on, very comforting soup." },
            { user: "Xander", comment: "Coconut milk adds a nice touch, very creamy." },
            { user: "Yara", comment: "Loved it! Reminded me of Thailand." },
            { user: "Zane", comment: "A bit spicy, but I loved every sip." },
        ]
    },
    {
        id: 6,
        name: "Cheese Burger Supreme",
        price: 120000,
        desc: "The Cheese Burger Supreme takes your burger experience to the next level with double layers of juicy beef patties, crispy bacon, and extra cheese, all topped with our signature sauce. This burger promises an indulgent flavor explosion.",
        remainingDays: 3,
        rating: 4.8,
        testimonials: [
            { user: "Amy", comment: "This burger is massive and delicious!" },
            { user: "Ben", comment: "Worth every penny. The flavor is unmatched." },
            { user: "Chris", comment: "The best burger I’ve ever had, period." },
            { user: "Dana", comment: "Bacon and cheese in every bite!" },
            { user: "Eli", comment: "Heavenly burger, so juicy and flavorful." },
        ]
    },
    {
        id: 7,
        name: "Cheese Burger Classic",
        price: 10000,
        desc: "The Cheese Burger Classic is a perfect combination of a beef patty, fresh lettuce, tomatoes, and creamy sauce, served in a soft bun. It’s a timeless favorite that satisfies burger lovers with every bite.",
        remainingDays: 5,
        rating: 4.4,
        testimonials: [
            { user: "Faith", comment: "Classic burger, loved every bite." },
            { user: "Gary", comment: "Great taste and value for money." },
            { user: "Heather", comment: "Perfectly balanced, my go-to burger." },
            { user: "Isaac", comment: "Simple, fresh, and delicious." },
            { user: "Jill", comment: "Good portion size and tasty!" },
        ]
    }
];

export default dummy;
