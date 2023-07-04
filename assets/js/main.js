"use strict";

//Level_2_5 Switch Break=====

function checkBundesLandInfo() {
      const inputBundeslandInfo =
            document.body.querySelector("#bundeslandInfo");
      //const bundeslandInfo = inputBundeslandInfo.value;
      //console.log(bundeslandInfo);
      switch (inputBundeslandInfo.value) {
            case "Baden-Württemberg":
                  console.log(
                        "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt."
                  );
                  break;
            case "Bayern":
                  console.log(
                        "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt."
                  );
                  break;
      }
}
//.......................
