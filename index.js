$(document).ready(function () {
    var currentIndex = 1;
    var totalItems = $('.cards label').length;
    var backgroundImages = [
        'https://images2.alphacoders.com/401/40102.jpg',
        'https://images4.alphacoders.com/739/739899.jpg',
        'https://wallpapers.com/images/hd/assassin-s-creed-black-flag-privateer-pirate-8k5r8amhkneoabfh.jpg',
        'https://preview.redd.it/assassins-creed-mirage-4k-basim-wallpaper-i-made-from-the-v0-ocumyhwmpum91.png?auto=webp&s=864caf67fbbaf7e9982bd3bfc6fd5d687af2062d',
        'https://assetsio.reedpopcdn.com/assassins-creed-unity-everything-we-know-so-far-1403181097658.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp'
    ];
    var textContents = [
        { title: 'Altair ibn-la Ahad', subtitle: 'Altaïr Ibn-La Ahad is a fictional character in Ubisoft s Assassin s Creed video game series. He first appears as the main playable character in the original Assassins Creed game, which takes place during the Third Crusade' },
        { title: 'Ezio Auditore da Firenze', subtitle: 'Ezio Auditore da Firenze is a fictional character in the video game series Assassin s Creed, an Italian Master Assassin who serves as the protagonist of the series  games set during the Italian Renaissance.' },
        { title: 'Edward Kenway', subtitle: 'Edward James Kenway is a fictional character in Ubisoft s Assassin s Creed video game franchise. He was introduced as a supporting character in Assassin s Creed: Forsaken, a companion novel to the 2012 video game Assassin s Creed III.' },
        { title: 'Basim Ibn Ishaq', subtitle: 'Basim Ibn Ishaq was the reincarnation of Loki, who was an Isu and member of the Æsir, and inherited the memories of the Norse god of mischief himself. Basim was the son of artifact who was exiled after someone took the credit of his work, the Great Mosque of Samarra.' },
        { title: 'Arno Dorian', subtitle: 'Arno Victor Dorian is a fictional character in Ubisoft s Assassin s Creed video game franchise. He serves as the protagonist of the 2014 game Assassin s Creed Unity, in which he is portrayed by Canadian actor Dan Jeannotte through performance capture, and voiced by Godefroy Reding as a young child.' }
    ];
    function addDots() {
        for (var i = 1; i <= totalItems; i++) {
            $('.dots').append('<span class="dot" data-index="' + i + '"></span>');
        }

        $('.dot').click(function () {
            var dotIndex = $(this).data('index');
            $('#item-' + dotIndex).prop('checked', true);
            changeContentAndBackground(dotIndex);
        });
    }
    addDots();
    $('#next').click(function () {
        if (currentIndex < totalItems) {
            currentIndex++;
        } else {
            currentIndex = 1;
        }
        $('#item-' + currentIndex).prop('checked', true);
        changeContentAndBackground(currentIndex);
    });
    $('#prev').click(function () {
        if (currentIndex > 1) {
            currentIndex--;
        } else {
            currentIndex = totalItems;
        }
        $('#item-' + currentIndex).prop('checked', true);
        changeContentAndBackground(currentIndex);
    });
    function changeContentAndBackground(index) {
 
        var backgroundIndex = index - 1;
        var imageUrl = backgroundImages[backgroundIndex];
        $('.main').css('background-image', 'url("' + imageUrl + '")');

        var title = textContents[backgroundIndex].title;
        var subtitle = textContents[backgroundIndex].subtitle;

        $('.Yazi h1').fadeOut(500, function () {
            $(this).text(title).fadeIn(500);
        });

        $('.Yazi p').fadeOut(500, function () {
            $(this).html('<b>' + subtitle).fadeIn(500);
        });
        $('.dot').removeClass('active');
        $('.dot[data-index="' + index + '"]').addClass('active');
    }
    var defaultBackground = backgroundImages[0];
    $('.main').css('background-image', 'url("' + defaultBackground + '")');

    var defaultTitle = textContents[0].title;
    var defaultSubtitle = textContents[0].subtitle;

    $('.Yazi h1').text(defaultTitle);
    $('.Yazi p').html('<b>' + defaultSubtitle);
});
