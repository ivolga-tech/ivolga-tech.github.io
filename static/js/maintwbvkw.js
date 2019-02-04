'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (img) {
        img.onerror = function () {
            var title = img.getAttribute('title');
            img.parentNode.innerHTML = '<span class=\'no-image\'>' + title + '</span>';
        };
    });
});

var cards = document.querySelectorAll('.card');
if (cards) {
    cards.forEach(function (card) {
        var link = card.getAttribute('data-link');
        if (link) {
            card.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = link;
            });
        }
    });
}
'use strict';

var page = document.querySelector('#page');
var menuPage = document.querySelector('#menu-page');
var btnMenuPage = document.querySelector('#menu-page-open');
var btnMenuClose = document.querySelector('#menu-page-close');

if (btnMenuPage) {
    btnMenuPage.addEventListener('click', function (e) {
        e.preventDefault();
        page.classList.add('show-menu');
    });
}

if (btnMenuClose) {
    btnMenuClose.addEventListener('click', function (e) {
        e.preventDefault();
        page.classList.remove('show-menu');
    });
}

var btnModal = document.querySelector('#modal-open');
var modal = document.querySelector('.modal');

if (btnModal && modal) {
    btnModal.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('is-show');
        modal.querySelector('.modal__background').addEventListener('click', function () {
            modal.classList.remove('is-show');
        });
    });
}
'use strict';

var vCards = document.querySelectorAll('.card--v');

if (vCards.length > 0) {
    var extraClass = vCards.length % 3 === 1 ? 'last-single' : vCards.length % 3 === 2 ? 'last-double' : '';
    var addClass = vCards.length % 2 === 0 ? 'last-odd' : 'last-even';
    vCards[0].parentElement.classList.add(extraClass, addClass);

    // vCards[0].parentElement.classList.add(addClass);
}
'use strict';

var input = document.querySelector('.inputfile');

if (input) {
    var label = input.nextElementSibling;
    var labelVal = label.innerHTML;

    input.addEventListener('change', function (e) {
        var fileName = e.target.value.split('\\').pop();

        if (fileName) {
            label.querySelector('span').innerHTML = fileName;
            input.classList.remove('no-file');
            document.querySelector('label + .label-remove').addEventListener('click', function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                input.value = '';
                label.innerHTML = labelVal;
                input.classList.add('no-file');
            });
        } else {
            label.innerHTML = labelVal;
            input.classList.add('no-file');
        }
    });
}