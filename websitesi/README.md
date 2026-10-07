# What Should I Eat?

Rastgele yemek seçen küçük ve duyarlı bir React uygulaması. Kullanıcılar kategori seçebilir, açık ve koyu tema arasında geçiş yapabilir, favorilerini kaydedebilir ve son beş seçimlerini görebilir. Tema tercihi, favoriler ve geçmiş tarayıcının `localStorage` alanında saklandığı için arka uç gerekmez.

## Kullanılan teknolojiler

- React
- Vite
- Sade CSS
- Tarayıcı `localStorage` alanı

## Yerel ortamda çalıştırma

Gereksinimler: Node.js 18 veya üzeri ve npm.

```bash
cd websitesi
npm install
npm run dev
```

Vite yerel bir adres gösterecektir; bu adres genellikle `http://localhost:5173` olur.

## Üretim derlemesi oluşturma

```bash
npm run build
```

İyileştirilmiş üretim dosyaları `dist` klasöründe oluşturulur. Derlemeyi yerel ortamda önizlemek için:

```bash
npm run preview
```

## Vercel'e yükleme

### Seçenek 1: Vercel paneli

1. Projeyi GitHub, GitLab veya Bitbucket deposuna gönderin.
2. [vercel.com](https://vercel.com) üzerinden oturum açıp **Add New → Project** seçeneğine basın.
3. Depoyu içe aktarın.
4. Uygulama daha büyük bir deponun içindeyse **Root Directory** alanını `websitesi` olarak ayarlayın.
5. Vercel'in **Vite** seçeneğini algıladığını doğrulayın ve şu ayarları kullanın:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Deploy** düğmesine basın.

Ortam değişkeni gerekmez.

### Seçenek 2: Vercel komut satırı

```bash
npm install -g vercel
cd websitesi
vercel
```

Ekrandaki adımları izleyin. Üretim ortamına yüklemek için:

```bash
vercel --prod
```

## Proje yapısı

```text
src/
  components/
    CategorySelector.jsx
    FoodResult.jsx
    Favorites.jsx
    RecentPicks.jsx
    ThemeToggle.jsx
  data/
    foods.js
  App.jsx
  main.jsx
  styles.css
```

Yemek listesi `src/data/foods.js` dosyasında tutulur; böylece sınıfta anlatmak ve yeni yemekler eklemek kolaydır.
