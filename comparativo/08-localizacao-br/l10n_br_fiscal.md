# Comparativo: l10n_br_fiscal (Modulo Fiscal Brasileiro) — Mudancas Visuais

## Informacoes do Modulo

| Campo | Valor |
|-------|-------|
| Nome Tecnico | l10n_br_fiscal |
| Nome Amigavel | Modulo Fiscal Brasileiro |
| Autor | Akretion, OCA |
| Repositorio | https://github.com/OCA/l10n-brazil |

## Disponibilidade por Versao

| Versao | Status | Observacoes |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponivel | Versao estavel |
| Odoo 15 | ✅ Disponivel | Mantido pela comunidade |
| Odoo 16 | ✅ Disponivel | Versao LTS |
| Odoo 17 | ✅ Disponivel | Atualizado para OWL |
| Odoo 18 | ✅ Disponivel | Compativel |
| Odoo 19 | ✅ Disponivel | Funcional |

---

## Mudancas Visuais Detalhadas

### Odoo 14 → Odoo 16

#### Formulario de Documento Fiscal

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Botoes Editar/Salvar** | Dois botoes grandes | **REMOVIDOS** | Edicao inline |
| **Botao Enviar NF-e** | Botao grande | Botao no header, mais limpo | Visual moderno |
| **Botao Cancelar** | Botao grande | Botao no header | Mais discreto |
| **Statusbar** | Borrachinho -> Enviado -> Autorizado | Mantido mas mais limpo | Visual atualizado |
| **Chave de Acesso** | Campo basico | Campo com copia rapida | Clica e copia a chave |
| **Help por campo** | Nao existia | Icone (?) ao lado | Tira duvidas |
| **Internal Link** | Nao existia | Link nos Many2one | Clica e abre registro |

#### Operacao Fiscal

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Lista de operacoes** | Lista basica | Lista com mais colunas | Ve mais dados de uma vez |
| **Filtros** | Basicos | Filtros avancados | Mais opcoes de busca |
| **Agrupamento** | Basico | Agrupamento por tipo | Organiza melhor |

#### Impostos Brasileiros

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Configuracao** | Tela basica | Tela mais organizada | Mais facil de configurar |
| **Aliquotas** | Campos simples | Campos com validacao | Menos erros de digitacao |

---

### Odoo 16 → Odoo 17

| Elemento | Odoo 16 (Antes) | Odoo 17 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Menu Lateral** | Icones + texto | Icones apenas | Menu mais limpo |
| **Search Bar** | Barra classica | Chips de filtro | Filtros como pills |
| **Form** | Estrutura padrao | Mais espacamento | Mais respiro |
| **NF-e** | Layout basico | Layout mais moderno | Visual atualizado |

---

### Odoo 17 → Odoo 18

| Elemento | Odoo 17 (Antes) | Odoo 18 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Validacao Fiscal** | Manual | **Sugerida por IA** | IA valida antes de enviar |
| **Classificacao** | Manual | **Sugerida por IA** | IA classifica produto automaticamente |

---

### Odoo 18 → Odoo 19

| Elemento | Odoo 18 (Antes) | Odoo 19 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Validacao Fiscal** | Sugerida | **Automatica** | IA valida e corrige |
| **Classificacao** | Sugerida | **Automatica** | IA classifica e cadastra |

---

## Fluxo Visual: Emitir NF-e

```
ODOO 14:
1. Cria pedido de venda
2. Clica "Criar Documento Fiscal"
3. Preenche dados fiscais
4. Clica "Salvar" (botao grande)
5. Clica "Enviar NF-e" (botao grande)
6. Aguarda autorizacao
7. Ve status "Autorizado"

ODOO 16:
1. Cria pedido de venda
2. Clica "Criar Documento Fiscal" (botao no header)
3. Preenche dados (edicao inline)
4. Clica "Enviar NF-e" (botao no header)
5. Aguarda autorizacao
6. Ve status com chave de acesso copiavel

ODOO 17+:
1. Cria pedido de venda
2. Documento fiscal criado automaticamente
3. IA valida dados fiscais
4. Clica "Enviar"
5. IA corrige erros automaticamente
6. Autorizacao mais rapida
```

---

## Breaking Changes

### v16 → v17
- Views redesenhadas para OWL
- Campos `attrs="{'invisible': [...]}"` mudam para `invisible="1"`
- Widget de analytic pode afetar distribuicao de custos fiscais
- Botoes de acao visualmente menores

### v17 → v18
- APIs de IA podem exigir configuracao adicional
- Novos campos de validacao fiscal

### v18 → v19
- AI pode automatizar classificacao fiscal

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 2-3 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 2-3 dias | Botoes removidos |
| v16 -> v17 | **Media** | 3-5 dias | Menu lateral, views |
| v17 -> v18 | Baixa | 2-3 dias | AI features |
| v18 -> v19 | Baixa | 2-3 dias | AI avancado |

---

## Notas

- Modulo essencial para empresas brasileiras
- Migracao v16->v17 e a mais impactante visualmente
- Treinamento necessario para novos recursos
- IA pode automatizar validacao fiscal
