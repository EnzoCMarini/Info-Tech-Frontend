import type { ProdutoDTO } from "../dto/ProdutoDTO";

// Classe responsável por fazer requisições à API - Produto
class ProdutoRequest {
    private serverURL;
    private endpointProduto;

    constructor() {
        this.serverURL = `http://localhost:3333`;
        this.endpointProduto = `/api/Produtos`;
    }

    async obterListaDeProdutos() {
        try {
            const token = localStorage.getItem('token');

            const respostaAPI = await fetch(`${this.serverURL}${this.endpointProduto}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${token}`
                }
            });

            if (respostaAPI.ok) {
                const listaDeProdutos = await respostaAPI.json();
                return listaDeProdutos;
            } else {
                throw new Error("Não foi possível listar os Produtos.");
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta de Produtos. ${error}`);
            return;
        }
    }
    
    async obterProdutoPorId(id_Produto: number): Promise<ProdutoDTO | undefined> {
        try {
            const token = localStorage.getItem('token');
            const respostaAPI = await fetch(`${this.serverURL}${this.endpointProduto}/${id_Produto}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${token}`
                }
            });

            if (respostaAPI.ok) {
                const Produto: ProdutoDTO = await respostaAPI.json();
                return Produto;
            } else {
                throw new Error("Não foi possível buscar o Produto.");
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta de Produto por ID. ${error}`);
            return;
        }
    }

    async enviarFormularioProduto(formProduto: ProdutoDTO): Promise<boolean> {
        try {
            const token = localStorage.getItem('token');
            const respostaAPI = await fetch(`${this.serverURL}${this.endpointProduto}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${token}`
                },
                body: JSON.stringify(formProduto)
            });

            if(!respostaAPI.ok) throw new Error(`Erro ${respostaAPI.status}: ${respostaAPI.statusText}`);

            console.info(`${respostaAPI.status}: ${respostaAPI.statusText}`);

            return true;
        } catch (error) {
            console.error(`Erro ao fazer consulta à API. ${error}`);
            return false;
        }
    }
}

export default new ProdutoRequest;