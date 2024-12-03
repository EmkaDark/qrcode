/* eslint-disable @next/next/no-img-element */
"use client";
import Layout from "../components/Layout";
import Main from "..//components/Main";
import Heading from "../components/Heading";
import QRGroup from "../components/QRGroup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import RenderData from "../components/RenderData";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <head>
        <title>Генератор QR кода</title>

        <meta
          name="description"
          content="Быстро и удобно создавайте QR-коды для текста, ссылок или других данных. Просто введите информацию и получите уникальный QR-код для использования в различных сферах."
        />

        <link rel="icon" href="/qrlogo.png" />

        <meta property="og:title" content="Генератор QR кода" />
        <meta
          property="og:description"
          content="Создавайте уникальные QR-коды для ваших ссылок, текстов и других данных. Простой и удобный инструмент для быстрой генерации QR-кодов."
        />
        <meta
          name="keywords"
          content="Генератор QR кода, генератор qr, qr код генератор, qr генератор онлайн, генератор qr кодов онлайн, создать qr, создать qr код, сгенерировать qr"
        ></meta>
        <meta property="og:url" content="https://itemka.ru/qrcode" />
        <meta property="og:site_name" content="Генератор QR кода" />
        <meta property="og:image" content="/qrlogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Генератор QR кода" />
        <meta
          name="subject"
          content="Создание сайтов ,верстка,дизайн проектов!"
        />
        <meta name="copyright" content="Emka" />
        <meta name="author" content="Emka Dark, nomad11kl.com" />
        <meta name="designer" content="Svetlana" />
        <meta name="reply-to" content="nomad11kl@mail.ru" />
        <meta name="owner" content="Emka Dark" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/short.png" />
      </head>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
   m[i].l=1*new Date(); 
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} 
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
 
   ym(99113110, "init", { 
        clickmap:true, 
        trackLinks:true, 
        accurateTrackBounce:true 
   }); 
  `}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/99113110"
            style={{ position: "absolute", left: "-9999px" }}
            alt="1"
          />
        </div>
      </noscript>
      <Provider store={store}>
        <Layout>
          <Header></Header>

          <Main>
            <Heading></Heading>
            <QRGroup></QRGroup>
            <RenderData />
          </Main>
          <Footer></Footer>
        </Layout>
      </Provider>
    </>
  );
}
