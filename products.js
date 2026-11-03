/* ===== ZS TRADERS & FASHION : SETTINGS ===== */
const CONFIG = {
  WHATSAPP_NUMBER: "91XXXXXXXXXX", // <-- CHANGE THIS: 91 + your 10-digit number. No +, no spaces. Example: 919876543210
  ADMIN_PIN: "1234",               // <-- CHANGE THIS: PIN to open the Manage Products panel
  PHONE: "+91 XXXXX XXXXX",
  EMAIL: "hello@example.com",
  ADDRESS: "Your City, India",
  INSTAGRAM: "https://instagram.com/",
  FACEBOOK: "https://facebook.com/",
  YOUTUBE: "https://youtube.com/"
};

const CATS = ["Women's Clothing","Men's Clothing","Kids' Clothing","Bras & Lingerie","Nightwear","Western Wear","Traditional Wear","Fashion Accessories"];

/* ===== PRODUCTS =====
   img: "" shows a placeholder. To use your photo, upload it next to index.html and write its name, e.g. img:"kurti.jpg"
   price = original price, sale = discount price (use 0 for no discount)
   isNew: true shows in New Arrivals, best: true shows in Best Sellers */
const DEF = [
{id:1,name:"Cotton Anarkali Kurti",cat:"Women's Clothing",price:1499,sale:899,desc:"Soft breathable cotton kurti with a flared Anarkali cut. Perfect for daily and festive wear.",sizes:["S","M","L","XL","XXL"],colors:["Maroon","Navy","Goldenrod"],img:"",isNew:true,best:true},
{id:2,name:"Printed Palazzo Set",cat:"Women's Clothing",price:1299,sale:799,desc:"Kurti with matching palazzo in a light printed fabric. Comfortable all-day fit.",sizes:["S","M","L","XL"],colors:["Teal","Pink"],img:"",isNew:false,best:true},
{id:3,name:"Men's Slim Fit Cotton Shirt",cat:"Men's Clothing",price:1199,sale:699,desc:"Smart slim-fit shirt in premium cotton for office and outings.",sizes:["M","L","XL","XXL"],colors:["White","SkyBlue","Black"],img:"",isNew:true,best:false},
{id:4,name:"Men's Casual Chinos",cat:"Men's Clothing",price:1599,sale:999,desc:"Stretch chinos with a modern tapered fit and soft finish.",sizes:["30","32","34","36"],colors:["Beige","Navy","Olive"],img:"",isNew:false,best:true},
{id:5,name:"Kids Cotton Party Frock",cat:"Kids' Clothing",price:899,sale:549,desc:"Cute and comfortable frock for little girls, made from skin-friendly cotton.",sizes:["2-3Y","4-5Y","6-7Y"],colors:["Pink","Gold"],img:"",isNew:true,best:false},
{id:6,name:"Boys Tee & Shorts Set",cat:"Kids' Clothing",price:799,sale:499,desc:"Playful printed tee with matching shorts. Easy to wash, easy to wear.",sizes:["2-3Y","4-5Y","6-7Y","8-9Y"],colors:["Blue","Red"],img:"",isNew:false,best:false},
{id:7,name:"Seamless Cotton Bra",cat:"Bras & Lingerie",price:599,sale:399,desc:"Smooth, wire-free everyday bra with soft cotton lining.",sizes:["32B","34B","36B","38B"],colors:["Black","Beige"],img:"",isNew:false,best:true},
{id:8,name:"Lace Lingerie Set",cat:"Bras & Lingerie",price:1299,sale:849,desc:"Elegant lace bra and panty set with a comfortable stretch fit.",sizes:["S","M","L"],colors:["Black","Red"],img:"",isNew:true,best:false},
{id:9,name:"Satin Night Suit",cat:"Nightwear",price:1399,sale:899,desc:"Silky satin top and pyjama set for a luxurious night's sleep.",sizes:["M","L","XL"],colors:["Pink","Black","Navy"],img:"",isNew:true,best:true},
{id:10,name:"Cotton Nightdress",cat:"Nightwear",price:899,sale:599,desc:"Lightweight, loose-fit cotton nightdress for hot Indian nights.",sizes:["M","L","XL","XXL"],colors:["Lavender","Mint"],img:"",isNew:false,best:false},
{id:11,name:"Denim Jacket",cat:"Western Wear",price:2299,sale:1499,desc:"Classic cropped denim jacket that goes with everything.",sizes:["S","M","L","XL"],colors:["Blue","Black"],img:"",isNew:true,best:false},
{id:12,name:"Ruffle Midi Dress",cat:"Western Wear",price:1999,sale:1299,desc:"Flowy midi dress with ruffle detail for parties and brunches.",sizes:["S","M","L"],colors:["Red","Black","White"],img:"",isNew:false,best:true},
{id:13,name:"Banarasi Silk Saree",cat:"Traditional Wear",price:4999,sale:3499,desc:"Rich Banarasi-style silk saree with zari border and blouse piece.",sizes:["Free Size"],colors:["Red","Green","Gold"],img:"",isNew:true,best:true},
{id:14,name:"Men's Kurta Pajama Set",cat:"Traditional Wear",price:2499,sale:1599,desc:"Festive kurta pajama set in soft fabric with a refined finish.",sizes:["M","L","XL"],colors:["Beige","Maroon","White"],img:"",isNew:false,best:false},
{id:15,name:"Gold-tone Jhumka Earrings",cat:"Fashion Accessories",price:499,sale:299,desc:"Traditional gold-tone jhumkas, lightweight for all-day wear.",sizes:["Free Size"],colors:["Gold"],img:"",isNew:true,best:false},
{id:16,name:"Classic Handbag",cat:"Fashion Accessories",price:1899,sale:1199,desc:"Roomy faux-leather handbag with zip closure and inner pockets.",sizes:["Free Size"],colors:["Black","Brown"],img:"",isNew:false,best:true}
];
