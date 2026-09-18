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
```

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 2-3 dias | Poucas mudancas |
| v15 -> v16 | Baixa | 2-3 dias | Botoes removidos |

---

## Notas

- Modulo essencial para empresas brasileiras
- Treinamento necessario para novos recursos
- IA pode automatizar validacao fiscal
