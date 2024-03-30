fetch("../public/api/flightinfo.json")
    .then(response => response.json())
    .then((data) => {
        if (Array.isArray(data.flights_information)) {
            data.flights_information.forEach((flight) => {
                const { name, mission, launchDate, status, details } = flight;
                console.log(`Name: ${name}, Mission: ${mission}`);

                const frame = document.getElementById("loop");
                if (frame) {
                    let newdiv = document.createElement("div");
                    newdiv.style.backgroundColor = "black";
                    newdiv.style.color = "white";
                    newdiv.style.display = "flex";
                    newdiv.style.justifyContent = "center";
                    newdiv.style.alignItems = "center";
                    newdiv.style.flexDirection = "column";
                    newdiv.className = "card";
                    newdiv.innerHTML = `
                        <h2>${name}</h2>
                        <p>${mission}</p>
                        <button class="btn">lets See</button>
                    `;
                    frame.appendChild(newdiv);
                } else {
                    console.error("Element with ID 'loop' not found in the document.");
                }

                const frame2 = document.getElementById("loop2");
                if (frame2) {
                    let newdiv2 = document.createElement("div");
                    newdiv2.style.backgroundColor = "black";
                    newdiv2.style.color = "white";
                    newdiv2.style.display = "flex";
                    newdiv2.style.justifyContent = "center";
                    newdiv2.style.alignItems = "center";
                    newdiv2.style.flexDirection = "column";
                    newdiv2.className = "card";
                    newdiv2.innerHTML = `
                        <h2>${name}</h2>
                         <p>${launchDate ? launchDate : 'Launch date not available'}</p>
                        <p>${mission}</p>
                       
                        <button class="btn">lets See</button>
                    `;
                    frame2.appendChild(newdiv2);
                } else {
                    console.error("Element with ID 'loop2' not found in the document.");
                }
            });
        } else {
            console.error("Data is not an array:", data);
        }
    })
    .catch((error) => {
        console.error(error);
    });
