let url = "https://adresse.data.gouv.fr/api-doc/adresse";
let api = fetch(url)
            .then(async response=> {
                console.log(response);
                const json = await response.json();
                console.log(json);
            });