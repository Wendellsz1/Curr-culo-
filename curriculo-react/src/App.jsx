function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 p-6">
      <div className="max-w-5xl mx-auto bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-3">
        
        <aside className="bg-zinc-950 p-6 md:col-span-1">
          <h1 className="text-3xl font-bold mb-2">Wendel Lopes</h1>
          <p className="text-zinc-400 mb-6">Desenvolvedor Front-End em formação</p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Contato</h2>
            <p>Email: wlopessilva14@gmail.com</p>
            <p>Telefone: (31) 99336-1797</p>
            <p>Belo Horizonte - MG</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Habilidades</h2>
            <ul className="list-disc list-inside space-y-1 text-zinc-300">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>GitHub</li>
            </ul>
          </section>
        </aside>

        <main className="p-6 md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-bold border-b border-zinc-600 pb-2 mb-3">Resumo</h2>
            <p className="text-zinc-300">
              Estudante de desenvolvimento front-end com foco em JavaScript e React,
              buscando oportunidade para evoluir na área de tecnologia e aplicar os
              conhecimentos em projetos reais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b border-zinc-600 pb-2 mb-3">Formação</h2>
            <div>
              <h3 className="text-lg font-semibold">Curso de Desenvolvimento Front-End</h3>
              <p className="text-zinc-400">Programa Capacita / IFMG</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b border-zinc-600 pb-2 mb-3">Projetos</h2>
            <div className="space-y-3">
              <div className="bg-zinc-700 p-4 rounded-xl">
                <h3 className="font-semibold">Contador com Redux</h3>
                <p className="text-zinc-300">Aplicação React usando Redux e Flux Pattern.</p>
              </div>

              <div className="bg-zinc-700 p-4 rounded-xl">
                <h3 className="font-semibold">Currículo em React</h3>
                <p className="text-zinc-300">Página de currículo usando React, Tailwind, Flexbox e Grid.</p>
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}

export default App;