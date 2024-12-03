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
