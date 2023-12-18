function validierung() {
  event.preventDefault();

  const inputvalues = Array.from(document.getElementsByClassName("inputid"));
  const salutationarray = ["Mr.", "Mrs.", "Ms.", "They", "Gender Neutral"];

  const datenow = new Date();
  const date18yearsbefore = datenow.getFullYear() - 18;
  inputvalues.forEach((element) => {
    switch (element.name) {
      case "salutation":
        if (!salutationarray.includes(element.value))
          document.getElementById("salutationid").style.borderColor = "red";

        break;

      case "Vorname":
        let wert1 = element.value;
        let noname1 = !wert1 ? "Please enter your vorname<br>" : "";
        let namesize1 =
          wert1.length < 2
            ? "Your vorname should at least be 2 characters long"
            : "";
        document.getElementById("pvorname").innerHTML =
          noname1 + "" + namesize1;
        if (noname1 || namesize1)
          document.getElementById("inputidvorname").style.borderColor = "red";

        break;

      case "Lastname":
        let wert = element.value;
        let noname = !wert ? "Please enter your lastname<br>" : "";
        let namesize =
          wert.length < 2
            ? "Your lastname should at least be 2 characters long"
            : "";
        if (noname || namesize)
          document.getElementById("inputidlastname").style.borderColor = "red";

        break;
      case "Birthday":
        debugger;

        const date = Date.parse(element.value);
        const birthday = new Date(date);

        if (birthday.getFullYear() > date18yearsbefore) {
          document.getElementById("inputidbirthday").style.borderColor = "red";
          document.getElementById("geburi").innerHTML =
            "You have to be older than 18 years old";
        } else if (!element.value) {
          document.getElementById("inputidbirthday").style.borderColor = "red";
          document.getElementById("geburi").innerHTML =
            "Please enter you birthday";
        }

        break;

      case "Street":
        alert(element.value);
        if (!element.value) {
          document.getElementById("inputidstreet").style.borderColor = "red";
          document.getElementById("street").innerHTML =
            "Please enter in a value for the red input areas";
        }
        break;
      case "PLZ":
        if (!element.value) {
          document.getElementById("inputidplz").style.borderColor = "red";
          document.getElementById("plz").innerHTML = "Please enter your plz";
        }
        break;
      case "Village":
        if (!element.value) {
          document.getElementById("inputidvillage").style.borderColor = "red";
          document.getElementById("plz").innerHTML =
            "Please enter your village";
        }
        break;
      case "Telefon":
        if (!element.value || element.value.length < 9) {
          document.getElementById("inputidtel").style.borderColor = "red";
        }
        break;
    }
    document.getElementById("formid").submit();
  });
}