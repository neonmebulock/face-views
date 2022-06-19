const { Router } = require('express');
const express = require('express');
const router = express.Router();

var x = Math.floor(Math.random()*4);

tabla1 = {
    persona1: 'Denilson Moreno', time1: 'Hace 2 dias',  imagen1: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/273503305_2753846871587602_6120926281759627212_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Quv8h7tr0WkAX81bXKZ&tn=zcjBJcdekJrDGgf2&_nc_ht=scontent.fctg1-4.fna&oh=00_AT-A7vz9gN9RV49SiAwomHqJHDOXCh-kn5ICMNUEDCXKIg&oe=62AF8A8A',
    link1: 'https://www.facebook.com/denilsonlove',
    persona2: 'Albert Barraza', time2: 'Hace 5 dias', imagen2: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-6/280131161_1386648475169722_3689848850526848525_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Snm8BaOunIwAX_2u6xN&_nc_ht=scontent.fctg1-3.fna&oh=00_AT_0_WDijoV2tdyEsf-SI14vHZnHbmB5hpvj3QyKpVYOqQ&oe=62AFD442',
    link2: 'https://www.facebook.com/albertdavid.barrazadominguez.5',
    persona3: 'Belmer Stand', time3: 'Hace 1 semana', imagen3: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-1/280123194_3484370641790238_3930287525772228625_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0xhrloKD5SsAX8BJUD9&_nc_ht=scontent.fctg1-3.fna&oh=00_AT-C0HDrLMh71L_UvJPjBqnXgsT6JJKxS_-1GOl6wjp1nA&oe=62B1349C',
    link3: 'https://www.facebook.com/belmer.stand.1',
    persona4: 'Julio Mario', time4: 'Hace 1 mes', imagen4: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/274940546_4853988404686876_2705756270643886164_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6FcBVOclnlkAX9ImPCo&_nc_ht=scontent.fctg1-4.fna&oh=00_AT9sSrzPEtfAutf8GNmFY8AQwmJUmYCis2kdsW9dx32IWQ&oe=62B1108D',
    link4: 'https://www.facebook.com/juliomario.araujomora',
    persona5: 'Camila Pino', time5: 'Hace 40 dias', imagen5: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-1/287704168_394885765913805_3300026432174507239_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ID9abpdSWtoAX_YiUJ6&_nc_ht=scontent.fctg1-3.fna&oh=00_AT8TwVWm6iNusB4uldiWHFGPlkwdh-uFee1fGO4NSTSU0g&oe=62B09E4F',
    link5: 'https://www.facebook.com/profile.php?id=100061771540631'
}

tabla2 = {
    persona1: 'Sharoll Lizhet', time1: 'Hace 2 horas', imagen1: 'https://scontent.fbaq5-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZmBTQu88z58AX83ec8m&_nc_ht=scontent.fbaq5-1.fna&oh=00_AT-dTUesa_dwtzipBHj-WWbG8JTB8GrK1g0LnFdFQ9rChg&oe=62CE6C78', 
    link1: 'https://www.facebook.com/sharoll.liseth.3', 
    persona2: 'Daniela Romero', time2: 'Hace 5 horas', imagen2: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-1/271740253_1111387632962813_1409117479482162216_n.jpg?stp=c0.14.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RFbwEsVM--QAX9Ib_NT&_nc_ht=scontent.fctg1-3.fna&oh=00_AT_LBoTNxGpa--xnvJ8QYoyqoR1hq8ezfrqz3_TWKSOM4Q&oe=62AF6A14',
    link2: 'https://www.facebook.com/profile.php?id=100022747591847',
    persona3: 'Ara Andres', time3: 'Hace 2 dias', imagen3: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t1.6435-9/183464317_996511274490361_3546007979417443889_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sUd8Isl02KkAX_AAg47&tn=zcjBJcdekJrDGgf2&_nc_ht=scontent.fctg1-3.fna&oh=00_AT9MiFDyn2_TqnAm-RVU5QBBUOjcj3yo_5ckHQ_jsCbptw&oe=62CF7A50',
    link3: 'https://www.facebook.com/profile.php?id=100023944926153',
    persona4: 'Divinson Vega', time4: 'Hace 3 meses', imagen4: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/282300489_1397589067329725_7047715604331454301_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sIf4o8IVWEAAX_u4uld&_nc_ht=scontent.fctg1-4.fna&oh=00_AT_n_PZTTYqJtbnjxqe3vOlo2JasoMNcEGhpPPqu-JPDNg&oe=62B033DC',
    link4: 'https://www.facebook.com/divinson.mrvrga',
    persona5: 'Yuri Mar Elles', time5: 'Hace 1 año', imagen5: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-1/279020270_1429592237480403_787424519874993746_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZuTzheQfI04AX8R9a9r&_nc_ht=scontent.fctg1-4.fna&oh=00_AT_YGIYn4622yHi1q6XJVaC8rBTFNTDO9lUGXmUbdrVOzA&oe=62B103B9',
    link5: 'https://www.facebook.com/yurii.elles.18'
}

tabla3 = {
    persona1: 'Andrea Ramos', time1: 'Hace 7 horas', imagen1: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-6/287689032_3143761735937858_7319212754167186401_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pEUDcMAyomoAX8u_a58&_nc_ht=scontent.fctg1-3.fna&oh=00_AT-fnJgeEimXbnqXCrGUPrCJBdFiQLPyVsvHw3MOiiJTfQ&oe=62B09021',
    link1: 'https://www.facebook.com/andreakarolina.ramospacheco/',
    persona2: 'Brayan Morales', time2: 'Hace 16 horas', imagen2: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t1.6435-9/127228550_136428054940672_2479757681650925934_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lZKhnwLJOOQAX9s05YO&tn=zcjBJcdekJrDGgf2&_nc_ht=scontent.fctg1-3.fna&oh=00_AT-jM5lRtznuYYDVBieWHL6OrtYLnEqYYOTvGSNsKDerXA&oe=62CF1234',
    link2: 'https://www.facebook.com/profile.php?id=100057204346647',
    persona3: 'Padilla Ángulo Katherin', time3: 'Hace 7 dias', imagen3: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-6/285388117_131424382867698_3786334642291754222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UORD6VyR9tkAX9JbcFB&_nc_ht=scontent.fctg1-3.fna&oh=00_AT-fNdKfqVkcgc-T_Am6_fSnujRTHsdl1R9D0lNY-MlqjA&oe=62B15578',
    link3: 'https://www.facebook.com/profile.php?id=100080004108253',
    persona4: 'Alberto Alonso', time4: 'Hace 9 dias', imagen4: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t39.30808-6/283112096_2132291500272441_1614349280865793774_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pHRGA954eGEAX_WnG9O&_nc_ht=scontent.fctg1-3.fna&oh=00_AT_nxecjyWA3EHIg3IcA-Nf2kQQYOhJkwFv-HKIA5TjVIg&oe=62B08EA7',
    link4: 'https://www.facebook.com/albertomario.alonsogonzalez',
    persona5: 'Marlidys Pchco', time5: 'Hace 1 mes', imagen5: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/276142446_2577671572368455_4253058491737322292_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fyjpwq0sXkoAX8-k6p2&_nc_ht=scontent.fctg1-4.fna&oh=00_AT94vRflEmcpECLxeRfJfB9yi-dwOGcAtVovt0PdVRxs6A&oe=62B0F353',
    link5: 'https://www.facebook.com/marlidys.pachecoromero'
}

tabla4 = {
    persona1: 'Angelica Ruis', time1: 'Hace 1 dia', imagen1: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-1/279373283_1716100775448678_2522677463863646095_n.jpg?stp=c0.30.200.200a_dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=OCAGQcPsjqQAX-MQ9RB&_nc_ht=scontent.fctg1-4.fna&oh=00_AT9e3c-B8GwqB2wlUpOa4i1DARdkUT6nGkSrCmo3dPJ1jA&oe=62AE9B5F',
    link1: 'https://www.facebook.com/angelicamaria.torregroza',
    persona2: 'Gisela', time2: 'Hace 5 dias', imagen2: 'https://scontent.fbaq5-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZmBTQu88z58AX83ec8m&_nc_ht=scontent.fbaq5-1.fna&oh=00_AT-dTUesa_dwtzipBHj-WWbG8JTB8GrK1g0LnFdFQ9rChg&oe=62CE6C78',
    link2: 'https://www.facebook.com/mariacamila.pabonaguas', 
    persona3: 'Kevin Andres', time3: 'Hace 1 mes', imagen3: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/278345181_1427324501019239_226480324971283540_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7u2LnLJ6KvEAX-DwBmW&_nc_ht=scontent.fctg1-4.fna&oh=00_AT8Jck9gfDbTAL7BF5m0NyFA19Tq-dtaQI9r80lgYq1hOg&oe=62AFE8E6',
    link3: 'https://www.facebook.com/profile.php?id=100012251079920',
    persona4: 'Karoll', time4: 'Hace 3 meses', imagen4: 'https://scontent.fctg1-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=--8mMwMJRUgAX_i8vIg&_nc_ht=scontent.fctg1-3.fna&oh=00_AT-5eKX7SvtzwHqYQnohSsFtfl3lF8LN6FUXhY14fRwB5w&oe=62D260F8',
    link4: 'https://www.facebook.com/keinelin.mielesospino',
    persona5: 'Luis Aroldis', time5: 'Hace 7 meses', imagen5: 'https://scontent.fctg1-4.fna.fbcdn.net/v/t39.30808-6/281539388_373038108123672_8794194255555230168_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=75pCKzLmyEsAX8vo6uT&_nc_ht=scontent.fctg1-4.fna&oh=00_AT9le6ug1fgBPYl8CjpvbWyojUGjYDaDhDOUY4cusXuyCw&oe=62B15D46',
    link5:'https://www.facebook.com/luis.aroldis.7'
}


router.get('/', (req, res) => {
    res.render('index');
})


router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/views', (req, res) => {
    if(x == 1){
        res.render('resultado', tabla1);
    }else if(x == 2){
        res.render('resultado', tabla2);
    }else if(x == 3){
        res.render('resultado', tabla3);
    } else if(x == 0){
        res.render('resultado', tabla4);
    }
    // x = Math.floor(Math.random()*4);
})

router.get('/login#openModal', (req, res) => {
   console.log("jjjjjj")
})



module.exports = router;