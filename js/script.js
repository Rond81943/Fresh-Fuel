let btnCB = document.querySelector('#cb');
let btnDCB = document.querySelector('#dcb');
let btnW = document.querySelector('#w');
let btnDW = document.querySelector('#dw');
let btnP = document.querySelector('#p');
let btnN = document.querySelector('#n');
let btnS = document.querySelector('#s');
let btnA = document.querySelector('#a');
let btnC = document.querySelector('#c');
let btnChe = document.querySelector('#che');
let btnRoz = document.querySelector('#roz');
let btnChess = document.querySelector('#chess');
let btnOrgF = document.querySelector('#orgF');
let btnCoke = document.querySelector('#coke');
let btnCap = document.querySelector('#cap');
let btnEss = document.querySelector('#ess');
let btnAppF = document.querySelector('#appF');
let btnTea = document.querySelector('#tea');
let btnGrTea = document.querySelector('#grTea');
let btnCetchup = document.querySelector('#cetchup');
let btnKislo = document.querySelector('#kislo');
let btnChezz = document.querySelector('#chezz');

let modal = document.querySelector('.modal');

let h = document.querySelector('.hh');
let discription = document.querySelector('.discription');
let massa = document.querySelector('.massa');
let callor = document.querySelector('.callor');
let belok = document.querySelector('.belok');
let ziri = document.querySelector('.ziri');
let yglevod = document.querySelector('.ylevod');

let modalForm = [
    {
        h1: '<i>ЧикенБургер</i>',
        dis: 'Цельнозерновая булочка с клетчаткой и кунжутом, котлета из курицы, наш фирменный соус, листья салата, плавленый сырок, тонко нарезанная помидорка, малосольный огурчик и куча позитива и удовольствия.',
        mas: '200 грамм',
        cal: '180',
        bel: '10',
        zir: '7',
        ygl: '20'
    },
    {
        h1: '<i>Двойной ЧикенБургер</i>',
        dis: 'Цельнозерновая булочка с клетчаткой и кунжутом, две сочные котлеты из курицы, наш фирменный соус, листья салата, плавленый сырок, тонко нарезанная помидорка, малосольный огурчик и куча позитива и удовольствия.',
        mas: '244 грамма',
        cal: '180',
        bel: '11',
        zir: '7',
        ygl: '18'
    },
    {
        h1: '<i>Воппер</i>',
        dis: 'Цельнозерновая булочка с клетчаткой и кунжутом, котлета из говядины, наш фирменный соус, листья салата, плавленый сырок, тонко нарезанная помидорка, малосольный огурчик и куча энергии.',
        mas: '190 грамм',
        cal: '218',
        bel: '10',
        zir: '9',
        ygl: '23'
    },
    {
        h1: '<i>Двойной Воппер</i>',
        dis: 'Цельнозерновая булочка с клетчаткой и кунжутом, две сочные и смачные котлеты из говядины, наш фирменный соус, листья салата, плавленый сырок, тонко нарезанная помидорка, малосольный огурчик и долгое чувство сытости.',
        mas: '216 грамм',
        cal: '254',
        bel: '13',
        zir: '12',
        ygl: '23'
    },
    {
        h1: '<i>Картошка фри</i>',
        dis: 'Горячий и свежий картофель фри - золотистые и хрустящие ломтики отлично дополнят любой обед.',
        mas: '160 грамм',
        cal: '79',
        bel: '3',
        zir: '0.5',
        ygl: '15'
    },
    {
        h1: '<i>Наггетсы</i>',
        dis: 'Наши наггетсы сделаны из нежного белого куриного мяса в легкой хрустящей панировке.',
        mas: '165 грамм',
        cal: '158',
        bel: '18',
        zir: '5',
        ygl: '10'
    },
    {
        h1: '<i>Салат Цезарь</i>',
        dis: 'Традиционный рецепт салата «Цезарь» с листьями зеленого салата, чесночными сухариками, сыром Пармезан и хрустящей курочкой под нежным соусом Цезарь.',
        mas: '187 грамм',
        cal: '102',
        bel: '12',
        zir: '3',
        ygl: '7'
    },
    {
        h1: '<i>Яблочные дольки</i>',
        dis: 'Отборные, свежие яблоки, резанные дольками.',
        mas: '80 грамм',
        cal: '52',
        bel: '0.26',
        zir: '0.17',
        ygl: '14'
    },
    {
        h1: '<i>Морковные палочки</i>',
        dis: 'Полезный и полностью натуральный овощной десерт, пригодный для быстрого перекуса.',
        mas: '80 грамм',
        cal: '28',
        bel: '0.3',
        zir: '0.1',
        ygl: '5.5'
    },
    {
        h1: '<i>Пирожок Вишневый</i>',
        dis: 'Наивкуснейший пирожок со сладкой начинкой из вишни.',
        mas: '80 грамм',
        cal: '180',
        bel: '8',
        zir: '4',
        ygl: '13'
    },
    {
        h1: '<i>Рожок</i>',
        dis: 'Классическое мороженое из натурального цельного молока в румяной хрустящей вафле.',
        mas: '98 грамм',
        cal: '164',
        bel: '4',
        zir: '3.6',
        ygl: '29'
    },
    {
        h1: '<i>Чизкейк</i>',
        dis: 'Знаменитый классический творожный десерт.',
        mas: '98 грамм',
        cal: '155',
        bel: '12',
        zir: '8',
        ygl: '9'
    },
    {
        h1: '<i>Апельсиновый сок</i>',
        dis: 'Сок из свежевыжатого апельсина.',
        mas: '200 миллилитров',
        cal: '45',
        bel: '0.7',
        zir: '0.3',
        ygl: '10.2'
    },
    {
        h1: '<i>Кола без сахара</i>',
        dis: 'Газированный напиток.',
        mas: '200 миллилитров',
        cal: '0.3',
        bel: '0',
        zir: '0',
        ygl: '0'
    },
    {
        h1: '<i>Капучино</i>',
        dis: 'Ароматный кофейный напиток с нежной молочной пенкой.',
        mas: '200 миллилитров',
        cal: '45',
        bel: '1.8',
        zir: '2.6',
        ygl: '3.9'
    },
    {
        h1: '<i>Эспрессо</i>',
        dis: '100 миллилитров кофейного нектара! Бодрящий и насыщенный в нашем экспрессо.',
        mas: '100 миллилитров',
        cal: '2',
        bel: '0.2',
        zir: '0',
        ygl: '0.7'
    },
    {
        h1: '<i>Яблочный сок</i>',
        dis: 'Сок из свежевыжатых яблок.',
        mas: '200 миллилитров',
        cal: '47',
        bel: '0.1',
        zir: '0.1',
        ygl: '11.4'
    },
    {
        h1: '<i>Черный чай</i>',
        dis: 'Традиционный горячий черный чай.',
        mas: '200 миллилитров',
        cal: '1',
        bel: '0',
        zir: '0',
        ygl: '0.2'
    },
    {
        h1: '<i>Зеленый чай</i>',
        dis: 'Традиционный горячий зеленый чай.',
        mas: '200 миллилитров',
        cal: '1',
        bel: '0',
        zir: '0',
        ygl: '0.2'
    },
    {
        h1: '<i>Кетчуп</i>',
        dis: 'Добавьте в любимые закуски приятный аромат, остроту и восхитительный нежный вкус соуса. Это то, без чего не обойтись!',
        mas: '25 грамм',
        cal: '87.4',
        bel: '3',
        zir: '0',
        ygl: '18'
    },
    {
        h1: '<i>Кисло-Сладкий соус</i>',
        dis: 'Добавьте в любимые закуски приятный аромат, остроту и восхитительный нежный вкус соуса. Это то, без чего не обойтись!',
        mas: '25 грамм',
        cal: '180',
        bel: '0.5',
        zir: '0.1',
        ygl: '44'
    },
    {
        h1: '<i>Сырный соус</i>',
        dis: 'Добавьте в любимые закуски приятный аромат, остроту и восхитительный нежный вкус соуса. Это то, без чего не обойтись!',
        mas: '25 грамм',
        cal: '195',
        bel: '10.3',
        zir: '14.9',
        ygl: '5.4'
    }
];

// let modalController = ({number}) => {
//     modal.style.cssText = `
//         display: flex;
//         visibility: hidden;
//         opacity: 0;
//         transition: opacity 300ms ease-in-out;
//     `;

    
    

//     let closeModal = event => {
//         let target = event.target;

//         if (target === modal || target.closest('.modalClose')) {
//             modal.style.opacity = 0;

//             setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
//         }
//     };

//     let openModal = ({number}) => {
//         modal.style.visibility = 'visible';
//         modal.style.opacity = 1;

//         h.innerHTML = '';
//         h.innerHTML = modalForm[number].h1;
//         discription.innerHTML = '';
//         discription.innerHTML = modalForm[number].dis;
//         massa.innerHTML = '';
//         massa.innerHTML = modalForm[number].mas;
//         callor.innerHTML = '';
//         callor.innerHTML = modalForm[number].cal;
//         belok.innerHTML = '';
//         belok.innerHTML = modalForm[number].bel;
//         ziri.innerHTML = '';
//         ziri.innerHTML = modalForm[number].zir;
//         yglevod.innerHTML = '';
//         yglevod.innerHTML = modalForm[number].ygl;
//     };

//     btnCB.addEventListener('click', openModal);
//     btnDCB.addEventListener('click', openModal);
//     btnW.addEventListener('click', openModal);
//     btnDW.addEventListener('click', openModal);
//     btnP.addEventListener('click', openModal);
//     btnN.addEventListener('click', openModal);
//     btnS.addEventListener('click', openModal);
//     btnA.addEventListener('click', openModal);
//     btnC.addEventListener('click', openModal);
//     btnChe.addEventListener('click', openModal);
//     btnRoz.addEventListener('click', openModal);
//     btnChess.addEventListener('click', openModal);
//     btnOrgF.addEventListener('click', openModal);
//     btnCoke.addEventListener('click', openModal);
//     btnCap.addEventListener('click', openModal);
//     btnEss.addEventListener('click', openModal);
//     btnAppF.addEventListener('click', openModal);
//     btnTea.addEventListener('click', openModal);
//     btnGrTea.addEventListener('click', openModal);
//     btnCetchup.addEventListener('click', openModal);
//     btnKislo.addEventListener('click', openModal);
//     btnChezz.addEventListener('click', openModal);

//     modal.addEventListener('click', closeModal);
// };

//btnCB.addEventListener('click', modalController({number: 0}));

function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
        let tableKBZY = document.querySelector('.tableKBZY');
        tableKBZY.innerHTML = `
            <tr id="kbzy">
                <td id="kbzy"><b>Калории</b></td>
                <td id="kbzy"><b>Белки</b></td>
            <tr id="kbzy">
                <td id="kbzy" class="callor">180</td>
                <td id="kbzy" class="belok">10</td>
            </tr>
            <tr id="kbzy">
                <td id="kbzy"><b>Жиры</b></td>
                <td id="kbzy"><b>Углеводы</b></td>
            </tr>
            <tr id="kbzy">
                <td id="kbzy" class="ziri">7</td>
                <td id="kbzy" class="ylevod">20</td>
            </tr>
        `;
    } 
}
  
var x = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)


btnCB.addEventListener('click', ({number=0}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});

btnDCB.addEventListener('click', ({number=1}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnW.addEventListener('click', ({number=2}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnDW.addEventListener('click', ({number=3}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnP.addEventListener('click', ({number=4}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnN.addEventListener('click', ({number=5}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnS.addEventListener('click', ({number=6}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnA.addEventListener('click', ({number=7}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnC.addEventListener('click', ({number=8}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnChe.addEventListener('click', ({number=9}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnRoz.addEventListener('click', ({number=10}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnChess.addEventListener('click', ({number=11}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnOrgF.addEventListener('click', ({number=12}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnCoke.addEventListener('click', ({number=13}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnCap.addEventListener('click', ({number=14}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnEss.addEventListener('click', ({number=15}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnAppF.addEventListener('click', ({number=16}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnTea.addEventListener('click', ({number=17}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnGrTea.addEventListener('click', ({number=18}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnCetchup.addEventListener('click', ({number=19}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnKislo.addEventListener('click', ({number=20}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});
btnChezz.addEventListener('click', ({number=21}) => {
    modal.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `
    
    let closeModal = event => {
        let target = event.target;

        if (target === modal || target.closest('.modalClose')) {
            modal.style.opacity = 0;

            setTimeout(() => {modal.style.visibility = 'hidden';}, 300);
        }
    };

    modal.style.visibility = 'visible';
    modal.style.opacity = 1;

    h.innerHTML = '';
    h.innerHTML = modalForm[number].h1;
    discription.innerHTML = '';
    discription.innerHTML = modalForm[number].dis;
    massa.innerHTML = '';
    massa.innerHTML = modalForm[number].mas;
    callor.innerHTML = '';
    callor.innerHTML = modalForm[number].cal;
    belok.innerHTML = '';
    belok.innerHTML = modalForm[number].bel;
    ziri.innerHTML = '';
    ziri.innerHTML = modalForm[number].zir;
    yglevod.innerHTML = '';
    yglevod.innerHTML = modalForm[number].ygl;

    modal.addEventListener('click', closeModal);
});