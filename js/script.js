function openGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // sample image https://farm6.staticflickr.com/5023/5578283926_822e5e5791_m.jpg

    // build items array
    var items = [
        {
            src: 'https://cdn-img.usarugby.org/mens-eagles-mod-e1443042178711.jpg',
            title: 'Rugby Basics',
            caption: '',
            w: 1024,
            h: 683
        },
        {
            src: 'http://cdn1.rugbydump.com/posts/large/rwc2015-gilbert-ball-bot.jpg',
            title: ' ',
            caption: 'Rugby is a sport played with an oval-shaped ball.',
            w: 1160,
            h: 576
        },
        {
            src: 'http://www.clarkcompanies.com/images/stories/largeimages/dartmouthrugby.jpg',
            title: ' ',
            caption: 'Games are played on a large grass field, or "pitch".',
            w: 1024,
            h: 683
        },
        {
            src: 'http://www.brandproject.com/wp-content/uploads/2014/03/rugby-scrum.jpg',
            title: ' ',
            caption: 'Each team has 15 players.',
            w: 1024,
            h: 683
        },
        {
            src: 'http://www.bluevane.com.au/RU300%20SCOREBOARD%202.jpg',
            title: ' ',
            caption: 'The goal of the game is to score more points than the other team within 80 minutes.',
            w: 418*2.5,
            h: 376*2.5
        },
        {
            src: 'https://media.giphy.com/media/cW6dKzfsEuiL6/giphy.gif',
            title: ' ',
            caption: 'A player can score 5 points with a "try", by touching the ball to the ground in the opposing team\'s "in-goal" at the end of the field.',
            w: 1024,
            h: 683
        },
        {
            src: 'https://media.giphy.com/media/L1gHUXgDMpxf2/giphy.gif',
            title: ' ',
            caption: 'After a "try", a player can score an additional 2 points with a "conversion" by kicking the ball over the crossbar between the goalposts.',
            w: 1024,
            h: 683
        },
        {
            // src: 'http://d23edptumle2yv.cloudfront.net/blog_posts/images/708/1453938231/default.jpg',
            src: 'https://media.giphy.com/media/PTsVcmjuzv3jy/giphy.gif',
            title: ' ',
            caption: 'Kicking a "drop goal" during normal play or a penalty kick is worth 3 points.',
            w: 1024,
            h: 683
        },
        {
            src: 'https://media.giphy.com/media/Mne9KfsN2ifwk/giphy.gif',
            title: ' ',
            caption: 'Players can advance the ball by running with the ball in hand',
            w: 1024,
            h: 683
        },
        {
            src: 'https://media.giphy.com/media/A93k4uVeFLWmI/giphy.gif',
            title: ' ',
            caption: 'They can pass the ball backward...',
            w: 1024,
            h: 683
        },
        {
            src: 'http://static.guim.co.uk/sys-images/Media/Pix/pictures/2010/7/28/1280332183856/Jonny-Wilkinson-kicks-a-d-002.jpg',
            title: ' ',
            caption: '...or kick the ball forward',
            w: 460 * 2.5,
            h: 276 * 2.5
        },
        {
            src: 'https://media.giphy.com/media/Lmfsuj9E8dAaI/giphy.gif',
            title: ' ',
            caption: 'An opposing team can force the player with the ball to let go by tackling that player (below the chest)',
            w: 1024,
            h: 683
        },
        {
            src: 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAKMAAAAJDc1NjZkOGUzLWRhMTEtNDU2ZS1hMzI2LWFmNDA5ZWM5ZmQxZA.jpg',
            title: ' ',
            // caption: 'A foul, forward pass, or offsides by one team stops play and a player from the other team feeds the ball into a "scrum", where players interlock and push to try and get the ball.',
            caption: 'A "scrum" is where players interlock and push to try and get the ball after a foul, forward pass, or offsides',
            w: 698*2,
            h: 400*2
        },
        {
            src: 'https://media.giphy.com/media/asx3QdvUuawvK/giphy.gif',
            title: ' ',
            caption: 'If a player goes out of bounds, the other team gets a "line-out", and throws the ball into play',
            w: 1024,
            h: 683
        },
        {
            src: 'https://media.giphy.com/media/wOxPb3i5ettG8/giphy.gif',
            title: ' ',
            caption: 'That\'s all! Select "Rugby Rules" to learn more!',
            w: 300 * 2,
            h: 480 * 2
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
