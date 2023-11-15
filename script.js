const categories = {
    'catering': {
      'heading': 'Catering',
      'items': [
        // Catering services data
        // Sample data for demonstration
        // Replace with your actual data
        {
            category: 'catering',
            name: 'Breezy Bites',
            price: '$1500',
            Rating: '4.92',
            image: 'https://www.weddingsutra.com/images/Vendor_Images/Catering/gyanjee-caterers/gyanjee-caterers-10.jpg',
        },
        {
            category: 'catering',
            name: 'Meadow Munchies',
            price: '$1600',
            Rating: '4.75',
            image: 'https://img.freepik.com/premium-photo/buffet-food-catering-food-party-made-by-aiartificial-intelligence_41969-12071.jpg',
        },
        {
            category: 'catering',
            name: 'Epicurean Artisans',
            price: '$2700',
            Rating: '4.95',
            image: 'https://assets-global.website-files.com/62e2e0da760c89811ba75cd2/637f5ffc49771b3f8d97ae8f_eryhr.webp',
        },
        {
            category: 'catering',
            name: 'Artful Bites',
            price: '$1800',
            Rating: '4.88',
            image: 'https://img.freepik.com/premium-photo/buffet-catering-banquet_899263-658.jpg',
        },
        // Add more catering services
      ]
    },
    'photo-video': {
      'heading': 'Photo/Video',
      'items': [
        // Photo/Video services data
        // Sample data for demonstration
        // Replace with your actual data
        {
            category: 'photo-video',
            name: 'Vivid Photography',
            price: '$2000',
            Rating: '4.94',
            image: 'https://shanecleminson.com/wp-content/uploads/2023/02/Shane-Cleminson-Photography-1-1000x667.jpg',
        },
        {
            category: 'photo-video',
            name: 'Iris Photography',
            price: '$2200',
            Rating: '4.78',
            image: 'https://www.linandjirsa.com/wp-content/uploads/moody-wedding-photography-1000x667.jpeg',
        },
        {
          category: 'photo-video',
          name: 'Reflection Photography',
          price: '$2500',
          Rating: '4.92',
          image: 'https://shelbyellis.co.uk/wp-content/uploads/2021/02/homepage-8-1000x667.jpg',
        },
        {
          category: 'photo-video',
          name: 'Grayscale Camera Co.',
          price: '$1800',
          Rating: '4.87',
          image: 'https://shanecleminson.com/wp-content/uploads/2020/01/Chicago-Wedding-54-1000x667.jpg',
        },
        // Add more photo/video services
      ]
    },
    'venue-design': {
      'heading': 'Venue Design',
      'items': [
        // Venue design services data
        // Sample data for demonstration
        // Replace with your actual data
        {
            category: 'venue-design',
            name: 'Atlantis',
            price: '$9000',
            Rating: '4.91',
            image: 'https://blog.brittanybekas.com/wp-content/uploads/2019/04/Brittany-Bekas-Garfield-Park-Conservatory-Chicago-Wedding-Photos-30-1000x667.jpg',
        },
        { 
            category: 'venue-design',
            name: 'The Greenhouse',
            price: '$11000',
            Rating: '4.93',
            image: 'https://cheersbabephoto.com/wp-content/uploads/2020/07/CheersBabePhoto-AdamsonHouse-1000x667.jpg',
        },
        { 
          category: 'venue-design',
          name: 'Prime Lands',
          price: '$22000',
          Rating: '4.85',
          image: 'https://www.infinity-weddingsandevents.com/wp-content/uploads/2020/01/wedding-dinner-with-falling-white-flowers-villa-ravello-1000x667.jpg?theia_smart_thumbnails_file_version=2',
        },
        { 
          category: 'venue-design',
          name: 'La Maria',
          price: '$18000',
          Rating: '4.77',
          image: 'https://cheersbabephoto.com/wp-content/uploads/2021/08/CheersBabePhoto-MonicaEthanSneaks-0017-1000x667.jpg',
        },
        // Add more venue design services
      ]
    },
    'attire': {
      'heading': 'Attire',
      'items': [
        // Attire services data
        // Sample data for demonstration
        // Replace with your actual data
        {
            category: 'attire',
            name: 'Olive Blossom Bridal',
            price: '$1500',
            Rating: '4.96',
            image: 'https://img.freepik.com/premium-photo/woman-s-pastel-wedding-dresses-wardrobe-bedroom_217468-818.jpg', /* Bridal Gown Rental */ },
        {
            category: 'attire',
            name: 'Madison Rose Bridal Shop',
            price: '$1800',
            Rating: '4.95',
            image: 'https://img.freepik.com/premium-photo/elegance-personified-wedding-dress-framed-by-stunning-floral-bouquet-backdrop_896558-8375.jpg',
        },
        {
          category: 'attire',
          name: 'Nora Eve Bridal Boutique',
          price: '$1300',
          Rating: '4.87',
          image: 'https://img.freepik.com/premium-photo/wedding-dress-display-room-with-chandeliers-generative-ai_97167-18050.jpg',
        },
        {
          category: 'attire',
          name: 'The Little Pearl Bridal Boutique',
          price: '$1400',
          Rating: '4.91',
          image: 'https://img.freepik.com/premium-photo/closeup-wedding-dress-bridal-room-background-ai-generative_955712-1770.jpg',
        },
        // Add more attire services
      ]
    }
  };
  
  let currentIndex = {
    'catering': 0,
    'photo-video': 0,
    'venue-design': 0,
    'attire': 0
  };
  
  function displayItems(category, index) {
    const container = document.getElementById(`${category}-items`);
    container.innerHTML = ''; // Clear the container
  
    const currentItem = categories[category]['items'][index];
  
    const card = document.createElement('div');
    card.classList.add('item-card');
  
    const img = document.createElement('img');
    img.src = currentItem.image;
    card.appendChild(img);
  
    const itemName = document.createElement('h1');
    itemName.textContent = currentItem.name;
    card.appendChild(itemName);
  
    const itemPrice = document.createElement('h3');
    itemPrice.textContent = `Price: ${currentItem.price}`;
    card.appendChild(itemPrice);
  
    const itemRating = document.createElement('h3');
    itemRating.textContent = `Rating: ${currentItem.Rating}`;
    card.appendChild(itemRating);
  
    container.appendChild(card);
  }
  
  function moveCarousel(direction, category) {
    const itemsLength = categories[category]['items'].length;
  
    if (direction === 'prev') {
      currentIndex[category] = (currentIndex[category] - 1 + itemsLength) % itemsLength;
    } else if (direction === 'next') {
      currentIndex[category] = (currentIndex[category] + 1) % itemsLength;
    }
  
    displayItems(category, currentIndex[category]);
  }
  
  // Display initial items for each category
  displayItems('catering', currentIndex['catering']);
  displayItems('photo-video', currentIndex['photo-video']);
  displayItems('venue-design', currentIndex['venue-design']);
  displayItems('attire', currentIndex['attire']);
  