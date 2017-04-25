function openGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://cdn-img.usarugby.org/mens-eagles-mod-e1443042178711.jpg',
            title: 'Rugby',
            caption: '',
            w: 447,
            h: 275
        },
        {
            src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
            title: ' ',
            caption: 'Rugby is a sport that is played worldwide.',
            w: 1024,
            h: 683
        },
        {
            src: 'http://www.clarkcompanies.com/images/stories/largeimages/dartmouthrugby.jpg',
            title: ' ',
            caption: 'Games are played on a large grass field, or "pitch".',
            w: 800,
            h: 549
        },
        {
            src: 'http://www.brandproject.com/wp-content/uploads/2014/03/rugby-scrum.jpg',
            title: ' ',
            caption: 'Each team has 15 players.',
            w: 630,
            h: 388
        },
        {
            src: 'https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg',
            title: ' ',
            caption: 'The goal of the game is to score more points than the other team within 80 minutes.',
            w: 1024,
            h: 683
        },
        {
            src: 'https://media.giphy.com/media/cW6dKzfsEuiL6/giphy.gif',
            title: ' ',
            caption: 'A player can score 5 points with a "try", which is scored by touching the ball to the ground in the opposing team\'s "in-goal" at the end of the field.',
            w: 1024,
            h: 683
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0, // start at first slide
        loop: false
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}


var testImage = document.getElementById('testImage');
testImage.addEventListener('click', function() {
    openGallery();
});
