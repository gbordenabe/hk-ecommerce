const products = [
    {
        id:1,
        name: "Puppet",
        productType: "Puppet",
        price: 299,
        rating: 2,
        image: "data:image/jpeg;base64,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",
        description: "Ut eleifend blandit sollicitudin. Curabitur tristique enim non laoreet blandit. Sed id nisl et libero vestibulum mattis quis ut ipsum. Praesent massa dui, gravida ac erat a, lobortis feugiat nunc. Fusce vel fermentum lorem. Fusce dictum tempor suscipit. Vestibulum et egestas nunc, eget semper mauris. Morbi quis finibus enim, in malesuada quam.",
    },
    {
        id:2,
        name: "3D Print",
        productType: "3D Print",
        price: 599,
        rating: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM4L-s7ra9xKNdaWqYsELPG2EitqAp2anMA&usqp=CAU",
        description: "Ut eleifend blandit sollicitudin. Curabitur tristique enim non laoreet blandit. Sed id nisl et libero vestibulum mattis quis ut ipsum. Praesent massa dui, gravida ac erat a, lobortis feugiat nunc. Fusce vel fermentum lorem. Fusce dictum tempor suscipit. Vestibulum et egestas nunc, eget semper mauris. Morbi quis finibus enim, in malesuada quam.",
    },
    {
        id:3,
        name: "Metal Pin",
        productType: "Metal Pin",
        price: 799,
        rating: 5,
        image: "data:image/jpeg;base64,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",
        description: "Ut eleifend blandit sollicitudin. Curabitur tristique enim non laoreet blandit. Sed id nisl et libero vestibulum mattis quis ut ipsum. Praesent massa dui, gravida ac erat a, lobortis feugiat nunc. Fusce vel fermentum lorem. Fusce dictum tempor suscipit. Vestibulum et egestas nunc, eget semper mauris. Morbi quis finibus enim, in malesuada quam.",
    },
    {
        id:4,
        name: "Shirt",
        productType: "Shirt",
        price: 1499,
        rating: 3,
        image: "data:image/jpeg;base64,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",
        description: "Ut eleifend blandit sollicitudin. Curabitur tristique enim non laoreet blandit. Sed id nisl et libero vestibulum mattis quis ut ipsum. Praesent massa dui, gravida ac erat a, lobortis feugiat nunc. Fusce vel fermentum lorem. Fusce dictum tempor suscipit. Vestibulum et egestas nunc, eget semper mauris. Morbi quis finibus enim, in malesuada quam.",
    },
    {
        id:5,
        name: "Cup",
        productType: "Cup",
        price: 499,
        rating: 4,
        image: "data:image/jpeg;base64,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",
        description: "Ut eleifend blandit sollicitudin. Curabitur tristique enim non laoreet blandit. Sed id nisl et libero vestibulum mattis quis ut ipsum. Praesent massa dui, gravida ac erat a, lobortis feugiat nunc. Fusce vel fermentum lorem. Fusce dictum tempor suscipit. Vestibulum et egestas nunc, eget semper mauris. Morbi quis finibus enim, in malesuada quam.",
    },
];

export default products;