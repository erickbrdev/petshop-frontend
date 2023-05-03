export default function Gallery() {
  return (
    <section className="flex flex-col bg-gallery gap-7 p-16">
      <h1 className="text-[3rem] text-gray-200 italic">Galeria</h1>

      <div className="flex flex-wrap gap-5 desktop:grid desktop:grid-cols-3 desktop:gap-10">
        <img
          className="w-80 rounded-lg lg:rounded-lg lg:w-[25rem] lg:h-64"
          src="https://images.unsplash.com/photo-1522224760669-4016df02b454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwxMnx8UGV0JTIwU2l0dGluZ3xlbnwwfHx8fDE2ODMxMTgzODI&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Pets"
        />
        <img
          className="w-80 rounded-lg lg:rounded-lg lg:w-[25rem] lg:h-64"
          src="https://images.unsplash.com/photo-1585071550721-fdb362ae2b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwyfHxQZXQlMjBTaXR0aW5nfGVufDB8fHx8MTY4MzAzMTkzNA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Pets"
        />
        <img
          className="w-80 rounded-lg lg:rounded-lg lg:w-[25rem] lg:h-64"
          src="https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwzMHx8UGV0JTIwU2l0dGluZ3xlbnwwfHx8fDE2ODMxMTgzODI&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Pets"
        />
        <img
          className="w-80 rounded-lg lg:rounded-lg lg:w-[25rem] lg:h-64"
          src="https://images.unsplash.com/photo-1551779891-b83901e1f8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHwyOXx8UGV0JTIwU2l0dGluZ3xlbnwwfHx8fDE2ODMwMzE5MzQ&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Pets"
        />
        <img
          className="w-80 rounded-lg lg:rounded-lg lg:w-[25rem] lg:h-64"
          src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI5NjF8MHwxfHNlYXJjaHw5fHxQZXQlMjBTaXR0aW5nfGVufDB8fHx8MTY4MzAzMTkzNA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Pets"
        />
        <img
          className="w-80 rounded-lg lg:rounded-lg lg:w-[25rem] lg:h-64"
          src="https://i.postimg.cc/c4tR7Xrn/photo-1475954704693-ac6850a71ee0-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwy-Nj-I5-Nj-F8-MHwxf-HNl-YX.jpg"
          alt="Pets"
        />
      </div>
    </section>
  );
}
