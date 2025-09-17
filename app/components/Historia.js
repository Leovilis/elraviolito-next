import Image from "next/image";

export default function Historia() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">Nuestra Historia</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                El Raviolito, fundada por Héctor Campos, Campito, y su esposa
                Myriam allá por 1974 en Zapala, Neuquén, y llevada a Jujuy en
                1984, es un vínculo con el pasado y una promesa para el futuro.
              </p>
              <p>
                Hoy, Priscila, tercera generación de la familia Campos, continúa
                con devoción el legado familiar. Cada pasta es un pedacito de
                historia, un recuerdo de las manos trabajadoras de antaño y los
                sabores que nos transportan a la infancia.
              </p>
              <p>
                Desde los días humildes hasta las alegrías compartidas alrededor
                de la mesa, El Raviolito es un tesoro de nostalgia que vive en
                cada plato, manteniendo viva la llama del amor por la cocina.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              width={200}
              height={200}
              src="/familia-historia.jpg"
              alt="Historia de El Raviolito"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
