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
| Odoo 17 | ✅ Disponivel | Atualizado para OWL |
| Odoo 18 | ✅ Disponivel | Compativel |
| Odoo 19 | ✅ Disponivel | Funcional |

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

### Odoo 16 → Odoo 17

| Elemento | Odoo 16 (Antes) | Odoo 17 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Menu Lateral** | Icones + texto | Icones apenas | Menu mais limpo, texto ao passar mouse |
| **Botoes de Acao** | Header padrao | Header com botoes menores | Botoes menos "gordinhos" |
| **Search Bar** | Barra classica | Barra com chips de filtro | Filtros como "pills" removiveis |
| **Kanban** | Cards com bordas | Cards mais clean | Visual mais moderno |
| **Form** | Estrutura padrao | Mais espacamento | Mais respiro entre campos |

---

### Odoo 17 → Odoo 18

| Elemento | Odoo 17 (Antes) | Odoo 18 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **AI CRM** | Nao existia | Sugestoes de proxima acao | Sistema sugere: "Ligar para fulano" |
| **AI Documents** | Nao existia | Geracao automatica de propostas | Cria proposta com IA baseada no pedido |
| **AI Sign** | Nao existia | Assinatura digital com IA | Cliente assina digitalmente mais rapido |

---

### Odoo 18 → Odoo 19

| Elemento | Odoo 18 (Antes) | Odoo 19 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **AI CRM** | Sugestoes basicas | CRM assistido por IA | IA cria leads automaticamente |
| **AI Documents** | Geracao basica | Documentos inteligentes | IA entende contexto e cria melhores propostas |

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

ODOO 17+:
1. Clica "+" (canto direito)
2. Preenche campos (edicao inline)
3. Clica "Confirmar" (botao menor no header)
4. Adiciona linhas (botao "Add a product")
5. IA sugere proximas acoes
```

---

## Breaking Changes

### v16 → v17
- Views redesenhadas para OWL
- Campos `attrs="{'invisible': [...]}"` mudam para `invisible="1"` (novo formato)
- Widget `many2many_tags` pode ter opcoes diferentes
- Botao `oe_highlight` mantido mas visualmente mais limpo

### v17 → v18
- APIs de IA podem exigir configuracao adicional
- Novos campos de AI no formulario

### v18 → v19
- AI CRM pode substituir funcionalidades manuais de qualificacao

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 1-2 dias | Botoes removidos, edicao inline |
| v16 -> v17 | **Media** | 2-3 dias | Menu lateral, search bar |
| v17 -> v18 | Baixa | 1-2 dias | AI features |
| v18 -> v19 | Baixa | 1-2 dias | AI avancado |

---

## Notas

- Módulo base para todos os outros modulos de venda
- A migracao v14->v16 e a mais impactante visualmente
- O campo analytic muda completamente de paradigma
- Treinamento necessario para usuarios acostumados com v14
