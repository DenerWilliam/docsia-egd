# Comparativo: account (Faturacao) — Mudancas Visuais

## Informacoes do Modulo

| Campo | Valor |
|-------|-------|
| Nome Tecnico | account |
| Nome Amigavel | Faturacao |
| Autor | Odoo S.A. |
| Repositorio | https://www.odoo.com/app/invoicing |

## Disponibilidade por Versao

| Versao | Status | Observacoes |
|--------|--------|-------------|
| Odoo 14 | ✅ Disponivel | Versao estavel |
| Odoo 15 | ✅ Disponivel | Mantido pela Odoo |
| Odoo 16 | ✅ Disponivel | Versao LTS |

---

## Mudancas Visuais Detalhadas

### Odoo 14 → Odoo 16

#### Formulario de Fatura/Lancamento

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Botoes Editar/Salvar** | Dois botoes grandes no topo | **REMOVIDOS** | Edicao inline, clica no campo e edita |
| **Botao Postar** | Botao grande "Post" | Botao no header, mais discreto | Visual mais limpo |
| **Botao Criar** | Canto superior esquerdo | Canto superior direito | Local mudou |
| **Statusbar** | Rascunho -> Postado | Mantido mas visual atualizado | Mesmos passos, visual novo |
| **Campo Analitico** | Analytic Account + Tags | **Analytic Distribution** widget | Widget completamente novo |
| **Help por campo** | Nao existia | Icone (?) ao lado | Tira duvidas sem suporte |
| **Internal Link** | Nao existia | Link nos Many2one | Clica e abre o registro |

#### Campo Analitico (Mudanca Critica)

```
ODOO 14:
Analytic Account: [Custos Administrativos    v]
Analytic Tags:    [x] Departamento TI  [x] SP

ODOO 16:
Analytic Distribution:
  Plano: [Despesas Operacionais        v]
  +--------------------------------+--------+
  | Departamento TI               |  60%   |
  | Departamento SP               |  40%   |
  +--------------------------------+--------+
  Total: 100%
```

**O que acontece:** As tags analytic foram REMOVIDAS. Agora usa-se um widget de distribuicao com planos e percentuais. O cliente precisa aprender a usar o novo widget.

#### Lista de Faturas (Tree View)

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Edicao inline** | Clicar para editar | Edicao direta na linha | Mais rapido |
| **Colunas opcionais** | Sem toggle | Toggle show/hide | Escolhe quais colunas ver |
| **Decoracao** | Badge basico | Badge colorido | Draft=cinza, Posted=verde, Cancel=vermelho |
| **Agrupamento** | Group by basico | Group by com botoes inline | Agrupa e edita direto no grupo |
| **Botoes no grupo** | Nao existia | Botoes de acao no cabecalho do grupo | Acoes rapidas por grupo |

#### Conciliacao Bancaria

| Elemento | Odoo 14 (Antes) | Odoo 16 (Depois) | O que o cliente ve |
|----------|-----------------|-------------------|-------------------|
| **Interface** | Tela basica | Tela mais limpa | Mais espacamento, visual moderno |
| **Matching** | Manual | **Sugestoes automaticas** | Sistema sugere matches |
| **Botoes** | Muitos botoes | Botoes reduzidos | Menos poluicao visual |
| **Reconcile** | Clicar em "Reconcile" | Clicar em "Validate" | Nome do botao mudou |

---

## Fluxo Visual: Criar e Postar Fatura

```
ODOO 14:
1. Clica "Criar" (canto esquerdo)
2. Seleciona cliente
3. Adiciona linhas de produto
4. Clica "Salvar" (botao grande)
5. Clica "Post" (botao grande)
6. Lance e criado

ODOO 16:
1. Clica "Criar" (canto direito)
2. Seleciona cliente (com Internal Link)
3. Adiciona linhas (edicao inline)
4. Lance salva automaticamente
5. Clica "Post" (botao no header)
6. Lance e criado
```

---

## Migracao

| De -> Para | Complexidade | Tempo Estimado | Principal Mudanca Visual |
|-----------|--------------|----------------|--------------------------|
| v14 -> v15 | Baixa | 1-2 dias | Poucas mudancas |
| v15 -> v16 | **Media** | 2-3 dias | Analytic muda completamente |

---

## Notas

- A migracao do campo analytic e a mais critica
- Tags analytic serao removidas — planejar migracao
- Conciliacao bancaria melhora muito em v16
- Treinamento necessario para novos widgets
