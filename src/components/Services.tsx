import "../mobile/Services.css"

export default function Services() {
  return (
    <section className="bg-gallery p-16 gap-7 flex flex-col">
      <h1 className="text-[3rem] text-gray-200 italic">Serviços</h1>

      <section className="flex gap-10 items-center section-service-mobile">
        <div className="flex flex-col gap-3">
          <img
            className="w-[28rem] h-[17.5rem]"
            src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwzfHxQZXQlMjBTaXR0aW5nfGVufDB8fHx8MTY4MzExODM4Mg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Serviços realizados"
          />
          <h1 className="text-3xl text-gray-200">Pet Walking</h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            dolorum consequuntur! Adipisci harum
          </p>
          <button className="p-2 border-2 w-32 rounded-lg text-xl bg-yellow-100 mt-3">
            Info
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <img
            className="w-[28rem] h-[17.5rem]"
            src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwxNHx8UGV0JTIwU2l0dGluZ3xlbnwwfHx8fDE2ODMxMTgzODI&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Serviços realizados"
          />
          <h1 className="text-3xl text-gray-200">Pet Feeding</h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            dolorum consequuntur! Adipisci harum.
          </p>
          <button className="p-2 border-2 w-32 rounded-lg text-xl bg-yellow-100 mt-3">
            Info
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <img
            className="w-[28rem] h-[17.5rem]"
            src="https://images.unsplash.com/photo-1444212477490-ca407925329e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwxOXx8UGV0JTIwU2l0dGluZ3xlbnwwfHx8fDE2ODMxMTgzODI&ixlib=rb-4.0.3&q=80&w=1080ttps://images.unsplash.com/photo-1621936303335-5406c8a85ca0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHw4fHxQZXQlMjBTaXR0aW5nfGVufDB8fHx8MTY4MzExODM4Mg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Serviços realizados"
          />
          <h1 className="text-3xl text-gray-200">Pet Sitting</h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            dolorum consequuntur! Adipisci harum.
          </p>
          <button className="p-2 border-2 w-32 rounded-lg text-xl bg-yellow-100 mt-3">
            Info
          </button>
        </div>
      </section>
    </section>
  );
}
