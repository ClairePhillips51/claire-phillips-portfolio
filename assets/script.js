let boxContents = [['https://clairephillips51.github.io/weather-dashboard/',      'pictures/weather-dashboard.png', 'Weather Dashboard'],
                   ['https://clairephillips51.github.io/work-day-scheduler/',     'pictures/finished-planner.png',  'Work Day Scheduler'],
                   ['https://clairephillips51.github.io/hw4-code-quiz/',          'pictures/java-quiz.png', 'Javascript Code Quiz'],
                   ['https://clairephillips51.github.io/hw3-password-generator/', 'pictures/password-gen.png', 'Password Generator']];

let $mainContainer = $("#main-container");

let $mainBox = $('<div class="main-box"></div>');
$mainBox.append('<a href="https://bborumoore.github.io/mars-daily/"><img class="main-pic" src="pictures/mars-presentation.jpg" alt="Mars Daily Dashboard"><div>Mars Daily</div></a>')
$mainContainer.append($mainBox);

let $table = $('<div id="table"></div>');
$mainContainer.append($table);
for (let i=0; i<4; i++) {
    let link = boxContents[i][0];
    let picture = boxContents[i][1];
    let title = boxContents[i][2];
    let $box = $('<div class="columns main-box"></div>');
    $box.append('<a href="'+link+'"><img class="main-pic" src="'+picture+'" alt="'+title+'"></a>');
    $table.append($box);
}