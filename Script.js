async function sendInvitation(){
    const nom = document.getElementById('nom').value;
    const postnom = document.getElementById('postnom').value;
    const prenom = document.getElementById('prenom').value;
    const telephone = document.getElementById('telephone').value;

    const pdfUrl= 'https://github.com/DISANKA001/invitation/edit/main/Familles%20PEHOT%20et%20DISANKA.pdf';
    
    }
    const response = await fetch(pdfUrl);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
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
                    name: name : 'invitation.pdf',
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
