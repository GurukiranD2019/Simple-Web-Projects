document.getElementById('userForm').onsubmit = function(){

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;


    const newUserData = {
        name: name,
        age: age,
        city: city
    };

    let existingData = JSON.parse(localStorage.getItem('userData')) || [];

    const index = existingData.findIndex(user => user.name === name);
    if(index !== -1){
        existingData[index] = newUserData;

    }else{
        existingData.push(newUserData);
    }

    localStorage.setItem('userData', JSON.stringify(existingData));

    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchorNode);

    downloadAnchorNode.click();

    document.body.removeChild(downloadAnchorNode);

    alert("data has been updated");

    return false;
};
    