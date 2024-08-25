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
    var hrefLinks = [
        'https://www.google.com/search?q=altair+ibn+la+ahad&oq=altair&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIJCAEQRRg5GIAEMgYIAhAjGCcyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDI2MjJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
        'https://www.google.com/search?q=ezio+auditore&sca_esv=587510415&sxsrf=AM9HkKn_OYtW6bgi1s-NAik43EeTbDlp-A%3A1701631714099&ei=4tZsZZXQBdyHxc8P6qe-2A8&oq=ezio&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGV6aW8qAggAMgoQIxiABBiKBRgnMgUQLhiABDIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIFEC4YgAQyChAAGIAEGIoFGEMyBRAAGIAEMgoQABiABBiKBRhDSMgMUABY9QVwAXgBkAEAmAHMAaAB6gWqAQUwLjMuMbgBAcgBAPgBAagCEcICBxAjGOoCGCfCAhMQABiABBiKBRhDGOoCGLQC2AEBwgIWEC4YgAQYigUYQxjIAxjqAhi0AtgBAsICCxAuGIAEGMcBGNEDwgILEC4YgAQYxwEYrwHiAwQYACBBiAYBugYGCAEQARgBugYGCAIQARgI&sclient=gws-wiz-serp',
        'https://www.google.com/search?q=edward+kenway&sca_esv=587510415&sxsrf=AM9HkKlVjG8xqSex1LloTUNtetomrpehAg%3A1701631742989&ei=_tZsZZT-O5CHxc8P5pOM-Ag&oq=edwa&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGVkd2EqAggAMgoQIxiABBiKBRgnMgUQLhiABDIFEC4YgAQyBRAAGIAEMgUQLhiABDIFEC4YgAQyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAuGIAESPIPUABY5AdwAXgBkAEAmAHOAqAB6gaqAQcwLjMuMC4xuAEByAEA-AEBqAIRwgIHECMY6gIYJ8ICExAAGIAEGIoFGEMY6gIYtALYAQHCAhYQLhiABBiKBRhDGMgDGOoCGLQC2AECwgILEC4YgAQYxwEY0QPCAgsQLhiABBjHARivAeIDBBgAIEGIBgG6BgYIARABGAG6BgYIAhABGAg&sclient=gws-wiz-serp',
        'https://www.google.com/search?q=basim+assassin%27s+creed&oq=basim&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg7MgcIAhAAGIAEMgcIAxAAGIAEMgwIBBAAGBQYhwIYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyNDE3ajBqOagCALACAA&sourceid=chrome&ie=UTF-8',
        'https://www.google.com/search?q=arno+assassin%27s+creed&oq=arno&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAuGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAuGIAEMgcIBhAAGIAEMgcIBxAuGIAEMgcICBAuGIAEMgcICRAAGIAE0gEIMjEwNmowajmoAgCwAgA&sourceid=chrome&ie=UTF-8'
    ];

    function addDots() {
        for (var i = 1; i <= totalItems; i++) {
            $('.dots').append('<span class="dot" data-index="' + i + '"></span>');
        }
    
        // .on() metodu ile click event'i ekle
        $('.dots').on('click', '.dot', function () {
            currentIndex = $(this).data('index');
            $('.dot').removeClass('active');
            $(this).addClass('active');
            $('#item-' + currentIndex).prop('checked', true);
            changeContentAndBackground(currentIndex);
            resetSlideshow();
        });
    }
    

    function startInterval() {
        return setInterval(function () {
            currentIndex = (currentIndex % totalItems) + 1;
            $('#item-' + currentIndex).prop('checked', true).change(); // Change event'i ekleyin
            changeContentAndBackground(currentIndex);
        }, 5000);
    }
    

    addDots();
 
    var slideshowInterval = startInterval();
    // İlk dotu active etmek //
    $('.dot[data-index="1"]').addClass('active');

    $('#next').click(function () {
        currentIndex = (currentIndex % totalItems) + 1;
        $('#item-' + currentIndex).prop('checked', true);
        changeContentAndBackground(currentIndex);
        resetSlideshow();
    });

    $('#prev').click(function () {
        currentIndex = (currentIndex - 2 + totalItems) % totalItems + 1;
        $('#item-' + currentIndex).prop('checked', true);
        changeContentAndBackground(currentIndex);
        resetSlideshow();
    });

    function changeContentAndBackground(index) {
        var backgroundIndex = index - 1;
        var imageUrl = backgroundImages[backgroundIndex];
        $('.main').css('background-image', 'url("' + imageUrl + '")');

        var title = textContents[backgroundIndex].title;
        var subtitle = textContents[backgroundIndex].subtitle;
        var hrefLink = hrefLinks[backgroundIndex];

        $('.Yazi h1').fadeOut(500, function () {
            $(this).text(title).fadeIn(500);
        });

        $('.Yazi p').fadeOut(500, function () {
            $(this).html('<b>' + subtitle).fadeIn(500);
        });

        // About butonunun href zadin deyismek
        $('.about-button').attr('href', hrefLink);

        $('.dot').removeClass('active');
        $('.dot[data-index="' + index + '"]').addClass('active');
    }

    function resetSlideshow() {
        clearInterval(slideshowInterval);
        slideshowInterval = startInterval();
    }

    var defaultBackground = backgroundImages[0];
    $('.main').css('background-image', 'url("' + defaultBackground + '")');

    var defaultTitle = textContents[0].title;
    var defaultSubtitle = textContents[0].subtitle;

    $('.Yazi h1').text(defaultTitle);
    $('.Yazi p').html('<b>' + defaultSubtitle);
});
