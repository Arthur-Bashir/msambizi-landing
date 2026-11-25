# Msambizi

Nuxt 3 site for Msambizi, aimed at universities and colleges. The homepage covers the institutional pitch and points decision-makers to request a presentation.

## Run it

```bash
npm install --ignore-scripts
node node_modules/esbuild/install.js
npm run dev
```

`npm run generate` builds the static site into `.output/public`.

## A few notes

- SSR and static generation are both enabled.
- `/login` and `/contact` hold the form markup and field state. To enable POSTs, set `NUXT_PUBLIC_API_BASE` to the Django backend; the forms call `/api/auth/login/` and `/api/contact/`.
- Without that variable the forms show a fallback message pointing to WhatsApp and `support@msambizi.school`. Check the mailbox before launch.
- Photo credits sit next to the images in the UI. Sources: [UoM Students on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:UoM_Students.jpg) (CC BY-SA 4.0) and [Kampus Production on Pexels](https://www.pexels.com/photo/attentive-young-black-groupmates-using-laptop-while-preparing-for-exams-with-anonymous-teacher-5940713/).
