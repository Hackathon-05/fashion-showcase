const database = [
    {
      id: 1,
      name: "Jaket Parka Saku Proteksi Sinar UV",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/453773/item/idgoods_03_453773.jpg?width=750",
      desciptionLP: "Jaket hoodie untuk Pria untuk yang memiliki fungsi water-repellent sehingga cocok untuk dikenakan saat hujan ringan.",
      ratingTotal: 47,
      ratingCount: 9,
      comments: ["saya merasa hoodie ini nyaman digunakan dan pilihan yang cocok saat dimusim hujan"],
    },
    {
      id: 2,
      name: "Jaket Parka Seamless Down",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/449725/item/idgoods_69_449725.jpg?width=750",
      desciptionLP: "Jaket Pria dengan desain tudung yang dapat memberi perlindungan lebih terhadap udara dingin sangat cocok untuk digunakan traveling lokasi yang dingin.",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["jaket ini sangat tebal sehingga bagus untuk cuaca dingin tapi tentunya bukan untuk digunakan saat musim panas"],
    },
    {
      id: 3,
      name: "Rompi Panjang Ultra Light Down",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/460913/item/idgoods_09_460913.jpg?width=750",
      desciptionLP: "Rompi wanita yang stylish dan cukup hangat",
      ratingTotal: 25,
      ratingCount: 6,
      comments: ["Bagus sebagai outer disaat cuaca dingin"],
    },
    {
      id: 4,
      name: "GIRLS T-Shirt Katun Tanpa Lengan",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/454276/item/idgoods_69_454276.jpg?width=750",
      desciptionLP: "Baju T-Shirt anak terbuat dari katun yang mudah menyerap keringat",
      ratingTotal: 12,
      ratingCount: 4,
      comments: ["Baju T-Shirt yang cukup cocok untuk anak gadis dimusim panas"],
    },
    {
      id: 5,
      name: " Kaos Polo Polos Lengan Pendek",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461817/item/idgoods_53_461817.jpg?width=750",
      desciptionLP: "Kaos polo polos untuk terlihat simple look",
      ratingTotal: 21,
      ratingCount: 7,
      comments: ["Kaosnya cukup nyaman dan tidak buat gerah"],
    },
    {
      id: 6,
      name: "Cardigan Yarn Lengan Panjang",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/461084/item/idgoods_31_461084.jpg?width=750",
      desciptionLP: "Cardigan Wanita yang terasa lembut dan tidak gatal saat dikenakan.",
      ratingTotal: 49,
      ratingCount: 9,
      comments: ["Cardigan ini sebagai outer cocok dikombinasikan dengan berbagai macam pakaian lainnya"],
    },
    {
      id: 7,
      name: "Celana Katun Ankle Rileks",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/445338/item/idgoods_09_445338.jpg?width=750",
      desciptionLP: "Celana panjang Wanita dengan bahan katun 100% yang ringan dan nyaman.",
      ratingTotal: 20,
      ratingCount: 6,
      comments: ["Celana ini walau agak tebal tapi tidak terasa panas"],
    },
    {
      id: 8,
      name: "T-Shirt Anak",
      imageURL: "https://bimbi.com/media/Untitled_design.png",
      desciptionLP: "T-Shirt anak yang tipis dan cocok untuk anak-anak beraktifitas di luar",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Baju ini cukup mudah dicuci dan tidak membuat anak saya gatal"],
    },
    {
      id: 9,
      name: "Kids comfort",
      imageURL: "https://im.uniqlo.com/global-cms/spa/res58c371036d90dba390b270326fee4ef2fr.jpg",
      desciptionLP: "Pakaian anak didesain demi kenyamanan sang anak",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Baju nya cocok untuk anak-anak"],
    },
    {
      id: 10,
      name: "Jaket AirSense Serupa Wol",
      imageURL: "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/448034/item/idgoods_69_448034.jpg?width=750",
      desciptionLP: "Jaket pria yang cocok untuk kegiatan formal.",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Jaket cukup ringan dan nyaman sangat bisa buat acara formal"],
    },
  ];
  
//ketik dom disini
console.log("Masuk");
function readings() {
let parentNode = document.getElementById("cards");
for (let i = 0; i < database.length; i++) {

    let itemComments = database[i].comments;
    itemComments = itemComments.map( comment => `<q class="comment">${comment}</q>`);
    let templateComment = itemComments.join('<br>');

    let template = `
    <div id="${database[i].id}" class="card fashion-item" style="width: 18rem" 
    onclick="selectItem('${database[i].id}');">
    <img src="${database[i]["imageURL"]}" class="card-img-top" />
    <div class="card-body">
        <h5 class="card-title">${database[i].name}</h5>
        <p class="card-text">${database[i].desciptionLP}</p>
        <p class="fashion-item-stars">
        ${database[i].ratingTotal} stars<br /><span class="fashion-item-stars-reviewed"
        >${database[i].ratingCount} ratings</span>
        </p>
        <a href="#" class="btn btn-primary">Lirik lebih banyak</a>
        <div class="comment-box">${templateComment}
        </div>
    </div>
    </div>`;

    // let datas = database[i];
    // console.log(datas);
    // let name = datas.name;
    // let cards = document.createElement("div");
    // cards.classList.add("name");
    // let parentNode = document.getElementsById("cards");
    // name.innerText = cardTitle;
    console.log(parentNode.innerHTML);
    parentNode.innerHTML += template;
}
}
readings();
function create() {
let read = document.getElementById("card-body");
for (let i = 0; i < database.length; i++) {
    let komen = database[i].userComment
    komen.push('user101010')
    let template = `
    `
    read.innerHTML += template;
}
}
create()

function selectItem(elementID) {
    // deselect all items
    document.querySelectorAll(".card.fashion-item.selected").forEach( el => {
        el.classList.remove("selected");
    })
    // select current item
    document.getElementById(elementID).classList.add("selected");
}

function echo() {
    let formInputItemName = document.getElementById("form-item").value;
    let formInputDesc = document.getElementById("form-desc").value;
    let formInputImageURL = document.getElementById("form-image-url").value;
    let formInputRating = document.getElementById("form-rating").value;
    let formInputComment = document.getElementById("form-comment").value;
    console.log(formInputItemName, formInputDesc, formInputImageURL, formInputRating, formInputComment);
}