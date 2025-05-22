import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"

export default function AppDownloadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-10 border-b border-orange-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Volver a la página principal</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-orange-500 sm:text-4xl md:text-5xl">
                Descarga Nuestra App
              </h1>
              <p className="text-xl text-gray-300">Tu entrada digital a la fiesta más grande del año</p>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Características principales:</h2>
                <ul className="space-y-2">
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
                    <span className="text-gray-300">Registro rápido y sencillo</span>
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
                    <span className="text-gray-300">Código QR de entrada único</span>
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
                    <span className="text-gray-300">Mapa interactivo del evento</span>
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
                    <span className="text-gray-300">Horarios de actividades y atracciones</span>
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
                    <span className="text-gray-300">Notificaciones de eventos especiales</span>
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
                    <span className="text-gray-300">Participación en sorteos exclusivos</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
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
                  Descargar para iOS
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
                  Descargar para Android
                </Button>
              </div>
            </div>
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-[2.5rem] border-8 border-gray-800 bg-gray-800 shadow-xl">
                <div className="relative rounded-[2rem] overflow-hidden h-[600px] w-[300px]">
                  <Image
                    src="/placeholder.svg?height=1200&width=600&text=App+Screenshot"
                    alt="App Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-12 -top-12 rotate-12">
                <div className="rounded-lg bg-orange-600 p-4 text-white shadow-lg">
                  <p className="text-sm font-bold">¡NUEVO!</p>
                  <p className="text-xs">Versión 2.0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black to-purple-950 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">Cómo Funciona</h2>
              <p className="mt-4 text-gray-300">Sigue estos sencillos pasos para registrarte y obtener tu entrada</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                  1
                </div>
                <div className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-white">Descarga la App</h3>
                  <p className="text-gray-300">Descarga nuestra aplicación desde la App Store o Google Play Store.</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                  2
                </div>
                <div className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-white">Crea tu Cuenta</h3>
                  <p className="text-gray-300">
                    Regístrate con tu correo electrónico o redes sociales y completa tu perfil.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                  3
                </div>
                <div className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-2 text-xl font-bold text-white">Obtén tu Entrada</h3>
                  <p className="text-gray-300">
                    Completa el proceso de registro y recibe tu código QR único como entrada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">Opiniones de Usuarios</h2>
              <p className="mt-4 text-gray-300">Lo que dicen nuestros usuarios sobre la aplicación</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "María L.",
                  rating: 5,
                  comment:
                    "¡Excelente app! Muy fácil de usar y el proceso de registro fue súper rápido. La recomiendo totalmente.",
                },
                {
                  name: "Carlos R.",
                  rating: 4,
                  comment:
                    "Muy buena aplicación. El mapa interactivo me ayudó mucho a ubicarme en la fiesta del año pasado.",
                },
                {
                  name: "Ana P.",
                  rating: 5,
                  comment: "La mejor forma de entrar a la fiesta sin hacer filas. ¡El año pasado fue increíble!",
                },
                {
                  name: "Juan D.",
                  rating: 4,
                  comment: "Me encantó la función de notificaciones para no perderme ninguna actividad especial.",
                },
                {
                  name: "Sofía M.",
                  rating: 5,
                  comment: "Interfaz muy intuitiva y bonita. Además, gané un premio en uno de los sorteos exclusivos.",
                },
                {
                  name: "Pedro G.",
                  rating: 4,
                  comment: "Muy práctica. La recomiendo para evitar problemas con las entradas físicas.",
                },
              ].map((review, index) => (
                <div key={index} className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <div className="mb-2 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={i < review.rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-orange-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                  <p className="mt-2 text-sm font-semibold text-orange-400">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-purple-950 to-black py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "¿La aplicación es gratuita?",
                      answer: "Sí, la aplicación es completamente gratuita para descargar y usar.",
                    },
                    {
                      question: "¿Necesito crear una cuenta para usar la app?",
                      answer:
                        "Sí, es necesario crear una cuenta para poder registrarte en la fiesta y obtener tu entrada digital.",
                    },
                    {
                      question: "¿Puedo transferir mi entrada a otra persona?",
                      answer:
                        "No, las entradas son personales e intransferibles. Cada código QR está vinculado a tu cuenta.",
                    },
                    {
                      question: "¿Qué hago si pierdo mi teléfono el día del evento?",
                      answer:
                        "Puedes acceder a tu cuenta desde cualquier otro dispositivo e iniciar sesión para recuperar tu código QR.",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <p className="mt-2 text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">Soporte Técnico</h2>
                <p className="text-gray-300">Si tienes algún problema con la aplicación, no dudes en contactarnos:</p>
                <div className="rounded-lg bg-black/50 p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
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
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-gray-300">soporte@granfiesta.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
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
                      <div>
                        <p className="font-medium text-white">Teléfono</p>
                        <p className="text-gray-300">+123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
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
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <div>
                        <p className="font-medium text-white">Chat en Vivo</p>
                        <p className="text-gray-300">Disponible de 9:00 a 18:00, Lunes a Viernes</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Contactar Soporte</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">¡No te lo pierdas!</h2>
              <p className="mt-4 text-xl text-gray-300">
                Descarga la app ahora y asegura tu lugar en la fiesta más grande del año
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button className="flex items-center gap-2 bg-orange-600 text-white hover:bg-orange-700">
                  <Download className="h-4 w-4" />
                  Descargar Ahora
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
                >
                  <Link href="/">Volver a la Página Principal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-800 bg-black py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-xl font-bold text-orange-500">
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
                <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7H2Z" />
                <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
              </svg>
              <span>La Gran Fiesta</span>
            </div>
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} La Gran Fiesta de Halloween. Todos los derechos reservados.
              {new Date().getFullYear()} La Gran Fiesta de Halloween. Todos los derechos reservados.
            </p>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
