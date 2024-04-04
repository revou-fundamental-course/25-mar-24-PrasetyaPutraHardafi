function calculate() {
    try {
        let weightinput = document.getElementById('weight-input').value;
        console.log(weightinput);

        if (parseInt(weightinput) > 0 && parseInt(weightinput) < 10) {
            alert('Harap Isi Berat Badan Anda');
        } else {
            document.getElementById('result-bmi').innerHTML = weightinput;
            console.log('Ada Isi');
        }
    } catch (error) {
        console.log(error);
    }
}

