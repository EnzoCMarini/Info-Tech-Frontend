import { type JSX } from "react";

function BoasVindas(): JSX.Element {
    return (
        <main className="bg-gray-800 flex-1 flex flex-col items-center justify-start pt-16 md:pt-24 px-6 pb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                Info-Tech
            </h1>

            <p className="text-base md:text-lg lg:text-xl mt-6 md:mt-10 text-center max-w-2xl">
                Seja bem-vindo a Info-Tech, use o menu de navegação acima para acessar as funcionalidades do sistema.
            </p>
        </main>
    );
}

export default BoasVindas;