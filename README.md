## 🚀 Introduction
This repository is a fully-structured Front-End project built with React, Tailwind CSS v4, and a clean UI Architecture.
The goal of this repo is to provide a scalable, and reusable codebase that follows modern best practices.
It includes a complete design system, reusable UI components, global layouts, routing, services, and a consistent project structure that can be used for real production apps or as a starter template for new projects.


## ⭐ Key Features
- Scalable Folder Structure — Organized by responsibility (UI, layouts, Common ,  services, routes).
- Reusable UI Components — Buttons, Inputs, Cards, Alerts… all built with Atomic-like thinking.
- Full Tailwind Design System — Colors, spacing, radius, fonts, and dark mode defined using tokens.
- Dark/Light Theme Support — Powered by CSS variables & custom Tailwind layers.

## 🧩 Tech Stack
| Category | Technologies |
|-----------|---------------|
| Framework | **React** |
| Styling | **Tailwind CSS**, **class-variance-authority**|
| Rounting | **React-Router-Dom** |

## Installation
1. Clone the repository:
```sh
https://github.com/eslam-mohamedl/react_structure_template.git
cd react_structure_template
```
2. Install dependencies:
```sh 
npm install
# or
yarn install
```
## Running the App
- Development mode (with hot reload):
```sh
npm run dev
```
- Production build:
```sh 
npm run build
npm start
```

## 🧱 Folder Structure

```sh

src/
│
├── components/                      أكبر فولدر في المشروع — فيه كل الكومبوننتس اللي بتبني الواجهة
│   ├── common/                    (Hero, Pricing, FAQ) سكاشن كبيرة متكررة في الموقع زي 
│   ├── layouts/           Navbar / Footer / Main Layout  الـ Layout الأساسي للموقع مثل 
│   └── UI/                             Button, Input,Card كومبوننتس صغيرة ومتكررة مثل
│                         
├── contexts/                               (Dark/Light) Contexts للتحكم في اللغة والثيم 
│
├── guards/                                              AuthGuard حماية الصفحات مثل 
│
├── pages/                               (Home, About, Contact) الصفحات الأساسية للموقع 
│ 
├── routes/                                   وتجميع الصفحات React Router تعريف مسارات
│
├── services/                            API + Axios instance + Services الاتصال بالـ
│
├── styles/                                      Tailwind v4 + Design Tokens ملفات                                                                
│
├── utils/                               بسيطة مستخدمة داخل المشروع Functions + بيانات ثابتة
│
└── main.jsx

```



