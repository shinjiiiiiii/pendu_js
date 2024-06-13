fetch(`https://randomuser.me/api/?results=10&nat=AU,BR,CA,CH,DE,DK,ES,FI,FR,GB,IE,IN,MX,NL,NO,NZ,RS,TR,UA,US`)
  .then((req) => {
    return req.json();
  })
  .then((res) => {
    const select = document.getElementById("select");
    const image_du_pendu = document.getElementById("image_du_pendu");
    image_du_pendu.setAttribute("src", `images/pendu_0.jpg`);
    
    let choose_letter = document.getElementById("choose_letter");
    let gagnez = 0
    let perdu = 0
    let nombre_de_partie = 0
    let conter2 = 0
    let conter = 0;
    for (let i = 65; i <= 90; i++) {
      let alphab = String.fromCharCode(i);

      function letters(e) {
        for (let j = 0; j < alphab.length; j++) {
          let button = document.createElement("button");

          button.id = alphab;

          choose_letter.appendChild(button).className = alphab;
          button.textContent = alphab;
          function button_change() {
            button.setAttribute("disabled", "true");
            console.log(alphab);
            const isIncludes = nom.includes(alphab);
            if (isIncludes) {
              button.style.backgroundColor = "green";
              let block = document.querySelectorAll(`.${alphab}letters`);
              block.forEach((element) => (element.style.display = "block",conter2 ++));
              console.log(conter2);
              console.log(nom.length);


      
              if (conter2 === nom.length) {
                const isExist2 = window.localStorage.getItem("Partie gagnez")

                if(!isExist2){
                    localStorage.setItem('nombre de partie gagnez', (1))
                }else{
                    const parse2 = JSON.parse(isExist2) + 1
                    localStorage.setItem('nombre de partie gagnez', (parse2))
                }
                setTimeout(() => {
                  if (confirm("gagnez")) {
                    document.location.reload();
                  }
                }, 500);
              }
              
            } else {
              button.style.backgroundColor = "red";
              conter++;
              image_du_pendu.setAttribute("src", `images/pendu_${conter}.jpg`);

              if (conter >= 9) {
                const isExist3 = window.localStorage.getItem("Partie perdu")

                if(!isExist3){
                    localStorage.setItem('nombre de partie perdu', (1))
                }else{
                    const parse3 = JSON.parse(isExist3) + 1
                    localStorage.setItem('nombre de partie perdu', (parse3))
                }
                setTimeout(() => {
                  if (confirm("perdu")) {
                    document.location.reload();
                  }
                }, 500);
              }
            }
          }
          button.addEventListener("click", () => {
            button_change();
          });
        }
      }
      letters();
    }

    let words = "";

    words += res.results[0].name.first;
    words.toUpperCase();
    const nom = words
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    console.log(nom);
    console.log(nom.length);
    let resultat = document.getElementById("resultat");

    function name_res(e) {
      for (let i = 0; i < nom.length; i++) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        resultat.appendChild(div);
        div.appendChild(p).className = nom[i] + "letters";
        p.textContent = nom[i];
        p.style.display = "none";
        if (nom[i] === "-") {
          p.style.display = "block";
        }
      }
    }
    name_res();

    choose_letter.style.display= "none"
    
    select.addEventListener("change", () => {
        const isExist = window.localStorage.getItem("nombre de partie")

        if(!isExist){
            localStorage.setItem('nombre de partie', (1))
        }else{
            const parse = JSON.parse(isExist) + 1
            localStorage.setItem('nombre de partie', (parse))
        }


      let val = select.value;

      switch (val) {
        case "Facile":
          choose_letter.style.display= "flex"
          for(let i = 0; i < nom.length; i++){
            let letter_block = Math.floor(Math.random() * 3)
            let pl = document.getElementById(nom[i])
            if (letter_block === 1) {
                pl.click()
            }
          }
          select.style.display = 'none'
          break;

        case "Moyen":
          choose_letter.style.display= "flex"
          for(let i = 0; i < nom.length; i++){
            let letter_block = Math.floor(Math.random() * 5)
            let pl = document.getElementById(nom[i])
            if (letter_block === 1) {
                pl.click()
            }
          }
          select.style.display = 'none'
          break;

        case "Difficile":
          choose_letter.style.display= "flex"
          select.style.display = 'none'
          break;
      }
    });
  });

window.addEventListener("keypress", (e) => {
  document.getElementById(e.key.toUpperCase()).click();
});
