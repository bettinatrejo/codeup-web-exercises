// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.



const wait = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your promise resolved after " + timer + " milliseconds.");
        }, timer);
    });
};

wait(1000).then((data) => console.log(data));
wait(3000).then((data) => console.log(data));


function getDateOfLastCommit(username) {
    let dates = [];
    fetch('https://api.github.com/users/' + username + "/events/public", {headers: {'Authorization': 'token 9166304ce69dfbcbbbeb2b5b7cdc6da7c4894a2d'}})

        .then(response => response.json())
        .then(repositories => {
            repositories.map(repo => {
                dates.push(repo.created_at);
            });
    dates.sort();
    document.querySelector('span').innerText = new Date(dates[dates.length - 1]);
        });

}
getDateOfLastCommit("bettinatrejo");


