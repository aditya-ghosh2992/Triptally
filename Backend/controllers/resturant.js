const jammukashmirresturants = (req,res) => {
    const data = [{
        "name":"Mosaic Restaurant",
        "rating":5.0,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/31/15/5e/getlstd-property-photo.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Khaana Khazana",
        "rating":4.0,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/34/4b/2b/khana-khazana-jammu.jpg?w=1200&h=-1&s=1"
    },{
        "name":"The Grandstand",
        "rating":4.5,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/8b/50/4d/sports-themed-ambience.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Wazwan",
        "rating":4.0,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/39/37/e2/this-is-for-ful-trami.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Imperial Grill Restaurant",
        "rating":4.0,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/18/2e/80/the-imperial-grill-restaurant.jpg?w=1200&h=-1&s=1"
    }];
    res.send(data);
}
const westbengalresturants = (req,res) => {
    const data = [{
        "name":"The Bridge",
        "rating":5.0,
        "imgurl":"https://lh3.googleusercontent.com/p/AF1QipMG0DFanFiDcmjf5iiVfGdlb4p8C4J3qF0mi47p=s1360-w1360-h1020"
    },{
        "name":"Oh! Calcutta",
        "rating":4.0,
        "imgurl":"https://lh3.googleusercontent.com/p/AF1QipO5A-SHHFPEU1CyjTfhTVBXcntiQGdW-GhtDH84=s1360-w1360-h1020"
    },{
        "name":"The Saffron Tree",
        "rating":4.5,
        "imgurl":"https://lh3.googleusercontent.com/p/AF1QipON_Ub2HpSbVAVRDFxWCi2GDNheuji5cYbRE5dM=s1360-w1360-h1020"
    },{
        "name":"Yauatcha Kolkata",
        "rating":4.0,
        "imgurl":"https://lh3.googleusercontent.com/p/AF1QipOQeZ97nDyUKbBfSDqJmLcjicxd3_SA36xZ8oM6=s1360-w1360-h1020"
    },{
        "name":"Spice Kraft",
        "rating":4.0,
        "imgurl":"https://lh3.googleusercontent.com/p/AF1QipN63CQY3Bs2WWGyOPYUbBD9RwAMjVTwdKnDMiyw=s1360-w1360-h1020"
    }];
    res.send(data);
}
const rajasthanresturants = (req,res)=>{
    const data = [{
        "name":"Govindam Retreat",
        "rating":4.6,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/09/14/d0/the-cuisine-that-originated.jpg?w=800&h=-1&s=1"
    },{
        "name":"Restaurant Harigarh",
        "rating":4.4,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ee/63/a0/rooftop-setting.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Namaste Mewar Resturant",
        "rating":4.8,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/94/1f/54/caption.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Indique Restaurant",
        "rating":4.2,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/35/5f/c0/outdoor.jpg?w=1100&h=-1&s=1"
    },{
        "name":"Spice Court, Jaipur",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/12/92/db/caption.jpg?w=1100&h=-1&s=1"
    }]
    res.send(data);
}
const madhyapradeshresturants = (req,res)=>{
    const data = [{
        "name":"The Public House",
        "rating":4.5,
        "imgurl":"https://imgs.search.brave.com/QE49DUfm0nz3B8gAzQqc-C6i5k6s9HW1nkGd7-L1V9A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYz/ZDllMjNiYTNmNjMz/NzlhOTZlYzYyNC8z/MWJkY2YzNC1mNzQw/LTQyZGYtYmZiMy1h/MjRjMjE3OGFkZjAv/cHVibGljX2hvdXNl/X2Rpbm5pZy5qcGVn"
    },{
        "name":"Saffron Restaurant",
        "rating":4.5,
        "imgurl":"https://imgs.search.brave.com/97xDqEXgBTVxMucZLkIJSQv6vHoMFcINM8iHPTlVVHE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWdy/b3duLmNvbS9tZWRp/YS96b28vaW1hZ2Vz/L3NhZmZyb25fMDQ3/OTdkOTUxNmQ5ZmYy/YzhhMDJmMWM4MDAx/MWUwYzYuanBn"
    },{
        "name":"The Waterfall Restaurant",
        "rating":4.8,
        "imgurl":"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/e/d/p29410-15743151555dd62493bdda1.jpg?tr=tr:n-xlarge"
    },{
        "name":"Kebabsville",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/97/56/b9/kebabsville.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Nafees Restaurant",
        "rating":4.6,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/c3/7a/83/nafees-restaurant.jpg?w=1200&h=-1&s=1"
    }]
    res.send(data);
}
const biharresturants = (req,res)=>{
    const data = [{
        "name":"The Barbeque Company,Patna",
        "rating":4.5,
        "imgurl":"https://b.zmtcdn.com/data/pictures/8/20510928/e45a45fbaa4db04dc3002173736f6112.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    },{
        "name":"Hotel Maurya,Patna",
        "rating":4.5,
        "imgurl":"https://www.maurya.com/wp-content/uploads/2018/02/spicecourt_restaurant_hotel_maurya_patna_gallery_2.jpg"
    },{
        "name":"Hotel The Panache,Patna",
        "rating":4.8,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c3/44/9e/the-panache.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Chanakya Hotel,Patna",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f6/81/51/hotel-chanakya.jpg?w=800&h=-1&s=1"
    },{
        "name":"Cook Book Café",
        "rating":4.6,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b7/8e/64/img-20210307-170040-largejpg.jpg?w=1200&h=-1&s=1"
    }]
    res.send(data);
}
const gujaratresturants = (req,res)=>{
    const data = [{
        "name":"Agashiye,Ahemdabad",
        "rating":4.6,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/2a/41/db/agashiye-lounge-and-garden.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Peshawari restaurant, Vadodara",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/a6/11/54/peshawri.jpg?w=1100&h=-1&s=1"
    },{
        "name":"Iscon Thal",
        "rating":4.7,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/6f/78/9a/menu-and-dish.jpg?w=1100&h=-1&s=1"
    },{
        "name":"Gallops Food Plaza",
        "rating":4.4,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a6/bf/78/img-20190303-wa0026-largejpg.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Pleasure Trove",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/e0/b9/1e/pleasure-trove-restaurant.jpg?w=800&h=-1&s=1"
    }]
    res.send(data);
}
const assamresturants = (req,res)=>{
    const data = [{
        "name":"Kalita Spectrum",
        "rating":4.4,
        "imgurl":"https://media-cdn.tripadvisor.com/media/photo-o/0f/ae/00/38/kalita-spectrum-dine.jpg"
    },{
        "name":"Mising Kitchen",
        "rating":4.4,
        "imgurl":"https://lh5.googleusercontent.com/p/AF1QipOgGYhUqbh0HA0FXGtqnXfp3tTUvEsbHchXlrIe=w1080-k-no"
    },{
        "name":"Azads,Guwahati",
        "rating":4.5,
        "imgurl":"https://imgs.search.brave.com/2LnPt5_ZZBuGntYYaUcziwsn-LWMx_ddvTVC-gJDnv4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbTEu/ZGluZW91dC5jby5p/bi9pbWFnZXMvdXBs/b2Fkcy9yZXN0YXVy/YW50L3NoYXJwZW4v/MS9wL3EvcDExODYz/Ni0xNjgwMjU5NjM2/NjQyNmJhMzQzOTc4/ZC5qcGc_dHI9dHI6/bi1tZWRpdW0"
    },{
        "name":"The Spice Route",
        "rating":4.1,
        "imgurl":"https://media-cdn.tripadvisor.com/media/photo-s/2b/6d/89/2b/spice-route-s-asian-sundowner.jpg"
    },{
        "name":"Cafe Hendrix",
        "rating":4.2,
        "imgurl":"https://th.bing.com/th/id/OIP.vDrAs6bphH9-PB1g5PGDXAHaE8?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }]
    res.send(data);
}
const andhrapradeshresturants = (req,res)=>{
    const data = [{
        "name":"Bazaar",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/95/3a/ce/all-day-diners.jpg?w=1200&h=-1&s=1"
    },{
        "name":"GAD Restaurant",
        "rating":4.7,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a0/21/df/gad-restaurant-the-gateway.jpg?w=500&h=-1&s=1"
    },{
        "name":"Andhra Spice Restaurant",
        "rating":4.4,
        "imgurl":"https://media-cdn.tripadvisor.com/media/photo-s/1d/c4/11/b0/andhra-spice-spice-it.jpg"
    },{
        "name":"The Oriental Pavilion",
        "rating":5,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/32/a7/d9/the-first-the-finest.jpg?w=1200&h=-1&s=1"
    },{
        "name":"TFL",
        "rating":4.6,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/70/95/c4/tfl.jpg?w=1200&h=-1&s=1"
    }]
    res.send(data);
}
const uttarpradeshresturants = (req,res)=>{
    const data = [{
        "name":"Charcoal Fine Dining",
        "rating":4.4,
        "imgurl":"https://b.zmtcdn.com/data/pictures/4/20769014/8b2abe31620e95ad0fb55a9fa6fc7bbf.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    },{
        "name":"Tandoor Villa",
        "rating":4.4,
        "imgurl":"https://b.zmtcdn.com/data/pictures/0/3900050/29d0b238974c4d5a7f376c511173b1e5.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    },{
        "name":"Hanuman Vatika Restaurant",
        "rating":4.5,
        "imgurl":"https://img.restaurantguru.com/r2d6-design-HANUMAN-VATIKA-RESTAURANT.jpg"
    },{
        "name":"M3 Cafe and Restaurant",
        "rating":4.1,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/18/21/c8/caption.jpg?w=1100&h=-1&s=1"
    },{
        "name":"Agrawal restaurant Mathura",
        "rating":4.2,
        "imgurl":"https://b.zmtcdn.com/data/pictures/8/19020238/7b99084d7959ba37aab98ab41ba3d3a4.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
    }]
    res.send(data);
}
const delhiresturants = (req,res)=>{
    const data = [{
        "name":"The GT Road",
        "rating":4.3,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3c/99/43/buffet-live-counters.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Infinity",
        "rating":4.7,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/15/49/f4/infinity-all-day-dining.jpg?w=1200&h=-1&s=1"
    },{
        "name":"The Art Of Dumpling",
        "rating":4.4,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ba/f4/28/aesthetic-interior-of.jpg?w=1200&h=-1&s=1"
    },{
        "name":"Kiyan, The Roseate",
        "rating":5,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9d/75/06/amazing-ambience.jpg?w=1200&h=-1&s=1"
    },{
        "name":"The Imperial Spice",
        "rating":4.6,
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0e/f6/c2/the-imperial-spice.jpg?w=1200&h=-1&s=1"
    }]
    res.send(data);
}
export {jammukashmirresturants,westbengalresturants,rajasthanresturants,madhyapradeshresturants,biharresturants,gujaratresturants,assamresturants,andhrapradeshresturants,uttarpradeshresturants,delhiresturants}