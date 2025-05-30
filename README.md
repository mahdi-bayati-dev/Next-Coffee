
````markdown
# 🍵 Next-Coffee - فروشگاه آنلاین قهوه

![Next Coffee Preview](/img/Screenshot.png)

Next-Coffee یک پروژه فروشگاه آنلاین ساده است که با استفاده از **Next.js** ساخته شده و از **JSON Server** برای شبیه‌سازی API استفاده می‌کند.

---

## 🧰 تکنولوژی‌های استفاده‌شده

- [Next.js](https://nextjs.org/) – فریم‌ورک React برای ساخت اپلیکیشن‌های SSR و SSG
- [React](https://reactjs.org/) – کتابخانه اصلی برای ساخت رابط کاربری
- [JSON Server](https://github.com/typicode/json-server) – سرور ساختگی برای داده‌های RESTful

---

## 📦 نصب و اجرا

ابتدا پکیج‌ها را نصب کنید:

```bash
npm install
````

### اجرای سرور API ساختگی (JSON Server)

برای اجرای سرور داده‌ها (مبتنی بر `db.json`):

```bash
npm run server
```

سرور روی آدرس زیر در دسترس خواهد بود:

```
http://localhost:3001
```

### اجرای پروژه اصلی

برای اجرای پروژه Next.js:

```bash
npm run dev
```

وب‌سایت روی آدرس زیر قابل مشاهده است:

```
http://localhost:3000
```

---

## 📁 ساختار پروژه (خلاصه)

```
.
├── components/         # کامپوننت‌های قابل استفاده مجدد
├── pages/              # صفحات پروژه
├── public/             # فایل‌های استاتیک (تصاویر و ...)
├── data/db.json        # دیتای ساختگی برای API
├── styles/             # استایل‌های سفارشی
├── next.config.mjs     # پیکربندی Next.js
```

---

## ✨ ویژگی‌ها

* طراحی مدرن و ریسپانسیو با Tailwind
* صفحه معرفی محصولات، خدمات، تماس با ما، درباره ما و ...
* کامنت و نظرات برای محصولات
* مصرف API برای دریافت داده‌ها

---

## 👨‍💻 توسعه‌دهنده

Mahdi Bayati
[GitHub: mahdi-bayati-dev](https://github.com/mahdi-bayati-dev)

---

> 📝 اگر پروژه بهت کمک کرد، ستاره‌اش فراموش نشه ⭐
```
