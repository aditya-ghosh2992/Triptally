const jammukashmirfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Vaishno Devi Mandir",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/34/98/37/lrm-export-31665251117501.jpg?w=1200&h=-1&s=1"
        },
        {
        "name":"Ranbireshwar Temple",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/8e/47/74/caption.jpg?w=1100&h=-1&s=1"
        },
        {
        "name":"Raghunath Temple",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/58/35/de/nice-temple.jpg?w=800&h=-1&s=1"      
        },
        {
        "name":" Bawey Wali Mata Temple",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/d8/f5/3a/bawey-wali-mata-temple.jpg?w=500&h=-1&s=1"
        },
        {
        "name":"Bagh-e-Bahu",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/58/01/30/view-from-the-top-level.jpg?w=1200&h=-1&s=1"
        }]
        res.send(data);
}
const westbengalfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Victoria Memorial",
        "imgurl":"https://lh5.googleusercontent.com/p/AF1QipMHvkB151icA3Pa0YFWpakcpCv_LplFa1gorz6j=w408-h305-k-no"
        },
        {
        "name":"Howrah Bridge",
        "imgurl":"https://lh5.googleusercontent.com/p/AF1QipNsIVE7E2eQ_MI9RFNeE9i96IK8fTY8RtX41tDX=w408-h265-k-no"
        },
        {
        "name":"Indian Museum",
        "imgurl":"https://lh5.googleusercontent.com/p/AF1QipPNCfv_JgzRTqfDPkZ4shXR48NPgPbcX2PzDX3V=w408-h408-k-no"      
        },
        {
        "name":"Belur Math",
        "imgurl":"https://lh5.googleusercontent.com/p/AF1QipM-kYbpv9PmtAaLC7GvEikFZPLX6sWqOm-niKUv=w408-h544-k-no"
        },
        {
        "name":"Dakshineswar Kali Temple",
        "imgurl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG/1200px-Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG"
        }]
        res.send(data);
}
const rajasthanfamousplaces = (req,res) => {
    const data = [
        {
        "name":"Ranthambore National Park",
        "imgurl":"https://imgs.search.brave.com/2ABOPgD_ER1Bm_SyZH9BCjtqCYpy2wKBbu_dRrf7dMg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4x/LnRyaXBvdG8uY29t/L21lZGlhL2ZpbHRl/ci90c3QvaW1nLzU2/NzM2NC9JbWFnZS8x/NTQ4ODMzNTYzX2Jv/cmUuanBnLndlYnA"
        },
        {
        "name":"Hawa Mahal,Jaipur",
        "imgurl":"https://imgs.search.brave.com/dk1dwZ855b5vqjLXmuWPPU_-c3mbuJo1nPj--tXyIew/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/MDQzODYwMS9waG90/by9hLXBob3RvLW9m/LXRoZS1oYXdhLW1h/aGFsLWluLWphaXB1/ci1pbmRpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SEZ6/MXVNYjJlZlZxSGZJ/ZkpEQUNuOTQ4Zmhu/eF84NjlWWm85M3lM/Yk9wbz0"
        },
        {
        "name":"The Amber Palace",
        "imgurl":"https://imgs.search.brave.com/bTOmMIqokmZt3urS8zd9_Yq0e2BEeZPUBLp2Z8OKmms/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcHJvZHVjdGlv/bi5nYXJkZW52aXNp/dC5jb20vdXBsb2Fk/cy9pbWFnZXMvMTE0/ODI0L2FtYmVyX3Bh/bGFjZV9qYWlwdXIy/X2xhcmdlLmpwZw"      
        },
        {
        "name":"Chittorgarh Fort",
        "imgurl":"https://imgs.search.brave.com/Lkir0CEks_S4dV6tDwqmfwr-IuKgzeG5-FQ-hw70OJg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjQ1/MDk2MjkwL3Bob3Rv/L2luZGlhLXJhamFz/dGhhbi1jaGl0dG9y/Z2FyaC1mb3J0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1z/T3ZYV1VkNEJCYnBT/bDIzR0dkSzlxYmpF/S1luM1RkVkxwUVNM/WlNocDRBPQ"
        },
        {
        "name":"The City Palace",
        "imgurl":"https://imgs.search.brave.com/1wdDmlwqCedGr-RnSBrZUEAhV7ibtSSQYaNZGYaOlDs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg1/NzE4MjAwL3Bob3Rv/L2NpdHktcGFsYWNl/LXVkYWlwdXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXNS/d0FaOWdKd1FHd0R2/NG44VmxhUG9HN3U2/a1lqbERoQmQtRElt/OU1yZms9"
        }]
        res.send(data);
}
const punjabfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Golden Temple,Amritsar",
        "imgurl":""
        },
        {
        "name":"Jallianwala Bagh",
        "imgurl":""
        },
        {
        "name":"Gobindgarh Fort",
        "imgurl":""      
        },
        {
        "name":"The Partition Museum",
        "imgurl":""
        },
        {
        "name":"Rock Garden,Chandigarh",
        "imgurl":""
        }]
        res.send(data);
}
const madhyapradeshfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Ujjain,Mahakal Lok",
        "imgurl":"https://imgs.search.brave.com/0-JaG3nbQ1YohUMtOQMLuld3FEKtD7jwvKvsssy0vdg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dG91cm15aW5kaWEu/Y29tL2Jsb2cvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEw/L01QLVVqamFpbi1N/YWhha2FsLUxvay5q/cGc"
        },
        {
        "name":"Indore,Rajwada Fort",
        "imgurl":"https://imgs.search.brave.com/6SvoJrH8tIrcyFGhPTwNEpOcFfpc7ijJKqpWdfgjdDU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbmRv/cmVjaXR5LmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAx/L1JBSldBREEtRk9S/VC0xLndlYnA"
        },
        {
        "name":"Sehore,Crescent Water Park",
        "imgurl":"https://imgs.search.brave.com/SYb3JrTNIfNwJqP0RtT0i1rZcrhdydFEOrd8qb_-WgY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vc2ltcGxvdGVs/L2ltYWdlL3VwbG9h/ZC93XzUwMDAsaF8z/MzY0L3hfMCx5XzQz/Mix3XzUwMDAsaF8y/NTAwLHJfMCxjX2Ny/b3AscV84MCxmbF9w/cm9ncmVzc2l2ZS93/XzgyNSxmX2F1dG8s/Y19maXQvY3Jlc2Nl/bnQtd2F0ZXItcGFy/ay1pbmRvcmUvX0RT/QzA0OTZfbXJjNWtr"      
        },
        {
        "name":"Gwalior Fort",
        "imgurl":"https://imgs.search.brave.com/GOgPMbpXJtqruUaa3_3NWZP6xAdoyAXyUIsURANDAwg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MzL0d3YWxpb3Jf/Zm9ydDYuanBn"
        },
        {
        "name":"Bhimbetka Rock Shelters",
        "imgurl":"https://imgs.search.brave.com/yRc9s-9WKVIr39XzBTBJUsbxxUTI5eDSRtse4M2t7IA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTc0/NTY0MTY2L3Bob3Rv/L2JoaW1iZXRrYS1y/b2NrLXNoZWx0ZXJz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1qTVJsTWJMMHky/dTZNU0h5YWJLd0lB/cUVCb3FsZ0dFcXh2/YS1Jb3AzQzZRPQ"
        }]
        res.send(data);
}
const biharfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Hanuman Mandir,Patna",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cf/fc/be/th-largejpg.jpg?w=1200&h=-1&s=1"
        },
        {
        "name":"Golghar,Patna",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/53/f2/b5/golghar-from-outside.jpg?w=1200&h=-1&s=1"
        },
        {
        "name":"Marine Drive,Patna",
        "imgurl":"https://imgs.search.brave.com/CrlD1oY6TEENTB18ONUaTM6zIFU9K4cHoS7mQ2aDN7Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21iY29udGVudC9p/bWFnZXMvY3JvcC91/cGxvYWRzLzIwMjMv/NS9tYXJpbmUtZHJp/dmUtcGF0bmFfMF8x/MjAwLmpwZw"      
        },
        {
        "name":"Vishnu Pad Mandir,Gaya",
        "imgurl":"https://imgs.search.brave.com/b61V9wbPMonF4vtdkhZVGi9Ap8rN83U8327lFXbc9NA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3Av/QUYxUWlwTU1rMVll/WUpJRDdUNEQxV0Rv/TUdTWTI3LVpidHpa/NVhfRFFncz13MTA4/MC1rLW5v.jpeg"
        },
        {
        "name":"Shanti Stupa,Rajgir",
        "imgurl":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/2e/1f/19/viswa-shanti-stupa-rajgir.jpg?w=1000&h=-1&s=1"
        }]
        res.send(data);
}
const assamfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Maa kamakhya Temple,Guwahati",
        "imgurl":"https://th.bing.com/th/id/OLC.pENwMjHl0ZDxBQ480x360?&rs=1&pid=ImgDetMain"
        },
        {
        "name":"Majuli,Jorhat",
        "imgurl":"https://tms.tourgenie.com/assets/images/imgblog/blogimg_Abhishek_Gurung_f426e2956639117363a8202ebfe89ef3.jpg"
        },
        {
        "name":"Kaziranga National Park,Golaghat",
        "imgurl":"https://th.bing.com/th?id=OLC.V7Fof%2fUOLydbng480x360&w=192&h=140&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"      
        },
        {
        "name":"Umananda Temple,Guwahati",
        "imgurl":"https://assets-news.housing.com/news/wp-content/uploads/2022/07/25001511/Guwahati7-533x400.jpg"
        },
        {
        "name":"Sivasagar",
        "imgurl":"https://static.toiimg.com/photo/62931817/.jpg"
        }]
        res.send(data);
}
const gujaratfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Statue of Unity,Kevadiya",
        "imgurl":"https://imgs.search.brave.com/3u--XTNYdb6lZ901MhkHAoasOKWISwBP7ihJH25DIyg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NDI4NDE4MTkzMDAt/MjBlZDQ0OWMwMmEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGMz/UmhkSFZsSlRJd2Iy/WWxNakIxYm1sMGVY/eGxibnd3Zkh3d2ZI/eDhNQT09.jpeg"
        },
        {
        "name":"Sabarmati Ashram,Ahemdabad",
        "imgurl":"https://imgs.search.brave.com/OSVg4AH8CiDA0wh2e-YPrVq9E-iwq_IXArBSo2ICdks/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2RkL1NhYmFybWF0/aV9Bc2hyYW0uanBn"
        },
        {
        "name":"Adalaj Stepwell ,Ahemdabad",
        "imgurl":"https://imgs.search.brave.com/_HaVflxSVUfiTemE2KqUZTm3o8gYGhpt2BAqAYs_JoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTg4/MzQyMDI0L3Bob3Rv/L2FkYWxhai1zdGVw/d2VsbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dnpGZlZn/YlNkNlBPX2pOSlJm/TmdpaEx2RjRQdjVu/bGNBVlhsUkF3X3ln/UT0"      
        },
        {
        "name":"Somnath Temple",
        "imgurl":"https://imgs.search.brave.com/uhNRU5aX1cwvJ5o5GnLK49olFJQ6D87k0QQycbYkBSc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQz/MDg0OTgxL3Bob3Rv/L2ZhbW91cy1ob2x5/LXNvbW5hdGgtdGVt/cGxlLWd1amFyYXQt/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNFMVRP/NzRFVGZpZjNWdk9i/VVNtcFphTmxlMWN0/TVcyNDV4VnRmNTFy/TkE9"
        },
        {
        "name":"Dwarkadhish temple,Dwarka",
        "imgurl":"https://imgs.search.brave.com/0E5HLivU2wwiDNaWXnK8YeNbCtS8IGhis6nxADGEXKk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU1MjY3/NDMuanBn"
        }]
        res.send(data);
}
const andhrapradeshfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Undavalli Cave Temple,Amaravati",
        "imgurl":"https://th.bing.com/th/id/OLC.pENwMjHl0ZDxBQ480x360?&rs=1&pid=ImgDetMain"
        },
        {
        "name":"Prakasam Barrage,Vijaywada",
        "imgurl":"http://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-vfdp2mp0q1va5ocq2q562ncrt5-20160415064902.Medi.jpeg"
        },
        {
        "name":"Kondapalli Fort,Kondapalli",
        "imgurl":"https://th.bing.com/th/id/OLC.fyCtbUe0uAzMog480x360?&rs=1&pid=ImgDetMain"      
        },
        {
        "name":"Talakona Waterfall,Tirupathi",
        "imgurl":"https://th.bing.com/th/id/OLC.X2RkGoouhkgBKw480x360?&rs=1&pid=ImgDetMain"
        },
        {
        "name":"Nagalapuram Waterfalls,Chittoor",
        "imgurl":"https://media-cdn.tripadvisor.com/media/photo-s/0c/d6/5a/5a/img-20160903-154937593.jpg"
        }]
        res.send(data);
}
const uttarpradeshfamousplaces = (req,res) => {
    const data =[
        {
        "name":"Kashi Vishwanath Mandir",
        "imgurl":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kashi_Vishwanath.jpg/220px-Kashi_Vishwanath.jpg"
        },
        {
        "name":"Ayodhya Lord Ram mandir",
        "imgurl":"https://bsmedia.business-standard.com/_media/bs/img/article/2020-08/04/full/1596548773-041.jpg?im=FitAndFill=(826,465)"
        },
        {
        "name":"Temple & Lord Krishna's birthplace",
        "imgurl":"https://vrindavanactnow.org/wp-content/uploads/Birthplace-of-Lord-Krishna.jpg"      
        },
        {
        "name":"Taj Mahal",
        "imgurl":"https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg"
        },
        {
        "name":"Fatehpur Sikri",
        "imgurl":"https://agratourism.in/images/places-to-visit/headers/fatehpur-sikri-agra-tourism-entry-fee-timings-holidays-reviews-header.jpg"
        }]
        res.send(data);
}
const delhifamousplaces = (req,res) => {
    const data =[
        {
        "name":"Red Fort",
        "imgurl":"https://imgcld.yatra.com/ytimages/image/upload/v1461929855/Delhi-Red_Fort1.jpg"
        },
        {
        "name":"Qutb Minar",
        "imgurl":"https://imgs.search.brave.com/yKUwSa6GBQd5ZFCP75N1SEuSVR7It1yTyWxeOeP2ef4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhmL1F1dHViX01p/bmFyXzkzMi5qcGc"
        },
        {
        "name":"India Gate",
        "imgurl":"https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg"      
        },
        {
        "name":"Jantar Mantar",
        "imgurl":"https://i.pinimg.com/originals/50/68/28/506828e8bba7165c75ecf55e4e7108a1.jpg"
        },
        {
        "name":"Lotus Temple",
        "imgurl":"https://th.bing.com/th/id/OIP.JYGWIPe82Dj_5c_y0V0G2AHaFH?rs=1&pid=ImgDetMain"
        }]
        res.send(data);
}
export {jammukashmirfamousplaces,westbengalfamousplaces,rajasthanfamousplaces,punjabfamousplaces,madhyapradeshfamousplaces,biharfamousplaces,assamfamousplaces,gujaratfamousplaces,andhrapradeshfamousplaces,uttarpradeshfamousplaces,delhifamousplaces};