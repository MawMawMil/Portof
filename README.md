# Portofolio Junior Web Developer

Ini adalah website portofolio pribadi yang dibuat menggunakan **React**, **Tailwind CSS**, dan berbagai library animasi modern. Proyek ini mengedepankan desain yang "hidup", interaktif, dan responsif.

## Fitur Utama ✨

- **Desain Modern (Dark Mode)**: Tampilan elegan dengan nuansa gelap dan aksen warna futuristik.
- **Hero Section Interaktif**: Efek ketik (Typewriter) pada teks dan background partikel yang bergerak mengikuti mouse.
- **Efek 3D Tilt**: Kartu proyek dapat dimiringkan secara interaktif dengan efek _pop-out_.
- **Global Particles**: Latar belakang jaringan partikel (dots & lines) yang menyambung di seluruh halaman.
- **Animasi Scroll**: Elemen muncul secara halus saat digulir menggunakan `framer-motion`.
- **Responsif Penuh**: Mendukung tampilan Desktop, Tablet, dan Mobile (dengan menu hamburger).

## Teknologi yang Digunakan 🛠️

- [React](https://reactjs.org/) - Library UI utama
- [Vite](https://vitejs.dev/) - Build tool yang super cepat
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS untuk styling
- [Framer Motion](https://www.framer.com/motion/) - Library animasi kompleks
- [React Parallax Tilt](https://github.com/mkosir/react-parallax-tilt) - Efek 3D pada kartu
- [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter) - Efek teks mengetik
- [TSParticles](https://particles.js.org/) - Efek partikel background

## Cara Menjalankan (Development) 🚀

1.  **Clone repository ini** (atau download zip):

    ```bash
    git clone https://github.com/mawmawmil/Portof.git
    cd Portof
    ```

2.  **Install dependensi**:

    ```bash
    npm install
    ```

3.  **Jalankan server lokal**:

    ```bash
    npm run dev
    ```

4.  Buka browser di `http://localhost:5173/Portof/`.

## Cara Deploy ke GitHub Pages 🌐

Proyek ini sudah dikonfigurasi untuk deployment otomatis ke GitHub Pages menggunakan GitHub Actions.

1.  Pastikan `package.json` memiliki field `homepage`:

    ```json
    "homepage": "https://mawmawmil.github.io/Portof/",
    ```

2.  Push perubahan ke branch `main`:

    ```bash
    git add .
    git commit -m "update"
    git push origin main
    ```

3.  GitHub Actions akan secara otomatis melakukan build dan deploy. Pastikan di **Settings > Pages**, source diatur ke **GitHub Actions**.
