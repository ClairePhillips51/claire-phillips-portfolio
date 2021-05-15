let boxContents = [['https://bborumoore.github.io/mars-daily/', 'https://github.com/bborumoore/mars-daily', 'pictures/mars-presentation.jpg', 'Mars Daily'],
                   ['https://github.com/ClairePhillips51/team-profile-generator','https://github.com/ClairePhillips51/team-profile-generator', 'pictures/html-looks-like-copy.png','Profile Generator'],
                   ['https://clairephillips51.github.io/weather-dashboard/', 'https://github.com/ClairePhillips51/weather-dashboard', 'pictures/weather-dashboard.png', 'Weather Dashboard'],
                   ['https://drive.google.com/file/d/1zZJ4myCeQ0WKwZWJmH4tT5EXXnKHsDwM/view', 'https://github.com/ClairePhillips51/orm-e-commerce', 'pictures/e-com.png', 'ORM E-commerce']];

let $mainContainer = $("#main-container");

let $mainBox = $('<div class="main-box big-box"></div>');
$mainBox.append('<a href="https://space-e.herokuapp.com/profile"><img class="main-pic" src="pictures/news-page-spacee.png" alt="Spacee-News Page"></a><a class="git-link" title="GitHub Link" href="https://github.com/bborumoore/space-e">Spacee</a>')
$mainContainer.append($mainBox);

let $table = $('<div id="table"></div>');
$mainContainer.append($table);
for (let i=0; i<4; i++) {
    let link = boxContents[i][0];
    let gitLink = boxContents[i][1];
    let picture = boxContents[i][2];
    let title = boxContents[i][3];
    let $box = $('<div class="columns main-box"></div>');
    $box.append('<a href="'+link+'"><img class="main-pic" src="'+picture+'" alt="'+title+'"></a><a class="git-link" title="GitHub Link" href="'+gitLink+'">'+title+'</a>');
    $table.append($box);
}