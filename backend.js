const database = [
    {
      id: 1,
      name: "Jaket Parka Saku Proteksi Sinar UV",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/453773/item/idgoods_03_453773.jpg?width=750",
      descriptionLP: "Jaket hoodie untuk Pria untuk yang memiliki fungsi water-repellent sehingga cocok untuk dikenakan saat hujan ringan.",
      ratingTotal: 47,
      ratingCount: 10,
      comments: ["Saya merasa hoodie ini nyaman digunakan dan pilihan yang cocok saat di musim hujan"],
    },
    {
      id: 2,
      name: "Jaket Parka Seamless Down",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
      descriptionLP: "Jaket Pria dengan desain tudung yang dapat memberi perlindungan lebih terhadap udara dingin sangat cocok untuk digunakan traveling lokasi yang dingin.",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Jaket ini sangat tebal sehingga bagus untuk cuaca dingin tapi tentunya bukan untuk digunakan saat musim panas"],
    },
    {
      id: 3,
      name: "Rompi Panjang Ultra Light Down",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/460913/item/idgoods_09_460913.jpg?width=750",
      descriptionLP: "Rompi wanita yang stylish dan cukup hangat",
      ratingTotal: 25,
      ratingCount: 6,
      comments: ["Bagus sebagai outer disaat cuaca dingin"],
    },
    {
      id: 4,
      name: "GIRLS T-Shirt Katun Tanpa Lengan",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/454276/item/idgoods_69_454276.jpg?width=750",
      descriptionLP: "Baju T-Shirt anak terbuat dari katun yang mudah menyerap keringat",
      ratingTotal: 12,
      ratingCount: 4,
      comments: ["Baju T-Shirt yang cukup cocok untuk anak gadis dimusim panas"],
    },
    {
      id: 5,
      name: " Kaos Polo Polos Lengan Pendek",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461817/item/idgoods_53_461817.jpg?width=750",
      descriptionLP: "Kaos polo polos untuk terlihat simple look",
      ratingTotal: 21,
      ratingCount: 7,
      comments: ["Kaosnya cukup nyaman dan tidak buat gerah"],
    },
    {
      id: 6,
      name: "Cardigan Yarn Lengan Panjang",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461084/item/idgoods_31_461084.jpg?width=750",
      descriptionLP: "Cardigan Wanita yang terasa lembut dan tidak gatal saat dikenakan.",
      ratingTotal: 49,
      ratingCount: 12,
      comments: ["Cardigan ini sebagai outer cocok dikombinasikan dengan berbagai macam pakaian lainnya"],
    },
    {
      id: 7,
      name: "Celana Katun Ankle Rileks",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445338/item/idgoods_09_445338.jpg?width=750",
      descriptionLP: "Celana panjang Wanita dengan bahan katun 100% yang ringan dan nyaman.",
      ratingTotal: 20,
      ratingCount: 6,
      comments: ["Celana ini walau agak tebal tapi tidak terasa panas"],
    },
    {
      id: 8,
      name: "T-Shirt Anak",
      imageURL: "https://bimbi.com/media/Untitled_design.png",
      descriptionLP: "T-Shirt anak yang tipis dan cocok untuk anak-anak beraktifitas di luar",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Baju ini cukup mudah dicuci dan tidak membuat anak saya gatal"],
    },
    {
      id: 9,
      name: "Kids comfort",
      imageURL: "https://im.uniqlo.com/global-cms/spa/res58c371036d90dba390b270326fee4ef2fr.jpg",
      descriptionLP: "Pakaian anak didesain demi kenyamanan sang anak",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Baju nya cocok untuk anak-anak"],
    },
    {
      id: 10,
      name: "Jaket AirSense Serupa Wol",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/448034/item/idgoods_69_448034.jpg?width=750",
      descriptionLP: "Jaket pria yang cocok untuk kegiatan formal.",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Jaket cukup ringan dan nyaman sangat bisa buat acara formal"],
    },
  ];

/* Modular function: Membuat suatu html element yang meng-representasikan kartu fashion showcase */
function createCard(obj) {
  let { id, name, imageURL, descriptionLP, ratingTotal, ratingCount, comments } = obj;
  comments = comments.map((comment) => `<q class="comment">${comment}</q>`);

  let avgRating = ratingTotal === 0 ? 0 : Math.floor(ratingTotal / ratingCount * 10) / 10;

  let template = `
    <div id="${id}" class="card fashion-item" 
    onclick="selectItem('${id}');">
    <img src="${imageURL}" class="card-img-top" />
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${descriptionLP}</p>
        <p class="fashion-item-stars">
        ${avgRating} stars<br /><span class="fashion-item-stars-reviewed"
        >${ratingCount} ratings</span>
        </p>
        <a class="btn btn-primary">Lirik lebih banyak</a>
        <div class="comment-box">${comments.join("<br>")}
        </div>
    </div>
    </div>`;

  return template;
}

/* READ operation bagi back-end */
function readFromDatabase() {
  let parentNode = document.getElementById("cards");
  for (let i = 0; i < database.length; i++) {
    let generatedCard = createCard(database[i]);
    parentNode.innerHTML += generatedCard;
  }
}

/* CREATE operation bagi back-end */
function addNewCard() {
  let formInputItemName = document.getElementById("form-item").value;
  let formInputDesc = document.getElementById("form-desc").value;
  let formInputImageURL = document.getElementById("form-image-url").value;
  let formInputRating = document.getElementById("form-rating").value;
  let formInputComment = document.getElementById("form-comment").value;

  // console.log(formInputItemName, formInputDesc, formInputImageURL, formInputRating, formInputComment);

  let objNew = {
    id: undefined,
    name: undefined,
    imageURL: undefined,
    descriptionLP: undefined,
    ratingTotal: 0,
    ratingCount: 0,
    comments: [],
  };
  objNew.id = database.length + 1;
  objNew.name = formInputItemName;
  objNew.descriptionLP = formInputDesc;
  objNew.imageURL = formInputImageURL;
  if (formInputRating) {
    objNew.ratingTotal += parseInt(formInputRating);
    objNew.ratingCount += 1;
  }
  if (formInputComment) {
    objNew.comments.push(formInputComment);
  }
  database.push(objNew);

  return objNew;
}

/* UPDATE operation bagi back-end */
function addUserRating() {
  let formInputItemId = document.getElementById("form-item-id").value;
  let formInputRating = document.getElementById("form-rating").value;
  let formInputComment = document.getElementById("form-comment").value;

  const accessItem = database[formInputItemId-1];
  console.log(172, formInputItemId, accessItem);
  accessItem.ratingTotal += parseInt(formInputRating);
  accessItem.ratingCount++;
  if (formInputComment) accessItem.comments.push(formInputComment);

  let updatedHTML = createCard(accessItem);
  document.getElementById(`${formInputItemId}`).outerHTML = updatedHTML;
  document.getElementById(`${formInputItemId}`).scrollIntoView(false);

  return accessItem;
}

/* Callback function bagi form submit */
function refreshListCards() {
  let anItemIsSelected = (document.querySelectorAll(".card.fashion-item.selected").length > 0);
  console.log(anItemIsSelected);
  if (anItemIsSelected) {
    // UPDATE OPERATION
    addUserRating();
    document.getElementById("form-item").value = "";
    document.getElementById("form-item").classList.remove("disabled");
    document.getElementById("form-item").required = true;
    document.getElementById("form-item-id").value = "";
    document.getElementById("form-desc").value = "";
    document.getElementById("form-desc").classList.remove("disabled");
    document.getElementById("form-desc").required = true;
    document.getElementById("form-image-url").value = "";
    document.getElementById("form-image-url").classList.remove("disabled");
    document.getElementById("form-image-url").required = true;
    document.getElementById("form-rating").value = "";
    document.getElementById("form-rating").required = false;
    document.getElementById("form-comment").value = "";
  } else {
    // CREATE OPERATION
    let objNew = addNewCard();
    let newCard = createCard(objNew);
    let parentNode = document.getElementById("cards");
    parentNode.innerHTML += newCard;
  }
}

/* Callback function bagi onclick event listener */
function selectItem(elementID) {
  
  const curElement = document.getElementById(elementID);
  let curElementIsSelected = curElement.classList.contains("selected");

  // deselect current element if already selected
  if (curElementIsSelected) {
    curElement.classList.remove("selected");
    document.getElementById("form-item").value = "";
    document.getElementById("form-item").classList.remove("disabled");
    document.getElementById("form-item").required = true;
    document.getElementById("form-item-id").value = "";
    document.getElementById("form-desc").value = "";
    document.getElementById("form-desc").classList.remove("disabled");
    document.getElementById("form-desc").required = true;
    document.getElementById("form-image-url").value = "";
    document.getElementById("form-image-url").classList.remove("disabled");
    document.getElementById("form-image-url").required = true;
    document.getElementById("form-rating").value = "";
    document.getElementById("form-rating").required = false;
    document.getElementById("form-comment").value = "";
  } else {
    // deselect all selected items
    document.querySelectorAll(".card.fashion-item.selected").forEach((el) => {
      el.classList.remove("selected");
    });
    // select current item
    curElement.classList.add("selected");
    // add item data to form
    let curItem = database[elementID-1];
    let {id, name, descriptionLP} = curItem;
    document.getElementById("form-item").value = name;
    document.getElementById("form-item").classList.add("disabled");
    document.getElementById("form-item").required = false;
    document.getElementById("form-item-id").value = id;
    console.log(235, id, document.getElementById("form-item-id").value);
    document.getElementById("form-desc").value = descriptionLP;
    document.getElementById("form-desc").classList.add("disabled");
    document.getElementById("form-desc").required = false;
    document.getElementById("form-image-url").value = "";
    document.getElementById("form-image-url").classList.add("disabled");
    document.getElementById("form-image-url").required = false;
    document.getElementById("form-rating").value = "";
    document.getElementById("form-rating").required = true;
    document.getElementById("form-comment").value = "";
  }
  
}

readFromDatabase();
