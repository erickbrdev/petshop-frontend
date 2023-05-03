export default function Contact() {
  return (
    <section className="p-5 first-letter:xl:flex bg-gallery xl:p-16 items-center justify-center gap-72 section-contact-mobile">
      <div className="flex flex-col gap-5 md:gap-10 items-center justify-center">
        <p className="text-2xl text-gray-200 ">Contato Pets Kcire</p>
        <p className="text-gray-200 w-full mb-5 text-center text-lg">
          Entre em contato com Kcire Pets!
        </p>
      </div>

      <div>
        <form action="" className="flex flex-col gap-5 form-mobile items-center md:items">
          <div className="flex gap-5 form-mobile flex-col md:flex md:flex-row">
            <label htmlFor="name">
              <p className="text-white">Name</p>
              <input
                type="text"
                className="p-2 rounded-lg bg-available text-white"
              />
            </label>

            <label htmlFor="email">
              <p className="text-white">E-mail</p>
              <input
                type="text"
                className="p-2 rounded-lg bg-available text-white"
              />
            </label>
          </div>

          <label htmlFor="message" className="md:flex hidden md:flex-col">
            <p className="text-white">Mensagem</p>
            <textarea
              name=""
              id="message"
              cols={52}
              rows={3}
              className="p-2 rounded-lg bg-available text-white"
            ></textarea>
          </label>

          <label htmlFor="message" className="md:hidden flex flex-col">
            <p className="text-white">Mensagem</p>
            <textarea
              name=""
              id="message"
              cols={22}
              rows={3}
              className="p-2 rounded-lg bg-available text-white"
            ></textarea>
          </label>

          <div className="flex justify-center mb-5 sm:justify-end btn-mobile">
            <button className="p-2 border-2 w-32 rounded-lg text-xl bg-yellow-100 mt-3">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
