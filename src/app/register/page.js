import { InputForm } from "@/components/InputForm"

export default function RegisterPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center space-y-5 px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div>
        <a href="#" className="items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white">Eventmakers</a>
      </div>
      <div>
        <InputForm />
      </div>
    </section>
  )
}
