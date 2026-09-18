# Prompt: Gerar Comparativo de Versoes

## Objetivo

Gerar documentacao comparativa entre versoes do Odoo (14 vs 16) focando em mudancas de interface e funcionalidades.

## Template de Referencia

Usar como base: `templates/comparativo.html` e `templates/comparativo.md`

## Instrucoes

### 1. Estrutura do Comparativo

O comparativo deve conter:

```markdown
# Comparativo: {MODULO} — Odoo 14 vs 16

## Resumo das Mudancas
- Tabela com versoes e status (Alterado/Novo/Mantido)

## Mudancas de Interface
- Comparativo visual Antes/Depois

## Funcionalidades
- Tabela comparativa por versao

## Detalhes das Mudancas
- Para cada mudanca: Antes, Depois, Impacto

## Dicas para Usuarios
- Orientacoes para migracao

## Erros Comuns na Migracao
- Tabela de erros e solucoes
```

### 2. Tipos de Mudanca

Classificar cada mudanca como:

| Tag | Cor | Uso |
|-----|-----|-----|
| `tag-novo` | Verde | Funcionalidade nova na versao |
| `tag-alterado` | Laranja | Funcionalidade modificada |
| `tag-removido` | Vermelho | Funcionalidade removida |
| `tag-mantido` | Azul | Funcionalidade sem alteracao |

### 3. Conteudo Obrigatorio

Cada comparativo DEVE conter:
- [ ] Tabela resumo com todas as versoes
- [ ] Pelo menos 2 mudancas de interface detalhadas
- [ ] Tabela de funcionalidades comparativa
- [ ] Pelo menos 3 comparativos Antes/Depois
- [ ] Dicas para usuarios
- [ ] Tabela de erros comuns

### 4. Foco nas Mudancas

Priorizar documentacao de:

**Interface:**
- Botoes removidos/adicionados
- Layout de formularios
- Cores e icones
- Navegacao

**Funcionalidades:**
- Novas capacidades
- Comportamentos alterados
- Campos adicionados/removidos
- Integracoes modificadas

**Performance:**
- Melhorias de velocidade
- Otimizacoes de banco
- Cache

### 5. Exemplo de Uso

**Entrada:**
- Modulo: `sale` (Vendas)
- Versoes: 14, 16

**Saida:**
- Arquivo: `sale.md` ou `sale.html`
- Conteudo: Comparativo completo seguindo o template

### 6. Checklist de Qualidade

- [ ] Template seguido corretamente
- [ ] Tags coloridas aplicadas
- [ ] Mudancas bem documentadas
- [ ] Comparativos visuais claros
- [ ] Dicas uteis
- [ ] Erros comuns listados
- [ ] Tom objetivo e tecnico

---

*Prompt para geracao de comparativos — Odoo 16 Localizacao Brasileira OCA*
