"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Calendar, MapPin, Clock, Ghost, Music } from "lucide-react";

export default function Home() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-11-01T20:00:00");
    const difference = targetDate.getTime() - time.getTime();
    
    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0),
      minutes: Math.max(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 0),
      seconds: Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0)
    };
  };

  const { days, hours, minutes, seconds } = calculateTimeLeft();

    const galleryImages = [
    {
      id: 1,
      src: "/WhatsApp Image 2025-05-20 at 12.39.25 PM (2).jpeg", // Reemplaza con tus imágenes
      alt: "Imagen 1",
      width: 700,
      height: 600
    },
    {
      id: 2,
      src: "/WhatsApp Image 2025-05-20 at 12.39.25 PM (1).jpeg", // Reemplaza con tus imágenes
      alt: "Decoración temática",
      width: 700,
      height: 600
    },
    {
      id: 3,
      src: "/halowin.jpg",
      alt: "Imagen 3",
      width: 700,
      height: 600
    },
    {
      id: 4,
      src: "/peach.jpg",
      alt: "Imagen 4",
      width: 700,
      height: 600
    },
    {
     id: 5,
     src: "/boblean.jpg",
     alt: "Imagen 5",
     width: 700,
     height: 600
    },
    {
      id: 6,
      src: "/tainy.jpg",
      alt: "Imagen 6",
      width: 700,
      height: 600
    },
    {
      id: 7,
      src: "/joker.jpg",
      alt: "Imagen 7",
      width: 700,
      height: 600
    },
    {
      id: 8,
      src: "/dj.jpg",
      alt: "Imagen 8",
      width: 700,
      height: 600
    },
  ];
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-orange-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-orange-500">
            <Ghost className="h-6 w-6" />
            <span>1ro Nov 4.0</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#info" className="text-sm font-medium hover:text-orange-400">
              Información
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:text-orange-400">
              Galería
            </Link>
            <Link href="#app" className="text-sm font-medium hover:text-orange-400">
              Descargar App
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-orange-400">
              Contacto
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-orange-500 text-orange-500 hover:bg-orange-950 hover:text-orange-400"
          >
            <Link href="#app">Registrarse</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-orange-500 text-orange-500 hover:bg-orange-950"
          >
            <span className="sr-only">Menú</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/asdas.jpg"
              alt="Imagen fiesta"
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 75vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>

          <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-20">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-orange-500 sm:text-5xl md:text-6xl drop-shadow-lg">
                  1ro Nov 4.0
                </h1>
                <p className="text-xl text-orange-300 md:text-2xl font-medium">
                  La pinche mejor peda de noviembre
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row justify-center mt-8">
                  <Button className="bg-orange-600 text-white hover:bg-orange-700 transition-transform hover:scale-105">
                    <Link href="#app" className="flex items-center gap-2 px-6 py-3">
                      <Download className="h-4 w-4" />
                      Descargar App para entrar a la fiesta
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-300 hover:bg-purple-950 hover:text-purple-200 transition-all"
                  >
                    Ver más detalles
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <section className="relative py-20 md:py-28">
              <div className="w-full flex justify-center px-6 md:px-8">
               <div className="w-full max-w-6xl flex flex-col items-center">
                 <div className="mb-12 text-center w-full">
                    <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl md:text-5xl mb-4">
                      Información del Evento
                    </h2>
                    <p className="text-gray-200 text-lg">Todo lo que necesitas saber sobre la fiesta más pinche desmadrosa y esperada del año</p>
                  </div>

                  <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        icon: <Calendar className="h-6 w-6 text-white" />,
                        title: "Fecha",
                        text: "1 de Noviembre, 2025",
                        desc: "Celebra a tus muertos con nosotros"
                      },
                      {
                        icon: <MapPin className="h-6 w-6 text-white" />,
                        title: "Ubicación",
                        text: "Aún no se sabe",
                        desc: "Alguna casita por ahí"
                      },
                      {
                        icon: <Clock className="h-6 w-6 text-white" />,
                        title: "Horario",
                        text: "Desde las 20:00 hasta el amanecer",
                        desc: "Las puertas se cierran a medianoche. ¡No llegues tarde!"
                      },
                      {
                        icon: <Ghost className="h-6 w-6 text-white" />,
                        title: "Temática",
                        text: "Halloween",
                        desc: "Disfraces obligatorios. Premios al mejor disfraz de la noche."
                      },
                      {
                        icon: <Music className="h-6 w-6 text-white" />,
                        title: "Música",
                        text: "DJ de todo tipo mientras Omaro no consiga otro",
                        desc: "Puro pinche desmadre."
                      },
                      {
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-white"
                          >
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                          </svg>
                        ),
                        title: "Atracciones",
                        text: "Suaz desnudo",
                        desc: "Experiencias terroríficas para los más valientes."
                      }
                    ].map((card, index) => (
                      <div 
                        key={index}
                        className="rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 border border-white/10"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                          <div className="text-orange-400">{card.icon}</div>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-white">{card.title}</h3>
                        <p className="text-orange-300">{card.text}</p>
                        <p className="mt-2 text-sm text-orange-200/80">{card.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* Gallery Section */}
        <section id="galeria" className="bg-gray-900 py-16 md:py-24">
         <div className="w-full max-w-none px-6 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl md:text-5xl">
                Antiguas ediciones
              </h2>
              <p className="mt-4 text-gray-300">Toda la galería de las anteriores pedas</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
      <div className="mt-8 text-center">
  <Link href="/galeria">
  <Button
    variant="outline"
    className="border-orange-500 text-orange-400 hover:bg-orange-900 hover:text-orange-300 transition-all"
  >
    Ver la galería completa
  </Button>
</Link>
    </div>
  </div>
</section>
        {/* App Download Section */}
        <section id="app" className="bg-gradient-to-b from-orange-950 to-purple-950 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="relative mx-auto max-w-xs">
                  <div className="rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-xl">
                    <div className="relative rounded-[2rem] overflow-hidden h-[500px] w-[240px]">
                      <Image
                        src="/placeholder.svg?height=1000&width=500&text=App+Screenshot"
                        alt="App Screenshot"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl md:text-5xl">
                  Descarga Nuestra App
                </h2>
                <p className="mt-4 text-xl text-gray-300">Tu entrada digital a la mejor peda de jalowin</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Regístrate fácilmente con tus datos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Recibe tu código QR de entrada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Accede a información exclusiva del evento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Participa en sorteos y promociones especiales</span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                      <path d="m12 19-7 3V8a7 7 0 0 1 7-7" />
                      <path d="m12 19 7 3V8a7 7 0 0 0-7-7" />
                    </svg>
                    App Store
                  </Button>
                  <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <polygon points="3 3 21 12 3 21 3 3" />
                    </svg>
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-black py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl md:text-5xl">
                Preguntas Frecuentes
              </h2>
              <p className="mt-4 text-gray-300">Resolvemos tus dudas sobre 1ro de Nov 4.0</p>
            </div>
            <div className="mx-auto max-w-3xl divide-y divide-gray-800">
              {[
                {
                  question: "¿Cómo puedo registrarme para la fiesta?",
                  answer:
                    "Descarga nuestra aplicación móvil, crea una cuenta y completa el formulario de registro. Recibirás un código QR que servirá como tu entrada digital.",
                },
                {
                  question: "¿Es obligatorio el disfraz?",
                  answer:
                    "Sí, es obligatorio asistir disfrazado. Es una fiesta temática de Halloween y queremos mantener el ambiente. Habrá premios para los mejores disfraces.",
                },
                {
                  question: "¿Hay límite de edad para asistir?",
                  answer: "La fiesta es para mayores de 18 años. Se requerirá identificación oficial al ingresar.",
                },
                {
                  question: "¿Puedo comprar entradas en la puerta?",
                  answer:
                    "No, todas las entradas deben adquirirse previamente a través de nuestra aplicación. No se venderán entradas en la puerta.",
                },
                {
                  question: "¿Qué incluye la entrada?",
                  answer:
                    "La entrada incluye tu pase a la fiesta y acceso a la barra libre, además de poder participar en sorteos y dinámicas en la fiesta.",
                },
              ].map((faq, index) => (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                      {faq.question}
                      <span className="ml-6 flex h-7 w-7 items-center justify-center rounded-full border border-orange-600 text-orange-600 group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-gray-400">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="bg-gradient-to-b from-purple-950 to-black py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl md:text-5xl">Contáctanos</h2>
              <p className="mt-4 text-gray-300">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
            </div>
            <div className="mx-auto max-w-md">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-700 bg-black px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Enviar Mensaje</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="bg-black py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl md:text-5xl">
                Cuenta Regresiva
              </h2>
              <p className="mt-4 text-gray-300">La Gran Fiesta de Halloween se acerca...</p>
              <div className="mt-8 grid grid-cols-4 gap-4">
                <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white md:text-5xl">
                    {days.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 md:text-sm">Días</div>
                </div>
                <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white md:text-5xl">
                    {hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 md:text-sm">Horas</div>
                </div>
                <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white md:text-5xl">
                    {minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 md:text-sm">Minutos</div>
                </div>
                <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white md:text-5xl">
                    {seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 md:text-sm">Segundos</div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-orange-600 text-white hover:bg-orange-700 transition-colors">
                  <Link href="#app" className="flex items-center gap-2 px-6 py-3">
                    <Download className="h-4 w-4" />
                    Descargar App Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-800 bg-black py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-orange-500">
                <Ghost className="h-6 w-6" />
                <span>1ro de Nov 4.0</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">La mejor peda de Halloween.</p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#info" className="hover:text-orange-400">
                    Información
                  </Link>
                </li>
                <li>
                  <Link href="#galeria" className="hover:text-orange-400">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="#app" className="hover:text-orange-400">
                    Descargar App
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-orange-400">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-orange-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+123 456 7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-orange-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@granfiesta.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-orange-500"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Av. de los Espíritus 666, Ciudad Embrujada</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Síguenos</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-semibold text-white">Suscríbete a nuestro boletín</h4>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  />
                  <Button type="submit" size="sm" className="bg-orange-600 text-white hover:bg-orange-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                                            viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    <span className="sr-only">Suscribirse</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 1ro de Nov 4.0. Todos los derechos reservados.</p>
            <p className="mt-2">
              Diseñado con ❤️ por el equipo de la mejor peda de noviembre
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}