function countStart(){
    const $counters = document.querySelectorAll(".count-number.countup"),
        options = {
            useEasing: true,
            useGrouping: true,
            separator2: ".",
            decimal: "."
        };

    $counters.forEach( (item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
    });
}

new Waypoint({
    element: document.querySelector('.flat-counter'),
    handler: function() {
    countStart()
    },
    offset: '100%'
});