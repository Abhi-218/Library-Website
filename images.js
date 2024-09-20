let NEW=[{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315101/aaaaa/yknl1zw8nlaoossuzy9x.jpg)',
    discription : 'milk and Honey',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315108/aaaaa/i1oplfhuyvr925sgjzb0.jpg)',
    discription : 'Roninson',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315112/aaaaa/kokcbpy1wjk1crvnzdk9.jpg)',
    discription : 'Your soul is River',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315097/aaaaa/vtufncmpsc1bajryza0k.jpg)',
    discription : 'Dalat',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315085/aaaaa/okhkifu5wil8jlmlz8ad.jpg)',
    discription : 'Antomic Habits',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
}] 
let Top5=[{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315088/aaaaa/kx8txnd7mdjmrkhdnqfj.jpg)',
    discription : 'The Psychology of Money',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'Paid'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315083/aaaaa/hbs6kx2gpysnkrn1r9yj.jpg)',
    discription : "I Don't Know",
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'Paid'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315081/aaaaa/jlcxcbvwg1ut0lagzydj.jpg)',
    discription : 'Wuthering Height',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'Paid'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315103/aaaaa/pqnefjjzo1ibqpotxpwf.jpg)',
    discription : 'Your Heart is The Sea',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'Paid'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315133/aaaaa/eqs32vctt2fhx6vp5re8.jpg)',
    discription : 'Stop Worrying and Start Living',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'Paid'
}] 
let youngAndAdult =[{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315081/aaaaa/k3y6tepai51kil5cm4sx.jpg)',
    discription : 'Bing The REd Fleg',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315084/aaaaa/j8kkxwdpaosq8v15hwzi.jpg)',
    discription : 'Twisted Love',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315086/aaaaa/kdvrsqhfkddqohzn54n3.jpg)',
    discription : 'Love on the Brain',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315151/aaaaa/gdkjlzxksgzukocif7yh.jpg)',
    discription : 'Happy',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
},{
    wheretogo : '',
    imagePath : 'url(https://res.cloudinary.com/dlktmd2qd/image/upload/v1726315088/aaaaa/ewbkmhycncnmepcezsdt.jpg)',
    discription : 'Ningth House Light Bardugo',
    realprice : 300,
    off : 20,
    fakeprice : 200 ,
    delivery : 'free'
}] 

    for(let i=0 ;i < NEW.length ; i++){
        document.querySelector('.item1').innerHTML += `
        <div class="items">
        <a href="${NEW[i].wheretogo}">
                <div class="productimg newimg${i}"></div>
                <div class="note">
                    <p class="discription">${NEW[i].discription}</p>
                    <p class="price"><span class="realprice">${NEW[i].realprice}</span><span class="fakeprice">${NEW[i].fakeprice}</span><span
                            class="off">${NEW[i].off} off</span></p>
                    <p class="delivery">${NEW[i].delivery} delivery</p>
                </div>
            </a>
        </div>`;
    document.querySelector(`.newimg${i}`).style.backgroundImage = NEW[i].imagePath;
    }

    for(let i=0 ;i < Top5.length ; i++){
        document.querySelector('.item2').innerHTML += `
        <div class="items">
        <a href="${Top5[i].wheretogo}">
                <div class="productimg Top5img${i}"></div>
                <div class="note">
                    <p class="discription">${Top5[i].discription}</p>
                    <p class="price"><span class="realprice">${Top5[i].realprice}</span><span class="fakeprice">${Top5[i].fakeprice}</span><span
                            class="off">${Top5[i].off} off</span></p>
                    <p class="delivery">${Top5[i].delivery} delivery</p>
                </div>
            </a>
        </div>`;
    document.querySelector(`.Top5img${i}`).style.backgroundImage = Top5[i].imagePath;
    }

    // for(let i=0 ;i < images.length ; i++){
    //     document.querySelector('.item3').innerHTML += `
    //     <div class="items">
    //     <a href="${images[i].wheretogo}">
    //             <div class="productimg simg${i}"></div>
    //             <div class="note">
    //                 <p class="discription">${images[i].discription}</p>
    //                 <p class="price"><span class="realprice">${images[i].realprice}</span><span class="fakeprice">${images[i].fakeprice}</span><span
    //                         class="off">${images[i].off} off</span></p>
    //                 <p class="delivery">${images[i].delivery} delivery</p>
    //             </div>
    //         </a>
    //     </div>`;
    // document.querySelector(`.simg${i}`).style.backgroundImage = images[i].imagePath;
    // }


    for(let i=0 ;i < youngAndAdult.length ; i++){
        document.querySelector('.item4').innerHTML += `
        <div class="items">
        <a href="${youngAndAdult[i].wheretogo}">
                <div class="productimg youngAndAdultimg${i}"></div>
                <div class="note">
                    <p class="discription">${youngAndAdult[i].discription}</p>
                    <p class="price"><span class="realprice">${youngAndAdult[i].realprice}</span><span class="fakeprice">${youngAndAdult[i].fakeprice}</span><span
                            class="off">${youngAndAdult[i].off} off</span></p>
                    <p class="delivery">${youngAndAdult[i].delivery} delivery</p>
                </div>
            </a>
        </div>`;
    document.querySelector(`.youngAndAdultimg${i}`).style.backgroundImage = youngAndAdult[i].imagePath;
    }

 




   
