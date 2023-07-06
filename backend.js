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
      name: "T-Shirt Polos Pria",
      imageURL: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/ece0bd45566d89c75032a0d35edf97ac44b6f849_xxl-1.jpg",
      desciptionLP: "Baju T-Shirt pria yang cukup tipis dan tidak panas sehingga bagus digunakan untuk kegiatan luar",
      ratingTotal: 25,
      ratingCount: 6,
      comments: ["T-Shirt ini simple dan bisa juga cocok ditambahkan dengan baju luaran lainnya"],
    },
    {
      id: 4,
      name: "Loose Jeans",
      imageURL: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/f4e29421570f3325ec0568b262bb5cd262f43942_xxl-1.jpg",
      desciptionLP: "Celana jeans longgar pria",
      ratingTotal: 12,
      ratingCount: 4,
      comments: ["celana ini cukup longgar sehingga memakainya tidak terasa panas"],
    },
    {
      id: 5,
      name: "Loafers",
      imageURL: "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/5307c68bce64423447feac834ee2486bc4307f12_xxl-1.jpg",
      desciptionLP: "Sepatu pantofel hitam pria",
      ratingTotal: 21,
      ratingCount: 7,
      comments: ["Sepatu ini cukup cocok untuk acara formal"],
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
      name: "Jaket Outer Wanita",
      imageURL: "https://im.uniqlo.com/global-cms/spa/res54146663d962e3d89e3172c73b8a9ec8fr.jpg",
      desciptionLP: "Jaket wanita dengan desain yang cukup simpel sehingga cocok dengan berbagai pakaian",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Jaket ini cukup tipis jadi tidak cocok untuk menahan udara dingin"],
    },
    {
      id: 10,
      name: "Sweatshirt Putih Pria",
      imageURL: "https://static.zara.net/photos///2023/V/0/2/p/6224/468/250/2/w/850/6224468250_2_1_1.jpg?ts=1679648028946",
      desciptionLP: "Sweatshirt yang sangat cocok digunakan diaktifitas luar",
      ratingTotal: 22,
      ratingCount: 5,
      comments: ["Bajunya cukup simpel dan bikin panas"],
    },
  ];
  
//ketik dom disini
console.log("Masuk");
function readings() {
let parentNode = document.getElementById("cards");
for (let i = 0; i < database.length; i++) {

    let itemComments = database[i].comments;
    itemComments = itemComments.map( comment => `<q class="comment">${comment}</q>`);
    let templateComment = `<q class="comment">${itemComments.join('<br>')}</q>`;

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
    let formInputName = document.getElementById("form-name").value;
    let formInputItem = document.getElementById("form-item").value;
    let formInputRating = document.getElementById("form-rating").value;
    let formInputComment = document.getElementById("form-comment").value;
    console.log(formInputName, formInputItem, formInputRating, formInputComment);
}