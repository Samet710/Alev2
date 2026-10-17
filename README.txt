ALEV SERISI — GLOW UP V17

Bu sürüm alev ve tam ekran kutlama efektlerini önceden hazırlanmış, şeffaf animasyonlu WebP dosyalarından oynatır. Sesler de WAV dosyalarıdır; cihazın her karede alevi veya parçacıkları yeniden üretmesi gerekmez. Arka planın tüm ekrana yayılan ambiyansı hafif CSS gradyanları ve GPU dostu opacity/transform hareketleriyle sağlanır.

İLK AÇILIŞTA SAYAÇ 0
Bu sürüm yeni bir kayıt anahtarı kullanır. İlk açılışta sayaç 0 görünür; ilk düğme dokunuşu 1. günü başlatır. Önceki sürümün kayıtları silinmez ama bu sürüm onları okumaz.

GITHUB PAGES'E YÜKLEME (TELEFONDAN)
1. ZIP dosyasını indirip telefonun Dosyalar uygulamasında Çıkar/Ayıkla.
2. Çıkan klasördeki TÜM dosyaları birlikte GitHub deposunun ana dizinine yükle. Bu paket bilerek düz dizin yapısındadır; dosyaları başka bir klasöre taşıma.
3. Settings > Pages > Deploy from a branch > main > /(root) seçili olsun.
4. Sayfayı aç. Eski sürüm görünürse sayfayı yenile; servis çalışanı v17'ye yükselir ve eski Alev Serisi önbelleklerini temizler.

ÖNEMLİ
- Yalnızca index.html yüklemek yetmez. Tüm .webp ve .wav dosyaları, ikonlar, manifest.webmanifest ve sw.js aynı dizinde bulunmalıdır.
- Günler telefonun yerel tarihine göre kaydedilir. Bir takvim günü kaçırılırsa sonraki açılışta ekran kararır; “Alevi yeniden yak” yeni seriyi 1. günden başlatır.
- Sesler ilk kullanıcı dokunuşundan sonra oynatılır. Telefon sessizdeyse veya tarayıcı sesi engelliyorsa duyulmayabilir.
- Ses düğmesi efektleri açıp kapatır.
- Pinch-zoom ve viewport boyutu değişirken animasyon duraklatılmaz. Yalnızca uygulama gerçekten arka plana alındığında güç tasarrufu için alev statik poster görseline geçer.
- Seri renk değişimleri 5, 15, 30, 50, 75, 105, 140, 180 ve 225. günlerdedir. Boyut her renk aşamasında yeniden küçük başlar ve 245. günde son boyuta ulaşır.
