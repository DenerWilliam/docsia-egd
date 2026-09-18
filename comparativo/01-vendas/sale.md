# Comparativo: sale (Vendas) — Mudancas Visuais

## Informacoes do Modulo

| Campo | Valor |
|-------|-------|
| Nome Tecnico | sale |
| Nome Amigavel | Vendas |
| Autor | Odoo S.A. |
| Repositorio | https://www.odoo.com/app/sales |

## Disponibilidade por Versao

| Versao | Status | Observacoes |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponivel | Versao estavel |
| Odoo 15 | ✅ Disponivel | Mantido pela Odoo |
| Odoo 16 | ✅ Disponivel | Versao LTS |

---

## Mudancas Visuais Detalhadas

### Odoo 14 → Odoo 16

#### Formulario da Ordem de Venda

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Botoes Editar/Salvar** | Dois botoes grandes no topo | **REMOVIDOS** | Agora clica direto no campo para editar |
| **Botao Criar** | Canto superior esquerdo, botao grande | Canto superior direito, botao menor | Botao mais discreto, canto oposto |
| **Botao Confirmar** | No header, com texto "Confirm Sale" | No header, mas visualmente mais limpo | Mesmo local, visual mais clean |
| **Botoes Acoes** | Topo da pagina | Icone no canto superior direito | Menu de acoes e um icone, nao texto |
| **Help por campo** | Nao existia | Icone (?) ao lado dos campos | Usuario pode tirar duvidas sem chamar suporte |
| **Internal Link** | Nao existia | Link nos campos Many2one (ex: cliente) | Clica no nome do cliente e abre o cadastro |
| **Statusbar** | Barrinha no topo | Visual atualizado, mais limpo | Mesma funcao, visual mais moderno |
| **Titulo** | `<h1>` basico | `<h1>` com mais espacamento | Titulo mais destacado |

#### Lista de Ordens de Venda (Tree View)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Edicao inline** | Clicar para editar, depois salvar | Edicao direta na linha | Mais rapido, menos cliques |
| **Colunas opcionais** | Sem toggle | Botoes de show/hide nas colunas | Cliente escolhe quais colunas ver |
| **Decoracao de estado** | Badge basico | Badge colorido com cores por estado | Pedido "Sale" fica verde, "Draft" cinza |
| **Sample data** | Nao existia | Dados de exemplo quando vazio | Lista nunca aparece totalmente vazia |
| **Botoes de controle** | `<control>` basico | Botoes "Add a product", "Add a section" | Adicionar linha e mais intuitivo |

#### Kanban de Vendas

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Cards** | Design basico com borda | Cards redesignados, sem borda | Visual mais limpo e moderno |
| **Header da coluna** | Rola com a pagina | **Fixo (freeze)** | Titulo da coluna sempre visivel |
| **Informacoes no card** | Poucos dados | Mais dados visiveis | Ve mais info sem abrir o pedido |
| **Avatar do vendedor** | Nao sempre visivel | Sempre visivel no card | Sabe quem e o vendedor de relance |

#### Campo Analitico

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Analytic Account** | Campo simples | Campo ligado a Plan | Seleciona plano primeiro, depois conta |
| **Analytic Tags** | Tags coloridas multi-selecao | **REMOVIDAS** | Nao existe mais essa opcao |
| **Distribuicao** | Via tags | **Widget novo** com percentuais | Agora distribui por % entre contas |

**Exemplo visual:**

```
ODOO 14:
Analytic Account: [Departamento Vendas     v]
Analytic Tags:    [x] Vendas  [x] SP  [ ] RJ

ODOO 16:
Analytic Distribution:
  Plano: [Custos Operacionais        v]
  +--------------------------------+--------+
  | Departamento Vendas           |  70%   |
  | Departamento SP               |  30%   |
  +--------------------------------+--------+
  Total: 100%
```

---

## Fluxo Visual: Criar Pedido de Venda

```
ODOO 14:
1. Clica "Criar" (canto esquerdo)
2. Preenche campos
3. Clica "Salvar" (botao grande no topo)
4. Clica "Confirmar" (botao grande)
5. Adiciona linhas de produto
6. Clica "Salvar" novamente

ODOO 16:
1. Clica "Criar" (canto direito)
2. Preenche campos (edicao inline, salva automaticamente)
3. Clica "Confirmar" (botao no header)
4. Adiciona linhas de produto (botao "Add a product")
```

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias | Botoes removidos, edicao inline |

---

## Notas

- Módulo base para todos os outros modulos de venda
- A migracao v14->v16 e a mais impactante visualmente
- O campo analytic muda completamente de paradigma
- Treinamento necessario para usuarios acostumados com v14
