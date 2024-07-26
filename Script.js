async function sendInvitation(){
    const nom = document.getElementById('nom').value;
    const postnom = document.getElementById('postnom').value;
    const prenom = document.getElementById('prenom').value;
    const telephone = document.getElementById('telephone').value;
    const pdfFile = document.getElementById('pdfFile').files[0];

    if (!pdfFile){
        alert('Veuillez telechqrger un fichier PDF.');
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(pdfFile);
    reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1];

        const response = await fetch('https://www.twilio.com/fr-fr', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer SK6af7f3d9dae622440c5f8f5293825e33'
            },
            body: JSON.stringify({
                to: telephone,
                message: 'VOICI VOTRE INVITATION',
                file: {
                    name: pdfFile.nama,
                    data: base64data
                }
            })
        });
        
        if (response.ok){
            alert('Invitation envoyee avec succes!');
        }else{
            alert('Echec de l\'envoi de l\'invitation');
        }

    }
}
    



    
}