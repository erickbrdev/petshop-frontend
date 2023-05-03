import "../styles/Section.css";

export default function Description() {
  return (
    <section className="bg-section w-full h-screen items-start flex flex-col justify-center gap-6 p-5 sm:p-20">
      <h1 className="text-black font-semibold text-2xl border-b-2 sm:text-white sm:text-[2.5rem] sm:w-[40rem] sm:font-bold italic">
        Konoha Pet Sitting Services
      </h1>

      <p className="text-black text-lg sm:text-gray-200 laptop:text-2xl laptop:w-[50rem]">
        Pets Kcire em Konoha, RJ, Brasil oferece serviços profissionais de babá
        de animais de estimação com amor e carinho. Oferecemos passeios diários,
        brincadeiras e cuidados personalizados para manter seu animal de
        estimação feliz e saudável. Oferecemos também pernoites e transporte de
        animais de estimação. Deixe seu animal de estimação em boas mãos com a
        Pets Kcire.
      </p>

      <button className="p-3 border-2 w-32 rounded-xl text-lg bg-yellow-100">
        Button
      </button>
    </section>
  );
}
