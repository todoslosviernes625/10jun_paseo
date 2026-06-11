const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",// BASICO
  "/style.css",
  "/app.js",
  

  "/ini_mzz.html", // OTROS
  "/ini_edif.html",
  "/ini_pba.html",  
  "/ini_pbx.html",// actualizacion (10juni)

  "/images/sem/1x1.gif",
  
  // IMAGENES app 214
  "/images/app/3D2A705_vln.png  ",  "/images/app/54D75110_ngu.jpg  ",  "/images/app/614FDFD69_xxx.png  ",
  "/images/app/A54D75113.jpg  ",  "/images/app/ADE07092.png  ",  "/images/app/ADE07095.jpg  ",
  "/images/app/ADE07096_valencia 001.png  ",  "/images/app/ADE07096_valencia 002.png  ",  "/images/app/ADE07096_valencia 003.png  ",
  "/images/app/coffee110a.svg  ",  "/images/app/coffee110b.svg  ",  "/images/app/coffee110c.svg  ",
  "/images/app/coffee110d.svg  ",  "/images/app/coffee110e.svg  ",  "/images/app/coffee110f.svg  ",
  "/images/app/coffee120a.svg  ",  "/images/app/coffee120b.svg  ",  "/images/app/coffee120c.svg  ",
  "/images/app/coffee120d.svg  ",  "/images/app/coffee120e.svg  ",  "/images/app/coffee120f.svg  ",
  "/images/app/coffee140a.svg  ",  "/images/app/coffee140b.svg  ",  "/images/app/coffee140c.svg  ",
  "/images/app/coffee140d.svg  ",  "/images/app/coffee140e.svg  ",  "/images/app/coffee140f.svg  ",
  "/images/app/coffee150a.svg  ",  "/images/app/coffee150b.svg  ",  "/images/app/coffee150c.svg  ",
  "/images/app/coffee150d.svg  ",  "/images/app/coffee150e.svg  ",  "/images/app/coffee150f.svg  ",
  "/images/app/coffee160a.svg  ",  "/images/app/coffee160b.svg  ",  "/images/app/coffee160c.svg  ",
  "/images/app/coffee160d.svg  ",  "/images/app/coffee160e.svg  ",  "/images/app/coffee160f.svg  ",
  "/images/app/coffee170a.svg  ",  "/images/app/coffee170b.svg  ",  "/images/app/coffee170c.svg  ",
  "/images/app/coffee170d.svg  ",  "/images/app/coffee170e.svg  ",  "/images/app/coffee170f.svg  ",
  "/images/app/coffee180a.svg  ",  "/images/app/coffee180b.svg  ",  "/images/app/coffee180c.svg  ",
  "/images/app/coffee180d.svg  ",  "/images/app/coffee180e.svg  ",  "/images/app/coffee180f.svg  ",
  "/images/app/coffee190a.svg  ",  "/images/app/coffee190b.svg  ",  "/images/app/coffee190c.svg  ",
  "/images/app/coffee190d.svg  ",  "/images/app/coffee190e.svg  ",  "/images/app/coffee190f.svg  ",
  "/images/app/coffee210a.svg  ",  "/images/app/coffee210b.svg  ",  "/images/app/coffee210c.svg  ",
  "/images/app/coffee210d.svg  ",  "/images/app/coffee210e.svg  ",  "/images/app/coffee210f.svg  ",
  "/images/app/coffee220a.svg  ",  "/images/app/coffee220b.svg  ",  "/images/app/coffee220c.svg  ",
  "/images/app/coffee220d.svg  ",  "/images/app/coffee220e.svg  ",  "/images/app/coffee220f.svg  ",
  "/images/app/coffee230a.svg  ",  "/images/app/coffee230b.svg  ",  "/images/app/coffee230c.svg  ",
  "/images/app/coffee230d.svg  ",  "/images/app/coffee230e.svg  ",  "/images/app/coffee230f.svg  ",
  "/images/app/coffee240a.svg  ",  "/images/app/coffee240b.svg  ",  "/images/app/coffee240c.svg  ",
  "/images/app/coffee240d.svg  ",  "/images/app/coffee240e.svg  ",  "/images/app/coffee240f.svg  ",
  "/images/app/coffee250a.svg  ",  "/images/app/coffee250b.svg  ",  "/images/app/coffee250c.svg  ",
  "/images/app/coffee250d.svg  ",  "/images/app/coffee250e.svg  ",  "/images/app/coffee250f.svg  ",
  "/images/app/coffee260a.svg  ",  "/images/app/coffee260b.svg  ",  "/images/app/coffee260c.svg  ",
  "/images/app/coffee260d.svg  ",  "/images/app/coffee260e.svg  ",  "/images/app/coffee260f.svg  ",
  "/images/app/coffee270a.svg  ",  "/images/app/coffee270b.svg  ",  "/images/app/coffee270c.svg  ",
  "/images/app/coffee270d.svg  ",  "/images/app/coffee270e.svg  ",  "/images/app/coffee270f.svg  ",
  "/images/app/coffee280a.svg  ",  "/images/app/coffee280b.svg  ",  "/images/app/coffee280c.svg  ",
  "/images/app/coffee280d.svg  ",  "/images/app/coffee280e.svg  ",  "/images/app/coffee280f.svg  ",
  "/images/app/coffee290a.svg  ",  "/images/app/coffee290b.svg  ",  "/images/app/coffee290c.svg  ",
  "/images/app/coffee290d.svg  ",  "/images/app/coffee290e.svg  ",  "/images/app/coffee290f.svg  ",
  "/images/app/coffee310a.svg  ",  "/images/app/coffee310b.svg  ",  "/images/app/coffee310c.svg  ",
  "/images/app/coffee310d.svg  ",  "/images/app/coffee310e.svg  ",  "/images/app/coffee310f.svg  ",
  "/images/app/coffee320a.gif  ",  "/images/app/coffee320b.svg  ",  "/images/app/coffee320c.gif  ",
  "/images/app/coffee320d.svg  ",  "/images/app/coffee320e.gif  ",  "/images/app/coffee320f.svg  ",
  "/images/app/coffee330a.svg  ",  "/images/app/coffee330b.svg  ",  "/images/app/coffee330c.svg  ",
  "/images/app/coffee330d.svg  ",  "/images/app/coffee330e.svg  ",  "/images/app/coffee330f.svg  ",
  "/images/app/coffee340a.svg  ",  "/images/app/coffee340b.svg  ",  "/images/app/coffee340c.svg  ",
  "/images/app/coffee340d.svg  ",  "/images/app/coffee340e.svg  ",  "/images/app/coffee340f.svg  ",
  "/images/app/coffee350a.svg  ",  "/images/app/coffee350b.svg  ",  "/images/app/coffee350c.svg  ",
  "/images/app/coffee350d.svg  ",  "/images/app/coffee350e.svg  ",  "/images/app/coffee350f.svg  ",
  "/images/app/coffee360a.svg  ",  "/images/app/coffee360b.svg  ",  "/images/app/coffee360c.svg  ",
  "/images/app/coffee360d.svg  ",  "/images/app/coffee360e.svg  ",  "/images/app/coffee360f.svg  ",
  "/images/app/coffee370a.svg  ",  "/images/app/coffee370b.svg  ",  "/images/app/coffee370c.svg  ",
  "/images/app/coffee370d.svg  ",  "/images/app/coffee370e.svg  ",  "/images/app/coffee370f.svg  ",
  "/images/app/coffee380a.svg  ",  "/images/app/coffee380b.svg  ",  "/images/app/coffee380c.svg  ",
  "/images/app/coffee380d.svg  ",  "/images/app/coffee380e.svg  ",  "/images/app/coffee380f.svg  ",
  "/images/app/coffee390a.svg  ",  "/images/app/coffee390b.svg  ",  "/images/app/coffee390c.svg  ",
  "/images/app/coffee390d.svg  ",  "/images/app/coffee390e.svg  ",  "/images/app/coffee390f.svg  ",
  "/images/app/coffee410a.svg  ",  "/images/app/coffee410b.svg  ",  "/images/app/coffee410c.svg  ",
  "/images/app/coffee410d.svg  ",  "/images/app/coffee410e.svg  ",  "/images/app/coffee410f.svg  ",
  "/images/app/coffee420a.svg  ",  "/images/app/coffee420b.svg  ",  "/images/app/coffee420c.svg  ",
  "/images/app/coffee420d.svg  ",  "/images/app/coffee420e.svg  ",  "/images/app/coffee420f.svg  ",
  "/images/app/coffee430a.svg  ",  "/images/app/coffee430b.svg  ",  "/images/app/coffee430c.svg  ",
  "/images/app/coffee430d.svg  ",  "/images/app/coffee430e.svg  ",  "/images/app/coffee430f.svg  ",
  "/images/app/coffee440a.svg  ",  "/images/app/coffee440b.svg  ",  "/images/app/coffee440c.svg  ",
  "/images/app/coffee440d.svg  ",  "/images/app/coffee440e.svg  ",  "/images/app/coffee440f.svg  ",
  "/images/app/coffee450a.svg  ",  "/images/app/coffee450b.svg  ",  "/images/app/coffee450c.svg  ",
  "/images/app/coffee450d.svg  ",  "/images/app/coffee450e.svg  ",  "/images/app/coffee450f.svg  ",
  "/images/app/coffee460a.svg  ",  "/images/app/coffee460b.svg  ",  "/images/app/coffee460c.svg  ",
  "/images/app/coffee460d.svg  ",  "/images/app/coffee460e.svg  ",  "/images/app/coffee460f.svg  ",
  "/images/app/coffee490a.svg  ",  "/images/app/coffee490b.svg  ",  "/images/app/coffee490c.svg  ",
  "/images/app/coffee490d.svg  ",  "/images/app/coffee490e.svg  ",  "/images/app/coffee490f.svg  ",
  "/images/app/coffee5430a.svg  ",  "/images/app/coffee5490b.svg  ",  "/images/app/coffee5654c.svg  ",
  "/images/app/coffee_510a.svg  ",  "/images/app/coffee_510b.svg  ",  "/images/app/coffee_510c.svg  ",



  // IMAGENES bg 14 (no hace falta)
  "/images/bg/bg_100.svg  ",  "/images/bg/bg_200.svg  ",  "/images/bg/bg_300.svg  ",
  "/images/bg/bg_aereo.svg  ",  "/images/bg/bg_paseo.svg  ",  "/images/bg/bg_paseo_facebook.svg  ",
  "/images/bg/bgk500.svg  ",  "/images/bg/bgk500_twitter.svg  ",  "/images/bg/bgk900_google.svg  ",
  "/images/bg/bgk900.svg  ",  "/images/bg/rrss_1.svg  ",  "/images/bg/rrss_2.svg  ",
  "/images/bg/rrss_3_.svg  ",  "/images/bg/  ",

  
  
  // IMAGENES icons 10 (no hace falta)
  "/images/icons/icon-128x128.svg  ",  "/images/icons/icon-144x144.svg  ",  "/images/icons/icon-152x152.svg  ",
  "/images/icons/icon-192x192.svg  ",  "/images/icons/icon-32x32.svg  ",  "/images/icons/icon-384x384.svg  ",
  "/images/icons/icon-512x512.svg  ",  "/images/icons/icon-72x72.svg  ",  "/images/icons/icon-96x96.svg  ",
  "/images/icons/maskable_icon.svg  ",


  
  // IMAGENES img 43 
  "/images/img/aeo_aereo.svg  ",  "/images/img/aeo_aplicaciones.svg  ",  "/images/img/aeo_app.svg  ",
  "/images/img/aeo_bros.svg  ",  "/images/img/aeo_burguers.svg  ",  "/images/img/aeo_cuatro.svg  ",
  "/images/img/aeo_foodt.svg  ",  "/images/img/aeo_gaby.svg  ",  "/images/img/aeo_nagua.svg  ",
  "/images/img/aeo_omni.svg  ",  "/images/img/aeo_oportuno.svg  ",  "/images/img/aeo_quinto.svg  ",
  "/images/img/btn1.svg  ",  "/images/img/btn2.svg  ",  "/images/img/btn3.svg  ",
  "/images/img/btn4.svg  ",  "/images/img/btn5.svg  ",  "/images/img/btn6.svg  ",
  "/images/img/btn7.svg  ",  "/images/img/btn11.png  ",  "/images/img/btn12.png  ",
  "/images/img/btn_.svg  ",  "/images/img/btn_cuatro.svg  ",  "/images/img/btn_home.svg  ",
  "/images/img/btn_home2.svg  ",  "/images/img/btn_intall.svg  ",  "/images/img/btn_menu.svg  ",
  "/images/img/btn_menu2.svg  ",  "/images/img/btn_primero.svg  ",  "/images/img/btn_quinto.svg  ",
  "/images/img/logo.png  ",  "/images/img/logo1.png  ",  "/images/img/logo2.png  ",
  "/images/img/nave_back.svg  ",  "/images/img/nave_mas.svg  ",  "/images/img/nave_next.svg  ",
  "/images/img/store_app.png  ",  "/images/img/store_app1.png  ",  "/images/img/store_app1a.png  ",
  "/images/img/store_app1aa.png  ",  "/images/img/store_app2.png  ",  "/images/img/store_app_2.png  ",

  
  // NEW AEREO 44
  "/images/new/aereo/coffee1.svg  ",  "/images/new/aereo/coffee11.svg  ",  "/images/new/aereo/coffee12.svg  ",
  "/images/new/aereo/coffee13.svg  ",  "/images/new/aereo/coffee14.svg  ",  "/images/new/aereo/coffee15.svg  ",
  "/images/new/aereo/coffee16.svg  ",  "/images/new/aereo/coffee17.svg  ",  "/images/new/aereo/coffee18.svg  ",
  "/images/new/aereo/coffee19.svg  ",  "/images/new/aereo/coffee2.svg  ",  "/images/new/aereo/coffee21.gif  ",
  "/images/new/aereo/coffee22.gif  ",  "/images/new/aereo/coffee220a.svg  ",  "/images/new/aereo/coffee23.gif  ",
  "/images/new/aereo/coffee24.svg  ",  "/images/new/aereo/coffee25.svg  ",  "/images/new/aereo/coffee26.svg  ",
  "/images/new/aereo/coffee27.svg  ",  "/images/new/aereo/coffee28.svg  ",  "/images/new/aereo/coffee29.svg  ",
  "/images/new/aereo/coffee3.svg  ",  "/images/new/aereo/coffee31.svg  ",  "/images/new/aereo/coffee32.svg  ",
  "/images/new/aereo/coffee33.svg  ",  "/images/new/aereo/coffee34.svg  ",  "/images/new/aereo/coffee35.svg  ",
  "/images/new/aereo/coffee36.svg  ",  "/images/new/aereo/coffee37.svg  ",  "/images/new/aereo/coffee4.svg  ",
  "/images/new/aereo/coffee5.svg  ",  "/images/new/aereo/coffee57.svg  ",  "/images/new/aereo/coffee58.svg  ",
  "/images/new/aereo/coffee59.svg  ",  "/images/new/aereo/coffee6.svg  ",  "/images/new/aereo/coffee7.svg  ",
  "/images/new/aereo/coffee8.svg  ",  "/images/new/aereo/coffee9.svg  ",
 

  
  // NEW BOTON 88

  "/images/new/boton/aqui_1er.svg  ",  "/images/new/boton/aqui_1er1_omni.svg  ",  "/images/new/boton/aqui_1er2_bros.svg  ",
  "/images/new/boton/aqui_1er3_nagua.svg  ",  "/images/new/boton/aqui_1er4_opo.svg  ",  "/images/new/boton/aqui_1er5_burg.svg  ",
  "/images/new/boton/aqui_1er6_gaby.svg  ",  "/images/new/boton/aqui_1er7_4to.svg  ",  "/images/new/boton/aqui_1er8_aeo_5.svg  ",
  "/images/new/boton/aqui_2do.svg  ",  "/images/new/boton/aqui_2do1_omni.svg  ",  "/images/new/boton/aqui_2do2_bros.svg  ",
  "/images/new/boton/aqui_2do3_nagua.svg  ",  "/images/new/boton/aqui_2do3_opo.svg  ",  "/images/new/boton/aqui_2do5_burg.svg  ",
  "/images/new/boton/aqui_2do6_gaby.svg  ",  "/images/new/boton/aqui_2do7_4to.svg  ",  "/images/new/boton/aqui_2do8_aereo.svg  ",
  "/images/new/boton/aqui_3ro.svg  ",  "/images/new/boton/aqui_3ro1_omni.svg  ",  "/images/new/boton/aqui_3ro2_bros.svg  ",
  "/images/new/boton/aqui_3ro3_nagua.svg  ",  "/images/new/boton/aqui_3ro4_opo.svg  ",  "/images/new/boton/aqui_3ro5_burg.svg  ",
  "/images/new/boton/aqui_3ro6_gaby.svg  ",  "/images/new/boton/aqui_3ro7_4to.svg  ",  "/images/new/boton/aqui_3ro8_aereo_3.svg  ",
  "/images/new/boton/aqui_alc.svg  ",  "/images/new/boton/aqui_alc1_omni.svg  ",  "/images/new/boton/aqui_alc2_bros.svg  ",
  "/images/new/boton/aqui_alc3_nagua.svg  ",  "/images/new/boton/aqui_alc4_opo.svg  ",  "/images/new/boton/aqui_alc5_burg.svg  ",
  "/images/new/boton/aqui_alc6_gaby.svg  ",  "/images/new/boton/aqui_alc7_4to.svg  ",  "/images/new/boton/aqui_alc8_aereo.svg  ",
  "/images/new/boton/aqui_anexo.svg  ",  "/images/new/boton/aqui_anexo1_omni.svg  ",  "/images/new/boton/aqui_anexo2_bros.svg  ",
  "/images/new/boton/aqui_anexo3_nagua.svg  ",  "/images/new/boton/aqui_anexo4_opo.svg  ",  "/images/new/boton/aqui_anexo5_burg.svg  ",
  "/images/new/boton/aqui_anexo6_gaby.svg  ",  "/images/new/boton/aqui_anexo7_4to.svg  ",  "/images/new/boton/aqui_anexo8_aereo.svg  ",
  "/images/new/boton/aqui_mzz.svg  ",  "/images/new/boton/aqui_mzz1_omni.svg  ",  "/images/new/boton/aqui_mzz2_bros.svg  ",
  "/images/new/boton/aqui_mzz3_nagua.svg  ",  "/images/new/boton/aqui_mzz4_opo.svg  ",  "/images/new/boton/aqui_mzz5_burg.svg  ",
  "/images/new/boton/aqui_mzz6_gaby.svg  ",  "/images/new/boton/aqui_mzz7_4to.svg  ",  "/images/new/boton/aqui_mzz8_aereo.svg  ",
  "/images/new/boton/aqui_pba.svg  ",  "/images/new/boton/aqui_pba1_omni.svg  ",  "/images/new/boton/aqui_pba2_bros.svg  ",
  "/images/new/boton/aqui_pba3_nagua.svg  ",  "/images/new/boton/aqui_pba4_opo.svg  ",  "/images/new/boton/aqui_pba5_burg.svg  ",
  "/images/new/boton/aqui_pba6_gaby.svg  ",  "/images/new/boton/aqui_pba7_4to.svg  ",  "/images/new/boton/aqui_pba8_aereo.svg  ",
  "/images/new/boton/aqui_pbx.svg  ",  "/images/new/boton/aqui_pbx1_omni.svg  ",  "/images/new/boton/aqui_pbx2_bros.svg  ",
  "/images/new/boton/aqui_pbx3_nagua.svg  ",  "/images/new/boton/aqui_pbx4_opo.svg  ",  "/images/new/boton/aqui_pbx5_burg.svg  ",
  "/images/new/boton/aqui_pbx6_gaby.svg  ",  "/images/new/boton/aqui_pbx7_4to.svg  ",  "/images/new/boton/aqui_pbx8_aereo.svg  ",
  "/images/new/boton/nivel_aereo.svg  ",  "/images/new/boton/nivel_aplicaciones.svg  ",  "/images/new/boton/nivel_bros.svg  ",
  "/images/new/boton/nivel_burguers.svg  ",  "/images/new/boton/nivel_cuatro.svg  ",  "/images/new/boton/nivel_food.svg  ",
  "/images/new/boton/nivel_gaby.svg  ",  "/images/new/boton/nivel_nagua.svg  ",  "/images/new/boton/nivel_omni.svg  ",
  "/images/new/boton/nivel_oportuno.svg  ",  "/images/new/boton/nivel_primero.svg  ",  "/images/new/boton/nivel_quinto.svg  ",
  "/images/new/boton/nivel_segundo.svg  ",  "/images/new/boton/nivel_tours.svg  ",  "/images/new/boton/nivel_turqueza.svg  ",

 
// NEW LOCAL 177
  "/images/new/local/barra_1ermzz.svg  ",  "/images/new/local/barra_2do1er.svg  ",  "/images/new/local/barra_3er2do.svg  ",
  "/images/new/local/barra__guia1.svg  ",  "/images/new/local/barra__guia2.svg  ",  "/images/new/local/barra__guia3.svg  ",
  "/images/new/local/barra_alc3er.svg  ",  "/images/new/local/barra_guia.svg  ",  "/images/new/local/barra_mzzpba.svg  ",
  "/images/new/local/barra_pbaaxx3.svg  ",  "/images/new/local/barra_pbapbx.svg  ",  "/images/new/local/barra_x1er2do.svg  ",
  "/images/new/local/barra_x2do3ro.svg  ",  "/images/new/local/barra_x3eralc.svg  ",  "/images/new/local/barra_xaxx31er.svg  ",
  "/images/new/local/btn_locales.svg  ",  "/images/new/local/btn_locales1.svg  ",  "/images/new/local/btn_locales3.svg  ",
  "/images/new/local/btn_naranja.svg  ",  "/images/new/local/btn_naranja_1.svg  ",  "/images/new/local/btn_naranja_2.svg  ",
  "/images/new/local/btn_pasillo.svg  ",  "/images/new/local/btn_pasillo1.svg  ",  "/images/new/local/btn_pasillo_.svg  ",
  "/images/new/local/globo1.svg  ",  "/images/new/local/globo2.svg  ",  "/images/new/local/globo3.svg  ",
  "/images/new/local/Pasillo_030ee1.svg  ",  "/images/new/local/pasillo_031p3_ofic_1.svg  ",  "/images/new/local/pasillo_032p3_ofic_2.svg  ",
  "/images/new/local/pasillo_033p3_ofic_3.svg  ",  "/images/new/local/pasillo_034p3_ofic_4.svg  ",  "/images/new/local/pasillo_035p3_ofic_5.svg  ",
  "/images/new/local/pasillo_036p3_ofic_6.svg  ",  "/images/new/local/pasillo_037p3_ofic_7.svg  ",  "/images/new/local/pasillo_037p3_ofic_88.svg  ",
  "/images/new/local/pasillo_038ee2.svg  ",  "/images/new/local/pasillo_039p3_ofic_1.svg  ",  "/images/new/local/pasillo_040p3_ofic_2.svg  ",
  "/images/new/local/pasillo_041p3_ofic_3.svg  ",  "/images/new/local/pasillo_042p3_ofic_4.svg  ",  "/images/new/local/pasillo_043p3_ofic_5.svg  ",
  "/images/new/local/pasillo_044p3_ofic_6.svg  ",  "/images/new/local/pasillo_044p3_ofic_7.svg  ",  "/images/new/local/pasillo_044p3_ofic_88.svg  ",
  "/images/new/local/pasillo_045ee3.svg  ",  "/images/new/local/pasillo_046p2_ofic_1.svg  ",  "/images/new/local/pasillo_047p2_ofic_2.svg  ",
  "/images/new/local/pasillo_048p2_ofic_3.svg  ",  "/images/new/local/pasillo_049p2_ofic_4.svg  ",  "/images/new/local/pasillo_050p2_ofic_5.svg  ",
  "/images/new/local/pasillo_051p2_ofic_6.svg  ",  "/images/new/local/pasillo_052p2_ofic_7.svg  ",  "/images/new/local/pasillo_052p2_ofic_88.svg  ",
  "/images/new/local/pasillo_053ee4.svg  ",  "/images/new/local/pasillo_054p2_ofic_1.svg  ",  "/images/new/local/pasillo_055p2_ofic_2.svg  ",
  "/images/new/local/pasillo_056p2_ofic_3.svg  ",  "/images/new/local/pasillo_057p2_ofic_4.svg  ",  "/images/new/local/pasillo_058p2_ofic_5.svg  ",
  "/images/new/local/pasillo_059p2_ofic_6.svg  ",  "/images/new/local/pasillo_059p2_ofic_7.svg  ",  "/images/new/local/pasillo_059p2_ofic_88.svg  ",
  "/images/new/local/pasillo_060ee5.svg  ",  "/images/new/local/pasillo_061p1_ofic_1.svg  ",  "/images/new/local/pasillo_062p1_ofic_2.svg  ",
  "/images/new/local/pasillo_063p1_ofic_3.svg  ",  "/images/new/local/pasillo_064p1_ofic_4.svg  ",  "/images/new/local/pasillo_065p1_ofic_5.svg  ",
  "/images/new/local/pasillo_066p1_ofic_6.svg  ",  "/images/new/local/pasillo_066p1_ofic_7.svg  ",  "/images/new/local/pasillo_067p1_ofic_88.svg  ",
  "/images/new/local/pasillo_068ee6.svg  ",  "/images/new/local/pasillo_069p1_ofic_1.svg  ",  "/images/new/local/pasillo_070p1_ofic_2.svg  ",
  "/images/new/local/pasillo_071p1_ofic_3.svg  ",  "/images/new/local/pasillo_072p1_ofic_4.svg  ",  "/images/new/local/pasillo_073p1_ofic_5.svg  ",
  "/images/new/local/pasillo_074p1_ofic_6.svg  ",  "/images/new/local/pasillo_074p1_ofic_7.svg  ",  "/images/new/local/pasillo_074p1_ofic_88.svg  ",
  "/images/new/local/pasillo_075mm1.svg  ",  "/images/new/local/pasillo_076mm1_local_1.svg  ",  "/images/new/local/pasillo_077mm1_local_2.svg  ",
  "/images/new/local/pasillo_078mm1_local_3.svg  ",  "/images/new/local/pasillo_079mm1_local_4.svg  ",  "/images/new/local/pasillo_080mm1_local_5.svg  ",
  "/images/new/local/pasillo_081mm1_local_6.svg  ",  "/images/new/local/pasillo_081mm1_local_7.svg  ",  "/images/new/local/pasillo_081mm1_local_88.svg  ",
  "/images/new/local/pasillo_082mm2.svg  ",  "/images/new/local/pasillo_083mm2_local_1.svg  ",  "/images/new/local/pasillo_084mm2_local_2.svg  ",
  "/images/new/local/pasillo_085mm2_local_3.svg  ",  "/images/new/local/pasillo_086mm2_local_4.svg  ",  "/images/new/local/pasillo_087mm2_local_5.svg  ",
  "/images/new/local/pasillo_088mm2_local_6.svg  ",  "/images/new/local/pasillo_088mm2_local_7.svg  ",  "/images/new/local/pasillo_088mm2_local_88.svg  ",
  "/images/new/local/pasillo_089mm3.svg  ",  "/images/new/local/pasillo_090mm3_local_1.svg  ",  "/images/new/local/pasillo_091mm3_local_2.svg  ",
  "/images/new/local/pasillo_092mm3_local_3.svg  ",  "/images/new/local/pasillo_093mm3_local_4.svg  ",  "/images/new/local/pasillo_094mm3_local_5.svg  ",
  "/images/new/local/pasillo_095mm3_local_6.svg  ",  "/images/new/local/pasillo_095mm3_local_7.svg  ",  "/images/new/local/pasillo_095mm3_local_88.svg  ",
  "/images/new/local/pasillo_096mm4.svg  ",  "/images/new/local/pasillo_097mm4_local_1.svg  ",  "/images/new/local/pasillo_098mm4_local_2.svg  ",
  "/images/new/local/pasillo_099mm4_local_3.svg  ",  "/images/new/local/pasillo_099mm4_local_4.svg  ",  "/images/new/local/pasillo_099mm4_local_88.svg  ",
  "/images/new/local/pasillo_100pp1.svg  ",  "/images/new/local/pasillo_101pp1_local_1.svg  ",  "/images/new/local/pasillo_102pp1_local_2.svg  ",
  "/images/new/local/pasillo_103pp1_local_3.svg  ",  "/images/new/local/pasillo_104pp1_local_4.svg  ",  "/images/new/local/pasillo_105pp1_local_5.svg  ",
  "/images/new/local/pasillo_106pp1_local_6.svg  ",  "/images/new/local/pasillo_106pp1_local_7.svg  ",  "/images/new/local/pasillo_106pp1_local_88.svg  ",
  "/images/new/local/pasillo_107pp2.svg  ",  "/images/new/local/pasillo_108pp2_local_1.svg  ",  "/images/new/local/pasillo_109pp2_local_2.svg  ",
  "/images/new/local/pasillo_200pp2_local_3.svg  ",  "/images/new/local/pasillo_201pp2_local_4.svg  ",  "/images/new/local/pasillo_202pp2_local_5.svg  ",
  "/images/new/local/pasillo_203pp2_local_6.svg  ",  "/images/new/local/pasillo_203pp2_local_7.svg  ",  "/images/new/local/pasillo_203pp2_local_88.svg  ",
  "/images/new/local/pasillo_204pp3.svg  ",  "/images/new/local/pasillo_205pp3_local_1.svg  ",  "/images/new/local/pasillo_206pp3_local_2.svg  ",
  "/images/new/local/pasillo_207pp3_local_3.svg  ",  "/images/new/local/pasillo_208pp3_local_4.svg  ",  "/images/new/local/pasillo_209pp3_local_5.svg  ",
  "/images/new/local/pasillo_300pp3_local_6.svg  ",  "/images/new/local/pasillo_300pp3_local_7.svg  ",  "/images/new/local/pasillo_300pp3_local_88.svg  ",
  "/images/new/local/pasillo_301pp4.svg  ",  "/images/new/local/pasillo_302pp4_local_1.svg  ",  "/images/new/local/pasillo_303pp4_local_2.svg  ",
  "/images/new/local/pasillo_304pp4_local_3.svg  ",  "/images/new/local/pasillo_304pp4_local_4.svg  ",  "/images/new/local/pasillo_304pp4_local_88.svg  ",
  "/images/new/local/pasillo_305px5.svg  ",  "/images/new/local/pasillo_306px5_local_1.svg  ",  "/images/new/local/pasillo_307px5_local_2.svg  ",
  "/images/new/local/pasillo_308px5_local_3.svg  ",  "/images/new/local/pasillo_309px5_local_4.svg  ",  "/images/new/local/pasillo_400px5_local_5.svg  ",
  "/images/new/local/pasillo_401px5_local_6.svg  ",  "/images/new/local/pasillo_401px5_local_7.svg  ",  "/images/new/local/pasillo_401px5_local_88.svg  ",
  "/images/new/local/pasillo_402px6.svg  ",  "/images/new/local/pasillo_403px6_local_1.svg  ",  "/images/new/local/pasillo_404px6_local_2.svg  ",
  "/images/new/local/pasillo_405px6_local_3.svg  ",  "/images/new/local/pasillo_406px6_local_4.svg  ",  "/images/new/local/pasillo_407px6_local_5.svg  ",
  "/images/new/local/pasillo_408px6_local_6.svg  ",  "/images/new/local/pasillo_408px6_local_7.svg  ",  "/images/new/local/pasillo_408px6_local_88.svg  ",
  "/images/new/local/pasillo_409ax1.svg  ",  "/images/new/local/pasillo_500ax2.svg  ",  "/images/new/local/pasillo_501ax3.svg  ",
  "/images/new/local/pasillo_502ax4.svg  ",  "/images/new/local/pasillo_503alc1.svg  ",  "/images/new/local/pasillo_503alc2.svg  ",
  "/images/new/local/pasillo_504alc3.svg  ",  "/images/new/local/pasillo_505alc4.svg  ",  "/images/new/local/pasillo_506alc5.svg  ",
  "/images/new/local/visor_pasillo.svg  ",  "/images/new/local/visor_pasillo2.svg  ",  "/images/new/local/visor_pasillo_.svg  ",
  "/images/new/local/visor_visor1.svg  ",  "/images/new/local/visor_xlocal3.svg  ",  "/images/new/local/visor_xlocales.svg  ",
  "/images/new/local/visor_z_pasillo_mzz.svg  ",  "/images/new/local/visor_z_pasillo_pba.svg  ",  "/images/new/local/visor_z_pasillol_pbx.svg  ",
  "/images/new/local/visor_z_piso_ofic_1.svg  ",  "/images/new/local/visor_z_piso_ofic_2.svg  ",  "/images/new/local/visor_z_piso_ofic_3.svg  ",
  "/images/new/local/wwapp_local_42.svg  ",  "/images/new/local/wwapp_local_43.svg  ",  "/images/new/local/wwwapp_local_41.svg  ",

  
   // NEW OMNI 25 
  "/images/new/omni/btn_naranja.svg  ",  "/images/new/omni/btn_naranja_1.svg  ",  "/images/new/omni/btn_naranja_2.svg  ",
  "/images/new/omni/btn_naranja_3.svg  ",  "/images/new/omni/btn_naranja_4.svg  ",  "/images/new/omni/btn_naranja_5.svg  ",
  "/images/new/omni/btn_naranja_6.svg  ",  "/images/new/omni/btn_naranja_xxcxx.svg  ",  "/images/new/omni/btn_naranja_xxxxx.svg  ",
  "/images/new/omni/semana_1.svg  ",  "/images/new/omni/semana_2.svg  ",  "/images/new/omni/semana_3.svg  ",
  "/images/new/omni/semana_4.svg  ",  "/images/new/omni/semana_5.svg  ",  "/images/new/omni/semana_6.svg  ",
  "/images/new/omni/semana_7.svg  ",  "/images/new/omni/semana_8.svg  ",  "/images/new/omni/semana_9.svg  ",
  "/images/new/omni/semana_10.svg  ",  "/images/new/omni/semana_11.svg  ",  "/images/new/omni/semana_12.svg  ",
 
  
  // NEW PASEO 13
  "/images/new/paseo/admin_ofic.svg  ",  "/images/new/paseo/alc_ofic_2_2.svg  ",  "/images/new/paseo/local_mzz.svg  ",
  "/images/new/paseo/local_pba.svg  ",  "/images/new/paseo/local_pbx.svg  ",  "/images/new/paseo/piso_ofic_1.svg  ",
  "/images/new/paseo/piso_ofic_2.svg  ",  "/images/new/paseo/piso_ofic_3.svg  ", 
  
  // NEW PRINCIPAL 34
  "/images/new/principal/_1_alcaldia.gif  ",  "/images/new/principal/_2_terce_piso.gif  ",  "/images/new/principal/_3_segundo_piso.gif  ",
  "/images/new/principal/_4_primer_piso.gif  ",  "/images/new/principal/_5_mezzanina.gif  ",  "/images/new/principal/_6_planta_baja.gif  ",
  "/images/new/principal/_7_planta_duplex.gif  ",  "/images/new/principal/_8_administracion.gif  ",  "/images/new/principal/_principal_.gif  ",
  "/images/new/principal/barra_alc.svg  ",  "/images/new/principal/barra_alc_1.svg  ",  "/images/new/principal/barra_alc_2.svg  ",
  "/images/new/principal/barra_alc_3.svg  ",  "/images/new/principal/barra_alc_4.svg  ",  "/images/new/principal/barra_pba.svg  ",
  "/images/new/principal/barra_pba_1.svg  ",  "/images/new/principal/barra_pba_2.svg  ",  "/images/new/principal/barra_pba_3.svg  ",
  "/images/new/principal/barra_pba_4.svg  ",  "/images/new/principal/btn_nivel.svg  ",  "/images/new/principal/btn_nivel1.svg  ",
  "/images/new/principal/menu_1er.svg  ",  "/images/new/principal/menu_2do.svg  ",  "/images/new/principal/menu_3er.svg  ",
  "/images/new/principal/menu_admin.svg  ",  "/images/new/principal/menu_alc.svg  ",  "/images/new/principal/menu_mzz.svg  ",
  "/images/new/principal/menu_pba.svg  ",  "/images/new/principal/menu_pbx.svg  ",  "/images/new/principal/menu_principal.svg  ",
  "/images/new/principal/menu_volver.svg  ",  
  
  "/images/new/principal/principal.gif  "	
  // FIN
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
