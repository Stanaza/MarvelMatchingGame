export  const  addInLocalStorage = (gameWon, nickName, email, lastName, seconds, tries, diffLevel, setLocalStorageData) => {
    if (gameWon) {
        let allEntries = JSON.parse(localStorage.getItem('allEntries')) || [];
        let newEntries = {
            name: nickName,
            lastName: lastName,
            email: email,
            time: seconds,
            tries: tries,
            level: diffLevel
        }
        allEntries.push(newEntries);
        allEntries.sort(function (a, b) {
            return a.time - b.time
        });
        setLocalStorageData(allEntries);
        localStorage.setItem('allEntries', JSON.stringify(allEntries));
    }
}