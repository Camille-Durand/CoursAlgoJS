let adresse = document.getElementById('ville_d').value;
document.getElementById('bt').addEventListener("click", distance);
function distance() {
    let url = "https://api-adresse.data.gouv.fr/search/?q=Toulouse";
    let api = fetch(url)
                .then(async response=> {
                    console.log(response);
                    const json = await response.json();
                    console.log(json);

                    console.log(json.features[0].properties.label);
                    console.log(json.features[0].coordinates);
                    console.log(json.features[0].coordinates);
                });
}
